import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Download, ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import Lottie from 'lottie-react';
import animationData from '../assets/animations/Animation.json';

const Hero: React.FC = () => {
  
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax effects
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  // Mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 700 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const scrollToProjects = () => {
    const projectsElement = document.querySelector('#projects');
    if (projectsElement) {
      projectsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/SubhashYagantiResume.pdf';
    link.download = 'Subhash_Yaganti_Resume.pdf';
    link.click();
  };

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/subhash-22-codes', 
      label: 'GitHub',
      color: 'hover:bg-gray-900 hover:text-white hover:border-gray-900',
      brandColor: '#24292e'
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/subhash-yaganti-a8b3b626a/', 
      label: 'LinkedIn',
      color: 'hover:bg-blue-600 hover:text-white hover:border-blue-600',
      brandColor: '#0077b5'
    },
    { 
      icon: Mail, 
      href: 'mailto:subashyagantisubbu@gmail.com', 
      label: 'Email',
      color: 'hover:bg-red-500 hover:text-white hover:border-red-500',
      brandColor: '#ef4444'
    }
  ];

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Subtle Background Elements */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: y1 }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-secondary/5 rounded-full blur-3xl" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Greeting */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-accent-primary font-mono text-lg">
                Hi there, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                <span className="text-accent-primary font-poppins">Subhash</span>
                <br />
                <span className="text-white font-poppins">Yaganti</span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.div 
              className="space-y-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-xl sm:text-2xl md:text-3xl text-text-secondary font-poppins">
                Full Stack Developer
              </p>
              <p className="text-base sm:text-lg text-text-muted max-w-2xl font-poppins">
                Crafting digital experiences with clean code and innovative solutions. 
                From concept to deployment, I bring ideas to life.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button 
                onClick={scrollToProjects}
                className="btn-primary group"
              >
                <span className="flex items-center gap-2">
                  View My Work
                  <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </span>
              </button>
              
              <button 
                onClick={downloadResume}
                className="btn-secondary group"
              >
                <span className="flex items-center gap-2">
                  <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Download Resume
                </span>
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex gap-4 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {socialLinks.map(({ icon: Icon, href, label, color, brandColor }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-link ${color} transition-all duration-300 ease-in-out`}
                  whileHover={{ 
                    scale: 1.15, 
                    y: -6,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                  style={{
                    '--brand-color': brandColor
                  } as React.CSSProperties}
                >
                  <Icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Animation */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div 
              className="relative"
              style={{ y: y2 }}
            >
              {/* Subtle Glow Effect */}
              <div className="absolute inset-0 bg-accent-primary/10 rounded-full blur-3xl scale-110" />
              
              {/* Main Container */}
              <div className="relative glass-card p-6 sm:p-8 rounded-3xl overflow-hidden">
                <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 relative">
                  <Lottie 
                    animationData={animationData} 
                    loop={true}
                    className="w-full h-full"
                  />
                </div>
                
                {/* Bottom Text */}
                <motion.div 
                  className="absolute bottom-4 left-4 right-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  <p className="text-sm font-mono text-center text-accent-primary font-semibold">
                    Building the Future
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          style={{ opacity }}
        >
          <motion.button 
            onClick={scrollToProjects}
            className="group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-6 h-10 border-2 border-accent-primary rounded-full flex justify-center relative">
              <motion.div
                className="w-1 h-3 bg-accent-primary rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <p className="text-xs text-text-muted mt-2 text-center group-hover:text-accent-primary transition-colors">
              Scroll
            </p>
          </motion.button>
        </motion.div>
      </div>

      {/* Mouse Follower (Desktop Only) */}
      {isHovered && (
        <motion.div
          className="fixed top-0 left-0 w-4 h-4 bg-accent-primary/30 rounded-full pointer-events-none z-50 mix-blend-difference"
          style={{
            x: mouseXSpring,
            y: mouseYSpring,
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
        />
      )}
    </section>
  );
};

export default Hero;