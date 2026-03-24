export const profile = {
  name: "Lorre Li",
  role: "Software Engineer",
  location: "Notre Dame, IN",
  summary:
    "Meta SWE intern turned full-stack builder shipping AR pipelines, AI tutors, and HFT engines. 3.91 GPA CS + Math double major at Notre Dame, n8n AI Hackathon 1st Place, 100+ students mentored.",
  email: "lli28@nd.edu",
  phone: "+1 (574) 327-1779",
  github: "https://github.com/easyrider11",
  linkedin: "https://www.linkedin.com/in/lang-li11/",
  website: "",
  resume: "/resume.pdf"
};

export const stats = [
  { label: "Cold-Start Pass Rate", value: "99.9%" },
  { label: "Latency Reduction", value: "27%" },
  { label: "Students Mentored", value: "100+" }
];

export const focusAreas = [
  "AR & real-time graphics",
  "AI product engineering",
  "Performance & reliability",
  "Applied ML/NLP",
  "High-frequency trading"
];

export const experience = [
  {
    company: "Meta",
    title: "Software Engineer Intern",
    location: "Menlo Park, CA",
    period: "May - Aug 2025",
    bullets: [
      "Rebuilt Instagram camera AR effect initialization in Swift/Obj-C++, lifting cold-start pass rate to 99.9% and reducing warm-up hitches by 50%",
      "Refactored iOS AR SDK to modular interface-driven architecture, cutting effect-apply latency by 27% at 60 FPS",
      "Co-designed AR effects coordinator unifying gesture, audio, and real-time image processing; adopted Optic stack in FOA infra",
      "Shipped Metal/GLSL compute shaders for separable Gaussian and color transforms"
    ]
  },
  {
    company: "Radical AI",
    title: "Full-Stack SWE & AI Lab Assistant",
    location: "New York, NY",
    period: "Jul - Sep 2024",
    bullets: [
      "Shipped AI tutor for technical onboarding using React.js and Node.js in a team of 10",
      "Optimized backend REST paths and caching, reducing latency by 25%",
      "Deployed AI models on Google Kubernetes Engine with Cloud SQL",
      "Investigated SDC issues and protocoled a checksum method to detect tainted runs"
    ]
  },
  {
    company: "ZTE Corporation",
    title: "Full-Stack Software Development Engineer",
    location: "Remote",
    period: "May - Jul 2024",
    bullets: [
      "Integrated CI/CD pipelines for STB unit tests with Jenkins and Robot Framework",
      "Developed automated UI functional tests using Selenium for ZTE's STB management website",
      "Enhanced STB backend in Java/MySQL; deployed multithreaded C/C++ ingestion boosting throughput by 20%"
    ]
  },
  {
    company: "ND NLP Lab, University of Notre Dame",
    title: "Research Assistant",
    location: "Notre Dame, IN",
    period: "Sep 2024 - Present",
    bullets: [
      "Built LLM-powered real-time quiz interface from TED-Ed videos with TensorFlow for hard-of-hearing learners",
      "Implemented async quiz generation in Python, reducing interface delays by 25%",
      "Exposed REST APIs for transcript retrieval and OpenAI calls with rate limiting"
    ]
  },
  {
    company: "University of Notre Dame",
    title: "Teaching Assistant",
    location: "Notre Dame, IN",
    period: "Jan 2023 - Present",
    bullets: [
      "Led lectures and office hours for 100+ students across Theory of Computing, Data Structures, Physics, Linear Algebra",
      "Topics: Graph, Tree, PDA, Turing machine, P and NP complexity"
    ]
  }
];

export const projects = [
  {
    title: "AI-Assisted Interview Platform",
    tagline: "Repo-level coding interviews with sandboxed AI copilot.",
    description:
      "AI-native SaaS platform with repo-level engineering tasks, sandboxed execution, controlled AI copilot, session replay, and multi-dimensional evaluation rubric.",
    impact: [
      "Sandboxed code execution environment",
      "Multi-dimensional AI evaluation rubric",
      "Session replay for candidate review"
    ],
    stack: ["TypeScript", "Node.js", "Docker", "LLM APIs"],
    tags: ["AI", "SaaS", "Full-Stack"],
    year: "2025"
  },
  {
    title: "HFT Order Book Imbalance Engine",
    tagline: "Real-time depth-of-book OBI signal modeling.",
    description:
      "Real-time depth-of-book reconstruction and OBI signal modeling with tick-level tracking, statistical backtesting, and live paper-trading on Kalshi markets.",
    impact: [
      "Tick-level order book reconstruction",
      "Live paper-trading on Kalshi",
      "Statistical backtesting pipeline"
    ],
    stack: ["C++", "WebSocket", "Python"],
    tags: ["HFT", "Finance", "Systems"],
    year: "2025"
  },
  {
    title: "Dead Code Detector",
    tagline: "AI agent that surfaces unused legacy code.",
    description:
      "AI agent analyzing runtime coverage and logs to identify and remove unused legacy code paths.",
    impact: [
      "Automated codebase audits",
      "Evidence-backed dead path surfacing"
    ],
    stack: ["Python", "Clang", "SQLite"],
    tags: ["AI", "Platform"],
    year: "2025"
  },
  {
    title: "FTS Scanner App",
    tagline: "On-device fentanyl test strip detection.",
    description:
      "On-device Android app for fentanyl test strip detection using Android SDK and TensorFlow Lite.",
    impact: [
      "On-device TensorFlow Lite inference",
      "Optimized for low-resource mobile"
    ],
    stack: ["OpenCV", "Android SDK", "TensorFlow Lite"],
    tags: ["Mobile", "Healthcare", "AI"],
    year: "2024"
  },
  {
    title: "Legal Consultant RAG",
    tagline: "AI legal assistant with schema-constrained reasoning.",
    description:
      "RAG assistant over law code with schema-constrained LLM reasoning and cited sources.",
    impact: [
      "Schema-constrained LLM reasoning",
      "Source citations for legal queries"
    ],
    stack: ["Python", "PostgreSQL", "LLM"],
    tags: ["AI", "RAG", "Legal"],
    year: "2024"
  }
];

export const skills = {
  languages: ["Python", "C/C++", "Swift", "Java", "JavaScript", "HTML/CSS", "SQL", "Shell", "C#", "R", "MATLAB", "Kotlin"],
  frameworks: ["FastAPI", "Flask", "React", "Node/Express", "PyTorch", "TensorFlow", "asyncio", "Robot Framework", "Selenium"],
  tools: ["Git", "Linux", "Docker", "Kubernetes", "Cloud SQL", "AWS (EC2/S3)", "Android SDK", "Jenkins", "OpenCV", "Metal/GLSL"]
};

export const education = {
  school: "University of Notre Dame",
  degree: "B.S. Double Major - Computer Science & Applied Mathematics",
  location: "Notre Dame, IN",
  period: "Aug 2022 - May 2026",
  gpa: "3.91/4.00",
  honors: ["Dean's List", "Grand Challenge Scholarship", "n8n AI Hackathon 1st Place"],
  activities: ["CS for Good", "Data Science Club", "Quant Trading Club", "SIBC"]
};
