import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, Globe, Database, Settings, CheckCircle2 
} from 'lucide-react';

// --- ASSET IMPORTS PRESERVED ---
import reactIcon from '../assets/skills/react.png';
import tsIcon from '../assets/skills/typescript.png';
import jsIcon from '../assets/skills/javascript.png';
import tailwindIcon from '../assets/skills/tailwindcss.png';
import viteIcon from '../assets/skills/vite.png';
import htmlIcon from '../assets/skills/html5.png';
import flaskIcon from '../assets/skills/Flask.png';
import pythonIcon from '../assets/skills/Python.png';
import javaIcon from '../assets/skills/Java.png';
import fastapiIcon from '../assets/skills/FastAPI.png';
import postmanIcon from '../assets/skills/Postman.png';
import celeryIcon from '../assets/skills/celery.png';
import mongoIcon from '../assets/skills/MongoDB.png';
import postgresIcon from '../assets/skills/PostgresSQL.png';
import redisIcon from '../assets/skills/Redis.png';
import gitIcon from '../assets/skills/gitlogo.png';
import dockerIcon from '../assets/skills/dockermain.png';
import pytestIcon from '../assets/skills/pytest.png';
import jestIcon from '../assets/skills/Jest.png';
import locustIcon from '../assets/skills/Locust.png';

const Skills: React.FC = () => {
  // THE CINEMATIC DRIFT (2.2s Weighted - Pure & Slow)
  const driftLeft = {
    initial: { opacity: 0, x: -40 },
    whileInView: { 
      opacity: 1, x: 0, 
      transition: { duration: 2.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 } 
    }
  };

  // RIGHT SIDE: Increased delay to 0.8s for the "Left then Right" sequence
  const driftRight = {
    initial: { opacity: 0, x: 40 },
    whileInView: { 
      opacity: 1, x: 0, 
      transition: { duration: 2.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 } 
    }
  };

   const revealScale = {
    initial: { opacity: 0, scale: 0.95, y: 20 },
    whileInView: { 
      opacity: 1, scale: 1, y: 0, 
      transition: { duration: 2.0, ease: [0.16, 1, 0.3, 1] } 
    },
    exit: { opacity: 0, scale: 0.95, y: 10, transition: { duration: 0.8 } }
  };

    const skillGroups = [
    { 
      title: 'Frontend', 
      icon: <Globe size={18} strokeWidth={1.5} />, 
      skills: [
        { name: 'React', icon: reactIcon },
        { name: 'TypeScript', icon: tsIcon },
        { name: 'JavaScript', icon: jsIcon },
        { name: 'Tailwind', icon: tailwindIcon },
        { name: 'Vite', icon: viteIcon },
        { name: 'HTML5/CSS3', icon: htmlIcon }
      ]
    },
    { 
      title: 'Backend', 
      icon: <Cpu size={18} strokeWidth={1.5} />, 
      skills: [
        { name: 'Python', icon: pythonIcon },
        { name: 'FastAPI', icon: fastapiIcon },
        { name: 'Flask', icon: flaskIcon },
        { name: 'Java', icon: javaIcon },
        { name: 'Celery', icon: celeryIcon }
      ]
    },
    { 
      title: 'Databases', 
      icon: <Database size={18} strokeWidth={1.5} />, 
      skills: [
        { name: 'PostgreSQL', icon: postgresIcon },
        { name: 'MongoDB', icon: mongoIcon },
        { name: 'Redis', icon: redisIcon }
      ]
    },
    { 
      title: 'Tooling', 
      icon: <Settings size={18} strokeWidth={1.5} />, 
      skills: [
        { name: 'Docker', icon: dockerIcon },
        { name: 'Git', icon: gitIcon },
        { name: 'Postman', icon: postmanIcon }
      ]
    },
    { 
      title: 'Testing', 
      icon: <CheckCircle2 size={18} strokeWidth={1.5} />, 
      skills: [
        { name: 'PyTest', icon: pytestIcon },
        { name: 'Jest', icon: jestIcon },
        { name: 'Locust', icon: locustIcon }
      ]
    }
  ];

  return (
    <section id="skills" className="relative bg-[#0a0a0a] text-white py-24 md:py-48 overflow-hidden px-6 md:px-20">
      {/* Texture Layer */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER */}
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
                            <span className="font-sans text-[11px] tracking-[0.4em] uppercase text-white/50">Toolkit</span>
                          </div>
                          <h2 className="font-serif text-7xl md:text-9xl tracking-tightest leading-none">
                            My <span className="text-white/30 italic">skills.</span>
                          </h2>
          </motion.div>

        {/* THE SKILLS LEDGER */}
  
<div className="space-y-12 sm:space-y-16 md:space-y-24">
  {skillGroups.map((group, groupIdx) => (
    <div key={groupIdx} className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center border-t border-white/5 pt-12 sm:pt-16 group/row relative">
      <div className="absolute inset-0 bg-white/[0.01] opacity-0 group-hover/row:opacity-100 transition-opacity duration-1000 -mx-6 sm:-mx-10" />

      {/* LEFT */}
      <motion.div variants={driftLeft} initial="initial" whileInView="whileInView" viewport={{ once: false, amount: 0.5 }} className="lg:col-span-4 flex items-center gap-4 sm:gap-8 relative z-10">
        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/20 group-hover/row:text-white group-hover/row:border-white/30 transition-all duration-700">
          {group.icon}
        </div>
        <div>
          <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl tracking-tight text-white/90">{group.title}</h3>
        </div>
      </motion.div>

      {/* RIGHT */}
      <motion.div variants={driftRight} initial="initial" whileInView="whileInView" viewport={{ once: false, amount: 0.5 }} className="lg:col-span-8 flex flex-wrap gap-2 sm:gap-3 md:gap-5 relative z-10">
        {group.skills.map((skill, skillIdx) => (
          <div key={skillIdx} className="flex items-center gap-2 sm:gap-3 px-3 py-2 sm:px-5 sm:py-3 rounded-lg sm:rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all duration-700 group/badge cursor-default">
            <img src={skill.icon} alt={skill.name} className="w-4 h-4 sm:w-5 sm:h-5 object-contain filter grayscale group-hover/badge:grayscale-0 transition-all duration-500" />
            <span className="font-sans text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/40 group-hover/badge:text-white transition-colors">
              {skill.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  ))}
</div>


      </div>
    </section>
  );
};

export default Skills;