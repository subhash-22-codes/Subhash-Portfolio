import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  ExternalLink, 
  Plus, 
  Cpu, 
  Globe, 
  Database, 
  Gamepad2,
  ChevronRight,
  ChevronLeft,
  Layers,
  Terminal
} from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: 'game' | 'Web' | 'AI' | 'fullstack';
  description: string;
  tech: string[];
  github: string;
  demo: string;
  images: string[];
  featured: boolean;
}

const Projects: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(5);
  const [imgIndex, setImgIndex] = useState<Record<number, number>>({});
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 5,
      title: 'DataPulse',
      category: 'fullstack',
      description: "Enterprise-grade real-time telemetry and visualization engine. Supports multiple data sources (CSV, APIs, DB) with real-time alerts, background processing via Celery/Redis, and a modular workspace system.",
      tech: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Celery", "Redis", "Docker", "Google OAuth2"],
      github: 'coming soon', 
      demo: 'https://data-pulse-eight.vercel.app',   
      images: ['/images/dp1.png', '/images/dp2.png', '/images/dp3.png', '/images/dp4.png', '/images/dp5.png', '/images/dp6.png', '/images/dp7.png', '/images/dp8.png', '/images/dp9.png', '/images/dp10.png', '/images/dp11.png', '/images/dp12.png'],
      featured: true
    },
    {
      id: 3,
      title: 'Justice Genie',
      category: 'AI',
      description: "AI-powered legal assistance platform providing real-time answers, legal quizzes, and case-based insights. Features PDF generation, multilingual NLP, speech recognition, and automated email reporting.",
      tech: ["React", "Flask", "MongoDB", "Google GenAI", "Chart.js", "Tailwind", "NLP", "SMTP"],
      github: 'https://github.com/subhash-22-codes/Justice-Genie',
      demo: 'https://justice-genie-mu.vercel.app',
      images: ['/images/jg2.png', '/images/jg3.png', '/images/jg4.png', '/images/jg5.png', '/images/jg6.png', '/images/jg7.png', '/images/jg8.png', '/images/jg9.png'],
      featured: true
    },
    {
      id: 4,
      title: 'MemeGame',
      category: 'game',
      description: "Real-time multiplayer meme challenge engine. Players join rooms, chat, and take turns as Judge. Features rotating judges, dynamic scoring, JWT-secured pipelines, and background async processing.",
      tech: ["React", "Socket.io", "Node.js", "MongoDB", "Flask", "Zustand", "JWT", "Tailwind"],
      github: '',
      demo: '',
      images: ['/images/meme1.png', '/images/meme2.png', '/images/meme3.png', '/images/meme4.png', '/images/meme5.png', '/images/meme6.png', '/images/meme7.png', '/images/meme8.png', '/images/meme9.png', '/images/meme10.png', '/images/meme11.png', '/images/meme12.png', '/images/meme13.png', '/images/meme14.png', '/images/meme15.png', '/images/meme16.png', '/images/meme17.png'],
      featured: false
    },
    {
      id: 6,
      title: 'GTech DSA Series',
      category: 'Web',
      description: "Educational distribution platform supporting 5k+ learners. Optimized for high-traffic content delivery with 30+ structured LeetCode patterns and daily practice roadmaps.",
      tech: ["React", "Tailwind CSS", "Lucide Icons", "Jest", "CRA"],
      github: 'https://github.com/subhash-22-codes/Dsa_Placement_series',
      demo: 'https://gtechdsa.netlify.app',
      images: ['/images/gtech1.png', '/images/gtech2.png', '/images/gtech3.png', '/images/gtech4.png', '/images/gtech5.png'],
      featured: true
    },
    {
      id: 2,
      title: 'CodeX40',
      category: 'Web',
      description: "Technical repository of 40+ optimized algorithmic solutions. Integrated LeetCode patterns with detailed solution breakdowns and performance-first frontend rendering.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      github: 'https://github.com/subhash-22-codes/CodeX40',
      demo: 'https://code40learn40.netlify.app',
      images: ['/images/code1.png', '/images/code2.png', '/images/code3.png', '/images/code4.png'],
      featured: true
    },
    {
      id: 1,
      title: 'Tic Tac Toe',
      category: 'game',
      description: "Modern responsive gaming interface with state management and clean UI animations. A study in component architecture and TypeScript strict typing.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      github: 'https://github.com/subhash-22-codes/Tic-Tac-Toe',
      demo: 'https://tic-tac-toe-bruh.netlify.app',
      images: ['/images/tic1.png', '/images/tic2.png', '/images/tic3.png', '/images/tic4.png'],
      featured: false
    }
  ];

  const handleNextImg = (e: React.MouseEvent, projectId: number, total: number) => {
    e.stopPropagation();
    setImgIndex(prev => ({ ...prev, [projectId]: ((prev[projectId] || 0) + 1) % total }));
  };

  const handlePrevImg = (e: React.MouseEvent, projectId: number, total: number) => {
    e.stopPropagation();
    setImgIndex(prev => ({ ...prev, [projectId]: ((prev[projectId] || 0) - 1 + total) % total }));
  };

  const getCategoryIcon = (cat: string) => {
    switch(cat) {
      case 'AI': return <Cpu size={14} className="text-emerald-400" />;
      case 'game': return <Gamepad2 size={14} className="text-purple-400" />;
      case 'fullstack': return <Database size={14} className="text-blue-400" />;
      default: return <Globe size={14} className="text-orange-400" />;
    }
  };

  return (
    <section id="projects" className="relative min-h-screen bg-[#020202] text-[#fdfdfd] py-12 lg:py-24 overflow-hidden selection:bg-emerald-500/30">
      
      {/* Background Grid (Matched to Hero/About) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem] lg:bg-[size:6rem_6rem] pointer-events-none" />
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-24 relative z-10">
        
        {/* HEADER */}
        <div className="mb-16 lg:mb-24 space-y-4 border-l-2 border-zinc-900 pl-6 md:pl-10">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <Layers size={16} className="text-zinc-500" />
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-zinc-600">Dev_Log: 2024-25</span>
          </motion.div>

          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter uppercase leading-[0.8] text-white opacity-90">
            Selected<br/><span className="text-zinc-800">Works</span>
          </h2>
        </div>

        {/* ACCORDION */}
        <div className="flex flex-col">
          {projects.map((project, idx) => {
            
            const isHovered = hoveredProject === project.id;
            const isDimmed = hoveredProject !== null && !isHovered && expandedId !== project.id;

            return (
              <div 
                key={project.id} 
                className={`
                  group border-b border-zinc-900/60 transition-all duration-500 ease-in-out
                  ${expandedId === project.id ? 'bg-zinc-900/20' : 'hover:bg-zinc-900/10'}
                  ${isDimmed ? 'opacity-30 blur-[1px]' : 'opacity-100'} 
                `}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <button
                  onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                  className="w-full flex flex-col md:flex-row items-start md:items-center justify-between py-8 md:py-12 text-left relative gap-4 md:gap-0"
                >
                  {/* Active Indicator Line */}
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: expandedId === project.id ? '100%' : '0%' }}
                    className="absolute left-0 top-0 w-1 bg-emerald-500"
                  />

                  <div className="flex items-start md:items-center gap-6 md:gap-12 pl-4 md:pl-6 w-full">
                    <span className={`font-mono text-xs transition-colors w-8 pt-1.5 md:pt-0 ${expandedId === project.id ? 'text-emerald-500' : 'text-zinc-700 group-hover:text-zinc-500'}`}>
                      0{idx + 1}
                    </span>
                    
                    <div className="space-y-3 md:space-y-2 flex-1">
                      <h3 className={`text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter uppercase transition-all duration-500 ${expandedId === project.id ? 'text-white md:translate-x-4' : 'text-zinc-400 group-hover:text-zinc-200'}`}>
                        {project.title}
                      </h3>
                      
                      {/* Tags - Always visible on mobile, faded on desktop until active/hover */}
                      <div className={`flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-widest transition-all duration-500 ${expandedId === project.id ? 'opacity-100 md:translate-x-4' : 'opacity-60 md:opacity-0 md:group-hover:opacity-60'}`}>
                        <span className="flex items-center gap-2 text-zinc-400 bg-zinc-900/50 px-2 py-1 rounded border border-zinc-800">
                          {getCategoryIcon(project.category)}
                          {project.category === 'fullstack' ? 'FULL_STACK' : project.category}
                        </span>
                        {project.featured && (
                          <span className="text-emerald-400 border border-emerald-500/20 px-2 py-1 rounded bg-emerald-500/5">
                            FEATURED
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Accordion Icon */}
                  <div className={`absolute right-0 top-8 md:top-auto md:relative mr-2 md:mr-6 p-3 rounded-full border transition-all duration-300 ${expandedId === project.id ? 'bg-white border-white text-black rotate-180' : 'border-zinc-800 text-zinc-600 group-hover:border-zinc-600'}`}>
                    <Plus size={18} className={`transition-transform duration-300 ${expandedId === project.id ? 'rotate-45' : ''}`} />
                  </div>
                </button>

                <AnimatePresence>
                  {expandedId === project.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "circOut" }}
                      className="overflow-hidden bg-[#080808]/50 border-t border-zinc-900/50"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 py-10 px-4 md:px-12">
                        
                        {/* Left: Specs */}
                        <div className="lg:col-span-5 space-y-8 md:space-y-10 order-2 lg:order-1">
                          <div className="space-y-4 md:space-y-6">
                            <div className="flex items-center gap-2 text-zinc-500 font-mono text-[10px] uppercase tracking-widest">
                              <Terminal size={12} />
                              <span>/ System_Brief</span>
                            </div>
                            <p className="text-zinc-300 leading-relaxed font-light text-base md:text-lg">
                              {project.description}
                            </p>
                          </div>

                          <div className="space-y-4">
                            <div className="flex items-center gap-2 text-zinc-500 font-mono text-[10px] uppercase tracking-widest">
                              <Layers size={12} />
                              <span>/ Tech_Matrix</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t) => (
                                  <span key={t} className="px-3 py-1.5 bg-zinc-900/80 text-zinc-400 rounded text-[10px] sm:text-[11px] font-mono border border-zinc-800/80 hover:border-emerald-500/30 hover:text-emerald-400 transition-colors cursor-default">
                                    {t}
                                  </span>
                                ))}
                            </div>
                          </div>

                          <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-zinc-900/50">
                            {project.github && project.github !== 'coming soon' && (
                              <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 px-6 py-4 bg-zinc-900 text-white rounded flex items-center justify-center gap-3 hover:bg-zinc-800 transition-all font-mono text-xs uppercase tracking-wider group/btn">
                                <Github size={16} className="group-hover/btn:text-emerald-400 transition-colors"/> 
                                <span>Repo_Access</span>
                              </a>
                            )}
                            {project.demo && (
                              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex-1 px-6 py-4 bg-white text-black rounded flex items-center justify-center gap-3 hover:bg-zinc-200 transition-all font-mono text-xs uppercase tracking-wider font-bold">
                                <ExternalLink size={16} /> 
                                <span>Live_Deploy</span>
                              </a>
                            )}
                          </div>
                        </div>

                        {/* Right: Gallery */}
                        <div className="lg:col-span-7 order-1 lg:order-2">
                            <div className="relative rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/50 aspect-video group/image shadow-2xl">
                              <AnimatePresence mode='wait'>
                                <motion.img 
                                  key={imgIndex[project.id] || 0}
                                  src={project.images[imgIndex[project.id] || 0]} 
                                  initial={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                                  exit={{ opacity: 0, scale: 1.05 }}
                                  transition={{ duration: 0.4 }}
                                  alt={project.title} 
                                  className="w-full h-full object-contain bg-[#050505]"
                                  onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = 'none';
                                  }}
                                />
                              </AnimatePresence>
                              
                              {/* Desktop Controls (Overlay) */}
                              {project.images.length > 1 && (
                                <div className="hidden md:flex absolute inset-0 justify-between items-center px-4 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300">
                                  <button onClick={(e) => handlePrevImg(e, project.id, project.images.length)} className="p-3 bg-black/50 hover:bg-emerald-500 hover:text-black text-white rounded-full backdrop-blur-md transition-all border border-white/10">
                                    <ChevronLeft size={20} />
                                  </button>
                                  <button onClick={(e) => handleNextImg(e, project.id, project.images.length)} className="p-3 bg-black/50 hover:bg-emerald-500 hover:text-black text-white rounded-full backdrop-blur-md transition-all border border-white/10">
                                    <ChevronRight size={20} />
                                  </button>
                                </div>
                              )}
                            </div>

                            {/* Mobile Controls & Counter */}
                            <div className="mt-4 flex justify-between items-center px-1">
                              <div className="flex gap-1.5 flex-wrap">
                                {project.images.map((_, i) => (
                                  <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === (imgIndex[project.id] || 0) ? 'w-8 bg-emerald-500' : 'w-2 bg-zinc-800'}`} />
                                ))}
                              </div>
                              
                              {/* Mobile Buttons */}
                              {project.images.length > 1 && (
                                <div className="flex md:hidden gap-3">
                                    <button onClick={(e) => handlePrevImg(e, project.id, project.images.length)} className="p-2.5 text-zinc-400 active:text-white bg-zinc-900 rounded-lg border border-zinc-800"><ChevronLeft size={18}/></button>
                                    <button onClick={(e) => handleNextImg(e, project.id, project.images.length)} className="p-2.5 text-zinc-400 active:text-white bg-zinc-900 rounded-lg border border-zinc-800"><ChevronRight size={18}/></button>
                                </div>
                              )}
                            </div>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;