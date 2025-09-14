import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, ChevronLeft, ChevronRight, Code, Globe, Database, Zap } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  images: string[];
  category: 'Web' | 'fullstack' | 'AI' | 'game';
  featured: boolean;
}

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState('all');

  const projects: Project[] = [
      {
      id: 1,
      title: 'Tic Tac Toe',
      description: 'A modern, responsive Tic Tac Toe game built with React and TypeScript. Features smooth animations, game state management, and a clean UI design.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      github: 'https://github.com/subhash-22-codes/Tic-Tac-Toe',
      demo: 'https://tic-tac-toe-bruh.netlify.app',
      images: ['/images/tic1.png', '/images/tic2.png', '/images/tic3.png', '/images/tic4.png'],
      category: 'game',
      featured: false
    },
      {
      id: 2,
      title: 'CodeX40',
      description: 'A curated collection of 40+ most-asked company-specific coding questions with detailed solutions and LeetCode integration.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      github: 'https://github.com/subhash-22-codes/CodeX40',
      demo: 'https://code40learn40.netlify.app',
      images: ['/images/code1.png', '/images/code2.png', '/images/code3.png', '/images/code4.png'],
      category: 'Web',
      featured: true
    },
        {
        id: 3,
        title: 'Justice Genie',
      description: 'AI-powered legal assistance platform providing real-time answers, legal quizzes, and case-based insights through an intuitive dashboard.',
      tech: ['React (JSX)', 'Flask', 'MongoDB', 'Google Generative AI', 'Chart.js', 'Tailwind CSS', 'SMTP / Email Automation','PDF Generation & Reporting', 
              'Speech Recognition & TTS', 'File Handling & Security','Multilingual Translation & NLP', 'Ant Design'], 
        github: 'https://github.com/subhash-22-codes/Justice-Genie',
        demo: 'https://justice-genie-mu.vercel.app',
      images: ['/images/jg2.png','/images/jg3.png','/images/jg4.png','/images/jg5.png','/images/jg6.png','/images/jg7.png','/images/jg8.png','/images/jg9.png'],
      category: 'AI',
      featured: true
    },
      {
      id: 4,
      title: 'MemeGame',
      description: 'Multiplayer meme challenge game where players join rooms, chat, and take turns as Judge. The Judge provides a funny sentence, others pick memes, and the Judge secretly scores them. Supports multiple rounds, rotating judges, dynamic scoring, and final leaderboard with fun stats.',
      tech: ['React', 'TypeScript', 'Vite', 'Socket.io', 'MongoDB', 'Flask', 'JWT Authentication','Zustand','SMTP / Email Automation', 'Tailwind CSS', 'Async & background processing'],
      github: '',
      demo: '',
      images: ['/images/meme1.png', '/images/meme2.png', '/images/meme3.png', '/images/meme4.png', '/images/meme5.png', '/images/meme6.png', '/images/meme7.png', '/images/meme8.png', '/images/meme9.png', '/images/meme10.png', '/images/meme11.png', '/images/meme12.png', '/images/meme13.png', '/images/meme14.png', '/images/meme15.png', '/images/meme16.png', '/images/meme17.png'],
      category: 'game',
      featured: false
    },
   {
  id: 5,
  title: 'DataPulse',
      description: "Full-stack real-time data monitoring and visualization platform with support for multiple data sources (CSV uploads, simulated APIs, local DB). Includes real-time alerts, background processing, and a modular workspace system.",
      tech:[
    "React",
    "TypeScript",
    "Tailwind CSS",
    "FastAPI",
    "SQLAlchemy",
    "Pydantic",
    "Alembic",
    "PostgreSQL",
    "Celery",
    "Redis",
    "Google OAuth2",
    "JWT Auth",
    "SMTP",
    "Docker"
  ],
      github: '',
      demo: '',
      images: ['/images/dp1.png', '/images/dp2.png', '/images/dp3.png', '/images/dp4.png', '/images/dp5.png', '/images/dp6.png', '/images/dp7.png', '/images/dp8.png', '/images/dp9.png', '/images/dp10.png', '/images/dp11.png', '/images/dp12.png'],
      category: 'fullstack',
      featured: true
    },
    {
      id: 6,
      title: 'GTech DSA Series',
      description: 'An educational web app used by 5k+ learners for structured DSA practice. Features 30 handpicked LeetCode-style problems organized into 15 days with 10+ core patterns like Sliding Window, Two Pointers, Kadane’s Algorithm, and Binary Search. Actively shared via Instagram (@gtech_dsa) to help students crack placements.',
      tech: ['React', 'Tailwind CSS', 'Lucide Icons', 'Jest', 'CRA'],
      github: 'https://github.com/subhash-22-codes/Dsa_Placement_series', // if repo public add link here
      demo: 'https://gtechdsa.netlify.app',
      images: ['/images/gtech1.png', '/images/gtech2.png', '/images/gtech3.png','/images/gtech4.png', '/images/gtech5.png'],
      category: 'Web',
      featured: true
    }

  ];

  const filters = [
    { key: 'all', label: 'All Projects', icon: Code },
    { key: 'Web', label: 'Frontend', icon: Globe },
    { key: 'fullstack', label: 'Full Stack', icon: Database },
    { key: 'AI', label: 'AI/ML', icon: Zap },
    { key: 'game', label: 'Games', icon: Zap }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  return (
    <section id="projects" className="py-20 relative">
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
            <span className="text-accent-primary">Featured</span> Projects
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto font-poppins">
            A showcase of my latest work, featuring modern web applications, 
            AI-powered solutions, and innovative digital experiences.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filters.map(({ key, label, icon: Icon }) => (
            <motion.button
              key={key}
              onClick={() => setActiveFilter(key)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeFilter === key
                  ? 'bg-accent-primary text-bg-primary'
                  : 'glass-card hover:bg-glass-highlight'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-4 h-4" />
              {label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => openProject(project)}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-accent-primary text-bg-primary px-3 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </div>
                )}
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full text-xs font-medium">
                  {project.category}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-text-primary group-hover:text-accent-primary transition-colors font-poppins">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-sm mb-4 line-clamp-3 font-poppins">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-glass rounded-md text-xs font-medium text-text-secondary font-poppins"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-1 bg-glass rounded-md text-xs font-medium text-text-secondary font-poppins">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.github !== 'Coming soon' && project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-glass rounded-lg text-sm font-medium hover:bg-glass-highlight transition-colors font-poppins"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-accent-primary text-bg-primary rounded-lg text-sm font-medium hover:bg-accent-secondary transition-colors font-poppins"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
      {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProject}
          >
            <motion.div
              className="glass-strong max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-3xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
              {/* Modal Header */}
              <div className="p-6 border-b border-glass-border">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-accent-primary font-poppins">{selectedProject.title}</h3>
                <button
                    onClick={closeProject}
                    className="p-2 rounded-lg hover:bg-glass-highlight transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
              {/* Image Gallery */}
              <div className="relative mb-6">
                  <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden bg-gray-900">
                  <img
                    src={selectedProject.images[currentImageIndex]}
                      alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                      className="w-full h-full object-contain object-center"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                  />
                  
                    {/* Navigation Arrows */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 glass p-2 rounded-full hover:bg-glass-highlight transition-colors z-10"
                      >
                          <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={nextImage}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 glass p-2 rounded-full hover:bg-glass-highlight transition-colors z-10"
                      >
                          <ChevronRight className="w-6 h-6" />
                      </button>
                    </>
                  )}
                </div>

                  {/* Image Indicators */}
                {selectedProject.images.length > 1 && (
                  <div className="flex justify-center gap-2 mt-4">
                    {selectedProject.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentImageIndex ? 'bg-accent-primary' : 'bg-glass-border'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

                {/* Project Details */}
                <div className="space-y-6">
                  <p className="text-text-secondary leading-relaxed font-poppins">
                {selectedProject.description}
              </p>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3 font-poppins">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech) => (
                    <span
                      key={tech}
                          className="px-3 py-1 bg-glass rounded-lg text-sm font-medium font-poppins"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    {selectedProject.github !== 'Coming soon' && selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-glass rounded-xl font-medium hover:bg-glass-highlight transition-colors font-poppins"
                >
                        <Github className="w-5 h-5" />
                  View Code
                </a>
                    )}
                    {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-accent-primary text-bg-primary rounded-xl font-medium hover:bg-accent-secondary transition-colors font-poppins"
                >
                        <ExternalLink className="w-5 h-5" />
                  Live Demo
                </a>
                    )}
              </div>
            </div>
          </div>
            </motion.div>
          </motion.div>
      )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;