import React from 'react';
import { motion } from 'framer-motion';

const HeroIllustration: React.FC = () => {
  // Animation for the "Sketching" effect
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { 
          delay: i * 0.4, 
          type: "spring", 
          duration: 2.5, 
          bounce: 0, 
          ease: "easeInOut" 
        },
        opacity: { duration: 0.2, delay: i * 0.4 }
      }
    })
  };

  const sketchProps = {
    fill: "none",
    stroke: "#FFFFFF",
    strokeWidth: "3",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    variants: draw,
    // Applying the wobble filter defined below
    filter: "url(#handDrawn)" 
  };

  return (
    <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 relative">
      <motion.svg
        viewBox="0 0 512 512"
        className="w-full h-full"
        initial="hidden"
        animate="visible"
      >

        <defs>
          {/* This filter creates the "Hand-Drawn" imperfection.
            feTurbulence: Creates a noise pattern.
            feDisplacementMap: Uses that noise to warp the lines.
          */}
          <filter id="handDrawn" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence 
              type="turbulence" 
              baseFrequency="0.03" 
              numOctaves="2" 
              result="noise" 
            />
            <feDisplacementMap 
              in="SourceGraphic" 
              in2="noise" 
              scale="4" 
            />
          </filter>
        </defs>

        {/* Outer Head - Slightly imperfect circle path */}
        <motion.path
          custom={0}
          {...sketchProps}
          d="M256,40 C136.7,40 40,136.7 40,256 C40,375.3 136.7,472 256,472 C375.3,472 472,375.3 472,256 C472,136.7 375.3,40 256,40"
        />

        {/* Left Eye - Simple Arch */}
        <motion.path
          custom={1}
          {...sketchProps}
          d="M160,200 C160,170 210,170 210,200"
        />

        {/* Right Eye - Simple Arch */}
        <motion.path
          custom={2}
          {...sketchProps}
          d="M302,200 C302,170 352,170 352,200"
        />

        {/* Mouth - Organic curve */}
        <motion.path
          custom={3}
          {...sketchProps}
          d="M150,320 C180,380 332,380 362,320"
        />
        
        {/* Added a little "extra" sketch line for character */}
        <motion.path
          custom={4}
          {...sketchProps}
          strokeWidth="2"
          opacity="0.5"
          d="M240,400 C256,410 270,400 280,390"
        />
      </motion.svg>
    </div>
  );
};

export default HeroIllustration;