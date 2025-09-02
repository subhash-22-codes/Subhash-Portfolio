import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Globe, Database, Settings } from 'lucide-react';

// ✅ Import all skill icons so Vite resolves them for deployment
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
import nodejsIcon from '../assets/skills/Node.js.png';
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
import jestIcon from '../assets/skills/jest.png';

interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'testing';
  icon: string;
  level: number;
  color: string;
}

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories = [
    { key: 'all', name: 'All Skills', icon: Code, color: 'from-accent-primary to-accent-secondary' },
    { key: 'frontend', name: 'Frontend', icon: Globe, color: 'from-blue-400 to-cyan-400' },
    { key: 'backend', name: 'Backend', icon: Database, color: 'from-green-400 to-emerald-400' },
    { key: 'database', name: 'Database', icon: Database, color: 'from-purple-400 to-pink-400' },
    { key: 'tools', name: 'Tools', icon: Settings, color: 'from-orange-400 to-red-400' },
    { key: 'testing', name: 'Testing', icon: Code, color: 'from-yellow-400 to-amber-400' }
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
  ];

  const filteredSkills = activeCategory === 'all'
    ? skillData
    : skillData.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        
      {/* Header */}
      <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">
            <span className="text-accent-primary">Technical</span> Skills
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto font-poppins">
            A comprehensive collection of technologies and tools I use to bring ideas to life.
          </p>
      </motion.div>

      {/* Category Filters */}
      <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map(({ key, name, icon: Icon, color }) => (
          <motion.button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === key
                  ? `bg-gradient-to-r ${color} text-white shadow-lg`
                  : 'glass-card hover:bg-glass-highlight'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-5 h-5" />
              {name}
          </motion.button>
        ))}
      </motion.div>

      {/* Skills Grid */}
          <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <AnimatePresence mode="wait">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-card group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.05 }}
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
              >
                {/* Skill Icon */}
                <div className="relative mb-4">
                  <div className="w-16 h-16 mx-auto relative">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                    
                    {/* Glow Effect */}
                    <div 
                      className="absolute inset-0 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                      style={{ backgroundColor: skill.color }}
                    />
                  </div>
                  
                  {/* Floating Sparkles */}
                  <AnimatePresence>
                    {hoveredSkill === skill.name && (
                      <>
                        <motion.div
                          className="absolute -top-2 -right-2 text-accent-primary"
                          initial={{ scale: 0, rotate: 0 }}
                          animate={{ scale: 1, rotate: 360 }}
                          exit={{ scale: 0, rotate: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                        </motion.div>
                <motion.div
                          className="absolute -bottom-2 -left-2 text-accent-secondary"
                          initial={{ scale: 0, rotate: 0 }}
                          animate={{ scale: 1, rotate: -360 }}
                          exit={{ scale: 0, rotate: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                         
                        </motion.div>
                      </>
                    )}
                  </AnimatePresence>
                </div>

                {/* Skill Name */}
                <h3 className="text-lg font-semibold text-center mb-3 group-hover:text-accent-primary transition-colors">
                  {skill.name}
                </h3>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-text-secondary">Proficiency</span>
                    <span className="text-accent-primary font-medium">{skill.level}%</span>
                  </div>
                  
                  <div className="w-full bg-glass rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full transition-all duration-500"
                      style={{ 
                        background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
                        width: `${skill.level}%`
                      }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                  </div>
                  
                {/* Category Badge */}
                <div className="mt-4 flex justify-center">
                  <span className="px-3 py-1 bg-glass rounded-full text-xs font-medium text-text-secondary capitalize">
                    {skill.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          </motion.div>

        {/* Skills Summary */}
      <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="glass-card p-8 rounded-3xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-accent-primary font-poppins">
              Continuous Learning & Growth
            </h3>
            <p className="text-text-secondary text-lg leading-relaxed">
              I'm constantly expanding my skill set and staying up-to-date with the latest technologies. 
              Currently exploring advanced concepts in cloud architecture, machine learning, and emerging web technologies.
            </p>
            
            {/* Learning Progress */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-primary mb-2">16+</div>
                <div className="text-text-secondary">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-secondary mb-2">4</div>
                <div className="text-text-secondary">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-tertiary mb-2">85%</div>
                <div className="text-text-secondary">Average Proficiency</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;