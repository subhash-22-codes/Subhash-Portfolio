import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  const revealLeft = {
    initial: { opacity: 0, x: -40 },
    whileInView: {
      opacity: 1,
      x: 0,
      transition: { duration: 2.0, ease: [0.16, 1, 0.3, 1], delay: 0.2 }
    },
    exit: { opacity: 0, x: -20, transition: { duration: 0.8 } }
  };

  const revealRight = {
    initial: { opacity: 0, x: 40 },
    whileInView: {
      opacity: 1,
      x: 0,
      transition: { duration: 2.0, ease: [0.16, 1, 0.3, 1], delay: 0.4 }
    },
    exit: { opacity: 0, x: 20, transition: { duration: 0.8 } }
  };

  const revealUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] }
    },
    exit: { opacity: 0, y: 20, transition: { duration: 0.8 } }
  };

  const revealScale = {
    initial: { opacity: 0, scale: 0.95, y: 20 },
    whileInView: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 2.0, ease: [0.16, 1, 0.3, 1], delay: 0.4 }
    },
    exit: { opacity: 0, scale: 0.95, y: 10, transition: { duration: 0.8 } }
  };

  const revealFade = {
  initial: { opacity: 0 },
  whileInView: {
    opacity: 1,
    transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] }
  },
  exit: { opacity: 0, transition: { duration: 0.6 } }
};


  const focusAreas = [
    { category: 'Backend Systems', details: 'APIs, async jobs, and core application logic' },
    { category: 'Frontend', details: 'UI built alongside backend, not as an afterthought' },
    { category: 'Data', details: 'Schemas, migrations, and change handling over time' },
    { category: 'Engineering', details: 'Building features end to end and keeping them stable' }
  ];

  return (
    <section
      id="about"
      className="relative bg-[#0a0a0a] text-white overflow-hidden px-6 md:px-16 py-12 md:py-24"
    >
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={revealScale}
          initial="initial"
          whileInView="whileInView"
          exit="exit"
          viewport={{ once: false, amount: 0.2 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-px bg-white/20" />
            <span className="font-sans text-[11px] tracking-[0.4em] uppercase text-white/50">
              My Journey
            </span>
          </div>

          <h2 className="font-serif text-7xl md:text-9xl tracking-tight leading-none">
            About <span className="text-white/30 italic">Me.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
         <motion.div
            variants={revealLeft}
            initial="initial"
            whileInView="whileInView"
            exit="exit"
            viewport={{ once: false, amount: 0.2 }}
            className="lg:col-span-7 space-y-10 sm:space-y-12"
          >
            {/* Text block gets its own motion */}
            <motion.div
              variants={revealFade}
              initial="initial"
              whileInView="whileInView"
              exit="exit"
              viewport={{ once: false }}
              className="space-y-4 sm:space-y-6"
            >
              <h3 className="font-sans text-xl sm:text-2xl md:text-3xl font-medium text-white">
                I build full-stack applications with a strong backend focus.
              </h3>

              <p className="font-sans text-base sm:text-lg text-white/50 leading-relaxed max-w-2xl">
                Most of my work involves backend logic, background processing, and data-heavy flows.
                I also design and build the frontend for the same systems, making sure the UI stays
                clear and predictable as features grow.
              </p>
            </motion.div>

            {/* Focus areas keep staggered rise */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pt-6 sm:pt-8 border-t border-white/10">
              {focusAreas.map((item, index) => (
                <motion.div
                  key={index}
                  variants={revealUp}
                  initial="initial"
                  whileInView="whileInView"
                  exit="exit"
                  viewport={{ once: false }}
                  transition={{ delay: 0.2 + index * 0.12 }}
                  className="space-y-2"
                >
                  <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-white/30">
                    {item.category}
                  </span>
                  <p className="font-sans text-sm sm:text-base text-white/80 font-medium">
                    {item.details}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <div className="lg:col-span-5 self-center">
            <div className="space-y-20 md:pl-12">
              <motion.div
                variants={revealRight}
                initial="initial"
                whileInView="whileInView"
                exit="exit"
                viewport={{ once: false, amount: 0.2 }}
                className="relative"
              >
                <div className="absolute -left-8 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-transparent to-transparent" />

                <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-white/30 block mb-6">
                  Education
                </span>

                <div className="space-y-3">
                  <h4 className="font-sans text-2xl md:text-3xl font-light tracking-tight text-white/90">
                    Computer Science & Engineering
                  </h4>
                  <p className="font-serif italic text-white/40 text-base md:text-lg">
                    Malla Reddy College of Engineering & Technology · 2026
                  </p>
                </div>

                <div className="mt-10 flex items-center justify-between gap-6">
                  <div className="flex items-baseline gap-3">
                    <span className="text-[9px] font-sans uppercase tracking-[0.3em] text-white/20">
                      CGPA
                    </span>
                    <p className="text-6xl md:text-7xl font-serif italic text-white tracking-tighter">
                      9.0
                    </p>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-sans uppercase tracking-[0.15em] text-white/50">
                    <span className="w-2 h-2 rounded-full bg-white/40" />
                    Student
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={revealRight}
                initial="initial"
                whileInView="whileInView"
                exit="exit"
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: 0.6 }}
                className="relative"
              >
                <div className="absolute -left-8 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-transparent to-transparent" />

                <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-white/30 block mb-6">
                  Next
                </span>
                <h4 className="font-serif text-4xl md:text-5xl leading-[1.2] tracking-tight mb-10 text-white/90">
                  Work in motion. <br />
                  <span className="text-white/30 italic font-light">
                    Systems in use.
                  </span>
                </h4>
                <button
                  onClick={() =>
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="group flex items-center gap-6 bg-transparent p-0 cursor-pointer outline-none"
                >
                  <div className="flex flex-col items-start">
                    <span className="font-sans text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 group-hover:text-white transition-colors duration-500">
                      Explore builds
                    </span>
                    <div className="mt-3 w-12 h-px bg-white/10 group-hover:w-20 transition-all duration-700 ease-[0.16,1,0.3,1]" />
                  </div>

                  <motion.div
                    className="text-white/20 group-hover:text-white transition-colors duration-500"
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <ArrowRight size={18} strokeWidth={1} />
                  </motion.div>
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        variants={revealLeft}
        initial="initial"
        whileInView="whileInView"
        exit="exit"
        viewport={{ once: false }}
        transition={{ delay: 1.2 }}
        className="absolute left-12 bottom-12 hidden lg:block opacity-20"
      >
        <p className="font-mono text-[9px] tracking-[0.5em] uppercase text-white whitespace-nowrap">
          Curious — Persistent — Focused
        </p>
      </motion.div>
    </section>
  );
};

export default About;
