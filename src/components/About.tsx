import React from 'react';
import { motion } from 'framer-motion';
import { 
  Fingerprint, 
  Cpu, 
  Database, 
  Layers, 
  CheckCircle2, 
  GraduationCap,
  ArrowUpRight 
} from 'lucide-react';

const About: React.FC = () => {
  // Engineering Profile Data
  const techStack = [
    { category: "Back_End", details: "Python (FastAPI / Django), SQL Optimization" },
    { category: "Front_End", details: "React + Vite, TypeScript, Tailwind CSS" },
    { category: "Data_Systems", details: "PostgreSQL, MongoDB, Schema Design" },
    { category: "Architecture", details: "Distributed Systems & API Logic" }
  ];

  return (
    <section id="about" className="relative min-h-screen bg-[#020202] text-[#fdfdfd] selection:bg-zinc-500/30 py-12 lg:py-24 overflow-hidden">
      
      {/* 1. Structural Engineering Grid (EXACT MATCH TO HERO) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem] lg:bg-[size:6rem_6rem] pointer-events-none" />

      {/* Container aligned exactly with Hero for seamless scroll */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-24 relative z-10">
        
        {/* HEADER: Professional Identity */}
        <div className="mb-12 lg:mb-20 space-y-4 border-l-2 border-zinc-900 pl-6 md:pl-10">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <Fingerprint size={16} className="text-zinc-500" />
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-zinc-600">Identity_Ref: 2026_GRAD</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter text-white leading-[0.9] uppercase"
          >
            About<span className="text-zinc-800">.</span>Me
          </motion.h2>
        </div>

        {/* FLUID BENTO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* A. PRIMARY PROFILE (Academic Excellence) */}
          <motion.div 
            className="lg:col-span-8 bg-[#080808] border border-zinc-900 rounded-3xl sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-14 hover:border-zinc-800 transition-colors duration-500 flex flex-col justify-between group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8 sm:space-y-12">
              {/* Header Flex: College + GPA */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-10">
                <div className="space-y-3 sm:space-y-4 flex-1">
                  <div className="flex items-center gap-3 text-zinc-500">
                    <GraduationCap size={22} className="text-zinc-400" />
                    <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-zinc-500 line-clamp-1">
                      Malla Reddy College of Eng. & Tech
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                    B.Tech in Computer Science
                  </h3>
                  <div className="inline-block px-3 py-1 bg-zinc-900/50 rounded-full border border-zinc-800/50">
                     <p className="text-zinc-400 font-mono text-[10px] sm:text-xs uppercase tracking-wide">Expected: 2026</p>
                  </div>
                </div>
                
                {/* GPA Display - Consistent with Hero Visuals */}
                <div className="w-full md:w-auto bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 p-6 sm:p-8 rounded-2xl sm:rounded-3xl flex flex-col items-center justify-center shadow-2xl relative overflow-hidden group-hover:border-zinc-700 transition-colors">
                  <div className="absolute top-0 right-0 p-3 opacity-20">
                     <CheckCircle2 size={40} />
                  </div>
                  <span className="text-zinc-500 text-[9px] uppercase tracking-[0.2em] mb-1">Cumulative_GPA</span>
                  <span className="text-white font-mono font-bold text-4xl sm:text-5xl tracking-tighter">9.03</span>
                </div>
              </div>

              {/* Bio Description */}
              <p className="text-zinc-400 text-lg sm:text-xl lg:text-2xl leading-relaxed font-medium tracking-tight max-w-4xl border-l-2 border-zinc-800 pl-6">
                I specialize in <span className="text-zinc-100">Pythonic backend architectures</span> and high-performance React systems. 
                My focus is building <span className="text-zinc-100">scalable data logic</span> that translates into seamless, 
                performant user experiences.
              </p>
            </div>

            {/* Competency Table */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 pt-12 mt-12 border-t border-zinc-900">
              {techStack.map((spec, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2 size={14} className="text-emerald-500/80" />
                    <span className="text-[10px] font-mono uppercase text-zinc-600 tracking-widest">{spec.category}</span>
                  </div>
                  <div className="text-zinc-300 font-medium text-sm sm:text-base leading-snug">{spec.details}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* B. TECHNICAL FOCUS & CTA (Side Column) */}
          <div className="lg:col-span-4 grid grid-cols-1 gap-6 lg:gap-8 h-full">
            
            {/* Logic Card */}
            <motion.div 
              className="bg-[#080808] border border-zinc-900 rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-10 flex flex-col justify-between hover:border-zinc-700 transition-all h-full min-h-[300px]"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="space-y-8">
                <div className="flex items-center gap-3 text-zinc-600">
                  <Database size={18} />
                  <span className="font-mono text-[10px] uppercase tracking-widest">Logic_Specialization</span>
                </div>
                
                <div className="space-y-8">
                  <div className="group cursor-default">
                    <h5 className="text-white font-bold text-lg sm:text-xl group-hover:text-zinc-400 transition-colors tracking-tight">Backend Architecture</h5>
                    <p className="text-[11px] text-zinc-600 font-mono uppercase mt-2">Scalable Systems & API Design</p>
                  </div>
                  <div className="w-12 h-[1px] bg-zinc-800" />
                  <div className="group cursor-default">
                    <h5 className="text-white font-bold text-lg sm:text-xl group-hover:text-zinc-400 transition-colors tracking-tight">Full Stack Flow</h5>
                    <p className="text-[11px] text-zinc-600 font-mono uppercase mt-2">Vite + React Integration</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex items-center justify-between opacity-40">
                <div className="flex items-center gap-2">
                  <Cpu size={14} className="text-zinc-400" />
                  <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-500">System_Optimization</span>
                </div>
              </div>
            </motion.div>

            {/* CTA Card - Navigation */}
            <motion.div 
              whileHover={{ scale: 0.98 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-10 flex flex-col justify-between cursor-pointer group hover:bg-zinc-200 transition-all shadow-xl min-h-[280px]"
            >
              <div className="flex justify-between items-start">
                <div className="p-4 bg-black rounded-2xl text-white">
                  <Layers size={24} />
                </div>
                <ArrowUpRight className="text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" size={32} />
              </div>
              <h4 className="text-black text-2xl sm:text-3xl font-bold tracking-tighter leading-[0.9] uppercase mt-auto">
                Analyze <br /> Development <br /> Archive.
              </h4>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;