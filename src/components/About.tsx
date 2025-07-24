import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Coffee, Heart, Zap } from 'lucide-react';
import type { Variants } from 'framer-motion';

const About: React.FC = () => {
  // Use intersection observer for better performance
  const { ref: aboutRef, inView: aboutInView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const { ref: contentRef, inView: contentInView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  const { ref: statsRef, inView: statsInView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  const stats = [
    { icon: Code2, number: '10+', label: 'Projects Built' },
    { icon: Coffee, number: '100+', label: 'Cups of Coffee' },
    { icon: Heart, number: '2+', label: 'Years Experience' },
    { icon: Zap, number: '24/7', label: 'Problem Solver' },
  ];

  const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};


  return (
    <section 
      ref={aboutRef}
      id="about" 
      className="relative py-20 px-4 lg:py-32 overflow-hidden"
    >
      {/* Simplified Background Elements */}
      <div className="absolute inset-0 pointer-events-none will-change-transform">
        <div
          className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-[var(--accent-primary)]/4 to-transparent rounded-full blur-3xl"
          style={{
            animation: aboutInView ? 'float 18s ease-in-out infinite' : 'none',
            transform: 'translateZ(0)',
          }}
        />
        <div
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-bl from-[var(--highlight)]/3 to-transparent rounded-full blur-3xl"
          style={{
            animation: aboutInView ? 'float 22s ease-in-out infinite reverse' : 'none',
            animationDelay: '4s',
            transform: 'translateZ(0)',
          }}
        />
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
          <div ref={contentRef} className="relative">
            <div 
              className="accent-card p-8 md:p-10 lg:p-12 relative overflow-hidden"
              style={{
                opacity: contentInView ? 1 : 0,
                transform: contentInView ? 'translateX(0)' : 'translateX(-20px)',
                transition: 'all 0.8s ease',
              }}
            >
              {/* Subtle card background animation */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-white/2 to-transparent rounded-[20px]"
                style={{
                  opacity: contentInView ? 0.5 : 0,
                  transition: 'opacity 2s ease 0.5s',
                }}
              />
              
              <div className="relative z-10">
                <h3
                  className="font-arvo font-bold text-2xl md:text-3xl lg:text-4xl mb-8 leading-tight"
                  style={{
                    opacity: contentInView ? 1 : 0,
                    transform: contentInView ? 'translateY(0)' : 'translateY(15px)',
                    transition: 'all 0.6s ease 0.2s',
                  }}
                >
                  Passionate Developer & Problem Solver
                </h3>
                
                <div className="space-y-6 text-base md:text-lg lg:text-xl leading-relaxed">
                  {[
                    "I'm a full-stack developer who enjoys crafting real, impactful applications. I take complex ideas and turn them into clean, functional, and user-friendly experiences.",
                    "My expertise lies in modern JavaScript frameworks, Python backends, and cloud infrastructure. I focus on writing clean, maintainable code and delivering solid UI/UX that actually makes sense.",
                    "Outside of work, I'm constantly exploring new technologies, contributing to open-source, and staying sharp through hands-on projects and community interactions."
                  ].map((text, index) => (
                    <p
                      key={index}
                      style={{
                        opacity: contentInView ? 1 : 0,
                        transform: contentInView ? 'translateY(0)' : 'translateY(10px)',
                        transition: `all 0.6s ease ${0.4 + index * 0.1}s`,
                      }}
                    >
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Stats Grid */}
          <div 
            ref={statsRef}
            className="grid grid-cols-2 gap-6 lg:gap-8"
            style={{
              opacity: statsInView ? 1 : 0,
              transform: statsInView ? 'translateX(0)' : 'translateX(20px)',
              transition: 'all 0.8s ease',
            }}
          >
            {stats.map(({ icon: Icon, number, label }, index) => (
              <motion.div
                key={label}
                className="performance-card p-6 lg:p-8 text-center group cursor-pointer relative will-change-transform"
                whileHover={{
                  scale: 1.02,
                  y: -2,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
                whileTap={{ scale: 0.98 }}
                style={{
                  opacity: statsInView ? 1 : 0,
                  transform: statsInView ? 'translateY(0) scale(1)' : 'translateY(10px) scale(0.95)',
                  transition: `all 0.6s ease ${0.2 + index * 0.1}s`,
                }}
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-primary)]/2 to-[var(--highlight)]/2 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ 
                      rotate: [0, -3, 3, 0],
                      transition: { duration: 0.4 }
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

                {/* Subtle border animation */}
                <div className="absolute inset-0 rounded-[20px] border border-[var(--accent-primary)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;