import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, 
  Cpu, 
  Globe, 
  Database, 
  Settings, 
  CheckCircle2, 
  Layers, 
  Code2
} from 'lucide-react';

// --- ASSET IMPORTS (Preserved) ---
import reactIcon from '../assets/skills/react.png';
import tsIcon from '../assets/skills/typescript.png';
import jsIcon from '../assets/skills/javascript.png';
import tailwindIcon from '../assets/skills/tailwindcss.png';
import viteIcon from '../assets/skills/vite.png';
import htmlIcon from '../assets/skills/html5.png';
import cssIcon from '../assets/skills/css3.png';

import flaskIcon from '../assets/skills/Flask.png';
import pythonIcon from '../assets/skills/Python.png';
import javaIcon from '../assets/skills/Java.png';
import fastapiIcon from '../assets/skills/FastAPI.png';
import postmanIcon from '../assets/skills/Postman.png';
import nodejsIcon from '../assets/skills/nodejs.png';
import celeryIcon from '../assets/skills/celery.png';

import mongoIcon from '../assets/skills/MongoDB.png';
import postgresIcon from '../assets/skills/PostgresSQL.png';
import redisIcon from '../assets/skills/Redis.png';

import gitIcon from '../assets/skills/gitlogo.png';
import netlifyIcon from '../assets/skills/netlify.png';
import dockerIcon from '../assets/skills/dockermain.png';
import awsIcon from '../assets/skills/aws.png';
import figmaIcon from '../assets/skills/figma.png';

import pytestIcon from '../assets/skills/pytest.png';
import jestIcon from '../assets/skills/Jest.png';
import locustIcon from '../assets/skills/Locust.png';

interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'testing';
  icon: string;
  level: number;
  color: string;
}

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { key: 'all', name: 'ALL_MODULES', icon: Terminal },
    { key: 'frontend', name: 'UI_ENGINE', icon: Globe },
    { key: 'backend', name: 'SERVER_LOGIC', icon: Cpu },
    { key: 'database', name: 'DATA_CORE', icon: Database },
    { key: 'tools', name: 'DEVOPS', icon: Settings },
    { key: 'testing', name: 'QA_SUITE', icon: CheckCircle2 }
  ];

  const skillData: Skill[] = [
    // Frontend
    { name: 'React', category: 'frontend', icon: reactIcon, level: 89, color: '#61DAFB' },
    { name: 'TypeScript', category: 'frontend', icon: tsIcon, level: 78, color: '#3178C6' },
    { name: 'JavaScript', category: 'frontend', icon: jsIcon, level: 80, color: '#F7DF1E' },
    { name: 'Tailwind CSS', category: 'frontend', icon: tailwindIcon, level: 81, color: '#06B6D4' },
    { name: 'Vite', category: 'frontend', icon: viteIcon, level: 80, color: '#646CFF' },
    { name: 'HTML5', category: 'frontend', icon: htmlIcon, level: 91, color: '#E34F26' },
    { name: 'CSS3', category: 'frontend', icon: cssIcon, level: 87, color: '#1572B6' },
    // Backend
    { name: 'Flask', category: 'backend', icon: flaskIcon, level: 82, color: '#ffffff' },
    { name: 'FastAPI', category: 'backend', icon: fastapiIcon, level: 78, color: '#009688' },
    { name: 'Python', category: 'backend', icon: pythonIcon, level: 85, color: '#3776AB' },
    { name: 'Java', category: 'backend', icon: javaIcon, level: 75, color: '#007396' },
    { name: 'Postman', category: 'backend', icon: postmanIcon, level: 75, color: '#FF6C37' },
    { name: 'Node.js', category: 'backend', icon: nodejsIcon, level: 80, color: '#339933' },
    { name: 'Celery', category: 'backend', icon: celeryIcon, level: 70, color: '#379683' },
    // Database
    { name: 'MongoDB', category: 'database', icon: mongoIcon, level: 82, color: '#47A248' },
    { name: 'PostgreSQL', category: 'database', icon: postgresIcon, level: 78, color: '#336791' },
    { name: 'Redis', category: 'database', icon: redisIcon, level: 70, color: '#DC382D' },
    // Tools
    { name: 'Git', category: 'tools', icon: gitIcon, level: 84, color: '#F05032' },
    { name: 'Netlify', category: 'tools', icon: netlifyIcon, level: 80, color: '#00C7B7' },
    { name: 'Docker', category: 'tools', icon: dockerIcon, level: 71, color: '#2496ED' },
    { name: 'AWS', category: 'tools', icon: awsIcon, level: 63, color: '#FF9900' },
    { name: 'Figma', category: 'tools', icon: figmaIcon, level: 55, color: '#F24E1E' },
    // Testing
    { name: 'PyTest', category: 'testing', icon: pytestIcon, level: 75, color: '#4B8BBE' },
    { name: 'Jest', category: 'testing', icon: jestIcon, level: 70, color: '#C21325' },
    { name: 'Locust', category: 'testing', icon: locustIcon, level: 60, color: '#2E9A4C' },
  ];

  const filteredSkills = activeCategory === 'all'
    ? skillData
    : skillData.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="relative min-h-screen bg-[#020202] text-[#fdfdfd] py-12 lg:py-24 overflow-hidden selection:bg-emerald-500/30">
      
      {/* Background Grid (Matched to other sections) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem] lg:bg-[size:6rem_6rem] pointer-events-none" />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-24 relative z-10">
        
        {/* HEADER: System Check Style */}
        <div className="mb-16 lg:mb-24 space-y-4 border-l-2 border-zinc-900 pl-6 md:pl-10">
          <motion.div 
             initial={{ opacity: 0, x: -10 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="flex items-center gap-2 text-emerald-500 font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em]"
          >
             <Layers size={14} />
             <span>System_Dependencies</span>
          </motion.div>

          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter uppercase leading-[0.85] text-white opacity-90">
             Skill<span className="text-zinc-800">.</span>Matrix
          </h2>
        </div>

        {/* TABS: Filter Engine */}
        <div className="flex flex-wrap gap-2 mb-10 lg:mb-12 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map(({ key, name, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-mono text-[10px] sm:text-xs uppercase tracking-widest transition-all whitespace-nowrap border ${
                activeCategory === key
                  ? 'bg-white text-black border-white'
                  : 'bg-[#0a0a0a] text-zinc-500 border-zinc-800 hover:border-zinc-700 hover:text-zinc-300'
              }`}
            >
              <Icon size={14} />
              {name}
            </button>
          ))}
        </div>

        {/* GRID: Performance Optimized Module Layout */}
        <motion.div 
          layout 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="group relative bg-[#080808] border border-zinc-900 rounded-3xl p-6 hover:border-zinc-600 transition-colors duration-500 cursor-default flex flex-col items-center justify-between gap-6 overflow-hidden"
              >
                {/* 1. Icon Container (Grayscale to Color on Hover) */}
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-zinc-900/50 rounded-2xl border border-zinc-800 group-hover:border-zinc-700 transition-all duration-300">
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    loading="lazy"
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"
                  />
                </div>

                {/* 2. Text & Progress */}
                <div className="w-full text-center space-y-3 z-10">
                  <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-wider group-hover:text-white transition-colors duration-300">
                    {skill.name}
                  </h3>
                  
                  {/* Minimalist Progress Bar */}
                  <div className="w-full bg-zinc-900 h-1.5 rounded-full overflow-hidden border border-zinc-800/50">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-zinc-600 group-hover:bg-emerald-500 transition-colors duration-500" 
                    />
                  </div>
                  
                  <div className="flex justify-between w-full px-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-[9px] font-mono text-zinc-600 uppercase">Proficiency</span>
                      <span className="text-[9px] font-mono text-emerald-500">{skill.level}%</span>
                  </div>
                </div>

                {/* Subtle Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* FOOTER: Status Line */}
        <div className="mt-16 lg:mt-24 border-t border-zinc-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-zinc-600 font-mono text-[10px] uppercase tracking-[0.2em]">
            <div className="flex items-center gap-2">
              <Code2 size={14} />
              <span>Modules_Loaded: {skillData.length}</span>
            </div>
            <div className="hidden sm:block">
               System_Ready
            </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;