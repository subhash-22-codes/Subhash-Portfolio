import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import type { Variants } from 'framer-motion';
import reactLogo from '../assets/skills/react.png';
import typeScriptLogo from '../assets/skills/typescript.png';
import javaScriptLogo from '../assets/skills/javascript.png';
import tailwindLogo from '../assets/skills/tailwindcss.png';
import viteLogo from '../assets/skills/vite.png';
import htmlLogo from '../assets/skills/html5.png';
import cssLogo from '../assets/skills/css3.png';
import gitLogo from '../assets/skills/gitlogo.png';
import dockerLogo from '../assets/skills/dockermain.png';
import awsLogo from '../assets/skills/aws.png';
import figmaLogo from '../assets/skills/figma.png';
import flaskLogo from '../assets/skills/Flask.png';
import pyLogo from '../assets/skills/Python.png';
import javaLogo from '../assets/skills/Java.png';
import mongoLogo from '../assets/skills/MongoDB.png';
import postgreLogo from '../assets/skills/PostgresSQL.png';
import redisLogo from '../assets/skills/Redis.png';


interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools';
  icon: string;
}

const categories = [
  { key: 'all', name: 'All Skills' },
  { key: 'frontend', name: 'Frontend' },
  { key: 'backend', name: 'Backend' },
  { key: 'database', name: 'Database' },
  { key: 'tools', name: 'Tools' },
];

const skillData: Skill[] = [
  // Frontend
  { name: 'React', category: 'frontend', icon: reactLogo },
  { name: 'TypeScript', category: 'frontend', icon: typeScriptLogo },
  { name: 'JavaScript', category: 'frontend', icon: javaScriptLogo },
  { name: 'Tailwind CSS', category: 'frontend', icon: tailwindLogo },
  { name: 'Vite', category: 'frontend', icon: viteLogo },
  { name: 'HTML5', category: 'frontend', icon: htmlLogo },
  { name: 'CSS3', category: 'frontend', icon: cssLogo },
  
  // Backend
  { name: 'Flask', category: 'backend', icon: flaskLogo },
  { name: 'Python', category: 'backend', icon: pyLogo },
   { name: 'Java', category: 'backend', icon: javaLogo},
  
  // Database
  { name: 'MongoDB', category: 'database', icon: mongoLogo },
  { name: 'PostgreSQL', category: 'database', icon: postgreLogo },
  { name: 'Redis', category: 'database', icon: redisLogo },
  
  // Tools
  { name: 'Git', category: 'tools', icon: gitLogo },
  { name: 'Docker', category: 'tools', icon: dockerLogo },
  { name: 'AWS', category: 'tools', icon: awsLogo },
  { name: 'Figma', category: 'tools', icon: figmaLogo },
];

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const sectionRef = useRef<HTMLElement>(null);
  
  // Use react-intersection-observer for better performance
  const { ref: headerRef, inView: headerInView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  
  const { ref: filtersRef, inView: filtersInView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  
  const { ref: gridRef, inView: gridInView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  
  const { ref: learningRef, inView: learningInView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const filteredSkills = activeCategory === 'all'
    ? skillData
    : skillData.filter((skill) => skill.category === activeCategory);

  // Animation variants
  const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
      duration: 0.6,
    },
  },
};

const cardHoverVariants: Variants = {
  hover: {
    scale: 1.05,
    y: -8,
    rotateY: 5,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

const iconVariants: Variants = {
  hover: {
    scale: 1.15,
    rotate: [0, -5, 5, 0],
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};


  return (
    <section id="skills" ref={sectionRef} className="scroll-my-24 py-16 sm:py-20 lg:py-24 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 40 }}
        animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ 
          duration: 0.8, 
          ease: [0.16, 1, 0.3, 1],
        }}
        className="text-center mb-12 sm:mb-16 lg:mb-20"
      >
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-4 sm:mb-6"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)' }}
        >
          Skills & Technologies
        </motion.h2>
        <motion.p 
          className="text-[var(--highlight)] text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-4"
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}
        >
          Technologies I love working with
        </motion.p>
      </motion.div>

      {/* Category Filters */}
      <motion.div
        ref={filtersRef}
        initial={{ opacity: 0, y: 30 }}
        animate={filtersInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ 
          duration: 0.7, 
          delay: 0.2,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 sm:mb-16 lg:mb-20"
      >
        {categories.map((category, index) => (
          <motion.button
            key={category.key}
            onClick={() => setActiveCategory(category.key)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={filtersInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ 
              delay: index * 0.1,
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ 
              scale: 1.05,
              y: -2,
            }}
            whileTap={{ scale: 0.95 }}
            className={`
              relative px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium text-sm sm:text-base
              transition-all duration-300 ease-out
              before:absolute before:inset-0 before:rounded-full before:transition-all before:duration-300
              ${activeCategory === category.key
                ? 'bg-[var(--accent-primary)] text-[var(--bg-primary)] shadow-lg shadow-[var(--accent-primary)]/25 before:bg-gradient-to-r before:from-white/20 before:to-transparent before:opacity-100'
                : 'glass-card text-[var(--text-primary)] hover:bg-[var(--accent-primary)]/10 hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)]/30 before:opacity-0 hover:before:opacity-100 before:bg-gradient-to-r before:from-white/10 before:to-transparent'
              }
              backdrop-blur-xl border border-white/10
            `}
            style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}
          >
            <span className="relative z-10">{category.name}</span>
          </motion.button>
        ))}
      </motion.div>

      {/* Skills Grid */}
      <div ref={gridRef}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate={gridInView ? "visible" : "hidden"}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6"
          >
            {filteredSkills.map((skill) => (
              <motion.div
                key={`${skill.name}-${activeCategory}`}
                variants={itemVariants}
                whileHover="hover"
                className="group cursor-pointer"
              >
                <motion.div
                  variants={cardHoverVariants}
                  className="
                    relative glass-card p-4 sm:p-6 text-center h-full
                    backdrop-blur-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02]
                    border border-white/10 rounded-2xl
                    shadow-xl shadow-black/20
                    before:absolute before:inset-0 before:rounded-2xl 
                    before:bg-gradient-to-br before:from-white/[0.15] before:via-transparent before:to-transparent
                    before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500
                    after:absolute after:inset-[1px] after:rounded-2xl
                    after:bg-gradient-to-br after:from-transparent after:via-white/[0.03] after:to-transparent
                    overflow-hidden
                  "
                >
                  {/* Subtle shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                  
                  {/* Icon */}
                  <div className="mb-3 sm:mb-4 flex justify-center relative z-10">
                    <motion.div
                      variants={iconVariants}
                      className="relative"
                    >
                      <img
                        src={skill.icon}
                        alt={`${skill.name} icon`}
                        className="w-10 h-10 sm:w-12 sm:h-12 object-contain filter drop-shadow-lg"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                      {/* Glow effect behind icon */}
                      <div className="absolute inset-0 bg-[var(--accent-primary)]/20 rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>
                  </div>
                  
                  {/* Skill Name */}
                  <motion.h3 
                    className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors duration-300 relative z-10"
                    style={{ fontSize: 'clamp(0.875rem, 2vw, 1.125rem)' }}
                    initial={{ opacity: 0.9 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {skill.name}
                  </motion.h3>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Learning Section */}
      <motion.div
        ref={learningRef}
        initial={{ opacity: 0, y: 40 }}
        animate={learningInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ 
          duration: 0.8, 
          delay: 0.4,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="max-w-4xl mx-auto mt-16 sm:mt-20 lg:mt-24"
      >
        <motion.div
          whileHover={{ 
            scale: 1.02,
            y: -4,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
          className="
            relative glass-card p-6 sm:p-8 text-center
            backdrop-blur-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02]
            border border-white/10 rounded-3xl
            shadow-2xl shadow-black/25
            before:absolute before:inset-0 before:rounded-3xl 
            before:bg-gradient-to-br before:from-white/[0.12] before:via-transparent before:to-transparent
            before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-700
            overflow-hidden
          "
        >
          {/* Ambient glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)]/5 via-transparent to-[var(--accent-primary)]/5 opacity-0 hover:opacity-100 transition-opacity duration-700" />
          
          <motion.h3 
            className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--accent-primary)] mb-3 sm:mb-4 relative z-10"
            style={{ fontSize: 'clamp(1.25rem, 3vw, 1.875rem)' }}
            initial={{ opacity: 0.9 }}
            whileHover={{ opacity: 1, scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Always Learning
          </motion.h3>
          <motion.p 
            className="text-[var(--text-primary)] leading-relaxed relative z-10 px-2"
            style={{ fontSize: 'clamp(1rem, 2.2vw, 1.125rem)' }}
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            I'm constantly exploring new technologies and expanding my skill set. Currently diving deep into 
            <motion.span 
              className="font-semibold text-[var(--accent-primary)] mx-1"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              AI/ML
            </motion.span>, 
            <motion.span 
              className="font-semibold text-[var(--accent-primary)] mx-1"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Web3
            </motion.span>, 
            <motion.span 
              className="font-semibold text-[var(--accent-primary)] mx-1"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Microservices
            </motion.span>, and 
            <motion.span 
              className="font-semibold text-[var(--accent-primary)] mx-1"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Cloud Architecture
            </motion.span>.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;