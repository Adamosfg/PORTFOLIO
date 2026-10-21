// ponytail: Strongly-typed, clean CV-backed content repository

export interface Project {
  slug: string;
  title: string;
  client: string;
  period: string;
  role: string;
  outcome: string;
  keyStats: string; // Exactly 1-2 numbers inline: e.g. "85.5% precision · -55% query latency"
  tags: string[]; // mono tech tags
  caseStudyUrl: string;
  category?: string;
  icon?: string;
  accentColor?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
}

export interface SiteContent {
  meta: {
    title: string;
    description: string;
    url: string;
  };
  personal: {
    name: string;
    role: string;
    location: string;
    statusLine: string;
    email: string;
    phone: string;
    github: string;
    linkedin: string;
    cvUrl: string;
    avatarUrl: string;
  };
  hero: {
    tagline: string;
    proofLine: string;
    ctaPrimary: { label: string; href: string };
    ctaSecondary: { label: string; href: string };
  };
  nav: {
    links: { label: string; href: string }[];
    cvButton: { label: string; href: string };
  };
  projects: Project[];
  stackGroups: {
    name: string;
    items: string[];
  }[];
  experience: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  footer: {
    statusNote: string;
    rights: string;
  };
}

export const contentEN: SiteContent = {
  meta: {
    title: "Adam Benbouazza — Full-Stack Developer & AI Engineer",
    description: "Junior Full-Stack & AI Engineer building ML-powered production systems. Based in Morocco, open to relocate in Europe.",
    url: "https://adambenbouazza.dev",
  },
  personal: {
    name: "Adam Benbouazza",
    role: "Full-Stack Developer & AI Engineer",
    location: "Casablanca, Morocco",
    statusLine: "Based in Morocco · Open to relocate in Europe",
    email: "adambenbouazza555@gmail.com",
    phone: "+212 610 257 511",
    github: "https://github.com/Adamosfg",
    linkedin: "https://www.linkedin.com/in/adam-benbouazza-8b551a222",
    cvUrl: "/cv.pdf",
    avatarUrl: "/avatar.jpg",
  },
  hero: {
    tagline: "AI Engineer & Full-Stack Developer. I build ML-powered products that ship.",
    proofLine: "Built an industrial KPI platform with anomaly detection and an LLM assistant at LEONI.",
    ctaPrimary: { label: "View projects", href: "#projects" },
    ctaSecondary: { label: "Download CV", href: "/cv.pdf" },
  },
  nav: {
    links: [
      { label: "Selected work", href: "#projects" },
      { label: "Stack", href: "#stack" },
      { label: "Experience", href: "#experience" },
      { label: "Contact", href: "#contact" },
    ],
    cvButton: { label: "Download CV", href: "/cv.pdf" },
  },
  projects: [
    {
      slug: "leoni-telemetry-ai",
      title: "Automotive Production Telemetry & Anomaly Engine",
      client: "LEONI Wiring Systems",
      period: "Feb 2026 – Jul 2026",
      role: "Full-Stack & AI Engineer (PFE)",
      category: "AI • ML • INDUSTRIAL IOT • CLOUD",
      icon: "⚡",
      accentColor: "#f97316",
      githubUrl: "https://github.com/Adamosfg",
      liveUrl: "/projects/leoni-telemetry-ai",
      outcome: "Cut root-cause analysis time to seconds with 85.5% precision XGBoost and -55% DB query latency across 50k+ daily telemetry records.",
      keyStats: "85.5% precision · -55% query latency",
      tags: ["Python", "FastAPI", "XGBoost", "PostgreSQL", "React", "Docker", "SHAP"],
      caseStudyUrl: "/projects/leoni-telemetry-ai",
    },
    {
      slug: "healthcare-rbac-platform",
      title: "Clinical Scheduling & Patient Hub",
      client: "Cabinet Médical Privé",
      period: "Mar 2025 – Jul 2025",
      role: "Full-Stack Engineer",
      category: "FULL STACK • HEALTHCARE • CONCURRENCY",
      icon: "🤍",
      accentColor: "#ec4899",
      githubUrl: "https://github.com/Adamosfg",
      liveUrl: "/projects/healthcare-rbac-platform",
      outcome: "Eliminated 100% of booking race conditions with pessimistic locking while delivering sub-150ms agenda updates for multi-doctor practices.",
      keyStats: "0% booking conflicts · <150ms response",
      tags: ["Spring Boot 3", "React", "MySQL", "JWT/RBAC", "Tailwind CSS"],
      caseStudyUrl: "/projects/healthcare-rbac-platform",
    },
    {
      slug: "snrt-realtime-broadcast",
      title: "High-Concurrency Newsflash Feed",
      client: "SNRT",
      period: "May 2024 – Aug 2024",
      role: "Web & Data Engineer",
      category: "REALTIME • WEBSOCKET • REDIS",
      icon: "📡",
      accentColor: "#06b6d4",
      githubUrl: "https://github.com/Adamosfg",
      liveUrl: "/projects/snrt-realtime-broadcast",
      outcome: "Scaled live event dispatching under high traffic with <200ms WebSocket push latency and reduced redundant DB hits by 30% using Redis.",
      keyStats: "<200ms latency · -30% DB load",
      tags: ["Node.js", "WebSockets", "Redis", "React", "Express"],
      caseStudyUrl: "/projects/snrt-realtime-broadcast",
    },
    {
      slug: "enterprise-rag-assistant",
      title: "Enterprise Multi-Modal RAG System",
      client: "AI R&D Showcase",
      period: "2025 – 2026",
      role: "AI Engineer",
      category: "AI • RAG • BACKEND • CLOUD",
      icon: "🧠",
      accentColor: "#a855f7",
      githubUrl: "https://github.com/Adamosfg",
      outcome: "Solo-built a bilingual RAG system for enterprise knowledge search with hybrid vector retrieval, semantic chunking, and citation-verified LLM answer generation.",
      keyStats: "Hybrid vector search · Pinecone + FAISS",
      tags: ["Python", "FastAPI", "RAG", "Pinecone", "LangChain", "OpenAI"],
      caseStudyUrl: "",
    },
    {
      slug: "dockerized-ml-ops",
      title: "Dockerized ML Prediction & Serving API",
      client: "MLOps Architecture",
      period: "2025",
      role: "ML Engineer",
      category: "MLOPS • DOCKER • FASTAPI",
      icon: "🐳",
      accentColor: "#3b82f6",
      githubUrl: "https://github.com/Adamosfg",
      outcome: "Containerized ML model serving with FastAPI and Docker. Demonstrates production MLOps patterns: clean REST API, containerization, and ML inference pipelines.",
      keyStats: "Sub-40ms inference · Prometheus telemetry",
      tags: ["Docker", "FastAPI", "Python", "MLOps", "scikit-learn"],
      caseStudyUrl: "",
    },
    {
      slug: "ai-code-review-bot",
      title: "AI Code Review & AST Bot",
      client: "DevTools",
      period: "2025",
      role: "Full-Stack Engineer",
      category: "TYPESCRIPT • DEVTOOLS • AI",
      icon: "🤖",
      accentColor: "#10b981",
      githubUrl: "https://github.com/Adamosfg",
      outcome: "Automated AI-powered code review bot built in TypeScript. Integrates into developer workflows to provide intelligent, context-aware code feedback.",
      keyStats: "Automated PR reviews · Context-aware",
      tags: ["TypeScript", "AI", "DevTools", "Automation", "Node.js"],
      caseStudyUrl: "",
    },
    {
      slug: "smart-resource-tracker",
      title: "Smart Telemetry & Cache Tracker",
      client: "Systems Engineering",
      period: "2024 – 2025",
      role: "Backend Engineer",
      category: "BACKEND • API • ML",
      icon: "⚡",
      accentColor: "#eab308",
      githubUrl: "https://github.com/Adamosfg",
      outcome: "LRU Cache with TTL, eviction metrics, FastAPI backend, and React frontend. Production-grade resource management system with real-time monitoring.",
      keyStats: "Zero loss queue · 10k msg/sec",
      tags: ["FastAPI", "React", "Python", "LRU Cache", "Redis"],
      caseStudyUrl: "",
    },
    {
      slug: "api-health-monitor",
      title: "API Health & Uptime Monitor",
      client: "DevOps & Cloud",
      period: "2024",
      role: "Full-Stack Engineer",
      category: "MONITORING • HTML • DEVOPS",
      icon: "🛰️",
      accentColor: "#f43f5e",
      githubUrl: "https://github.com/Adamosfg",
      outcome: "Lightweight API health monitoring dashboard. Tracks endpoint availability, response times, and status codes, giving developers real-time visibility into their services.",
      keyStats: "Realtime ping · Status codes & incident logs",
      tags: ["HTML", "JavaScript", "DevOps", "Monitoring", "Docker"],
      caseStudyUrl: "",
    },
  ],
  stackGroups: [
    {
      name: "AI & Machine Learning",
      items: ["FastAPI", "Python", "XGBoost", "Scikit-Learn", "SHAP", "RAG Architectures", "FAISS", "ChromaDB", "LLM APIs (Gemini, OpenAI)"],
    },
    {
      name: "Backend & Systems",
      items: ["FastAPI (asyncio)", "Node.js (Express)", "Java (Spring Boot 3)", "RESTful APIs", "WebSockets", "Microservices", "Docker"],
    },
    {
      name: "Frontend",
      items: ["React.js", "Next.js (App Router)", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Context API"],
    },
    {
      name: "Data & Infrastructure",
      items: ["PostgreSQL (CTEs, Indexing)", "MySQL", "Redis (Caching, Pub/Sub)", "Docker Compose", "CI/CD (GitHub Actions)", "Jest", "JUnit 5"],
    },
  ],
  experience: [
    {
      role: "Full-Stack & AI Engineer – PFE Internship",
      company: "LEONI Wiring Systems (Volvo MEP1 Project)",
      location: "Berrechid, Morocco",
      period: "Feb 2026 – Jul 2026",
      bullets: [
        "Architected an end-to-end telemetry supervision dashboard in React, TypeScript, and Tailwind CSS for automotive wiring harness assembly lines.",
        "Trained and deployed a production anomaly detection pipeline in FastAPI with XGBoost (85.5% precision) and SHAP explainability for instant scrap root-cause detection.",
        "Engineered PostgreSQL database schemas processing 50,000+ daily telemetry records, reducing response times by 55% via targeted composite indexing.",
        "Containerized the solution with Docker Compose and maintained >80% automated test coverage.",
      ],
    },
    {
      role: "Full-Stack Software Engineer – Healthcare Project",
      company: "Cabinet Médical Privé",
      location: "Settat, Morocco",
      period: "Mar 2025 – Jul 2025",
      bullets: [
        "Delivered a reactive patient and multi-practitioner schedule synchronization interface with React.js.",
        "Built a Spring Boot 3 & MySQL backend secured with JWT authentication and Role-Based Access Control (RBAC).",
        "Applied database transaction locks preventing 100% of concurrent appointment collision risks on shared practitioner slots.",
      ],
    },
    {
      role: "Web & Data Software Engineer – Technical Internship",
      company: "SNRT (Société Nationale de Radiodiffusion et de Télévision)",
      location: "Rabat, Morocco",
      period: "May 2024 – Aug 2024",
      bullets: [
        "Engineered dynamic web modules for high-traffic live newsflash delivery and real-time alerts.",
        "Integrated bidirectional WebSocket communication maintaining push latency under 200ms.",
        "Deployed Redis in-memory caching to reduce redundant database queries by 30%.",
      ],
    },
  ],
  education: [
    {
      degree: "Master's in Computer Science & Artificial Intelligence (Bac+5)",
      institution: "Université Hassan II de Casablanca (FSAC)",
      location: "Casablanca, Morocco",
      period: "2024 – 2026",
    },
    {
      degree: "Bachelor's in Applied Computer Science (Licence)",
      institution: "Université Mundiapolis de Casablanca",
      location: "Casablanca, Morocco",
      period: "2021 – 2024",
    },
  ],
  certifications: [
    {
      title: "Deep Learning Specialization",
      issuer: "DeepLearning.AI (Coursera)",
      year: "2025",
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      year: "2025",
    },
  ],
  footer: {
    statusNote: "Currently open to AI Engineer / Full-Stack roles.",
    rights: "© 2026 Adam Benbouazza. Casablanca, Morocco.",
  },
};

export function getContent(): SiteContent {
  return contentEN;
}
