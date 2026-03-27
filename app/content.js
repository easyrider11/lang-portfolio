export const profile = {
  name: "Lorre Li",
  role: "AI Builder & Software Engineer",
  location: "Notre Dame, IN",
  summary:
    "I build AI-powered products and high-performance systems. From on-device ML to LLM-driven workflows, I ship intelligent software that scales.",
  email: "lli28@nd.edu",
  phone: "+1 (574) 327-1779",
  github: "https://github.com/easyrider11",
  linkedin: "https://www.linkedin.com/in/lang-li11/",
  website: "",
  resume: "/resume.pdf"
};

export const stats = [
  { label: "AI/ML Projects Shipped", value: "6+" },
  { label: "Cold-Start Pass Rate", value: "99.9%" },
  { label: "Peak Connections", value: "10k+" },
  { label: "Students Mentored", value: "100+" }
];

export const focusAreas = [
  "AI agents & LLM systems",
  "On-device ML inference",
  "Real-time & event-driven architecture",
  "High-frequency trading systems",
  "Full-stack product engineering"
];

export const projects = [
  {
    title: "AI-Assisted Interview Platform",
    tagline: "Repo-level coding interviews with sandboxed AI copilot.",
    description:
      "A full-stack SaaS platform that reimagines technical hiring. Candidates tackle repo-level engineering tasks inside a sandboxed execution environment with a controlled AI copilot — not a free ChatGPT, but a scoped assistant that reveals how engineers collaborate with AI tools. The platform records full session replays so hiring managers can review problem-solving approaches, not just final answers.",
    highlights: [
      "Sandboxed Docker execution with filesystem isolation and resource limits per session",
      "AI copilot with scoped context windows — candidates' prompting patterns become signal",
      "Multi-dimensional evaluation rubric scoring code quality, architecture decisions, and AI collaboration",
      "Session replay engine capturing keystrokes, AI interactions, and terminal output with <50ms sync"
    ],
    impact: [
      "Sandboxed code execution environment",
      "Multi-dimensional AI evaluation rubric",
      "Session replay for candidate review"
    ],
    stack: ["TypeScript", "Next.js", "Node.js", "Docker", "PostgreSQL", "LLM APIs"],
    tags: ["AI", "SaaS", "Full-Stack"],
    year: "2025",
    featured: true,
    github: "https://github.com/easyrider11/vibescore"
  },
  {
    title: "HFT Order Book Imbalance Engine",
    tagline: "Real-time depth-of-book OBI signal modeling.",
    description:
      "A low-latency trading signal engine that reconstructs full depth-of-book state from raw market data feeds and computes Order Book Imbalance (OBI) signals in real time. The system processes tick-level updates via WebSocket streams, maintains a lock-free order book, and feeds signals into a statistical backtesting framework with live paper-trading on Kalshi prediction markets.",
    highlights: [
      "Lock-free order book reconstruction processing tick-level updates at microsecond granularity",
      "OBI signal computation with configurable depth levels and exponential decay weighting",
      "Statistical backtesting pipeline with walk-forward validation and Sharpe ratio optimization",
      "Live paper-trading integration with Kalshi API — real market signals, no capital risk"
    ],
    impact: [
      "Tick-level order book reconstruction",
      "Live paper-trading on Kalshi",
      "Statistical backtesting pipeline"
    ],
    stack: ["C++", "WebSocket", "Python", "NumPy", "Kalshi API"],
    tags: ["HFT", "Finance", "Systems"],
    year: "2025"
  },
  {
    title: "Dead Code Detector",
    tagline: "AI agent that audits codebases autonomously.",
    description:
      "An autonomous AI agent that correlates code coverage data with runtime logs to surface dead paths in large codebases. Unlike simple static analysis, the agent reasons over multiple evidence sources — coverage reports, production logs, call graphs, and git blame history — to distinguish genuinely unreachable code from rarely-triggered edge cases, producing confidence-scored reports that developers can act on immediately.",
    highlights: [
      "Multi-signal analysis combining coverage data, runtime logs, AST traversal, and git history",
      "Clang-based AST parser for precise call graph extraction across C/C++ codebases",
      "Evidence-backed confidence scoring (0–1) with explainable reasoning chains",
      "SQLite-backed result store enabling incremental re-analysis on code changes"
    ],
    impact: [
      "Automated codebase audits across multi-repo systems",
      "Surfaced dead paths with evidence-backed confidence scores",
      "Reduced manual code review effort significantly"
    ],
    stack: ["Python", "Clang", "SQLite", "AST Analysis"],
    tags: ["AI", "Platform"],
    year: "2025"
  },
  {
    title: "LLM Quiz Interface",
    tagline: "AI-powered learning for accessibility.",
    description:
      "An LLM-driven quiz generation system that transforms TED-Ed video content into interactive assessments, specifically designed for deaf and hard-of-hearing learners. The system extracts transcripts, chunks them semantically, and uses chain-of-thought prompting with self-checking loops to generate high-quality, contextually accurate quiz questions. Embedding-based search ensures answers are grounded in source material.",
    highlights: [
      "Chain-of-thought prompting with self-verification loops reducing hallucinated answers by 40%",
      "Semantic chunking pipeline with embedding search for source-grounded answer generation",
      "Async quiz generation achieving 25% faster time-to-first-question vs synchronous baseline",
      "REST API with streaming responses for real-time quiz delivery to the React frontend"
    ],
    impact: [
      "25% faster interface with async quiz generation",
      "Improved answer quality via chain-of-thought reasoning",
      "REST API serving real-time quiz content"
    ],
    stack: ["Python", "TensorFlow", "LLMs", "REST APIs", "React"],
    tags: ["AI", "Full-Stack"],
    year: "2024",
    featured: true
  },
  {
    title: "NDFootball Channel",
    tagline: "Async server handling 10k+ live connections.",
    description:
      "An event-driven asyncio server engineered for the extreme traffic spikes of live Notre Dame football games. The architecture uses a single-threaded event loop with connection pooling and backpressure management to handle 10k+ simultaneous WebSocket connections without dropping a single one. Purpose-built for bursty, real-time workloads where traditional thread-per-connection models would collapse.",
    highlights: [
      "Single-threaded event loop handling 10k+ concurrent WebSocket connections with zero drops",
      "Backpressure management with per-client write buffers preventing slow consumers from blocking",
      "Connection lifecycle tracking with graceful degradation under extreme load spikes",
      "Sub-100ms message broadcast latency at peak concurrency during live game events"
    ],
    impact: [
      "Handled 10k+ concurrent connections",
      "Low-latency delivery under peak load",
      "Zero dropped connections during live events"
    ],
    stack: ["Python", "asyncio", "WebSockets"],
    tags: ["Backend", "Realtime"],
    year: "2024"
  },
  {
    title: "Graph Analysis Bot",
    tagline: "Browser extension + API for STEM data search.",
    description:
      "A Chrome extension paired with a FastAPI backend that enables researchers to query and visualize STEM datasets directly from the browser. The extension captures user intent, translates it into structured relational queries, and returns interactive graph visualizations — turning complex dataset exploration into a point-and-click workflow.",
    highlights: [
      "Chrome Extension API integration with content scripts injecting query UI into any webpage",
      "FastAPI backend with SQL query builder supporting joins, aggregations, and filtered projections",
      "Interactive graph visualization layer rendering relational query results in the browser",
      "End-to-end query pipeline from natural language intent to structured SQL in under 2 seconds"
    ],
    impact: [
      "End-to-end query workflow from browser",
      "API-backed relational search across datasets"
    ],
    stack: ["Java", "FastAPI", "SQL", "Chrome Extension API"],
    tags: ["Full-Stack", "Data"],
    year: "2024"
  },
  {
    title: "FTS Scanner App",
    tagline: "On-device ML for fentanyl strip detection.",
    description:
      "An Android computer vision application that runs TensorFlow Lite models entirely on-device for real-time fentanyl test strip analysis. The app captures camera frames, preprocesses them through an OpenCV pipeline, and runs inference without any network dependency — making it usable in field conditions with no connectivity. Model quantization and hardware-accelerated delegates keep inference under 100ms on mid-range devices.",
    highlights: [
      "On-device TensorFlow Lite inference with INT8 quantization for 3× speedup on mobile",
      "OpenCV preprocessing pipeline with adaptive thresholding and contour detection for strip isolation",
      "Hardware-accelerated NNAPI delegate achieving <100ms inference on mid-range Android devices",
      "Zero network dependency — fully offline capable for field deployment scenarios"
    ],
    impact: [
      "Real-time on-device ML inference",
      "Optimized model for mobile hardware constraints",
      "Accessible detection without lab equipment"
    ],
    stack: ["OpenCV", "Android SDK", "TensorFlow Lite", "Kotlin"],
    tags: ["Mobile", "Healthcare", "AI"],
    year: "2024"
  },
  {
    title: "Legal Consultant RAG",
    tagline: "AI legal assistant with schema-constrained reasoning.",
    description:
      "A Retrieval-Augmented Generation system that answers legal queries by grounding LLM responses in actual law code. The system indexes legal documents into a PostgreSQL vector store, retrieves relevant passages at query time, and constrains the LLM's output to a strict JSON schema — ensuring every claim is tied to a specific statute or code section with a verifiable citation.",
    highlights: [
      "PostgreSQL pgvector store with hybrid keyword + semantic search over indexed legal documents",
      "Schema-constrained LLM output enforcing structured citations for every legal claim",
      "Chunking strategy optimized for legal text: section-aware splitting preserving statute boundaries",
      "Citation verification pipeline cross-referencing generated references against source documents"
    ],
    impact: [
      "Schema-constrained LLM reasoning",
      "Source citations for legal queries"
    ],
    stack: ["Python", "PostgreSQL", "pgvector", "LLM", "FastAPI"],
    tags: ["AI", "RAG"],
    year: "2024"
  }
];

export const experience = [
  {
    company: "Meta",
    role: "Software Engineer",
    timeframe: "May 2025 — Aug 2025",
    location: "Menlo Park, CA",
    highlights: [
      "Rebuilt Instagram AR camera init in Swift/Obj-C++, lifting cold-start pass rate to 99.9% and cutting warm-up hitches 50%.",
      "Modularized the iOS AR pipeline, cutting effect-apply latency 27% while sustaining 60 FPS.",
      "Co-designed an effects coordinator and moved to the Optic stack for new AR filters.",
      "Shipped Metal/GLSL compute shaders for separable Gaussian and color transforms."
    ],
    skills: ["Swift", "Objective-C++", "iOS", "Metal/GLSL"]
  },
  {
    company: "Radical AI",
    role: "Full-stack Engineer & AI Lab Assistant",
    timeframe: "Jul 2024 — Sep 2024",
    location: "New York, NY",
    highlights: [
      "Shipped an AI tutor for onboarding with React and Node in a 10-person team.",
      "Optimized REST paths and caching, reducing latency by 25%.",
      "Deployed models on GKE + Cloud SQL; investigated SDC with checksum detection."
    ],
    skills: ["React", "Node.js", "GKE", "Cloud SQL"]
  },
  {
    company: "ZTE Corporation",
    role: "Full-stack Development Engineer",
    timeframe: "May 2024 — Jul 2024",
    location: "Remote",
    highlights: [
      "Built CI/CD test pipelines with Jenkins and Robot Framework.",
      "Automated STB UI tests with Selenium.",
      "Improved backend ingestion with Java/MySQL and C/C++ multi-threading (+20% throughput)."
    ],
    skills: ["Java", "C/C++", "Jenkins", "Selenium"]
  },
  {
    company: "University of Notre Dame",
    role: "Research Assistant, NLP Lab",
    timeframe: "Sep 2024 — Present",
    location: "Notre Dame, IN",
    highlights: [
      "Built an LLM quiz interface from TED-Ed videos for deaf and hard-of-hearing learners.",
      "Improved answers via chain-of-thought, self-checking, and embedding search.",
      "Async quiz generation + REST APIs; 25% faster interface."
    ],
    skills: ["Python", "TensorFlow", "LLMs", "APIs"]
  },
  {
    company: "University of Notre Dame",
    role: "Teaching Assistant",
    timeframe: "Jan 2023 — Present",
    location: "Notre Dame, IN",
    highlights: [
      "Led tutorials and office hours for 100+ students across CS/math courses.",
      "Covered core theory topics including graphs, automata, and P vs NP."
    ],
    skills: ["Teaching", "Algorithms", "Systems"]
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
    label: "AI & ML",
    items: [
      "PyTorch",
      "TensorFlow",
      "TensorFlow Lite",
      "LLMs",
      "OpenCV",
      "Chain-of-Thought",
      "Embedding Search",
      "On-Device ML"
    ]
  },
  {
    label: "Languages",
    items: [
      "Python",
      "C/C++",
      "Swift",
      "Java",
      "JavaScript",
      "SQL",
      "Shell",
      "Kotlin",
      "C#",
      "R",
      "MATLAB"
    ]
  },
  {
    label: "Frameworks & Tools",
    items: [
      "FastAPI",
      "Flask",
      "React",
      "Node/Express",
      "asyncio",
      "Docker",
      "Kubernetes",
      "AWS",
      "Git",
      "Jenkins",
      "Metal/GLSL"
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
