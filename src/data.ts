import { Github, Linkedin, Mail } from 'lucide-react';

export const BIO = {
  name: "PRANAV SINGH",
  role: "Software Engineer",
  university: "UW Madison",
  graduation: "CO 2027",
  location: "MADISON, WI",
  email: "psingh99@wisc.edu",
  description:
    "I am a software engineer focused on building data-intensive and ML-powered systems end to end. Most of my work is backend and infrastructure-oriented, including APIs, data pipelines, and performance-sensitive services, with frontend used primarily to ship complete products."
};

export const SEEKING = "Seeking Summer 2026 Software Engineering internship roles.";

export const EXPERIENCE = [
  {
    title: "Software Engineering Intern",
    company: "Mobility Labs Apps · Remote",
    date: "Jun 2025 – Aug 2025",
    details: [
      "Built and shipped 10+ React and TypeScript components across core product flows for actively maintained mobile applications.",
      "Integrated REST APIs and reusable validation modules, reducing frontend QA issues by 35%.",
      "Implemented 3D Spline visuals and optimized asset loading, improving page load times by 22%.",
      "Collaborated with designers and backend engineers to deliver production-ready features on tight timelines."
    ]
  },
  {
    title: "Software Engineering Intern",
    company: "RS Associates CPA · San Ramon, CA",
    date: "Nov 2024 – Jan 2025",
    details: [
      "Designed and implemented Python and SQL data pipelines processing 5,000+ financial records per month.",
      "Automated data cleaning, validation, and reporting workflows, reducing manual spreadsheet work by 40%.",
      "Built reporting scripts that generated monthly financial summaries 3x faster than prior manual processes.",
      "Worked closely with non-technical stakeholders to translate business requirements into reliable software tools."
    ]
  },
  {
    title: "Machine Learning Researcher",
    company: "Stanford University · Remote",
    date: "Jun 2023 – Jul 2023",
    details: [
      "Selected as one of 30 students from over 3,000 applicants for a faculty-led machine learning research cohort.",
      "Built and evaluated logistic regression and random forest models, improving baseline performance by 12%.",
      "Analyzed fairness metrics and optimized data preprocessing for clinical classification tasks.",
      "Presented findings and technical tradeoffs to research mentors and peers."
    ]
  }
];

export const PROJECTS = [
  {
    title: "EchoLearn.ai",
    subtitle: "Full Stack AI Platform",
    desc:
      "Full-stack AI-powered study platform with real users and production authentication using Supabase and row-level security.",
    stack: ["React", "Next.js", "TypeScript", "Supabase", "PostgreSQL", "OpenAI API", "Vapi"],
    link: "https://app.echolearn.ai",
    details: [
      "Built a full-stack AI-powered study platform with real user signups and production authentication using Supabase and row-level security.",
      "Designed real-time voice tutoring pipelines integrating GPT-4 and Vapi with sub-350ms response latency.",
      "Implemented Stripe subscriptions, CI/CD workflows, and API optimizations reducing redundant queries by 30%.",
      "Architected backend services with scalability and reliability in mind rather than prototype-only design."
    ]
  },
  {
    title: "Spotto-AI",
    subtitle: "Sports Analytics Engine",
    desc:
      "Production-style backend system composed of decoupled services and ML models powering sports analytics workflows.",
    stack: ["Python", "FastAPI", "SQLite", "Prisma", "Docker", "XGBoost"],
    details: [
      "Architected a production-style backend system composed of 9 decoupled services communicating via APIs.",
      "Built ML-backed inference services with 50+ engineered features and calibrated outputs, serving responses in under 50ms.",
      "Implemented automated data ingestion, validation, and historical analytics pipelines integrating multiple external APIs.",
      "Focused on system design, service boundaries, and performance rather than standalone model experimentation."
    ]
  },
  {
    title: "SchedUW",
    subtitle: "Syllabus Calendar Generator",
    desc: "Intelligent syllabus parser that uses AI to extract deadlines and generate .ics calendar files. Solves manual entry fatigue for students.",
    stack: ["Next.js 14", "LLM API", "TypeScript", "PDF Parsing", "iCal Generation"],
    link: "https://github.com/pranav-singh1/SchedUW",
    details: [
      "Designed agentic tool-calling architecture for autonomous event categorization.",
      "Built robust PDF parsing pipeline handling multi-page syllabi with complex layouts.",
      "Implemented complete calendar generation logic compliant with iCalendar (RFC 5545) standards."
    ]
  },
  {
    title: "Focus Helper",
    subtitle: "Chrome Extension",
    desc:
      "Distraction-blocking Chrome extension using rule-based URL filtering and permission sandboxing to protect focus time.",
    stack: ["JavaScript", "HTML/CSS", "Chrome Extensions API"],
    link: "https://chromewebstore.google.com/detail/focus-helper/ddgdbilnbpmhdgeiffgnfkhidnjbjlpk?pli=1",
    details: [
      "Built a distraction-blocking Chrome extension using rule-based URL filtering and permission sandboxing.",
      "Achieved a 5.0-star rating with consistent weekly usage among early testers.",
      "Designed the extension with maintainability and user safety in mind."
    ]
  }
];

export const COURSEWORK = [
  "Data Structures and Algorithms",
  "Artificial Intelligence",
  "Computer Systems",
  "Data Modeling",
  "Linear Algebra"
];

export const CURRENTLY = {
    focus: [
        "Continually improving EchoLearn",
        "ML models for finance-focused prediction tasks"
    ]
};

export const SKILLS = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "C++", "C", "Java", "SQL", "R", "HTML/CSS"]
  },
  {
    category: "Backend and Systems",
    items: ["FastAPI", "Flask", "REST APIs", "Linux", "Docker", "CI/CD", "PostgreSQL", "SQLite"]
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS"]
  },
  {
    category: "ML and Data",
    items: ["scikit-learn", "XGBoost", "pandas", "NumPy", "Feature Engineering", "Model Evaluation"]
  },
  {
    category: "Developer Tools",
    items: ["Git", "AWS", "Vercel", "Supabase", "Firebase", "VS Code"]
  }
];

export const SOCIALS = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/pranav-singh1",
    icon: Linkedin,
    text: "linkedin.com/in/pranav-singh1"
  },
  {
    name: "GitHub",
    url: "https://github.com/pranav-singh1",
    icon: Github,
    text: "github.com/pranav-singh1"
  },
  {
    name: "Email",
    url: "mailto:psingh99@wisc.edu",
    icon: Mail,
    text: "psingh99@wisc.edu"
  }
];
