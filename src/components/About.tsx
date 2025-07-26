import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Coffee, Heart, Zap } from 'lucide-react';
import type { Variants } from 'framer-motion';

const About: React.FC = () => {
  // Use intersection observer for better performance
  const { ref: aboutRef, inView: aboutInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: contentRef, inView: contentInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: statsRef, inView: statsInView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const stats = [
    { icon: Code2, number: '10+', label: 'Projects Built' },
    { icon: Coffee, number: '100+', label: 'Cups of Coffee' },
    { icon: Heart, number: '2+', label: 'Years Experience' },
    { icon: Zap, number: '24/7', label: 'Problem Solver' },
  ];

  // Minimal motion variants
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const slideInRight: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const statCardVariants: Variants = {
    hidden: { opacity: 0, y: 10, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section 
      ref={aboutRef}
      id="about" 
      className="relative py-20 px-4 lg:py-32 overflow-hidden"
    >
      {/* Static Background Elements - No animation for better performance */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-[var(--accent-primary)]/6 to-transparent rounded-full blur-3xl opacity-70" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-bl from-[var(--highlight)]/4 to-transparent rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={aboutInView ? "visible" : "hidden"}
          className="text-center mb-16 lg:mb-24"
        >
          <motion.h2
            variants={fadeInUp}
            className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl gradient-text mb-6"
          >
            About Me
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-24 h-1.5 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--highlight)] mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Content */}
          <motion.div 
            ref={contentRef}
            variants={slideInLeft}
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="accent-card p-8 md:p-10 lg:p-12 relative overflow-hidden">
              {/* Subtle static background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/3 to-transparent rounded-[20px] opacity-50" />
              
              <div className="relative z-10">
                <motion.h3
                  variants={fadeInUp}
                  className="font-arvo font-bold text-2xl md:text-3xl lg:text-4xl mb-8 leading-tight"
                >
                  Passionate Developer & Problem Solver
                </motion.h3>
                
                <motion.div 
                  variants={staggerContainer}
                  className="space-y-6 text-base md:text-lg lg:text-xl leading-relaxed"
                >
                  {[
                    "I'm a full-stack developer who enjoys crafting real, impactful applications. I take complex ideas and turn them into clean, functional, and user-friendly experiences.",
                    "My expertise lies in modern JavaScript frameworks, Python backends, and cloud infrastructure. I focus on writing clean, maintainable code and delivering solid UI/UX that actually makes sense.",
                    "Outside of work, I'm constantly exploring new technologies, contributing to open-source, and staying sharp through hands-on projects and community interactions."
                  ].map((text, index) => (
                    <motion.p
                      key={index}
                      variants={fadeInUp}
                    >
                      {text}
                    </motion.p>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Stats Grid */}
          <motion.div 
            ref={statsRef}
            variants={slideInRight}
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            className="grid grid-cols-2 gap-6 lg:gap-8"
          >
            {stats.map(({ icon: Icon, number, label }, index) => (
              <motion.div
                key={label}
                variants={statCardVariants}
                custom={index}
                className="performance-card p-6 lg:p-8 text-center group cursor-pointer relative transition-all duration-200"
                whileHover={{
                  y: -3,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Subtle hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/3 to-[var(--highlight)]/2 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <Icon
                      size={40}
                      className="text-[var(--accent-primary)] mx-auto mb-4 lg:mb-6 group-hover:text-[var(--highlight)] transition-colors duration-200"
                    />
                  </motion.div>
                  
                  <div className="font-montserrat font-bold text-3xl lg:text-4xl gradient-text mb-3">
                    {number}
                  </div>
                  
                  <div className="font-poppins text-sm lg:text-base text-[var(--highlight)] group-hover:text-[var(--text-primary)] transition-colors duration-200">
                    {label}
                  </div>
                </div>

                {/* Minimal border highlight */}
                <div className="absolute inset-0 rounded-[20px] border border-[var(--accent-primary)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;