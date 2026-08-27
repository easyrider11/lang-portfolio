// Single source of truth for everything rendered on the site.
// Inline links in text use [label](url) — parsed by renderText() in lib/text.js.

export const profile = {
  name: "Lorre Li",
  title: "Lorre Li",
  description:
    "Lorre (Lang) Li is an engineer working on robotics and AI systems — robot agent runtimes, dataset tooling, and real-time infrastructure.",
  email: "lli28@nd.edu",
  github: "https://github.com/easyrider11",
  linkedin: "https://www.linkedin.com/in/lang-li11/",
  resume: "/resume.pdf"
};

export const intro =
  "Hi, I'm Lorre Li. I'm an engineer, and I build AI systems that have to work outside the demo — robot control loops, dataset tooling, and real-time pipelines. I believe:";

export const beliefs = [
  "A model that can't be evaluated can't be trusted.",
  "A system that can't fail safely isn't finished."
];

// Home-page timeline, newest first.
export const timeline = [
  {
    period: "2026 – now",
    org: "Independent",
    role: "Robotics & AI systems",
    description:
      "I build open robotics tooling: [Robot Vision Copilot](/projects#robot-vision-copilot), a model-agnostic robot agent runtime verified in simulation, and [LeRobot Dataset Lint](/projects#lerobot-dataset-lint), a contract linter for training datasets. Upstream contributor to [gz_ros2_control](https://github.com/ros-controls/gz_ros2_control/pull/944) (merged), with open PRs to [MoveIt 2](https://github.com/moveit/moveit2/pulls?q=is%3Apr+author%3Aeasyrider11) and [LeRobot](https://github.com/huggingface/lerobot/pull/4518)."
  },
  {
    period: "2025",
    org: "Meta",
    role: "Software Engineer Intern",
    description:
      "I rebuilt Instagram's AR camera initialization pipeline in Swift/Obj-C++ and shipped Metal/GLSL compute shaders in the real-time effects stack."
  },
  {
    period: "2024",
    org: "Radical AI",
    role: "AI Systems Engineer Intern",
    description:
      "I built the backend service layer for an LLM tutoring product and deployed it on GKE with Cloud SQL."
  },
  {
    period: "2024",
    org: "ZTE",
    role: "Automation Engineer Intern",
    description:
      "I built automated validation pipelines with Jenkins and Robot Framework, and sped up C/C++ data ingestion with multi-threading."
  },
  {
    period: "2022 – 2026",
    org: "University of Notre Dame",
    role: "B.S. Computer Science & Applied Mathematics",
    description:
      "GPA 3.91. Dean's List, Grand Challenge Scholarship. Research assistant building an [LLM quiz generator](/projects#llm-quiz-interface) for deaf and hard-of-hearing learners; teaching assistant for 100+ students in algorithms and theory."
  }
];

// Projects page, newest first. meta = "Role · Context · Year".
export const projectsIntro =
  "Systems and tools I have built or contributed to.";

export const projects = [
  {
    slug: "robot-vision-copilot",
    title: "Robot Vision Copilot",
    meta: "Creator · 2026",
    href: "https://github.com/easyrider11/robot-vision-copilot",
    description:
      "OpenVLA-compatible action-model layer and model-agnostic robot agent runtime — state machine, safety validation, failure recovery — verified in tabletop sim, LIBERO, and Gazebo/ROS 2."
  },
  {
    slug: "lerobot-dataset-lint",
    title: "LeRobot Dataset Lint",
    meta: "Creator · 2026",
    href: "https://github.com/easyrider11/lerobot-dataset-lint",
    description:
      "Contract linter for LeRobot datasets: convention drift, dropped frames, stale stats, and dead recordings — caught before they poison a training run."
  },
  {
    slug: "gz-ros2-control",
    title: "gz_ros2_control",
    meta: "Contributor · Open source · 2026",
    href: "https://github.com/ros-controls/gz_ros2_control/pull/944",
    description:
      "ros2_control integration for Gazebo. Contributed a merged fix to the parameter documentation, backported to three ROS releases."
  },
  {
    slug: "moveit2",
    title: "MoveIt 2",
    meta: "Contributor · Open source · 2026",
    href: "https://github.com/moveit/moveit2/pulls?q=is%3Apr+author%3Aeasyrider11",
    description:
      "Motion planning framework for ROS 2. Two open PRs: documenting the servo config loading contract, and a clearer error path for group states referencing fixed joints."
  },
  {
    slug: "lerobot",
    title: "LeRobot",
    meta: "Contributor · Open source · 2026",
    href: "https://github.com/huggingface/lerobot/pull/4518",
    description:
      "Hugging Face robotics library. Open PR adding rename_feature to the dataset editing tools; filed root-cause reports on stale finetune feature specs."
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
    slug: "llm-quiz-interface",
    title: "LLM Quiz Interface",
    meta: "Research assistant · Notre Dame · 2024",
    description:
      "Generates quizzes from TED-Ed transcripts for deaf and hard-of-hearing learners, with self-checking validation loops on the output."
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
