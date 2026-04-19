export const profile = {
  name: "Lorre Li",
  role: "AI Builder & Agentic Systems Engineer",
  location: "Notre Dame, IN",
  summary:
    "Building production-ready AI systems that reason, act, and integrate into real workflows — from agentic pipelines and retrieval systems to evaluation loops and real-time infrastructure.",
  email: "lli28@nd.edu",
  phone: "+1 (574) 327-1779",
  github: "https://github.com/easyrider11",
  linkedin: "https://www.linkedin.com/in/lang-li11/",
  website: "",
  resume: "/resume.pdf"
};

export const stats = [
  { label: "Agent Reliability", value: "99.9%" },
  { label: "Concurrent Pipelines", value: "10k+" },
  { label: "AI Systems Shipped", value: "8+" },
  { label: "Latency Reduction", value: "50%" }
];

export const focusAreas = [
  "Agentic AI systems",
  "Retrieval & context pipelines",
  "AI evaluation & reliability",
  "Real-time infrastructure"
];

export const projects = [
  {
    title: "AI-Assisted Interview Platform",
    tagline: "Agentic evaluation system for engineering interviews.",
    description:
      "Agent-orchestrated SaaS platform that autonomously manages repo-level coding interviews — sandboxed execution, controlled LLM copilot with tool-use gating, session replay, and multi-dimensional evaluation pipelines that score candidates without human intervention.",
    impact: [
      "Designed agent workflow orchestrating sandboxed code execution, LLM reasoning, and automated scoring",
      "Built evaluation pipeline with multi-dimensional rubrics that validate AI-generated feedback loops",
      "Integrated controlled copilot with tool-use gating to ensure safe, scoped AI assistance during sessions",
      "Deployed end-to-end on Docker with session replay for auditability and reliability"
    ],
    stack: ["TypeScript", "Node.js", "Docker", "LLM APIs"],
    tags: ["Agent Systems", "Evaluation", "Platform"],
    year: "2025",
    featured: true
  },
  {
    title: "Dead Code Detector",
    tagline: "Autonomous agent for codebase auditing.",
    description:
      "AI agent that autonomously correlates coverage data, execution logs, and static analysis to identify and validate dead code paths across large codebases — with evidence-backed reporting and iterative refinement.",
    impact: [
      "Built an agentic pipeline that reasons over coverage + logs to surface unreachable code with evidence",
      "Integrated Clang AST tooling as an agent action for static analysis across C/C++ codebases",
      "Designed validation loop that cross-checks agent findings against runtime traces to reduce false positives",
      "Automated full codebase audits that previously required manual engineering review"
    ],
    stack: ["Python", "Clang", "SQLite", "AST Analysis"],
    tags: ["Agent Systems", "Retrieval", "Platform"],
    year: "2025"
  },
  {
    title: "HFT Order Book Imbalance Engine",
    tagline: "Real-time signal pipeline with autonomous validation.",
    description:
      "Low-latency system that reconstructs depth-of-book state in real time, generates OBI signals via tick-level tracking, and runs autonomous backtesting and paper-trading validation loops on Kalshi markets.",
    impact: [
      "Engineered real-time data ingestion pipeline processing tick-level market events via WebSocket streams",
      "Built autonomous backtesting loop that validates signal quality against historical data without manual tuning",
      "Deployed live paper-trading agent on Kalshi with automated performance monitoring and feedback",
      "Optimized C++ execution path for sub-millisecond signal generation under production load"
    ],
    stack: ["C++", "WebSocket", "Python"],
    tags: ["Real-Time Systems", "Evaluation", "Data"],
    year: "2025"
  },
  {
    title: "LLM Quiz Interface",
    tagline: "Agentic content generation for accessible learning.",
    description:
      "Agentic LLM system that autonomously generates quizzes from TED-Ed video transcripts for deaf and hard-of-hearing learners — using chain-of-thought reasoning, self-checking validation loops, and embedding-based retrieval to ensure answer quality.",
    impact: [
      "Built end-to-end agentic pipeline: transcript retrieval → LLM reasoning → quiz generation → self-validation",
      "Implemented chain-of-thought + self-checking evaluation loops reducing hallucination in generated content",
      "Designed async generation pipeline with REST APIs, cutting latency 25% via parallel retrieval and batched LLM calls"
    ],
    stack: ["Python", "TensorFlow", "LLMs", "REST APIs"],
    tags: ["Agent Systems", "Evaluation", "Retrieval"],
    year: "2024",
    featured: true
  },
  {
    title: "Legal Consultant RAG",
    tagline: "Retrieval-augmented agent with schema-constrained reasoning.",
    description:
      "RAG-powered legal assistant that retrieves relevant law code, applies schema-constrained LLM reasoning to generate answers, and provides cited sources — ensuring traceability and reducing hallucination through structured output validation.",
    impact: [
      "Built retrieval pipeline over legal corpus with embedding search and structured context injection",
      "Designed schema-constrained LLM reasoning ensuring outputs conform to expected legal citation format",
      "Implemented source citation validation loop that verifies every claim against retrieved documents"
    ],
    stack: ["Python", "PostgreSQL", "LLM"],
    tags: ["Retrieval", "Agent Systems", "Evaluation"],
    year: "2024"
  },
  {
    title: "NDFootball Channel",
    tagline: "High-concurrency async infrastructure.",
    description:
      "Event-driven asyncio server engineered for bursty, real-time traffic — serving as scalable infrastructure for AI-powered event processing and low-latency delivery at 10k+ concurrent connections.",
    impact: [
      "Designed async event pipeline handling 10k+ concurrent connections with graceful backpressure",
      "Built infrastructure pattern reusable for real-time AI agent communication and tool coordination",
      "Achieved low-latency delivery under peak load through connection pooling and non-blocking I/O"
    ],
    stack: ["Python", "asyncio", "WebSockets"],
    tags: ["Real-Time Systems", "Platform"],
    year: "2024"
  },
  {
    title: "Graph Analysis Bot",
    tagline: "Retrieval-augmented search agent for STEM data.",
    description:
      "Agentic search system combining a browser extension with a FastAPI retrieval backend — enabling structured query workflows over relational STEM datasets with API-backed context retrieval.",
    impact: [
      "Built retrieval pipeline that translates natural queries into structured SQL over relational datasets",
      "Designed end-to-end agent workflow: user query → context retrieval → ranked results → structured output",
      "Integrated API-backed search enabling the agent to pull and correlate data across multiple sources"
    ],
    stack: ["Java", "FastAPI", "SQL", "Chrome Extension API"],
    tags: ["Retrieval", "Agent Systems", "Data"],
    year: "2024"
  },
  {
    title: "FTS Scanner App",
    tagline: "On-device inference pipeline for harm reduction.",
    description:
      "Mobile AI system with on-device inference pipeline — capturing, preprocessing, and classifying fentanyl test strips in real time using optimized TensorFlow Lite models on Android.",
    impact: [
      "Deployed optimized TF Lite model with on-device inference under 200ms per frame",
      "Built end-to-end vision pipeline: capture → preprocess → classify → result with confidence scoring",
      "Designed reliability layer with fallback logic and edge-case handling for real-world conditions"
    ],
    stack: ["OpenCV", "Android SDK", "TensorFlow Lite"],
    tags: ["AI Production", "Real-Time Systems"],
    year: "2023"
  }
];

export const experience = [
  {
    company: "Meta",
    role: "Software Engineer — AR Systems & Performance",
    timeframe: "May 2025 — Aug 2025",
    location: "Menlo Park, CA",
    highlights: [
      "Rebuilt Instagram's AR camera initialization pipeline in Swift/Obj-C++, achieving 99.9% cold-start reliability — the same infrastructure pattern used for on-device AI model loading.",
      "Modularized the real-time AR effects pipeline, cutting effect-apply latency 27% while sustaining 60 FPS — directly applicable to on-device agent inference loops.",
      "Co-designed a state coordinator for the Optic stack, orchestrating multi-stage pipelines similar to agentic tool-chaining workflows.",
      "Shipped Metal/GLSL compute shaders for separable Gaussian and color transforms in the real-time rendering pipeline."
    ],
    skills: ["Swift", "Objective-C++", "Real-Time Systems", "Pipeline Orchestration"]
  },
  {
    company: "Radical AI",
    role: "AI Systems Engineer",
    timeframe: "Jul 2024 — Sep 2024",
    location: "New York, NY",
    highlights: [
      "Designed and shipped an agentic AI tutor that autonomously generates onboarding content, quizzes, and feedback — integrating LLM reasoning with structured data retrieval.",
      "Built backend AI service layer with optimized REST paths and caching, reducing LLM-serving latency by 25%.",
      "Deployed AI models on GKE + Cloud SQL with reliability monitoring; implemented checksum-based detection for silent data corruption in inference outputs."
    ],
    skills: ["LLM Integration", "Node.js", "GKE", "Evaluation Pipelines"]
  },
  {
    company: "ZTE Corporation",
    role: "Automation & Infrastructure Engineer",
    timeframe: "May 2024 — Jul 2024",
    location: "Remote",
    highlights: [
      "Built automated validation pipelines with Jenkins and Robot Framework — testing system outputs end-to-end, analogous to AI evaluation and regression loops.",
      "Designed autonomous UI test agents with Selenium that execute multi-step workflows and validate expected states.",
      "Optimized high-throughput data ingestion with C/C++ multi-threading (+20% throughput), building infrastructure for large-scale pipeline processing."
    ],
    skills: ["Pipeline Automation", "C/C++", "Jenkins", "Testing Systems"]
  },
  {
    company: "University of Notre Dame",
    role: "Research Assistant — Agentic NLP Systems",
    timeframe: "Sep 2024 — Present",
    location: "Notre Dame, IN",
    highlights: [
      "Built an agentic LLM system that autonomously generates quizzes from TED-Ed video transcripts for deaf and hard-of-hearing learners — end-to-end from retrieval to output.",
      "Implemented chain-of-thought reasoning, self-checking validation loops, and embedding-based retrieval to improve answer quality and reduce hallucination.",
      "Designed async generation pipeline with REST APIs, cutting quiz generation latency 25% through parallel retrieval and batched LLM calls."
    ],
    skills: ["LLM Agents", "RAG Pipelines", "Evaluation Loops", "Python"]
  },
  {
    company: "University of Notre Dame",
    role: "Teaching Assistant — CS & Mathematics",
    timeframe: "Jan 2023 — Present",
    location: "Notre Dame, IN",
    highlights: [
      "Led tutorials and office hours for 100+ students across algorithms, systems, and theory courses.",
      "Covered foundational topics including graph algorithms, automata, and computational complexity — the theoretical backbone of agent planning and search."
    ],
    skills: ["Algorithms", "Systems Theory", "Teaching"]
  }
];

export const education = [
  {
    school: "University of Notre Dame, College of Engineering",
    degree: "B.S. Double Major in Computer Science, Applied Mathematics and Statistics",
    timeframe: "Aug 2022 — May 2026",
    details: [
      "GPA: 3.91/4.00"
    ]
  }
];

export const skills = [
  {
    label: "Agent & AI Systems",
    items: [
      "LLM Integration",
      "Agentic Workflows",
      "Tool-Use Orchestration",
      "RAG Pipelines",
      "Embedding Search",
      "Chain-of-Thought",
      "Evaluation Loops",
      "Prompt Engineering"
    ]
  },
  {
    label: "Languages & Frameworks",
    items: [
      "Python",
      "C/C++",
      "TypeScript",
      "Swift",
      "Java",
      "FastAPI",
      "Node/Express",
      "PyTorch",
      "TensorFlow",
      "asyncio"
    ]
  },
  {
    label: "Infrastructure & Tooling",
    items: [
      "Docker",
      "Kubernetes",
      "GKE",
      "AWS (EC2/S3)",
      "Cloud SQL",
      "Jenkins",
      "Git",
      "Linux",
      "WebSocket",
      "CI/CD Pipelines"
    ]
  }
];

export const recognition = [
  "Dean's List",
  "The Grand Challenge Scholarship",
  "n8n AI Workflow Hackathon 1st Place"
];

export const activities = [
  "CS for Good",
  "Data Science Club",
  "Quant Trading Club",
  "Student International Business Council (SIBC)"
];
