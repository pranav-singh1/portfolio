import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const { scrollYProgress } = useScroll();
  const [activeSection, setActiveSection] = useState('');

  // Parallax effect for hero
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // Track active section for navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true, margin: '-100px' }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const projects = [
    {
      title: 'EchoLearn',
      tech: 'GPT-4 × ElevenLabs × RAG',
      description: 'AI-powered conversational study assistant with voice synthesis. Implements retrieval-augmented generation and custom embeddings to help students learn through natural conversation.',
    },
    {
      title: 'Spotto AI',
      tech: 'Machine Learning × Sports Analytics × Prediction',
      description: 'NBA player-prop prediction system using gradient boosting, statistical modeling, and curated pipelines. Produces real-time recommendations with 70 percent plus predictive performance in controlled evaluations.',
    },
    {
      title: 'Rezumy',
      tech: 'Automation × NLP × Web Scraping',
      description: 'AI tool for automated resume tailoring and internship submissions. Uses LLMs to rewrite bullet points, adapt resumes to roles, and auto-apply to listings through scraping workflows.',
    },
    {
      title: 'BudBuild',
      tech: 'Team Productivity × Web App',
      description: 'Simple accountability and project-tracking app for engineering students. Tracks daily goals, progress logs, and team updates.',
    },
    {
      title: 'Quant-LLM Trading Bots',
      tech: 'ML × Time-Series × Automation',
      description: 'Experimental trading bots using time-series modeling, feature engineering, and LLM-based signal explanations. Includes backtesting modules and risk constraints.',
    },
    {
      title: 'Ambient Video Generator',
      tech: 'AI × Video Synthesis',
      description: 'Automates creation of multi-hour ambient environments for YouTube. Generates extended visuals and audio using generative models and FFmpeg pipelines.',
    },
  ];

  const skills = {
    'Languages': 'Python, JavaScript/TypeScript, C, Java, R',
    'ML / AI': 'PyTorch, scikit-learn, XGBoost, transformers, RAG, embeddings',
    'Web Dev': 'React, Next.js, Node.js, Tailwind, REST APIs',
    'Data': 'Pandas, NumPy, SQL, Supabase, Postgres',
    'Tools': 'Git, Linux, Docker, Vercel, Jupyter, RStudio',
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Fixed Navigation Indicator */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-black z-50"
        style={{
          width: useTransform(scrollYProgress, [0, 1], ['0%', '100%']),
          scaleX: scrollYProgress
        }}
      />

      {/* Navigation Dots */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-4">
        {['hero', 'about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeSection === section ? 'bg-black scale-150' : 'bg-gray-300 hover:bg-gray-500'
            }`}
            aria-label={`Navigate to ${section}`}
          />
        ))}
      </div>

      {/* Hero Section */}
      <motion.section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-7xl md:text-9xl font-bold mb-6 tracking-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              PRANAV SINGH
            </motion.h1>

            <motion.div
              className="text-xl md:text-2xl mb-8 font-light tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span className="inline-block">Developer</span>
              <span className="mx-4 text-gray-400">/</span>
              <span className="inline-block">Data Scientist</span>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              I build intelligent systems using machine learning, data engineering, and full-stack development.
            </motion.p>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.div
              className="w-6 h-10 border-2 border-black rounded-full flex items-start justify-center p-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <motion.div className="w-1.5 h-1.5 bg-black rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="min-h-screen flex items-center py-24 px-6 bg-black text-white"
        {...fadeInUp}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-12 tracking-tight"
            {...fadeInUp}
          >
            ABOUT
          </motion.h2>

          <motion.div
            className="space-y-6 text-lg md:text-xl leading-relaxed text-gray-300"
            {...fadeInUp}
          >
            <p>
              I'm a Computer Science and Data Science student at the University of Wisconsin–Madison focused on building AI-powered tools. I specialize in machine learning, natural language processing, predictive analytics, and end-to-end software development. My work blends automation, modeling, and real-time systems to create tools that are fast, reliable, and genuinely useful.
            </p>
            <p>
              I'm currently building several AI products and automotive data pipelines while developing strong engineering fundamentals.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className="min-h-screen flex items-center py-24 px-6"
        {...fadeInUp}
      >
        <div className="max-w-5xl mx-auto w-full">
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-16 tracking-tight"
            {...fadeInUp}
          >
            SKILLS
          </motion.h2>

          <motion.div
            className="grid gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
          >
            {Object.entries(skills).map(([category, items]) => (
              <motion.div
                key={category}
                className="border-l-4 border-black pl-6 py-2 hover:border-l-8 transition-all duration-300"
                variants={staggerItem}
              >
                <h3 className="text-xl md:text-2xl font-bold mb-2">{category}</h3>
                <p className="text-gray-600 text-lg">{items}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="min-h-screen py-24 px-6 bg-black text-white"
        {...fadeInUp}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6 tracking-tight"
            {...fadeInUp}
          >
            PROJECTS
          </motion.h2>

          <motion.p
            className="text-xl text-gray-400 mb-16"
            {...fadeInUp}
          >
            SELECTED WORK
          </motion.p>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group border border-gray-800 p-8 hover:border-white transition-all duration-500 relative overflow-hidden"
                variants={staggerItem}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4 font-mono">{project.tech}</p>
                  <p className="text-gray-300 leading-relaxed">{project.description}</p>
                </div>

                {/* Hover effect */}
                <motion.div
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        id="experience"
        className="min-h-screen flex items-center py-24 px-6"
        {...fadeInUp}
      >
        <div className="max-w-4xl mx-auto w-full">
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-16 tracking-tight"
            {...fadeInUp}
          >
            EXPERIENCE
          </motion.h2>

          <motion.div
            className="space-y-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.div variants={staggerItem} className="border-l-4 border-black pl-8 py-2">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">Software / AI Projects (Independent)</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Built production-ready AI systems and full-stack apps, including voice-based learning assistants, modeling pipelines, and automated tools for sports analytics and resume processing. Experienced with prompt engineering, embedding databases, and deploying ML services.
              </p>
            </motion.div>

            <motion.div variants={staggerItem} className="border-l-4 border-black pl-8 py-2">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">UW–Madison Coursework</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                CS 400 (Data Structures), CS 354 (Machine Organization), CS 540 (Artificial Intelligence), STAT 340 (Data Modeling), STAT 240, linear algebra modules, probability/statistics modules. Strong base in algorithms, ML fundamentals, and low-level computing.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="min-h-screen flex items-center justify-center py-24 px-6 bg-black text-white"
        {...fadeInUp}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-8 tracking-tight"
            {...fadeInUp}
          >
            CONTACT
          </motion.h2>

          <motion.a
            href="mailto:psingh@wisc.edu"
            className="inline-block text-3xl md:text-5xl font-light mb-12 hover:text-gray-400 transition-colors duration-300 border-b-2 border-white hover:border-gray-400"
            {...fadeInUp}
            whileHover={{ scale: 1.05 }}
          >
            psingh@wisc.edu
          </motion.a>

          <motion.p
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            {...fadeInUp}
          >
            Available for collaboration, internships, and engineering roles.
          </motion.p>

          {/* Footer */}
          <motion.div
            className="mt-24 pt-12 border-t border-gray-800"
            {...fadeInUp}
          >
            <p className="text-gray-500 text-sm">
              © 2025 Pranav Singh. Designed & Built with React + Framer Motion.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

export default App;
