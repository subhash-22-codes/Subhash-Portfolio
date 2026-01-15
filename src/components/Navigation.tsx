import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Home, User, Mail,Layers, Folders } from 'lucide-react';

const navItems = [
  { id: 'about', label: 'About', icon: User },
  { id: 'projects', label: 'Work', icon: Folders },
  { id: 'skills', label: 'Skills', icon: Layers },
  { id: 'contact', label: 'Contact', icon: Mail },
];

const Navigation: React.FC = () => {
  // --- CORE LOGIC (100% PRESERVED) ---
  const [activeTab, setActiveTab] = useState('about');
  const [hidden, setHidden] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // --- SYNCED ANIMATION VARIANTS (FROM ABOUT.TSX) ---
  const navContainerVariants = {
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.215, 0.610, 0.355, 1.000] } 
    },
    hidden: { 
      y: isMobile ? 100 : -100, 
      opacity: 0,
      transition: { duration: 0.5, ease: [0.215, 0.610, 0.355, 1.000] }
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        variants={navContainerVariants}
        animate={hidden ? "hidden" : "visible"}
        className="fixed bottom-6 left-0 right-0 md:top-6 md:bottom-auto z-50 flex justify-center px-4 pointer-events-none"
      >
        <nav 
          className="transform-gpu pointer-events-auto flex items-center gap-1 p-1.5 rounded-full border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl shadow-2xl"
        >
          {/* Home Button: Synced with your "Engine" icons */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-3 rounded-full hover:bg-white/5 text-white/30 hover:text-white transition-all duration-300"
          >
            <Home size={18} />
          </button>

          {/* Divider: Minimalist */}
          <div className="w-[1px] h-4 bg-white/10 mx-1" />

          {/* Nav Items */}
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <li key={item.id} className="relative">
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        layoutId="active-pill"
                        className="absolute inset-0 bg-white rounded-full"
                        transition={{ type: "spring", stiffness: 400, damping: 35 }}
                      />
                    )}
                  </AnimatePresence>
                  
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`
                      relative z-10 flex items-center gap-2 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-500
                      ${isActive ? 'text-black' : 'text-white/40 hover:text-white'}
                    `}
                  >
                    {/* Desktop: Label / Mobile: Icon */}
                    <span className="hidden md:block font-sans">{item.label}</span>
                    <span className="block md:hidden">
                      <item.icon size={18} />
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </motion.div>
    </AnimatePresence>
  );
};

export default Navigation;