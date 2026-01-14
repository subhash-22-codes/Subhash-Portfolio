import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Download, 
  Award, 
  Trophy, 
  ExternalLink,
  ArrowRight,
} from 'lucide-react';

const Resume: React.FC = () => {
  const [activeTab, setActiveTab] = useState('certifications');

  // Premium Animation Variants
  const slideUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const certifications = [
    {
      title: 'Mastering Generative AI',
      issuer: 'GeeksforGeeks',
      period: '2025',
      category: 'AI & Machine Learning',
      description: [
        'GenAI models and architectures',
        'Large Language Model implementation',
        'AI-powered real-world solutions',
        'Model optimization and prompt engineering'
      ],
      technologies: ['Python', 'Transformers', 'OpenAI'],
    },
    {
      title: 'Cisco Certified Network Associate (CCNA)',
      issuer: 'NetAcad',
      period: '2025',
      category: 'Networking',
      description: [
        'Routing and switching fundamentals',
        'Network security and access control',
        'IP connectivity and services',
        'Automation and programmability'
      ],
      technologies: ['Cisco IOS', 'TCP/IP', 'Security'],
    },
    {
      title: 'NVIDIA Deep Learning',
      issuer: 'NVIDIA',
      period: '2024',
      category: 'Deep Learning & NLP',
      description: [
        'Neural network architectures',
        'GPU-accelerated computing',
        '91% accuracy in NLP model assignments',
        'Model tuning and optimization'
      ],
      technologies: ['CUDA', 'PyTorch', 'CNNs/RNNs'],
    },
    {
      title: 'Google Project Management',
      issuer: 'Coursera',
      period: '2023',
      category: 'Management',
      description: [
        'Agile and Scrum methodologies',
        'Risk management strategies',
        'Tools for project planning'
      ],
      technologies: ['Agile', 'Scrum', 'Risk Management'],
    },
    {
      title: 'Python DSA',
      issuer: 'University of Michigan',
      period: '2023',
      category: 'Computer Science',
      description: [
        'Mastered core Python data structures',
        'Stacks, queues, and linked lists',
        'Binary trees and graphs (BFS/DFS)'
      ],
      technologies: ['Python', 'DSA', 'Algorithms'],
    }
  ];

  const achievements = [
    {
      title: 'HackAPTS State Hackathon – 3rd Place',
      organization: 'GeeksforGeeks @ ANITS',
      period: '2025',
      description: 'Secured 3rd place at HackAPTS 2025. Solved challenging real-world DSA problems under the theme of Innovation.',
      impact: 'Ranked in top 1% among 300+ participants.',
      link: 'https://anits.pod.ai/pages/certificate/skgYfC',
      profileImage: '/images/hackapts.jpg'
    },
    {
      title: 'GTech DSA Co-Founder',
      organization: 'Instagram Tech Channel',
      period: 'July 2025 - Present',
      description: 'Co-founded educational platform teaching Data Structures and Algorithms to students across Telangana.',
      impact: '10.5K+ followers, 900K+ views, 10K+ students taught.',
      link: 'https://instagram.com/gtech_dsa',
      profileImage: '/images/gtech_dsa.jpg'
    },
    {
      title: "Smart India Hackathon – Team Leader",
      organization: "MRCET Internal Round",
      period: "2024",
      description: "Led a 6-member team with the solution 'Inclusive Learning App for Deaf and Mute'.",
      impact: "Cleared internal rounds with a socially impactful solution.",
      profileImage: "/images/SIH.png"
    },
    {
      title: 'Competitive Programming',
      organization: 'LeetCode & CodeChef',
      period: '2022 - Present',
      description: 'Active problem solver with consistent performance across major platforms.',
      impact: '269+ problems solved on LeetCode.',
      link: 'https://leetcode.com/u/SubhashY/',
      profileImage: '/images/lc.png'
    }
  ];

  return (
    <section id="resume" className="relative min-h-screen bg-[#0a0a0a] text-white py-24 overflow-hidden px-6 md:px-16 lg:py-32">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER: Animated Title */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-12">
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex items-center gap-4"
            >
              <span className="w-12 h-[1px] bg-white/20"></span>
              <span className="font-sans text-[11px] tracking-[0.5em] uppercase text-white/40 font-bold">The Master Record</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-7xl md:text-9xl tracking-tightest leading-none"
            >
              Credentials <br /> <span className="text-white/30 italic">& Impact.</span>
            </motion.h2>
          </div>

          <motion.button 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-4 px-10 py-5 bg-white text-black rounded-full font-sans text-xs font-bold uppercase tracking-[0.2em] shadow-2xl transition-all"
          >
            <Download size={16} /> Save Full Resume
          </motion.button>
        </div>

        {/* TABS: Clean Monochrome Switcher */}
        <div className="flex gap-6 mb-20 border-b border-white/5 pb-6 overflow-x-auto scrollbar-hide">
          {[
            { key: 'certifications', label: 'Verified Skills', icon: Award },
            { key: 'achievements', label: 'Milestones', icon: Trophy }
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-3 px-2 py-4 font-sans text-[11px] font-bold uppercase tracking-[0.3em] transition-all relative ${
                activeTab === tab.key ? 'text-white' : 'text-white/20 hover:text-white/50'
              }`}
            >
              <tab.icon size={14} />
              {tab.label}
              {activeTab === tab.key && (
                <motion.div layoutId="activeTab" className="absolute bottom-0 left-0 w-full h-[2px] bg-white" />
              )}
            </button>
          ))}
        </div>

        {/* CONTENT AREA */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            {activeTab === 'certifications' ? (
              <motion.div 
                key="certs"
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-10"
              >
                {certifications.map((cert, idx) => (
                  <motion.div 
                    variants={slideUp} initial="initial" whileInView="whileInView"
                    key={idx} 
                    className="group p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 hover:border-white/30 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-widest text-white/30 mb-6 block">/ {cert.category}</span>
                      <h3 className="font-serif text-3xl mb-3 pr-10">{cert.title}</h3>
                      <p className="font-sans text-xs text-white/20 uppercase tracking-widest mb-10">{cert.issuer} — {cert.period}</p>
                      
                      <ul className="space-y-4">
                        {cert.description.map((desc, i) => (
                          <li key={i} className="flex items-start gap-4 text-white/50 text-sm leading-relaxed">
                            <ArrowRight size={14} className="mt-1 opacity-20" /> {desc}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-10 mt-10 border-t border-white/5">
                      {cert.technologies.map(t => (
                        <span key={t} className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[9px] font-mono text-white/30">
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="achievements"
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-10"
              >
                {achievements.map((item, idx) => (
                  <motion.div 
                    variants={slideUp} initial="initial" whileInView="whileInView"
                    key={idx} 
                    className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 flex flex-col gap-10 group"
                  >
                    <div className="flex justify-between items-start">
                      <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                        <img src={item.profileImage} className="w-full h-full object-cover" alt="" />
                      </div>
                      {item.link && (
                        <a href={item.link} target="_blank" className="p-4 bg-white/5 rounded-full hover:bg-white hover:text-black transition-all">
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                    <div>
                      <h4 className="font-serif text-4xl mb-3">{item.title}</h4>
                      <p className="font-sans text-[10px] text-white/30 uppercase tracking-[0.2em] mb-8">{item.organization} // {item.period}</p>
                      <p className="font-sans text-lg text-white/60 leading-relaxed mb-8">{item.description}</p>
                      <div className="p-5 bg-white/5 border border-white/10 rounded-2xl text-[11px] font-mono text-white/50 italic">
                        Result: {item.impact}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Aesthetic Side Detail */}
      <div className="absolute right-12 bottom-20 hidden lg:block opacity-5">
        <p className="font-mono text-[9px] tracking-[0.6em] uppercase text-white rotate-90 origin-right whitespace-nowrap">
          Based in Khammam, Telangana — 2026
        </p>
      </div>
    </section>
  );
};

export default Resume;