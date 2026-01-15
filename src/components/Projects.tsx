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
      transition: { duration: 2.0, ease: [0.16, 1, 0.3, 1] } 
    },
    exit: { opacity: 0, scale: 0.95, y: 10, transition: { duration: 0.8 } }
  };

  const projects = [
    {
      id: 1,
      title: 'DataPulse',
      category: 'fullstack',
      description: 'Tracks how data evolves across versions and flags schema or structural changes before they cause issues.',
      tech: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Celery', 'Redis', 'Docker'],
      github: 'coming soon', 
      demo: 'https://data-pulse-eight.vercel.app',   
      images: ['/images/dp1.png', '/images/dp2.png'],
      timeline: 'July 2025 - present',
      status: 'Production-deployed, actively developed',
    },
    {
      id: 2,
      title: 'Justice Genie',
      category: 'AI',
      description: 'Built to help people understand legal concepts through simple explanations, quizzes, and case-based examples.',
      tech: ["React", "Flask", "MongoDB", "Google GenAI", "Chart.js"],
      github: 'https://github.com/subhash-22-codes/Justice-Genie',
      demo: 'https://justice-genie-mu.vercel.app',
      images: ['/images/jg1.png', '/images/jg4.png'],
      timeline: 'Mar 2024 to Oct 2024',
      status: 'Live · Maintenance'
    },
    {
      id: 3,
      title: 'MemeGame',
      category: 'game',
      description: 'A real-time multiplayer game where players compete using memes, with live rounds, judges, and scoring.',
      tech: ['React', 'Socket.io', 'Flask', 'MongoDB',  'Redis', 'Zustand'],
      github: 'https://github.com/subhash-22-codes/MemeGame',
      demo: '',
      images: ['/images/meme1.png', '/images/meme3.png','/images/meme5.png','/images/meme12.png','/images/meme15.png','/images/meme16.png'],
      timeline: 'Jan 2025 to May 2025',
      status: 'Near release',
    },
   {
      id: 4,
      title: 'GTech DSA Series',
      category: 'Web',
      description: 'A structured DSA learning site focused on problem patterns and clear explanations for interview prep.',
      tech: ["React", "Tailwind CSS", "Lucide Icons", "Jest"],
      github: 'https://github.com/subhash-22-codes/Dsa_Placement_series',
      demo: 'https://gtechdsa.netlify.app',
      images: ['/images/gtech1.png', '/images/gtech2.png'],
      timeline: 'Nov 2024 - Dec 2024',
      status: 'Content expanding',
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
                {/* META ROW */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/20">
                    0{idx + 1} //
                  </span>

                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/70">
                    {project.category}
                  </span>

                  <span className="font-mono text-[10px] text-white/20">·</span>

                  <span className="font-mono text-[10px] tracking-widest text-white/40">
                    {project.timeline}
                  </span>

                  <span className="font-mono text-[10px] text-white/20">·</span>

                 <span className="font-mono text-[10px] uppercase tracking-widest text-white/60">
                    {project.status}
                  </span>

                </div>

                <h3 className="font-serif text-5xl md:text-7xl tracking-tighter text-white/90">
                  {project.title}
                </h3>

                <p className="font-sans text-lg text-white/40 leading-relaxed max-w-xl">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span
                      key={t}
                      className="text-[9px] font-mono bg-white/[0.03] border border-white/10 px-3 py-1.5 rounded-sm text-white/50 tracking-wider"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* LINKS */}
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