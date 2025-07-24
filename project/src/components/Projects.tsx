import React, { useState, useCallback, useMemo } from 'react';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  images: string[];
}

const Projects: React.FC = () => {
  // Single intersection observer for better performance
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Memoize projects data to prevent unnecessary re-renders
  const projects: Project[] = useMemo(() => [
      {
      id: 1,
      title: 'Tic Tac Toe',
      description: 'A simple Tic Tac Toe game with responsive Tailwind UI/UX, built to learn React and TypeScript in a fun and practical way.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'JavaScript', 'HTML5'],
      github: 'https://github.com/subhash-22-codes/Tic-Tac-Toe',
      demo: 'https://tic-tac-toe-bruh.netlify.app',
      images: [
        '/images/tic1.png',
        '/images/tic2.png',
        '/images/tic3.png',
        '/images/tic4.png'
      ]
    },

      {
      id: 2,
      title: 'CodeX40',
      description: 'A curated collection of 40+ most-asked company-specific coding questions. Each entry includes the problem, input/output format, constraints, and a link to solve it directly on LeetCode.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'HTML5'],
      github: 'https://github.com/subhash-22-codes/CodeX40',
      demo: 'https://code40learn40.netlify.app',
      images: [
        '/images/code1.png',
        '/images/code2.png',
        '/images/code3.png',
        '/images/code4.png'
      ]
    },
        {
        id: 3,
        title: 'Justice Genie',
        description: 'Understand your legal rights with real-time AI-powered legal assistance. Justice Genie helps users get instant answers, access legal quizzes, and explore case-based insights through a modern, responsive dashboard.',
        tech: ['React', 'Javascript', 'Flask', 'MongoDB', 'Tailwind CSS', 'Google Gen AI', 'CSS3', 'HTML5','Chart.js', 'SMTP'],
        github: 'Coming soon',
        demo: '',
        images: [
          '/images/jg1.png'
        ]
      },

      {
      id: 4,
      title: 'MemeGame',
      description: 'A multiplayer meme challenge game where players join rooms, one becomes a judge, and others compete using memes. Includes chat, video reactions, multiple rounds, and real-time scoring with a leaderboard.',
      tech: ['React', 'TypeScript', 'Socket.io', 'MongoDB', 'Flask', 'Tailwind CSS'],
      github: '', // Add when ready
      demo: '',   // Add when ready
      images: [
        '/images/meme1.png',
        '/images/meme2.png',
        '/images/meme3.png'
      ]
    },

   {
  id: 5,
  title: 'DataPulse',
  description: 'DataPulse is a full-stack real-time data monitoring and visualization platform designed to track metrics, ensure data integrity, and provide actionable insights through smart visualizations. It supports multiple data sources like CSV uploads, API integrations, and database connectors. Built with scalability in mind, it includes real-time alerts, data validation, and a modular workspace system for individuals or teams.',
  tech: [
    'React', 
    'TypeScript', 
    'Tailwind CSS',
    'Framer Motion',
    'Chart.js', 
    'MongoDB', 
    'PostgreSQL',
    'Flask',
    'Python', 
    'WebSockets', 
    'Redis', 
    'Celery', 
    'JWT Auth', 
    'Docker',
    'Formik + Yup',
    'Zod'
  ],
  github: '', // Add when available
  demo: '',   // Add when deployed
  images: [
    '/images/dp1.png'
  ]
}

  ], []);

  // Memoized callbacks to prevent unnecessary re-renders
  const openModal = useCallback((project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'unset';
  }, []);

  const nextImage = useCallback(() => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  }, [selectedProject]);

  const prevImage = useCallback(() => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  }, [selectedProject]);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto" ref={sectionRef}>
        {/* Header Section */}
        <div
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            inView 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-5xl gradient-text mb-6">
            Featured Projects
          </h2>
          <p className="font-poppins text-lg md:text-xl text-[var(--highlight)] max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--highlight)] mx-auto rounded-full mt-6" />
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              inView={inView}
              onClick={openModal}
            />
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
            selectedProject ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={closeModal}
        >
          <div
            className={`glass-card max-w-4xl w-full max-h-[90vh] overflow-y-auto transition-all duration-300 ease-out ${
              selectedProject ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <h3 className="font-arvo font-bold text-2xl md:text-3xl gradient-text">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-[var(--accent-primary)] hover:bg-opacity-10 rounded-full transition-colors duration-200"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Image Gallery */}
              <div className="relative mb-6">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                    className="w-full h-64 md:h-96 object-cover"
                    loading="lazy"
                  />
                  
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full transition-all duration-200"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full transition-all duration-200"
                      >
                        <ChevronRight size={24} />
                      </button>
                    </>
                  )}
                </div>

                {selectedProject.images.length > 1 && (
                  <div className="flex justify-center gap-2 mt-4">
                    {selectedProject.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${
                          index === currentImageIndex
                            ? 'bg-[var(--accent-primary)]'
                            : 'bg-[var(--highlight)] bg-opacity-30'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              <p className="font-poppins text-[var(--text-primary)] mb-6 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="mb-6">
                <h4 className="font-arvo font-bold text-lg mb-3 text-[var(--accent-primary)]">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[var(--accent-primary)] bg-opacity-10 text-gray-600 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex items-center gap-2 transition-transform duration-150 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Github size={20} />
                  View Code
                </a>
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2 transition-transform duration-150 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <ExternalLink size={20} />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

// Memoized ProjectCard component for better performance
const ProjectCard: React.FC<{
  project: Project;
  index: number;
  inView: boolean;
  onClick: (project: Project) => void;
}> = React.memo(({ project, index, inView, onClick }) => {
  const handleClick = useCallback(() => {
    onClick(project);
  }, [project, onClick]);

  const handleLinkClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  return (
    <div
      className={`glass-card p-6 cursor-pointer transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-2xl ${
        inView 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
      onClick={handleClick}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <div className="relative overflow-hidden rounded-xl mb-6">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent opacity-60" />
      </div>

      <h3 className="font-arvo font-bold text-xl md:text-2xl text-[var(--accent-primary)] mb-3">
        {project.title}
      </h3>

      <p className="font-poppins text-[var(--text-primary)] mb-4 line-clamp-3">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-[var(--accent-primary)] bg-opacity-10 text-gray-600 rounded-full text-sm font-medium"
          >
            {tech}
          </span>
        ))}
        {project.tech.length > 3 && (
          <span className="px-3 py-1 bg-[var(--highlight)] bg-opacity-10 text-gray-600 rounded-full text-sm font-medium">
            +{project.tech.length - 3} more
          </span>
        )}
      </div>

      <div className="flex gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[var(--highlight)] hover:text-[var(--accent-primary)] transition-all duration-200 hover:scale-105"
          onClick={handleLinkClick}
        >
          <Github size={18} />
          <span className="font-medium">Code</span>
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[var(--highlight)] hover:text-[var(--accent-primary)] transition-all duration-200 hover:scale-105"
          onClick={handleLinkClick}
        >
          <ExternalLink size={18} />
          <span className="font-medium">Demo</span>
        </a>
      </div>
    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';

export default Projects;