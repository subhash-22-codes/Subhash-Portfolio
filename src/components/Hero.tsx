import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronRight, Globe, Terminal, LucideIcon } from 'lucide-react';

const Hero: React.FC = () => {
  const [isSourceMode, setIsSourceMode] = useState(false);

  return (
    <section className="relative min-h-[100svh] bg-[#020202] text-[#fdfdfd] selection:bg-zinc-500/30 overflow-hidden flex flex-col justify-center py-12 lg:py-0">
      
      {/* 1. Industrial Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem] lg:bg-[size:6rem_6rem] pointer-events-none" />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
          {/* LEFT: Identity Architecture */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 lg:space-y-10 pt-10 lg:pt-0">
            
            <div className="space-y-4 lg:space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[9.5rem] font-bold tracking-tighter leading-[0.9] text-white">
                  SUBHASH<br />
                  <span className="text-zinc-800">YAGANTI</span>
                </h1>
              </motion.div>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-lg sm:text-xl lg:text-2xl text-zinc-500 font-medium max-w-xl leading-relaxed tracking-tight"
              >
                Full Stack Engineer specializing in <span className="text-zinc-200">Pythonic Backends</span> and 
                distributed React systems. Focused on building <span className="text-zinc-200">performant architecture</span> that lasts.
              </motion.p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-2">
              <button 
                onClick={() => setIsSourceMode(!isSourceMode)}
                className="group flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-white text-black rounded-full font-bold hover:bg-zinc-200 transition-all duration-300 active:scale-95"
              >
                <span className="text-xs sm:text-sm tracking-tight uppercase">
                  {isSourceMode ? 'View_Interface' : 'View_Source_Code'}
                </span>
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="flex items-center gap-6 px-2 sm:px-6 sm:border-l border-zinc-800">
                 <SocialIcon icon={Github} href="https://github.com/subhash-22-codes" />
                 <SocialIcon icon={Linkedin} href="https://www.linkedin.com/in/subhash-yaganti-a8b3b626a/" />
                 <SocialIcon icon={Mail} href="mailto:subashyagantisubbu@gmail.com" />
              </div>
            </div>
          </div>

          {/* RIGHT: The Mac OS Logic Card */}
          <div className="lg:col-span-5 w-full max-w-md lg:max-w-full mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative bg-[#080808] border border-zinc-900 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden aspect-[4/3] lg:aspect-square flex flex-col"
            >
              {/* macOS Window Bar */}
              <div className="h-10 sm:h-12 bg-[#0d0d0d] flex items-center px-4 sm:px-6 justify-between border-b border-zinc-900/50 shrink-0">
                 <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-zinc-800" />
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-zinc-800" />
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-zinc-800" />
                 </div>
                 <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                   <Terminal size={10} />
                   <span>developer.py</span>
                 </div>
                 <div className="w-10" />
              </div>

              {/* Window Content Area */}
              <div className="p-5 sm:p-8 lg:p-10 font-mono text-xs sm:text-sm leading-relaxed flex-1 overflow-hidden relative">
                <AnimatePresence mode="wait">
                  {isSourceMode ? (
                    <motion.div
                      key="code"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="h-full overflow-y-auto custom-scrollbar"
                    >
                      <TypedCode />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="visual"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="h-full flex flex-col justify-between"
                    >
                      <div className="space-y-6">
                         <div>
                            <div className="text-zinc-700 text-[9px] sm:text-[10px] tracking-widest uppercase font-bold mb-3">System_Properties</div>
                            <div className="grid grid-cols-1 gap-3">
                              <DataLine label="ENVIRONMENT" value="Production_v2" />
                              <DataLine label="UPTIME" value="99.98%_SLO" />
                              <DataLine label="ARCHITECTURE" value="Monolith_to_Micro" />
                            </div>
                         </div>
                      </div>
                      
                      {/* Responsive Location Status Block */}
                      <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-zinc-900/40 rounded-xl border border-zinc-800/50 mt-4 min-w-0">
                         <div className="p-2 bg-zinc-900 rounded-full text-zinc-400 shrink-0">
                            <Globe size={16} className="sm:w-[18px] sm:h-[18px]" />
                         </div>
                         <div className="min-w-0 flex-1">
                            <div className="text-[9px] sm:text-[10px] text-zinc-500 uppercase tracking-widest truncate">Location_Status</div>
                            <div className="text-xs sm:text-sm font-bold text-zinc-200 truncate">Hyderabad, IN (IST)</div>
                         </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
      
      {/* Minimal Aura/Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.02] blur-[120px] rounded-full -z-10 pointer-events-none" />
    </section>
  );
};

/* --- Component: The Typed Python Source (Faster Animation) --- */
const TypedCode = () => {
  const codeLines = [
    { text: "class SoftwareArchitect:", color: "text-zinc-100" },
    { text: "    def __init__(self):", color: "text-purple-400" },
    { text: "        self.name = 'Subhash'", color: "text-zinc-400" },
    { text: "        self.role = 'Backend'", color: "text-zinc-400" },
    { text: "        self.stack = ['Py', 'React']", color: "text-zinc-400" },
    { text: "        self.status = 'scaling'", color: "text-zinc-400" },
    { text: "", color: "" },
    { text: "    def deploy_value(self):", color: "text-purple-400" },
    { text: "        return self.innovation()", color: "text-emerald-400/80" },
  ];

  return (
    <div className="flex flex-col space-y-1 font-mono text-[11px] sm:text-xs md:text-sm">
      {codeLines.map((line, i) => (
        <TypedLine key={i} text={line.text} color={line.color} delay={i * 400} />
      ))}
    </div>
  );
};

const TypedLine = ({ text, color, delay }: { text: string, color: string, delay: number }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    setDisplayedText("");
    setShowCursor(false);

    const startTimeout = setTimeout(() => {
      setShowCursor(true);
      let i = 0;
      const typeInterval = setInterval(() => {
        if (i < text.length) {
          setDisplayedText(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => setShowCursor(false), 50); 
        }
      }, 20); // Faster typing speed (20ms)

      return () => clearInterval(typeInterval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [text, delay]);

  return (
    <div className={`${color} min-h-[1.25rem] flex items-center whitespace-pre`}>
      {displayedText}
      {showCursor && (
        <span className="inline-block w-1.5 h-3.5 bg-zinc-500 ml-1 animate-pulse" />
      )}
    </div>
  );
};

/* --- Helper Components --- */

const DataLine = ({ label, value }: { label: string, value: string }) => (
  <div className="flex justify-between items-end border-b border-dashed border-zinc-800 pb-2">
    <span className="text-[10px] text-zinc-600 font-mono tracking-wider">{label}</span>
    <span className="text-xs text-zinc-300 font-mono font-bold">{value}</span>
  </div>
);

const SocialIcon = ({ icon: Icon, href }: { icon: LucideIcon, href: string }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="text-zinc-500 hover:text-white transition-colors duration-300 transform hover:scale-110"
  >
    <Icon size={20} strokeWidth={1.5} />
  </a>
);

export default Hero;