import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Globe, Award, Clock, Target } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Code, value: '3+', label: 'Years Experience', color: 'text-accent-primary' },
    { icon: Globe, value: '15+', label: 'Projects Completed', color: 'text-accent-secondary' },
    { icon: Award, value: '100%', label: 'Client Satisfaction', color: 'text-accent-tertiary' },
    { icon: Clock, value: '24/7', label: 'Available', color: 'text-accent-primary' }
  ];

  const skills = [
    'Full Stack Development', 'React & TypeScript', 'Python & Flask', 
    'Database Design', 'API Development', 'Cloud Deployment',
    'UI/UX Design', 'Performance Optimization', 'Testing & Debugging'
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">
            About <span className="text-accent-primary">Me</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto font-poppins">
            Passionate full-stack developer with a love for creating innovative digital solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Description */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-4 text-accent-primary font-poppins">
                  Who I Am
                </h3>
                <p className="text-text-secondary leading-relaxed font-poppins">
                  I'm a dedicated full-stack developer with a passion for creating meaningful digital experiences. 
                  My journey in technology started with curiosity and has evolved into a deep understanding of 
                  modern web development practices.
                </p>
              </motion.div>
                
                <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold mb-4 text-accent-secondary font-poppins">
                  What I Do
                </h3>
                <p className="text-text-secondary leading-relaxed font-poppins">
                  I specialize in building scalable web applications using modern technologies. 
                  From concept to deployment, I handle every aspect of the development process, 
                  ensuring high-quality, performant, and user-friendly solutions.
                </p>
          </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-4 text-accent-tertiary font-poppins">
                  My Approach
                </h3>
                <p className="text-text-secondary leading-relaxed font-poppins">
                  I believe in writing clean, maintainable code and creating intuitive user experiences. 
                  Every project is an opportunity to learn and grow, and I'm always excited to tackle 
                  new challenges and explore emerging technologies.
                </p>
              </motion.div>
            </div>

            {/* Skills List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-white font-poppins">
                Core Competencies
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-accent-primary rounded-full" />
                    <span className="text-text-secondary font-poppins">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
                  </motion.div>
                  
          {/* Right Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="glass-card p-6 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                >
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-lg bg-glass flex items-center justify-center`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
                  </div>
                  
            {/* Personal Info Card */}
            <motion.div
              className="glass-card p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold mb-6 text-accent-primary font-poppins">
                Personal Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <User className="w-5 h-5 text-accent-secondary" />
                  <div>
                    <div className="text-sm text-text-muted font-poppins">Name</div>
                    <div className="text-white font-poppins">Subhash Yaganti</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Code className="w-5 h-5 text-accent-secondary" />
                  <div>
                    <div className="text-sm text-text-muted font-poppins">Role</div>
                    <div className="text-white font-poppins">Full Stack Developer</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Target className="w-5 h-5 text-accent-secondary" />
                  <div>
                    <div className="text-sm text-text-muted font-poppins">Focus</div>
                    <div className="text-white font-poppins">Web Applications & AI</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p className="text-text-secondary mb-4 font-poppins">
                Ready to bring your ideas to life?
              </p>
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Let's Work Together
              </button>
              </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;