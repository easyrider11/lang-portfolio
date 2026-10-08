import AgentLoopDemo from "./agent-loop-demo";

export const metadata = {
  title: "Lab",
  description: "An interactive, illustrative re-implementation of the Robot Vision Copilot control loop: inject a fault, watch the runtime recover.",
  openGraph: { title: "Lab", images: ["/og/lab.png"] },
  twitter: { card: "summary_large_image", title: "Lab", images: ["/og/lab.png"] }
};

export default function Lab() {
  return (
    <>
      <h1 className="page-title">Lab</h1>
      <p className="page-intro">
        Small interactive pieces that explain how something I built works.
      </p>

      <section className="lab-piece">
        <h2 className="lab-piece-title">Agent runtime loop — inject a fault, watch it recover</h2>
        <p className="lab-piece-desc">
          The control loop from <a href="/projects/robot-vision-copilot">Robot Vision Copilot</a>,
          reduced to its skeleton: PERCEIVE → PLAN → EXECUTE → VERIFY → RECOVER, with an action
          validator between the policy and the robot. The amber cube has to end up in the goal.
          Arm a fault and the loop has to notice and replan; arm an oversized action and the
          validator clamps it before it reaches the gripper.
        </p>

        <AgentLoopDemo />

        <p className="lab-honesty">
          This is an illustrative JavaScript re-implementation of the loop, about 300 lines, not
          the Python simulator. The numbers on the project page — 500/500 episodes recovered, 0
          unsafe actions in 17,478 policy calls — come from the real one.
        </p>
      </section>
    </>
  );
}
