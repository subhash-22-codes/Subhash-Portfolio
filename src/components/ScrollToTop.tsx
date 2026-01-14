import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          // THE FIX: p-2.5 (smaller), transparent border, lower opacity
          className="fixed bottom-6 right-6 z-50 p-2.5 bg-white/[0.03] hover:bg-white text-white/20 hover:text-black border border-white/5 hover:border-white rounded-xl backdrop-blur-md transition-all duration-500 group outline-none"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Smaller, thinner icon */}
          <ChevronUp size={18} strokeWidth={1.5} className="group-hover:-translate-y-0.5 transition-transform duration-500" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;