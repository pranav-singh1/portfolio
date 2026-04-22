export const BIO = {
  name: "Pranav",
  fullName: "Pranav Singh",
  role: "Software Engineer",
  university: "UW Madison",
  graduation: "CO 2027",
  email: "psingh99@wisc.edu",
  subtitle: "Computer Science & Data Science student— UW Madison '27",
  location: "Bay Area & Madison · psingh99@wisc.edu",
  description:
    "I am a software engineer focused on building data-intensive and ML-powered systems end to end. Most of my work is backend and infrastructure-oriented, including APIs, data pipelines, and performance-sensitive services, with frontend used primarily to ship complete products.",
};

export const CURRENTLY = {
  label: "Currently",
  text: "Incoming SWE Intern @ Visa · Summer 2026",
};

export const EXPERIENCE = [
  {
    role: "Incoming Software Engineering Intern",
    company: "Visa",
    date: "May 2026",
    description: "Payment Products Development Team",
  },
  {
    role: "Software Engineering Intern",
    company: "Mobility Labs Apps",
    date: "Jun 2025 – Aug 2025",
    description:
      "Built and shipped 10+ React and TypeScript components across core product flows. Integrated REST APIs and reusable validation modules, reducing frontend QA issues by 35%. Implemented 3D Spline visuals and optimized asset loading, improving page load times by 22%.",
  },
  {
    role: "Data Analytics Intern",
    company: "RS Associates CPA",
    date: "Nov 2024 – Jan 2025",
    description:
      "Designed Python and SQL data pipelines processing 5,000+ financial records per month. Automated data cleaning, validation, and reporting workflows, reducing manual spreadsheet work by 40%.",
  },
  {
    role: "Machine Learning Researcher",
    company: "Stanford University",
    date: "Jun 2023 – Jul 2023",
    description:
      "Selected as one of 30 students from over 3,000 applicants for a faculty-led ML research cohort. Built and evaluated logistic regression and random forest models, improving baseline performance by 12%.",
  },
];

export const PROJECTS = [
  {
    name: "EchoLearn.ai",
    tag: "Full Stack AI Platform",
    description:
      "Full-stack AI-powered study platform with real users and production auth. Real-time voice tutoring with GPT-4 and Vapi at sub-350ms latency. Stripe subscriptions and CI/CD workflows.",
    stack: ["React", "Next.js", "TypeScript", "Supabase", "PostgreSQL", "OpenAI API"],
    link: "https://app.echolearn.ai",
  },
  {
    name: "ClearComms",
    tag: "Edge AI Pipeline",
    description:
      "On-device speech-to-structured-data pipeline for emergency radio comms with zero cloud dependency. Whisper ONNX on Qualcomm NPU achieving 17× inference speedup over CPU baseline. Llama 3 with schema-constrained prompting for fully offline incident extraction.",
    stack: ["Python", "FastAPI", "React", "TypeScript", "ONNX", "Whisper", "Llama"],
    link: "https://github.com/pranav-singh1/clearcomms",
    award: {
      text: "Won 2nd Place — Qualcomm ",
      linkText: "MadData",
      linkUrl: "https://devpost.com/software/clearcomms",
      suffix: " Hackathon",
    },
  },
  {
    name: "Spotto-AI",
    tag: "Sports Analytics Engine",
    description:
      "Production-style backend system with 9 decoupled services. ML-backed inference with 50+ engineered features serving responses in under 50ms.",
    stack: ["Python", "FastAPI", "SQLite", "Docker", "XGBoost"],
  },
  {
    name: "Focus Helper",
    tag: "Chrome Extension",
    description:
      "Distraction-blocking extension using rule-based URL filtering and permission sandboxing. 5.0-star rating with consistent weekly usage.",
    stack: ["JavaScript", "HTML/CSS", "Chrome Extensions API"],
    link: "https://chromewebstore.google.com/detail/focus-helper/ddgdbilnbpmhdgeiffgnfkhidnjbjlpk",
  },
];

export const COURSEWORK = [
  { code: "CS 544", name: "Intro to Big Data Systems" },
  { code: "CS 564", name: "Database Management Systems" },
  { code: "CS 540", name: "Intro to Artificial Intelligence" },
  { code: "CS 354", name: "Intro to Computer Systems" },
  { code: "CS 400", name: "Programming III" },
  { code: "CS 320", name: "Data Science Programming II" },
  { code: "MATH 240", name: "Discrete Math" },
  { code: "MATH 340", name: "Linear Algebra" },
  { code: "STAT 340", name: "Data Modeling II" },
  { code: "STAT 421", name: "Categorical Data Analysis" },
];

export const SKILLS: Record<string, string[]> = {
  "Languages": [
    "Python", "JavaScript", "TypeScript", "Java", "C", "C++", "C#", "SQL", "R", "HTML/CSS",
  ],
  "Frameworks & Libraries": [
    "React", "Next.js", "Node.js", "FastAPI", "Flask", "TensorFlow", "PyTorch", "Tailwind CSS",
  ],
  "ML & Data": [
    "scikit-learn", "XGBoost", "pandas", "NumPy", "SciPy", "Matplotlib",
  ],
  "Databases": [
    "PostgreSQL", "MongoDB", "Supabase", "Firebase", "Cassandra",
  ],
  "Infrastructure & DevOps": [
    "Git", "Docker", "AWS", "Linux", "Vercel", "CI/CD", "Spark", "Hadoop", "Kafka",
  ],
  "APIs & Services": [
    "OpenAI API", "Vapi", "REST APIs",
  ],
};

export const SOCIALS = [
  { name: "Email", url: "mailto:psingh99@wisc.edu" },
  { name: "GitHub", url: "https://github.com/pranav-singh1" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/pranav-singh1" },

];
