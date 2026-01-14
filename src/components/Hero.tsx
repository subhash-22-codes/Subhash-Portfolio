import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  // PREMIUM MOTION: Preserved 100% from your loved version
  const revealLeft = {
    initial: { opacity: 0, x: -40 },
    whileInView: { 
      opacity: 1, x: 0,
      transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 } 
    },
    exit: { opacity: 0, x: -40, transition: { duration: 0.8 } }
  };

  const revealScale = {
    initial: { opacity: 0, scale: 0.95, y: 20 },
    whileInView: { 
      opacity: 1, scale: 1, y: 0,
      transition: { duration: 2.0, ease: [0.16, 1, 0.3, 1], delay: 0.5 } 
    },
    exit: { opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.8 } }
  };

  const revealRight = {
    initial: { opacity: 0, x: 40 },
    whileInView: { 
      opacity: 1, x: 0,
      transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.8 } 
    },
    exit: { opacity: 0, x: 40, transition: { duration: 0.8 } }
  };

  const revealUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { 
      opacity: 1, y: 0,
      transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 1.1 } 
    },
    exit: { opacity: 0, y: 20, transition: { duration: 0.8 } }
  };

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-start md:justify-center bg-[#0a0a0a] text-white overflow-hidden px-6 sm:px-12 md:px-20 pt-28 pb-16 md:py-0">
      {/* Texture Layer */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="max-w-6xl mx-auto w-full space-y-8 sm:space-y-10 relative z-10">
        
        {/* 1. Intro */}
        <motion.div 
          initial="initial" 
          whileInView="whileInView"
          exit="exit"
          viewport={{ once: false, amount: 0.1 }}
          variants={revealLeft} 
          className="flex items-center gap-4"
        >
          <span className="w-8 sm:w-12 h-[1px] bg-white/20"></span>
          <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-white/50 font-bold">
            Hello, I am Subhash Yaganti
          </span>
        </motion.div>

        {/* 2. Header */}
        <motion.div 
          initial="initial" 
          whileInView="whileInView" 
          exit="exit"
          viewport={{ once: false, amount: 0.1 }} 
          variants={revealScale}
        >
          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[1.1] sm:leading-[0.9] tracking-tighter">
            Building tools <br /> 
            <span className="text-white/40 italic">that matter.</span>
          </h1>
        </motion.div>

        {/* 3. Bio - Fixed spacing included */}
        <motion.div 
          initial="initial" 
          whileInView="whileInView" 
          exit="exit"
          viewport={{ once: false, amount: 0.1 }} 
          variants={revealRight}
          className="max-w-2xl"
        >
          <p className="font-sans text-base sm:text-lg md:text-xl text-white/60 leading-relaxed italic">
            I'm a developer who loves turning complex ideas into 
            <span className="text-white not-italic font-medium"> simple, beautiful apps.</span> Currently, I spend my time building{" "}
            <span className="inline-block sm:ml-2 text-white border-b border-white/20 italic">
              <TypeAnimation
                sequence={[
                  'real-time systems', 2000,
                  'modern web apps', 2000,
                  'intelligent software', 2000,
                ]}
                wrapper="span" speed={50} repeat={Infinity}
              />
            </span>
          </p>
        </motion.div>

        {/* 4. Socials & Action */}
        <motion.div 
          initial="initial" 
          whileInView="whileInView" 
          exit="exit"
          viewport={{ once: false, amount: 0.1 }} 
          variants={revealUp}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-10 pt-4"
        >
          <div className="flex items-center gap-8 text-white/40">
            <a href="https://github.com/subhash-22-codes" target="_blank" rel="noreferrer" className="hover:text-white transition-all hover:-translate-y-1">
              <Github size={22} />
            </a>
            <a href="https://www.linkedin.com/in/subhash-yaganti-a8b3b626a/" target="_blank" rel="noreferrer" className="hover:text-white transition-all hover:-translate-y-1">
              <Linkedin size={22} />
            </a>
            <a href="mailto:subashyagantisubbu@gmail.com" className="hover:text-white transition-all hover:-translate-y-1">
              <Mail size={22} />
            </a>
          </div>

          <a 
            href="#about" 
            className="font-sans text-[10px] sm:text-xs font-bold text-white uppercase tracking-[0.2em] flex items-center gap-3 group"
          >
            Scroll to see my work
            <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform text-white/50" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;