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
  "Full-stack product engineering"
];

export const projects = [
  {
    title: "Dead Code Detector",
    tagline: "AI agent that audits codebases autonomously.",
    description:
      "Built an AI agent that correlates code coverage data with runtime logs to automatically surface dead paths in large codebases. The agent reasons over evidence to distinguish genuinely unreachable code from rarely-triggered paths.",
    impact: [
      "Automated codebase audits across multi-repo systems",
      "Surfaced dead paths with evidence-backed confidence scores",
      "Reduced manual code review effort significantly"
    ],
    stack: ["Python", "Clang", "SQLite", "AST Analysis"],
    tags: ["AI", "Platform"],
    year: "2025",
    featured: true
  },
  {
    title: "LLM Quiz Interface",
    tagline: "AI-powered learning for accessibility.",
    description:
      "Built an LLM-driven quiz generation system from TED-Ed videos designed for deaf and hard-of-hearing learners. Uses chain-of-thought prompting, self-checking, and embedding search for high-quality answers.",
    impact: [
      "25% faster interface with async quiz generation",
      "Improved answer quality via chain-of-thought reasoning",
      "REST API serving real-time quiz content"
    ],
    stack: ["Python", "TensorFlow", "LLMs", "REST APIs"],
    tags: ["AI", "Full-Stack"],
    year: "2024",
    featured: true
  },
  {
    title: "NDFootball Channel",
    tagline: "Async server handling 10k+ live connections.",
    description:
      "Event-driven asyncio server built for bursty traffic during live sporting events. Designed to handle massive connection spikes with low-latency delivery.",
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
      "Chrome extension paired with a FastAPI backend enabling end-to-end STEM dataset search with relational query support.",
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
      "Android computer vision app with on-device TensorFlow Lite inference for real-time fentanyl test strip analysis. Optimized for mobile performance.",
    impact: [
      "Real-time on-device ML inference",
      "Optimized model for mobile hardware constraints",
      "Accessible detection without lab equipment"
    ],
    stack: ["OpenCV", "Android SDK", "TensorFlow Lite"],
    tags: ["Mobile", "ML"],
    year: "2023"
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
      "Co-designed an effects coordinator and moved to the Optic stack for new AR filters."
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
      "Kotlin"
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
      "Jenkins"
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
