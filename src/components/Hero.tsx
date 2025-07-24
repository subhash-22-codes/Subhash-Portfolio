import React, { useState, useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import Lottie from 'lottie-react';
import animationData from '../assets/animations/Animation.json';
 // adjust path as needed
import type { Variants } from 'framer-motion';

// Motion variants for different animations
const slideFromRight: Variants = {
  hidden: { 
    opacity: 0, 
    x: 100,
    filter: 'blur(4px)'
  },
  visible: { 
    opacity: 1, 
    x: 0,
    filter: 'blur(0px)',
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.1, 0.25, 1],
      delay: 0.2
    }
  }
};

const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    filter: 'blur(2px)'
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: 'blur(0px)',
    transition: { 
      duration: 0.6, 
      ease: [0.25, 0.1, 0.25, 1] 
    }
  }
};

const bubblePop: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.3,
    y: 20
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: { 
      type: "spring",
      stiffness: 400,
      damping: 20,
      mass: 0.8
    }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.15, 
      delayChildren: 0.3 
    }
  }
};

const socialStagger: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.2, 
      delayChildren: 1.2 
    }
  }
};

const imageReveal: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    rotateY: -20
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    rotateY: 0,
    transition: { 
      duration: 1,
      ease: [0.25, 0.1, 0.25, 1],
      delay: 0.5
    }
  }
};


// Typing effect hook
const useTypingEffect = (text: string, speed: number = 100, startDelay: number = 0) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    
    const startTyping = () => {
      let i = 0;
      const typeNextChar = () => {
        if (i <= text.length) {
          setDisplayText(text.slice(0, i));
          i++;
          timeout = setTimeout(typeNextChar, speed);
        } else {
          setIsComplete(true);
        }
      };
      typeNextChar();
    };

    const startTimeout = setTimeout(startTyping, startDelay);
    
    return () => {
      clearTimeout(timeout);
      clearTimeout(startTimeout);
    };
  }, [text, speed, startDelay]);

  return { displayText, isComplete };
};

// Lazy loading wrapper for the image placeholder

const Hero: React.FC = () => {
  const { ref: heroRef, inView: heroInView } = useInView({ 
    threshold: 0.1, 
    triggerOnce: false 
  });
  
  const { ref: contentRef, inView: contentInView } = useInView({ 
    threshold: 0.2, 
    triggerOnce: false
  });
  
  const { ref: imageRef, inView: imageInView } = useInView({ 
    threshold: 0.3, 
    triggerOnce: false 
  });

  // Typing effect for subtitle
  const { displayText: typedSubtitle, isComplete } = useTypingEffect(
    'real apps that work.', 
    80, 
    1000 // Start after 1 second
  );

  const scrollToProjects = () => {
    const projectsElement = document.querySelector('#projects');
    if (projectsElement) {
      projectsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Subhash_Resume_2025.pdf';
    link.download = 'Subhash_Yaganti_Resume.pdf';
    link.click();
  };

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/subhash-22-codes', 
      label: 'GitHub Profile',
      ariaLabel: 'Visit my GitHub profile'
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/subhash-yaganti-a8b3b626a/', 
      label: 'LinkedIn Profile',
      ariaLabel: 'Connect with me on LinkedIn'
    },
    { 
      icon: Mail, 
      href: 'mailto:subashyagantisubbu@gmail.com', 
      label: 'Send Email',
      ariaLabel: 'Send me an email'
    }
  ];

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20"
      style={{ 
        contentVisibility: 'auto', 
        containIntrinsicSize: '100vh',
        contain: 'layout style paint'
      }}
    >
      {/* Performance-optimized background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none will-change-transform">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-[var(--accent-primary)]/8 to-[var(--highlight)]/6 blur-3xl"
          animate={heroInView ? {
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8]
          } : {}}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-[var(--highlight)]/6 to-[var(--accent-primary)]/8 blur-3xl"
          animate={heroInView ? {
            scale: [1, 1.2, 1],
            opacity: [0.6, 0.9, 0.6]
          } : {}}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side: Content */}
          <motion.div
            ref={contentRef}
            variants={staggerContainer}
            initial="hidden"
            animate={contentInView ? "visible" : "hidden"}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Name - Slide from right */}
            <motion.div 
              variants={slideFromRight}
              className="mb-6"
            >
              <h1 className="font-montserrat font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-6 leading-tight tracking-tight">
                <span className="gradient-text">Subhash Yaganti</span>
              </h1>
            </motion.div>

            {/* Subtitle with typing effect */}
            <motion.div
              variants={fadeInUp}
              className="mb-8"
            >
              <p className="font-arvo text-lg sm:text-xl md:text-2xl lg:text-3xl text-[var(--text-primary)] leading-relaxed">
                Full Stack Developer who loves building{' '}
                <span className="gradient-text font-bold">
                  {typedSubtitle}
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{
                      duration: 1,
                      repeat: isComplete ? 0 : Infinity,
                      ease: "easeInOut"
                    }}
                    className="ml-1"
                  >
                    |
                  </motion.span>
                </span>
              </p>
            </motion.div>

            {/* Action buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start items-center mb-12"
            >
              <motion.button
                onClick={scrollToProjects}
                className="btn-primary font-poppins text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 interactive flex items-center gap-3 w-full sm:w-auto justify-center"
                whileHover={{ 
                  scale: 1.02, 
                  y: -2,
                  boxShadow: "0 8px 32px rgba(244, 223, 200, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
                aria-label="View my work and projects"
              >
                View My Work
                <ArrowDown size={20} />
              </motion.button>

              <motion.button
                onClick={downloadResume}
                className="btn-secondary font-poppins text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 interactive flex items-center gap-3 w-full sm:w-auto justify-center"
                whileHover={{ 
                  scale: 1.02, 
                  y: -2
                }}
                whileTap={{ scale: 0.98 }}
                aria-label="Download my resume PDF"
              >
                <Download size={20} />
                Download Resume
              </motion.button>
            </motion.div>

            {/* Social icons - Bubbly animation */}
            <motion.div 
              variants={socialStagger}
              initial="hidden"
              animate={contentInView ? "visible" : "hidden"}
              className="flex justify-center lg:justify-start gap-4 sm:gap-6"
            >
              {socialLinks.map(({ icon: Icon, href, label, ariaLabel }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={bubblePop}
                  className="p-3 sm:p-4 glass-card hover:bg-[var(--accent-primary)] hover:bg-opacity-10 transition-all duration-300 interactive group"
                  whileHover={{ 
                    scale: 1.1, 
                    y: -4,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={ariaLabel}
                  tabIndex={0}
                >
                  <Icon size={24} className="text-[var(--highlight)] group-hover:text-black transition-colors duration-300" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

<div ref={imageRef} className="flex justify-center lg:justify-end order-1 lg:order-2">
  <motion.div
    variants={imageReveal}
    initial="hidden"
    animate={imageInView ? "visible" : "hidden"}
    className="relative w-full max-w-[350px] sm:max-w-[400px] lg:max-w-[450px] aspect-square"
  >
    {/* Glow effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)]/20 to-[var(--highlight)]/15 rounded-full blur-2xl scale-110" />
    
    {/* Main container */}
    <div className="relative glass-card p-4 sm:p-6 rounded-3xl overflow-hidden h-full">
      <Suspense fallback={
        <div className="w-full h-full bg-gradient-to-br from-[var(--accent-primary)]/10 to-[var(--highlight)]/5 rounded-2xl animate-pulse" />
      }>
        <Lottie
          animationData={animationData}
          loop
          autoplay
          className="w-full h-full"
        />
      </Suspense>
      
      <motion.div 
        className="absolute bottom-4 left-4 right-4"
        initial={{ opacity: 0, y: 20 }}
        animate={imageInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
      
          <p className="text-sm font-poppins text-center gradient-text font-semibold">
            Building the Future
          </p>
        
      </motion.div>
    </div>
  </motion.div>
</div>

        </div>
      </div>

      <motion.div
        className="hidden sm:flex absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <div className="w-6 h-10 border-2 border-[var(--highlight)] rounded-full flex justify-center relative">
          <motion.div
            className="w-1 h-3 bg-[var(--highlight)] rounded-full mt-2"
            animate={heroInView ? {
              y: [0, 16, 0],
              opacity: [1, 0.3, 1]
            } : {}}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;