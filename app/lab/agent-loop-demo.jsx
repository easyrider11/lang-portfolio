"use client";

import { useEffect, useRef, useState } from "react";

// An illustrative JavaScript re-implementation of the Robot Vision Copilot
// control loop (PERCEIVE → PLAN → EXECUTE → VERIFY → RECOVER) with an action
// validator in front of the "robot". It is not the Python simulator; the
// numbers on the project page come from that.

const W = 320;
const H = 200;
const STEP = 2.2;          // max |delta| per EXECUTE tick (the validator's bound)
const GOAL = { x: 262, y: 100, r: 22 };
const STATES = ["PERCEIVE", "PLAN", "EXECUTE", "VERIFY", "RECOVER"];

function rand(min, max) {
  return min + Math.random() * (max - min);
}

function newWorld() {
  return {
    gripper: { x: 40, y: 40 },
    cube: { x: rand(80, 170), y: rand(50, 150), held: false },
    perceived: null,
    plan: [],
    state: "PERCEIVE",
    wait: 0,
    faults: { slip: false, lost: false, unsafe: false, slipAt: 0 }
  };
}

export default function AgentLoopDemo() {
  const canvasRef = useRef(null);
  const worldRef = useRef(newWorld());
  const rafRef = useRef(0);
  const [state, setState] = useState("PERCEIVE");
  const [log, setLog] = useState([]);
  const [counts, setCounts] = useState({ episodes: 0, recoveries: 0, rejects: 0, calls: 0 });
  const [running, setRunning] = useState(true);
  const [reduced, setReduced] = useState(false);

  const push = (line) =>
    setLog((l) => [`${new Date().toLocaleTimeString([], { hour12: false })}  ${line}`, ...l].slice(0, 9));

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    if (mq.matches) setRunning(false);
  }, []);

  function tick() {
    const w = worldRef.current;
    const g = w.gripper;
    const c = w.cube;

    if (w.wait > 0) {
      w.wait -= 1;
      return;
    }

    switch (w.state) {
      case "PERCEIVE": {
        if (w.faults.lost) {
          w.faults.lost = false;
          w.perceived = null;
          push("PERCEIVE  target not found in frame");
          w.state = "RECOVER";
          w.wait = 20;
          break;
        }
        w.perceived = { x: c.x, y: c.y };
        push(`PERCEIVE  cube at (${c.x.toFixed(0)}, ${c.y.toFixed(0)})`);
        w.state = "PLAN";
        w.wait = 8;
        break;
      }
      case "PLAN": {
        const t = w.perceived;
        w.plan = c.held
          ? [{ x: GOAL.x, y: GOAL.y, act: "release" }]
          : [
              { x: t.x, y: t.y - 18, act: null },
              { x: t.x, y: t.y, act: "grasp" },
              { x: GOAL.x, y: GOAL.y, act: "release" }
            ];
        push(`PLAN      ${w.plan.length} waypoints`);
        w.state = "EXECUTE";
        w.wait = 6;
        break;
      }
      case "EXECUTE": {
        const wp = w.plan[0];
        if (!wp) {
          w.state = "VERIFY";
          break;
        }
        let dx = wp.x - g.x;
        let dy = wp.y - g.y;
        const dist = Math.hypot(dx, dy);
        let scale = Math.min(1, STEP / (dist || 1));
        let ax = dx * scale;
        let ay = dy * scale;

        if (w.faults.unsafe) {
          w.faults.unsafe = false;
          ax *= 12;
          ay *= 12;
        }
        setCounts((k) => ({ ...k, calls: k.calls + 1 }));

        // ActionValidator: magnitude bound + workspace bound
        const mag = Math.hypot(ax, ay);
        const nx = g.x + ax;
        const ny = g.y + ay;
        if (mag > STEP * 1.001 || nx < 8 || nx > W - 8 || ny < 8 || ny > H - 8) {
          setCounts((k) => ({ ...k, rejects: k.rejects + 1 }));
          push(`VALIDATE  rejected |Δ|=${mag.toFixed(1)} > ${STEP} — clamped`);
          const s = STEP / (mag || 1);
          ax *= s;
          ay *= s;
        }
        g.x += ax;
        g.y += ay;
        if (c.held) {
          c.x = g.x;
          c.y = g.y;
          if (w.faults.slip && Math.hypot(GOAL.x - g.x, GOAL.y - g.y) < w.faults.slipAt) {
            w.faults.slip = false;
            c.held = false;
            c.x += rand(-14, 14);
            c.y += rand(-14, 14);
            push("FAULT     grasp slipped mid-transport");
          }
        }
        if (dist < 1.5) {
          if (wp.act === "grasp") {
            c.held = true;
            push("EXECUTE   grasp");
          }
          if (wp.act === "release") {
            c.held = false;
            push("EXECUTE   release");
          }
          w.plan.shift();
          if (w.plan.length === 0) w.state = "VERIFY";
          w.wait = 4;
        }
        break;
      }
      case "VERIFY": {
        const inGoal = Math.hypot(GOAL.x - c.x, GOAL.y - c.y) < GOAL.r - 4;
        if (inGoal && !c.held) {
          push("VERIFY    cube in goal ✓ — episode complete");
          setCounts((k) => ({ ...k, episodes: k.episodes + 1 }));
          const f = w.faults;
          Object.assign(w, newWorld());
          w.faults = f;
          w.wait = 30;
        } else {
          push("VERIFY    cube not in goal ✗");
          w.state = "RECOVER";
          w.wait = 12;
        }
        break;
      }
      case "RECOVER": {
        setCounts((k) => ({ ...k, recoveries: k.recoveries + 1 }));
        push("RECOVER   re-perceive and replan");
        w.state = "PERCEIVE";
        w.wait = 8;
        break;
      }
      default:
        w.state = "PERCEIVE";
    }
    setState(w.state);
  }

  function draw() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const w = worldRef.current;
    const dpr = window.devicePixelRatio || 1;
    const cssW = canvas.clientWidth;
    const cssH = (cssW * H) / W;
    if (canvas.width !== cssW * dpr) {
      canvas.width = cssW * dpr;
      canvas.height = cssH * dpr;
    }
    ctx.setTransform((cssW / W) * dpr, 0, 0, (cssH / H) * dpr, 0, 0);

    ctx.fillStyle = "#fafafa";
    ctx.fillRect(0, 0, W, H);
    ctx.strokeStyle = "#e4e4e7";
    ctx.lineWidth = 1;
    ctx.strokeRect(8, 8, W - 16, H - 16);

    ctx.beginPath();
    ctx.arc(GOAL.x, GOAL.y, GOAL.r, 0, Math.PI * 2);
    ctx.setLineDash([3, 3]);
    ctx.strokeStyle = "#a1a1aa";
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = "#a1a1aa";
    ctx.font = "9px ui-monospace, Menlo, monospace";
    ctx.fillText("goal", GOAL.x - 10, GOAL.y + GOAL.r + 11);

    const c = w.cube;
    ctx.fillStyle = c.held ? "#2563eb" : "#f59e0b";
    ctx.fillRect(c.x - 6, c.y - 6, 12, 12);

    if (w.perceived && !c.held) {
      ctx.strokeStyle = "#2563eb";
      ctx.strokeRect(w.perceived.x - 10, w.perceived.y - 10, 20, 20);
    }

    const g = w.gripper;
    ctx.strokeStyle = "#18181b";
    ctx.lineWidth = 2;
    const open = c.held ? 6 : 10;
    ctx.beginPath();
    ctx.moveTo(g.x - open, g.y - 12);
    ctx.lineTo(g.x - open, g.y + 6);
    ctx.moveTo(g.x + open, g.y - 12);
    ctx.lineTo(g.x + open, g.y + 6);
    ctx.moveTo(g.x - open, g.y - 12);
    ctx.lineTo(g.x + open, g.y - 12);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(g.x, g.y - 12);
    ctx.lineTo(g.x, 8);
    ctx.strokeStyle = "#a1a1aa";
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  useEffect(() => {
    let frame = 0;
    const loop = () => {
      if (running) {
        frame += 1;
        if (frame % 2 === 0) tick();
      }
      draw();
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running]);

  const inject = (kind) => {
    const w = worldRef.current;
    if (kind === "slip") {
      w.faults.slip = true;
      w.faults.slipAt = rand(40, 120);
      push("INJECT    grasp slip armed");
    }
    if (kind === "lost") {
      w.faults.lost = true;
      push("INJECT    target-lost armed for next PERCEIVE");
    }
    if (kind === "unsafe") {
      w.faults.unsafe = true;
      push("INJECT    12× action delta armed for next EXECUTE");
    }
    if (kind === "reset") {
      worldRef.current = newWorld();
      setCounts({ episodes: 0, recoveries: 0, rejects: 0, calls: 0 });
      setLog([]);
      setState("PERCEIVE");
    }
  };

  return (
    <div className="lab-demo">
      <div className="lab-states" aria-label="Runtime state">
        {STATES.map((s) => (
          <span key={s} className={`lab-state ${state === s ? "lab-state--active" : ""}`}>
            {s}
          </span>
        ))}
      </div>

      <canvas ref={canvasRef} className="lab-canvas" aria-label="Top-down view of a gripper, a cube, and a goal zone" />

      <div className="lab-controls">
        <button type="button" onClick={() => inject("slip")}>Inject grasp slip</button>
        <button type="button" onClick={() => inject("lost")}>Inject target lost</button>
        <button type="button" onClick={() => inject("unsafe")}>Inject unsafe action</button>
        <button type="button" onClick={() => setRunning((r) => !r)}>
          {running ? "Pause" : reduced ? "Run (reduced motion is on)" : "Run"}
        </button>
        {!running && (
          <button type="button" onClick={() => { tick(); draw(); }}>
            Step
          </button>
        )}
        <button type="button" onClick={() => inject("reset")}>Reset</button>
      </div>

      <dl className="lab-counts">
        <div><dt>{counts.episodes}</dt><dd>episodes completed</dd></div>
        <div><dt>{counts.recoveries}</dt><dd>recoveries</dd></div>
        <div><dt>{counts.rejects}</dt><dd>actions rejected by validator</dd></div>
        <div><dt>{counts.calls}</dt><dd>policy calls</dd></div>
      </dl>

      <pre className="lab-log" aria-live="polite">
        {log.length ? log.join("\n") : "waiting for first tick…"}
      </pre>
    </div>
  );
}
