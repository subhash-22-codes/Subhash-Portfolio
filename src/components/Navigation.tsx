import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Home, User, Code2, Terminal, Mail } from 'lucide-react';

const navItems = [
  { id: 'about', label: 'About', icon: User },
  { id: 'projects', label: 'Work', icon: Code2 },
  { id: 'stack', label: 'Stack', icon: Terminal },
  { id: 'contact', label: 'Contact', icon: Mail },
];

const Navigation: React.FC = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [hidden, setHidden] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useScroll();

  // 1. Detect Mobile for Animation Direction
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 2. High Performance Scroll Detection
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

  return (
    <AnimatePresence>
      <motion.div
        variants={{
          visible: { y: 0, opacity: 1 },
          // Mobile: slide DOWN to hide. Desktop: slide UP to hide.
          hidden: { y: isMobile ? 100 : -100, opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        // FIXED POSITIONING LOGIC:
        // Mobile: bottom-6 (Thumb friendly, Name visible)
        // Desktop: top-6 (Standard Portfolio look)
        className="fixed bottom-6 left-0 right-0 md:top-6 md:bottom-auto z-50 flex justify-center px-4 pointer-events-none"
      >
        <nav 
          className="transform-gpu pointer-events-auto flex items-center gap-1 p-1.5 rounded-full border border-white/10 bg-black/80 backdrop-blur-xl shadow-lg shadow-black/20"
        >
          {/* Home Button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-3 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
          >
            <Home size={20} />
          </button>

          {/* Divider */}
          <div className="w-px h-5 bg-white/10 mx-1" />

          {/* Nav Items */}
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <li key={item.id} className="relative">
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-white/10 rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`
                      relative z-10 flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors duration-200
                      ${isActive ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'}
                    `}
                  >
                    {/* Desktop: Text / Mobile: Icons */}
                    <span className="hidden md:block">{item.label}</span>
                    <span className="block md:hidden">
                      <item.icon size={20} />
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* CTA - Only Visible on Desktop to save mobile space */}
          <div className="pl-2 hidden md:block">
             <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:bg-zinc-200 transition-colors"
             >
               Let's Talk
             </button>
          </div>
        </nav>
      </motion.div>
    </AnimatePresence>
  );
};

export default Navigation;