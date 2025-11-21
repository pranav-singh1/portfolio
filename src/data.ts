import { Github, Linkedin, Mail } from 'lucide-react';

export const BIO = {
  name: "PRANAV SINGH",
  role: "Student",
  university: "UW Madison",
  graduation: "CO 2027",
  location: "MADISON, WI",
  email: "psingh99@wisc.edu",
  description: "I'm a Computer Science and Data Science student at UW–Madison. I'm interested in software engineering, applied machine learning, and building predictive modeling systems for financial and data-driven applications."
};

export const SEEKING = "Seeking Summer 2026 Software Engineering internship roles focused on backend systems or applied ML.";

export const EXPERIENCE = [
  {
    title: "Software Engineer Intern",
    company: "Mobility Labs Apps",
    date: "Jun '25 - Aug '25",
    details: [
      "Built 10+ React and TypeScript components across core product flows used by 500K+ monthly users.",
      "Implemented 3D Spline visuals and optimized asset delivery, reducing page load time by 22%.",
      "Integrated REST APIs and reusable validation modules, reducing frontend QA issues by 35%."
    ]
  },
  {
    title: "Software Intern",
    company: "RS Associates CPA",
    date: "Nov '24 - Jan '25",
    details: [
      "Built Python and SQL pipelines processing 5K+ financial records monthly for reporting workflows.",
      "Automated data cleaning and validation, reducing manual spreadsheet work by 40%.",
      "Developed reporting scripts generating monthly summaries 3x faster than prior manual process."
    ]
  },
  {
    title: "ML Researcher",
    company: "Stanford University",
    date: "Jun '23 - Jul '23",
    details: [
      "Selected as one of 30 students from 3,000+ applicants for faculty-led ML research cohort.",
      "Built logistic regression and random forest models improving baseline accuracy by 12%.",
      "Evaluated fairness metrics and optimized preprocessing for clinical classification tasks."
    ]
  }
];

export const PROJECTS = [
  {
    title: "SchedUW",
    subtitle: "Syllabus Calendar Generator",
    desc: "Intelligent syllabus parser that uses Claude AI to extract deadlines and generate .ics calendar files. Solves manual entry fatigue for students.",
    stack: ["Next.js 14", "Claude Sonnet 4.5", "TypeScript", "PDF Parsing", "iCal Generation"],
    link: "https://github.com/pranav-singh1/SchedUW",
    details: [
      "Designed agentic tool-calling architecture for Claude to autonomously categorize events.",
      "Built robust PDF parsing pipeline handling multi-page syllabi with complex layouts.",
      "Implemented complete calendar generation logic compliant with iCalendar (RFC 5545) standards."
    ]
  },
  {
    title: "EchoLearn.ai",
    subtitle: "Full Stack AI Platform",
    desc: "AI study platform with 500+ users. Integrated GPT-4 and Vapi pipelines for real-time voice tutoring (sub-350ms latency).",
    stack: ["Next.js", "TypeScript", "OpenAI", "Vapi"],
    link: "https://app.echolearn.ai",
    details: [
        "Architected real-time voice pipeline achieving sub-350ms latency using Vapi and GPT-4.",
        "Optimized database queries and RLS policies in Supabase to handle concurrent user sessions."
    ]
  },
  {
    title: "Spotto-AI",
    subtitle: "Sports Analytics Engine",
    desc: "Engineered 30+ time-series features from 59K+ NBA game logs. Achieved 60% win rate and 14.6% ROI across 1,000+ backtested predictions.",
    stack: ["Python", "FastAPI", "XGBoost", "Pandas"],
    details: [
        "Developed custom feature engineering pipeline for time-series data normalization.",
        "Built FastAPI inference service to serve model predictions with <50ms latency."
    ]
  },
  {
    title: "Focus Helper",
    subtitle: "Chrome Extension",
    desc: "Built distraction-blocking Chrome extension with rule-based URL filtering and permission sandboxing. Maintained a 5.0-star rating.",
    stack: ["JavaScript", "HTML/CSS", "Chrome Extensions API"],
    link: "https://chromewebstore.google.com/detail/focus-helper/ddgdbilnbpmhdgeiffgnfkhidnjbjlpk?pli=1",
    details: [
        "Implemented rule-based URL filtering to block distracting sites during focus sessions.",
        "Utilized Chrome permissions API for secure tab management and sandboxing."
    ]
  }
];

export const COURSEWORK = [
    "Data Structures and Algorithms",
    "Artificial Intelligence",
    "Data Modeling",
    "DS Programming",
    "Computer Systems",
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
    items: ["Python", "TypeScript", "Java", "C++", "SQL", "R"]
  },
  {
    category: "Frameworks",
    items: ["React", "Next.js", "FastAPI", "PyTorch", "Tailwind"]
  },
  {
    category: "Tools / Infra",
    items: ["Docker", "AWS", "Git", "Linux", "Vercel"]
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
