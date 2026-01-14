import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  // PREMIUM MOTION: Slower durations (1.8s - 2.0s) for the "Weighted" feel
  const revealLeft = {
    initial: { opacity: 0, x: -40 },
    whileInView: { 
      opacity: 1, x: 0, 
      transition: { duration: 2.0, ease: [0.16, 1, 0.3, 1], delay: 0.2 } 
    },
    exit: { opacity: 0, x: -20, transition: { duration: 0.8 } }
  };

  const revealRight = {
    initial: { opacity: 0, x: 40 },
    whileInView: { 
      opacity: 1, x: 0, 
      transition: { duration: 2.0, ease: [0.16, 1, 0.3, 1], delay: 0.4 } 
    },
    exit: { opacity: 0, x: 20, transition: { duration: 0.8 } }
  };

  const revealUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { 
      opacity: 1, y: 0, 
      transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] } 
    },
    exit: { opacity: 0, y: 20, transition: { duration: 0.8 } }
  };

  const revealScale = {
    initial: { opacity: 0, scale: 0.95, y: 20 },
    whileInView: { 
      opacity: 1, scale: 1, y: 0, 
      transition: { duration: 2.0, ease: [0.16, 1, 0.3, 1] } 
    },
    exit: { opacity: 0, scale: 0.95, y: 10, transition: { duration: 0.8 } }
  };

  const techStack = [
    { category: "The Engine", details: "Python (FastAPI / Django), SQL Optimization" },
    { category: "The Interface", details: "React + Vite, TypeScript, Tailwind CSS" },
    { category: "Data Architecture", details: "PostgreSQL, MongoDB, Schema Design" },
    { category: "Logic", details: "Distributed Systems & API Design" }
  ];

  return (
   <section id="about" className="relative bg-[#0a0a0a] text-white overflow-hidden px-6 md:px-16 py-12 md:py-24">
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* SECTION HEADER: Deep Scale Reveal */}
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
            <span className="font-sans text-[11px] tracking-[0.4em] uppercase text-white/50">My Journey</span>
          </div>
          <h2 className="font-serif text-7xl md:text-9xl tracking-tightest leading-none">
            About <span className="text-white/30 italic">Me.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: THE STORY (Weighted Slide from Left) */}
          <motion.div 
            variants={revealLeft}
            initial="initial"
            whileInView="whileInView"
            exit="exit"
            viewport={{ once: false, amount: 0.2 }}
            className="lg:col-span-7 space-y-12"
          >
            <div className="space-y-6">
              <h3 className="font-sans text-2xl md:text-3xl font-medium text-white">
                I'm a student who loves building the parts of apps you <span className="italic font-serif text-white/50 text-4xl">don't see</span>.
              </h3>
              <p className="font-sans text-lg text-white/50 leading-relaxed max-w-2xl">
                Currently finishing my degree at <span className="text-white underline decoration-white/20 underline-offset-4">Malla Reddy College of Engineering & Technology</span>. 
                I focus on making sure the "engine" of a website is fast, secure, and ready to grow. I don't just write code; I design systems that solve real problems.
              </p>
            </div>

            {/* TECH STACK LIST: Each item slowly rising */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/10">
              {techStack.map((item, index) => (
                <motion.div 
                  key={index} 
                  variants={revealUp}
                  initial="initial"
                  whileInView="whileInView"
                  exit="exit"
                  viewport={{ once: false }}
                  transition={{ delay: 0.5 + (index * 0.15) }} // Delayed start to follow the bio
                  className="space-y-2 group"
                >
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/30 group-hover:text-white/60 transition-colors">
                    {item.category}
                  </span>
                  <p className="font-sans text-white/80 font-medium">
                    {item.details}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN: THE LEDGER (Human-Centric & Minimalist) */}
<div className="lg:col-span-5 self-center">
  <div className="space-y-20 md:pl-12">
    
    {/* 1. EDUCATION & PERFORMANCE */}
    <motion.div 
      variants={revealRight}
      initial="initial"
      whileInView="whileInView"
      exit="exit"
      viewport={{ once: false, amount: 0.2 }}
      className="relative"
    >
      {/* The Single Vertical Accent Line */}
      <div className="absolute -left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/20 via-transparent to-transparent" />
      
      <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-white/30 block mb-6">
        Education
      </span>
      
      <div className="space-y-2">
        <h4 className="font-sans text-2xl md:text-3xl font-light tracking-tight text-white/90">
          Computer Science & Engineering
        </h4>
        <p className="font-serif italic text-white/40 text-lg">
          Malla Reddy College of Engineering & Technology• Class of 2026
        </p>
      </div>

      <div className="mt-12 flex items-end gap-8">
        <div>
          <p className="text-[9px] font-sans uppercase tracking-[0.3em] text-white/20 mb-3">Academic Result</p>
          <div className="flex items-baseline gap-2">
            <p className="text-6xl md:text-7xl font-serif italic text-white tracking-tighter">9.00</p>
            <span className="text-white/20 font-sans text-xs mb-2">CGPA</span>
          </div>
        </div>
        
        <div className="mb-2">
          <p className="text-[9px] font-sans uppercase tracking-[0.3em] text-white/20 mb-2">Current Focus</p>
          <p className="text-xs font-sans font-bold uppercase tracking-[0.15em] text-emerald-400/80 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Active Student
          </p>
        </div>
      </div>
    </motion.div>

    {/* 2. PHILOSOPHY & NAVIGATION */}
    <motion.div 
      variants={revealRight}
      initial="initial"
      whileInView="whileInView"
      exit="exit"
      viewport={{ once: false, amount: 0.2 }}
      transition={{ delay: 0.6 }}
      className="relative"
    >
      <div className="absolute -left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-white/20 via-transparent to-transparent" />
      
      <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-white/30 block mb-6">
        My Approach
      </span>
      
      <h4 className="font-serif text-4xl md:text-5xl leading-[1.2] tracking-tightest mb-10 text-white/90">
        Building apps that <br /> 
        <span className="text-white/30 italic font-light">actually matter.</span>
      </h4>

      <button 
  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
  className="group relative flex items-center gap-6 bg-transparent border-none p-0 cursor-pointer outline-none"
>
  {/* THE TEXT: Clean, Bold, and Approachable */}
  <div className="flex flex-col items-start overflow-hidden">
    <span className="font-sans text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 group-hover:text-white transition-all duration-700 ease-[0.16, 1, 0.3, 1]">
      See what I’ve built
    </span>
    
    {/* THE MAGIC LINE: A soft, elegant glide that an HR would love */}
    <div className="mt-3 relative w-12 h-[1px] bg-white/10 group-hover:w-24 transition-all duration-1000 ease-[0.16, 1, 0.3, 1]">
      {/* This creates a soft 'shimmer' that moves across the line on hover */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />
    </div>
  </div>

  {/* THE ICON: A simple, minimal arrow that 'floats' into place */}
  <motion.div
    className="text-white/20 group-hover:text-white transition-colors duration-700"
    whileHover={{ x: 8 }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
  >
    <ArrowRight size={18} strokeWidth={1} />
  </motion.div>
</button>
    </motion.div>

  </div>
</div>
        </div>
      </div>

      {/* Aesthetic Detail (Fades in from left very slowly) */}
      <motion.div 
        variants={revealLeft}
        initial="initial"
        whileInView="whileInView"
        exit="exit"
        viewport={{ once: false }}
        transition={{ delay: 1.2 }}
        className="absolute left-12 bottom-12 hidden lg:block opacity-20"
      >
        <p className="font-mono text-[9px] tracking-[0.5em] uppercase text-white origin-left whitespace-nowrap">
          Curious — Persistent — Focused
        </p>
      </motion.div>
    </section>
  );
};

export default About;