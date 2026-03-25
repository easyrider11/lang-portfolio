export const profile = {
  name: "Lorre Li",
  role: "Software Engineer",
  location: "Notre Dame, IN",
  summary:
    "AR- and AI-focused engineer building high-performance products and real-time systems.",
  email: "lli28@nd.edu",
  phone: "+1 (574) 327-1779",
  github: "https://github.com/easyrider11",
  linkedin: "https://www.linkedin.com/in/lang-li11/",
  website: "",
  resume: "/resume.pdf"
};

export const stats = [
  { label: "Cold-Start Pass Rate", value: "99.9%" },
  { label: "Peak Connections", value: "10k+" },
  { label: "Students Mentored", value: "100+" }
];

export const focusAreas = [
  "AR & real-time graphics",
  "AI product engineering",
  "Performance & reliability",
  "Applied ML/NLP"
];

export const projects = [
  {
    title: "Dead Code Detector",
    tagline: "Finds unused legacy code.",
    description:
      "AI agent that correlates coverage and logs to surface dead paths.",
    impact: [
      "Automated codebase audits",
      "Surfaced dead paths with evidence"
    ],
    stack: ["Python", "Clang", "SQLite"],
    tags: ["AI", "Platform"],
    year: "2025"
  },
  {
    title: "NDFootball Channel",
    tagline: "Async server for live events.",
    description:
      "Event-driven asyncio server built for bursty traffic.",
    impact: [
      "Handled 10k+ concurrent connections",
      "Low-latency delivery under peak load"
    ],
    stack: ["Python", "asyncio"],
    tags: ["Backend", "Realtime"],
    year: "2024"
  },
  {
    title: "Graph Analysis Bot",
    tagline: "Browser extension for STEM data.",
    description:
      "Extension + FastAPI backend for dataset search.",
    impact: [
      "End-to-end query workflow",
      "API-backed relational search"
    ],
    stack: ["Java", "FastAPI", "SQL"],
    tags: ["Full-Stack", "Data"],
    year: "2024"
  },
  {
    title: "AI-Assisted Interview Platform",
    tagline: "Repo-level engineering interviews.",
    description:
      "AI native SaaS platform providing repo-level engineering interview tasks with sandboxed execution, controlled AI copilot integration, session replay, and multi-dimensional evaluation rubric.",
    impact: [
      "Sandboxed code execution environment",
      "AI copilot integration with controlled access",
      "Session replay and multi-dimensional evaluation"
    ],
    stack: ["TypeScript", "Node.js", "Docker", "LLM APIs"],
    tags: ["AI", "Full-Stack", "Platform"],
    year: "2025"
  },
  {
    title: "HFT Order Book Imbalance Engine",
    tagline: "Real-time OBI signal modeling.",
    description:
      "Real-time depth-of-book reconstruction and OBI signal modeling with tick-level state tracking, statistical backtesting, and live paper-trading validation on Kalshi markets.",
    impact: [
      "Real-time depth-of-book reconstruction",
      "Statistical backtesting pipeline",
      "Live paper-trading validation on Kalshi"
    ],
    stack: ["C++", "WebSocket", "Python"],
    tags: ["Backend", "Realtime", "Data"],
    year: "2025"
  },
  {
    title: "FTS Scanner App",
    tagline: "On-device fentanyl strip detection.",
    description:
      "Android CV app with on-device inference.",
    impact: [
      "Integrated TensorFlow Lite",
      "Optimized mobile inference"
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
    role: "Full-stack Software Engineer & AI Lab Assistant",
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
    role: "Full-stack Software Development Engineer",
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
    label: "Languages",
    items: [
      "Python",
      "C/C++",
      "Swift",
      "Java",
      "JavaScript",
      "HTML/CSS",
      "SQL",
      "Shell",
      "C#",
      "R",
      "MATLAB",
      "Kotlin"
    ]
  },
  {
    label: "Frameworks",
    items: [
      "FastAPI",
      "Flask",
      "React",
      "Node/Express",
      "PyTorch",
      "TensorFlow",
      "asyncio",
      "Robot Framework",
      "Selenium"
    ]
  },
  {
    label: "Tools & Platforms",
    items: [
      "Git",
      "Linux",
      "Docker",
      "Kubernetes",
      "Cloud SQL",
      "AWS (EC2/S3)",
      "Android SDK",
      "Jenkins",
      "OpenCV",
      "Metal/GLSL"
    ]
  }
];

export const recognition = [
  "Dean’s List",
  "The Grand Challenge Scholarship",
  "n8n AI Workflow Hackathon 1st Place"
];

export const activities = [
  "CS for Good",
  "Data Science Club",
  "Quant Trading Club",
  "Student International Business Council (SIBC)"
];
