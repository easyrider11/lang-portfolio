// Single source of truth for everything rendered on the site.
// Inline links in text use [label](url) — parsed by renderText() in lib/text.js.

export const profile = {
  name: "Lorre Li",
  title: "Lorre Li",
  description:
    "Lorre (Lang) Li is an engineer working on robotics and AI systems — robot agent runtimes, GPU inference serving, dataset tooling, and agent evaluation.",
  email: "lorrelipro@gmail.com",
  github: "https://github.com/easyrider11",
  linkedin: "https://www.linkedin.com/in/lang-li11/",
  resume: "/resume.pdf"
};

export const intro =
  "Hi, I'm Lorre Li. I'm an engineer, and I build AI systems that have to work outside the demo — robot control loops, GPU inference serving, and the evaluation and dataset tooling that keeps them honest. I believe:";

export const beliefs = [
  "A model that can't be evaluated can't be trusted.",
  "A system that can't fail safely isn't finished."
];

// Experience page timeline, newest first.
export const timeline = [
  {
    period: "2026 – now",
    org: "Independent",
    role: "Robotics & AI systems",
    description:
      "I build open robotics tooling: [Robot Vision Copilot](/projects/robot-vision-copilot), a model-agnostic robot agent runtime verified in three simulators, and [LeRobot Dataset Lint](/projects/lerobot-dataset-lint), a contract linter for training datasets. [Upstream contributor](/projects/upstream) to gz_ros2_control (merged), Harbor (merged), MoveIt 2, and LeRobot."
  },
  {
    period: "2026",
    org: "Superpose",
    role: "Software Engineer",
    description:
      "I owned a multi-GPU inference scheduler — one worker per GPU, first-free-wins acquisition, configurable backpressure — replacing a serial queue through a zero-downtime cutover, and brought up an SGLang serving stack for agent workloads across an on-prem six-GPU node, RunPod, and AWS EC2."
  },
  {
    period: "2025",
    org: "Meta",
    role: "Software Engineer Intern",
    description:
      "I rebuilt Instagram's AR camera effect initialization in Swift/Obj-C++ — 99.9% cold-start pass rate, 50% fewer warm-up hitches — refactored the camera pipeline to cut effect-apply latency 27% at a sustained 60 FPS, and shipped Metal/GLSL compute shaders with the Images team."
  },
  {
    period: "2024",
    org: "Radical AI",
    role: "Full-stack Software Engineer & AI Lab Assistant",
    description:
      "I shipped an AI tutor for technical onboarding in a team of 10, cut backend latency 25%, deployed models on GKE with Cloud SQL, and protocoled a checksum method to detect silent data corruption in inference runs."
  },
  {
    period: "2022 – 2026",
    org: "University of Notre Dame",
    role: "B.S. Computer Science & Applied Mathematics",
    description:
      "GPA 3.97, Summa Cum Laude. Dean's List, Grand Challenge Scholarship, first place at the n8n AI Workflow Hackathon. Research assistant on LLM systems — an [LLM quiz agent](/projects#llm-quiz-interface) over TED-Ed transcripts with a repeatable evaluation loop; teaching assistant for 100+ students in data structures, theory of computing, and linear algebra."
  }
];

// Projects page, newest first. meta = "Role · Context · Year".
// thumb: image in /public. report: detail page at /projects/<slug>.
export const projectsIntro =
  "Systems and tools I have built or contributed to.";

export const projects = [
  {
    slug: "robot-vision-copilot",
    title: "Robot Vision Copilot",
    meta: "Creator · 2026",
    featured: true,
    thumb: "/projects/panda-pickplace.gif",
    thumbAlt: "Franka Panda 7-DOF pick-and-place in Gazebo",
    href: "https://github.com/easyrider11/robot-vision-copilot",
    description:
      "A robot manipulation stack: an OpenVLA-compatible action-model layer under a model-agnostic agent runtime — verified in a zero-dependency tabletop sim, LIBERO, and Gazebo + ROS 2.",
    report: {
      stats: [
        { value: "66%", label: "SmolVLA-450M on LIBERO (BC baseline 50%)" },
        { value: "500/500", label: "episodes recovered, 375 with injected faults" },
        { value: "0", label: "unsafe actions in 17,478 policy calls" },
        { value: "7 px", label: "placement error, 7-DOF Panda in Gazebo" }
      ],
      body: [
        "A vision-language-action model answers exactly one question: given this camera image and this instruction, what is the next 7-DoF end-effector delta? Everything else a real robot needs — decomposing the task, refusing unsafe outputs, noticing that a grasp failed, deciding what to do about it — is not the model's job. This project is a worked example of that separation.",
        "The action model sits behind a swappable Policy protocol (OpenVLA-compatible local and remote backends, a visual-servo baseline, and a mock). Above it, a model-agnostic runtime runs PERCEIVE → PLAN → EXECUTE → VERIFY → RECOVER, with an action validator (six checks plus a final invariant) between the network and the robot. EXECUTE is the only state that consults a neural network.",
        "The same runtime is verified end to end in three simulators: a zero-dependency tabletop teaching sim, the official LIBERO benchmark (MuJoCo), and Gazebo + ROS 2 driving a 7-DOF Franka Panda through ros_gz_bridge with resolved-rate control on a moveit_py jacobian.",
        "Every number above comes from a committed run artifact and is reproducible with one make target. The project was built on a 16 GB M3 laptop that cannot run OpenVLA-7B — so where a component is a stand-in rather than the real thing, the run is stamped degraded=true with a reason. The honesty ledger is part of the repo, not an afterthought."
      ],
      media: [
        {
          src: "/projects/tabletop-grasp-slip-recovery.gif",
          caption:
            "A mid-transport grasp slip is injected; the agent detects it, replans, and finishes the task."
        },
        {
          src: "/projects/smolvla-libero.gif",
          caption:
            "SmolVLA-450M — a real vision-language-action model — running locally on Apple silicon against the official LIBERO benchmark."
        },
        {
          src: "/projects/gazebo-pickplace-sheet.png",
          caption:
            "Contact sheet from the Gazebo pick-and-place run: 32.9 s, 7 px placement error, zero recoveries."
        }
      ],
      links: [
        { label: "GitHub", href: "https://github.com/easyrider11/robot-vision-copilot" }
      ]
    }
  },
  {
    slug: "lerobot-dataset-lint",
    title: "LeRobot Dataset Lint",
    meta: "Creator · 2026",
    featured: true,
    thumb: "/projects/lint-thumb.svg",
    thumbAlt: "Terminal output of lerobot-lint with two findings",
    href: "https://github.com/easyrider11/lerobot-dataset-lint",
    description:
      "Contract linter for LeRobot datasets and policy checkpoints — convention drift, dropped frames, stale stats, and stale configs, caught before they poison a training run.",
    report: {
      stats: [
        { value: "58k+", label: "community datasets on the LeRobot Hub" },
        { value: "24/251", label: "swept checkpoints provably shipping a stale-config bug" },
        { value: "38.5k", label: "downloads of affected official checkpoints" },
        { value: "MBs", label: "downloaded to lint a multi-GB dataset" }
      ],
      body: [
        "Dataset bugs are the quietest failure mode in robot learning: nothing crashes — the policy just doesn't grasp. This linter exists because of a real one: a gripper sign convention documented backwards, self-consistent in each half of a codebase, every test green, discovered only when a third component forced the two halves together. Generalized into a community linter answering [LeRobot\u2019s open call](https://github.com/huggingface/lerobot/issues/2326) for exactly this tool.",
        "It has company. We found a published policy checkpoint whose config.json declared a 6-dim state while its own normalization weights carried 8 dims — stale metadata, silently trusted by everything downstream. Both findings became upstream issue reports; the linter turns the class of bug into a CI check.",
        "v0.2.0 turned the checkpoint finding into a mode and pointed it at the ecosystem: a sweep of the top 300 lerobot-tagged Hub repos found 24 of 251 verifiable checkpoints provably shipping the stale-config bug \u2014 seven of them official checkpoints with ~38.5k downloads, and 39% of one base model\u2019s finetunes affected, including a second-generation propagation. The methodology, exclusions, and reproduce scripts are committed with the results, and the numbers were [posted upstream](https://github.com/huggingface/lerobot/issues/4517).",
        "Apache-2.0, 19 dataset rules and 5 checkpoint rules across both v2.x and v3.0 layouts. The tool imports no torch and no lerobot, decodes no video, and never downloads model weights \u2014 checkpoint checks read safetensors headers via HTTP Range requests. Meta files are always fetched; frame-level checks run on a sample of episodes and download only the parquet files that contain them — linting a multi-gigabyte Hub dataset costs megabytes. Exit codes are CI-friendly: non-zero on errors, and on warnings under --strict.",
        "Runs against any Hub repo id or local dataset directory: uvx --from git+https://github.com/easyrider11/lerobot-dataset-lint lerobot-lint <repo>."
      ],
      media: [],
      links: [
        { label: "GitHub", href: "https://github.com/easyrider11/lerobot-dataset-lint" }
      ]
    }
  },
  {
    slug: "upstream",
    title: "Upstream OSS Work",
    meta: "Contributor · ROS 2 & Hugging Face ecosystems · 2026",
    featured: true,
    thumb: "/projects/upstream-thumb.svg",
    thumbAlt: "Commit graph of upstream contributions",
    description:
      "Contributions to gz_ros2_control (merged), Harbor (merged), MoveIt 2, and LeRobot — sourced from bugs found while building Robot Vision Copilot and Dataset Lint.",
    report: {
      stats: [
        { value: "2", label: "merged PRs (gz_ros2_control, Harbor)" },
        { value: "7", label: "open PRs across Harbor, MoveIt 2, LeRobot" },
        { value: "2", label: "root-cause issue reports on LeRobot" },
        { value: "1", label: "suspected bug disproved before filing" }
      ],
      body: [
        "None of this started as \u201clet\u2019s contribute to open source.\u201d Every entry below is a bug, gap, or missing tool found while building [Robot Vision Copilot](/projects/robot-vision-copilot) and [Dataset Lint](/projects/lerobot-dataset-lint) \u2014 driven upstream instead of worked around.",
        "Two habits shape the list: check repo liveness before writing a patch (that killed two more candidate directions \u2014 an unmaintained benchmark and an already-documented behavior), and try to disprove a finding before filing it."
      ],
      ledger: [
        {
          repo: "ros-controls/gz_ros2_control",
          context: "Gazebo \u2194 ros2_control bridge in the official ROS stack",
          items: [
            {
              status: "merged",
              ref: "#944",
              href: "https://github.com/ros-controls/gz_ros2_control/pull/944",
              text: "Fix the position_proportional_gain formula in the parameter docs \u2014 backported by maintainers to three ROS releases."
            }
          ]
        },
        {
          repo: "harbor-framework/harbor",
          context: "agent-evaluation and RL-environment framework (also the base for my AgenticVBench eval work)",
          items: [
            {
              status: "merged",
              ref: "#1844",
              href: "https://github.com/harbor-framework/harbor/pull/1844",
              text: "Emit ATIF context_management on summarization handoff steps, so trajectory consumers can see when an agent\u2019s context was compacted."
            },
            {
              status: "open",
              ref: "#2631",
              href: "https://github.com/harbor-framework/harbor/pull/2631",
              text: "Reap Daytona sandboxes orphaned by ungraceful trial death \u2014 stops quota leaks in long eval runs."
            },
            {
              status: "open",
              ref: "#2590",
              href: "https://github.com/harbor-framework/harbor/pull/2590",
              text: "Fail fast on Daytona validation errors instead of polling a doomed sandbox to timeout."
            },
            {
              status: "open",
              ref: "#2589",
              href: "https://github.com/harbor-framework/harbor/pull/2589",
              text: "Stop polling after a snapshot conflict is already known."
            },
            {
              status: "open",
              ref: "#2588",
              href: "https://github.com/harbor-framework/harbor/pull/2588",
              text: "Preserve file bind-mount types when building sandbox specs."
            }
          ]
        },
        {
          repo: "huggingface/lerobot",
          context: "Hugging Face robotics library",
          items: [
            {
              status: "open",
              ref: "#4518",
              href: "https://github.com/huggingface/lerobot/pull/4518",
              text: "Add rename_feature to the dataset editing tools \u2014 continues a stalled community PR with the original author\u2019s blessing, and migrates the stats, per-episode columns, and on-disk video directories the original draft silently dropped."
            },
            {
              status: "issue",
              ref: "#4517",
              href: "https://github.com/huggingface/lerobot/issues/4517",
              text: "Root cause: finetunes inherit a stale input feature spec \u2014 traced to a published checkpoint whose config declared 6 state dims while its normalizer carried 8."
            },
            {
              status: "issue",
              ref: "#4519",
              href: "https://github.com/huggingface/lerobot/issues/4519",
              text: "v3 task-association inconsistency between the dataset writer and published datasets \u2014 found by Dataset Lint."
            }
          ]
        },
        {
          repo: "moveit/moveit2",
          context: "motion planning framework for ROS 2",
          items: [
            {
              status: "open",
              ref: "#3834",
              href: "https://github.com/moveit/moveit2/pull/3834",
              text: "Document the servo config\u2019s loading contract \u2014 after first proving the config cannot be made self-contained without breaking every ParameterBuilder consumer."
            },
            {
              status: "open",
              ref: "#3835",
              href: "https://github.com/moveit/moveit2/pull/3835",
              text: "Cause-naming error message when an SRDF group state references a joint that is fixed in the URDF."
            }
          ]
        },
        {
          repo: "moveit_servo drift investigation",
          context: "the one that was never filed",
          items: [
            {
              status: "disproved",
              ref: "repro harness",
              href: "https://github.com/easyrider11/robot-vision-copilot/tree/main/docs/assets/servo-repro",
              text: "A suspected end-effector drift bug was containerized and tested on stock binaries: four null probes, one positive control \u2014 the drift came from my environment, not servo. Archived in my repo instead of filed upstream."
            }
          ]
        }
      ],
      media: [],
      links: [
        {
          label: "All PRs by easyrider11",
          href: "https://github.com/search?q=is%3Apr+author%3Aeasyrider11+-user%3Aeasyrider11&type=pullrequests"
        }
      ]
    }
  },
  {
    slug: "agenticvbench",
    title: "AgenticVBench",
    meta: "Contributor · 2026",
    featured: true,
    thumb: "/projects/harbor-thumb.svg",
    thumbAlt: "Diagram of sandboxed agent evaluation with verifiers",
    description:
      "Contributing evaluations for 100 multimodal video-agent tasks with deterministic and VLM-based verifiers \u2014 built on Harbor, where my sandbox-reliability fixes landed upstream."
  },
  {
    slug: "interview-platform",
    title: "AI-Assisted Interview Platform",
    meta: "Creator · 2025",
    href: "https://github.com/easyrider11/vibescore",
    description:
      "Repo-level coding interviews in a sandbox, with a tool-gated LLM copilot, session replay, and rubric-based scoring."
  },
  {
    slug: "dead-code-detector",
    title: "Dead Code Detector",
    meta: "Creator · 2025",
    description:
      "Correlates coverage data, execution logs, and Clang AST analysis to find dead code in C/C++ codebases, with evidence-backed reports."
  },
  {
    slug: "hft-obi-engine",
    title: "HFT Order Book Imbalance Engine",
    meta: "Creator · 2025",
    description:
      "Reconstructs depth-of-book state from tick-level WebSocket streams in C++ and paper-trades order-book-imbalance signals on Kalshi markets."
  },
  {
    slug: "filmpost",
    title: "FilmPost",
    meta: "Creator · 2025",
    href: "https://github.com/easyrider11/FilmPost",
    description:
      "iOS camera coach and movie reference — capture, analysis with EXIF-scrubbed uploads, and film-look guidance backed by a rate-limited API."
  },
  {
    slug: "llm-quiz-interface",
    title: "LLM Quiz Interface",
    meta: "Research assistant · Notre Dame · 2024 – 2026",
    description:
      "LLM quiz agent over TED-Ed transcripts — prompt chaining, self-verification, embedding retrieval — with a repeatable evaluation loop of held-out prompts and failure analysis."
  },
  {
    slug: "legal-consultant-rag",
    title: "Legal Consultant RAG",
    meta: "Creator · 2024",
    description:
      "Retrieval over a legal corpus with schema-constrained answers and a citation check that verifies every claim against the retrieved documents."
  },
  {
    slug: "ndfootball-channel",
    title: "NDFootball Channel",
    meta: "Creator · 2024",
    description:
      "Event-driven asyncio server designed for bursty game-day traffic — non-blocking I/O and graceful backpressure at 10k+ concurrent connections."
  },
  {
    slug: "poker-bankroll-tracker",
    title: "Poker Session Bankroll Tracker",
    meta: "Creator · 2024",
    href: "https://github.com/easyrider11/poker-session-bankroll-tracker",
    description:
      "Session and bankroll tracking for live poker — Next.js, Prisma, and an iOS-style design system."
  },
  {
    slug: "graph-analysis-bot",
    title: "Graph Analysis Bot",
    meta: "Creator · 2024",
    description:
      "Chrome extension and FastAPI backend that turn natural-language questions into SQL over relational STEM datasets."
  },
  {
    slug: "fts-scanner",
    title: "FTS Scanner App",
    meta: "Creator · 2023",
    description:
      "Android app that classifies fentanyl test strips on-device with TensorFlow Lite — under 200 ms per frame, built for harm reduction."
  }
];
