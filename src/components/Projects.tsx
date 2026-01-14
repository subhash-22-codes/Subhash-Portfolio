import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const [imgIndex, setImgIndex] = useState<Record<number, number>>({});

  // CUSTOM CINEMATIC ANIMATIONS (2.2s Weighted Glide)
  const driftLeft = {
    initial: { opacity: 0, x: -50 },
    whileInView: { 
      opacity: 1, x: 0, 
      transition: { duration: 2.2, ease: [0.16, 1, 0.3, 1] } 
    },
    exit: { opacity: 0, x: -20, transition: { duration: 0.8 } }
  };

  const driftRight = {
    initial: { opacity: 0, x: 50 },
    whileInView: { 
      opacity: 1, x: 0, 
      transition: { duration: 2.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 } 
    },
    exit: { opacity: 0, x: 20, transition: { duration: 0.8 } }
  };

  const revealScale = {
    initial: { opacity: 0, scale: 0.95, y: 20 },
    whileInView: { 
      opacity: 1, scale: 1, y: 0, 
      transition: { duration: 3.0, ease: [0.16, 1, 0.3, 1] } 
    },
    exit: { opacity: 0, scale: 0.95, y: 10, transition: { duration: 0.8 } }
  };

  const projects = [
    {
      id: 1,
      title: 'DataPulse',
      category: 'fullstack',
      description: "Enterprise-grade real-time telemetry and visualization engine. Supports multiple data sources with real-time alerts and modular workspace systems.",
      tech: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Celery", "Redis"],
      github: 'coming soon', 
      demo: 'https://data-pulse-eight.vercel.app',   
      images: ['/images/dp1.png', '/images/dp2.png'],
    },
    {
      id: 2,
      title: 'Justice Genie',
      category: 'AI',
      description: "AI-powered legal assistance platform providing real-time answers, legal quizzes, and case-based insights using multilingual NLP.",
      tech: ["React", "Flask", "MongoDB", "Google GenAI", "Chart.js"],
      github: 'https://github.com/subhash-22-codes/Justice-Genie',
      demo: 'https://justice-genie-mu.vercel.app',
      images: ['/images/jg2.png', '/images/jg3.png'],
    },
    {
      id: 3,
      title: 'MemeGame',
      category: 'game',
      description: "Real-time multiplayer meme challenge engine. Features rotating judges, dynamic scoring, and JWT-secured pipelines.",
      tech: ["React", "Socket.io", "Node.js", "MongoDB", "Zustand"],
      github: 'https://github.com/subhash-22-codes/MemeGame',
      demo: '',
      images: ['/images/meme1.png', '/images/meme2.png'],
    },
    {
      id: 4,
      title: 'GTech DSA Series',
      category: 'Web',
      description: "Educational distribution platform supporting 5k+ learners with 30+ structured LeetCode patterns.",
      tech: ["React", "Tailwind CSS", "Lucide Icons", "Jest"],
      github: 'https://github.com/subhash-22-codes/Dsa_Placement_series',
      demo: 'https://gtechdsa.netlify.app',
      images: ['/images/gtech1.png', '/images/gtech2.png'],
    },
  ];

  const handleNextImg = (projectId: number, total: number) => {
    setImgIndex(prev => ({ ...prev, [projectId]: ((prev[projectId] || 0) + 1) % total }));
  };

  return (
    <section id="projects" className="relative bg-[#0a0a0a] text-white py-24 md:py-32 overflow-hidden px-6 md:px-20">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* SECTION HEADER: Removed 'Portfolio' label as requested */}
        <motion.div 
                  variants={revealScale}
                  initial="initial"
                  whileInView="whileInView"
                  exit="exit"
                  viewport={{ once: false, amount: 0.2 }}
                  className="mb-20"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="w-12 h-[1px] bg-white/20"></span>
                    <span className="font-sans text-[11px] tracking-[0.4em] uppercase text-white/50">The work</span>
                  </div>
                  <h2 className="font-serif text-7xl md:text-9xl tracking-tightest leading-none">
                    Selected <span className="text-white/30 italic">Projects.</span>
                  </h2>
                </motion.div>

        {/* PROJECT LIST: Tighter Spacing (space-y-32) */}
        <div className="space-y-32">
          {projects.map((project, idx) => (
            <div key={project.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* LEFT: CONTENT (Drifting from Left) */}
              <motion.div 
                variants={driftLeft}
                initial="initial"
                whileInView="whileInView"
                exit="exit"
                viewport={{ once: false, amount: 0.2 }}
                className="lg:col-span-6 space-y-8 order-2 lg:order-1"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/20">0{idx + 1} //</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/60">{project.category}</span>
                </div>

                <h3 className="font-serif text-5xl md:text-7xl tracking-tighter text-white/90">
                  {project.title}
                </h3>

                <p className="font-sans text-lg text-white/40 leading-relaxed max-w-xl">
                  {project.description}
                </p>

                {/* TECH STACK: Restored with detailed borders */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-[9px] font-mono bg-white/[0.03] border border-white/10 px-3 py-1.5 rounded-sm text-white/50 tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>

                {/* LINKS: Restored original circular and pill styles */}
                <div className="flex items-center gap-4 pt-4">
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="px-8 h-12 rounded-full bg-white text-black font-sans text-[10px] font-bold tracking-widest flex items-center gap-2 hover:bg-zinc-200 transition-all duration-500"
                    >
                      Live link <ExternalLink size={14} />
                    </a>
                  )}
                  {project.github && project.github !== 'coming soon' && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:bg-white hover:text-black hover:border-white transition-all duration-500"
                    >
                      <Github size={18} strokeWidth={1.5} />
                    </a>
                  )}
                </div>
              </motion.div>

              {/* RIGHT: REFINED IMAGE BOX (Reduced Size to lg:col-span-5) */}
              <motion.div
              variants={driftRight}
              initial="initial"
              whileInView="whileInView"
              exit="exit"
              viewport={{ once: false, amount: 0.2 }}
              className="lg:col-span-5 lg:col-start-8 order-1 lg:order-2 flex justify-center"
            >
              <div
                onClick={() => handleNextImg(project.id, project.images.length)}
                className="
                  relative
                  aspect-square md:aspect-video
                  w-[88%] sm:w-[80%] md:w-full
                  scale-[0.9] sm:scale-100
                  rounded-[1.25rem] lg:rounded-[2rem]
                  overflow-hidden
                  bg-white/5
                  border border-white/10
                  cursor-pointer
                  group/img
                  shadow-2xl
                "
              >
                <img
                  src={project.images[imgIndex[project.id] || 0]}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover/img:opacity-100 group-hover/img:scale-105 transition-all duration-[2.2s] ease-[0.16,1,0.3,1]"
                />

                <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full font-mono text-[8px] sm:text-[9px] tracking-[0.2em] text-white/60">
                  <span className="text-white font-bold">{imgIndex[project.id] + 1 || 1}</span>
                  <span className="opacity-20">/</span>
                  <span>{project.images.length}</span>
                </div>
              </div>
            </motion.div>


            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;