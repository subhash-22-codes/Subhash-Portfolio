import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, Award, Calendar, ExternalLink, Trophy } from 'lucide-react';
import { LucideIcon } from "lucide-react";

interface Achievement {
  title: string;
  description: string;
  date: string;
  type: string;
  icon: LucideIcon; // This supports icons like <Trophy />, <Award />
  color: string;
  qrCode: string;
}

interface JobExperience {
  company: string;
  position: string;
  period: string;
  achievements: string[];
}

const Resume: React.FC = () => {
  // Use intersection observer for better performance
  const { ref: headerRef, inView: headerInView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const { ref: achievementsRef, inView: achievementsInView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const { ref: experienceRef, inView: experienceInView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const { ref: ctaRef, inView: ctaInView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const achievements = [
    {
      title: 'Winner @ HackAPTS 2024',
      description: 'First place in the annual hackathon for building an innovative AI-powered healthcare solution',
      date: 'March 2024',
      type: 'Hackathon',
      icon: Trophy,
      color: '#FFD700',
      qrCode: 'https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://hackathon-cert.example.com/2024-winner'
    },
    {
      title: 'CCNA Certified',
      description: 'Cisco Certified Network Associate - Routing and Switching',
      date: 'September 2023',
      type: 'Certification',
      icon: Award,
      color: '#1BA0D7',
      qrCode: 'https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://cisco-cert.example.com/ccna-2023'
    },
    {
      title: '1st Place @ CodeBattle 2023',
      description: 'Competitive programming championship with 500+ participants',
      date: 'November 2023',
      type: 'Competition',
      icon: Trophy,
      color: '#FF6B35',
      qrCode: 'https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://codebattle-cert.example.com/2023-winner'
    }
  ];

  const experience = [
    {
      company: 'TechCorp Solutions',
      position: 'Senior Full Stack Developer',
      period: '2022 - Present',
      achievements: [
        'Led development of 5+ web applications serving 100k+ users',
        'Improved application performance by 40% through optimization',
        'Mentored junior developers and conducted code reviews'
      ]
    },
    {
      company: 'StartupXYZ',
      position: 'Full Stack Developer',
      period: '2020 - 2022',
      achievements: [
        'Built MVP from scratch using React and Node.js',
        'Implemented real-time features using WebSocket technology',
        'Collaborated with design team to create responsive interfaces'
      ]
    },
    {
      company: 'Digital Agency ABC',
      position: 'Frontend Developer',
      period: '2019 - 2020',
      achievements: [
        'Developed 20+ client websites with modern frameworks',
        'Optimized websites for SEO and performance',
        'Worked closely with clients to understand requirements'
      ]
    }
  ];

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Subhash_Resume_2025.pdf';
    link.download = 'Subhash_Yaganti_Resume.pdf';
    link.click();
  };

  return (
    <section id="resume" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div
          ref={headerRef}
          className="text-center mb-16"
          style={{
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s ease',
          }}
        >
          <h2 className="font-montserrat font-bold text-3xl md:text-5xl gradient-text mb-6">
            Resume & Achievements
          </h2>
          <p className="font-poppins text-lg md:text-xl text-[var(--highlight)] max-w-2xl mx-auto mb-8">
            My professional journey and notable achievements in the tech industry
          </p>
          <motion.button
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.15 }}
            onClick={downloadResume}
            className="btn-primary font-poppins text-lg px-8 py-4 interactive flex items-center gap-3 mx-auto will-change-transform"
          >
            <Download size={20} />
            Download Resume
          </motion.button>
          <div className="w-20 h-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--highlight)] mx-auto rounded-full mt-6" />
        </div>

        {/* Achievements Section */}
        <div
          ref={achievementsRef}
          className="mb-16"
          style={{
            opacity: achievementsInView ? 1 : 0,
            transform: achievementsInView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s ease 0.2s',
          }}
        >
          <h3 className="font-arvo font-bold text-2xl md:text-3xl text-[var(--accent-primary)] mb-8 text-center">
            Recent Achievements
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <AchievementCard
                key={achievement.title}
                achievement={achievement}
                index={index}
                inView={achievementsInView}
              />
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div
          ref={experienceRef}
          style={{
            opacity: experienceInView ? 1 : 0,
            transform: experienceInView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s ease',
          }}
        >
          <h3 className="font-arvo font-bold text-2xl md:text-3xl text-[var(--accent-primary)] mb-8 text-center">
            Professional Experience
          </h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--accent-primary)] to-[var(--highlight)]" />

            {experience.map((job, index) => (
              <ExperienceCard
                key={job.company}
                job={job}
                index={index}
                inView={experienceInView}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div
          ref={ctaRef}
          className="text-center mt-16"
          style={{
            opacity: ctaInView ? 1 : 0,
            transform: ctaInView ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s ease',
          }}
        >
          <div className="accent-card p-8 max-w-4xl mx-auto">
            <h3 className="font-arvo font-bold text-2xl mb-4">
              Ready to Work Together?
            </h3>
            <p className="font-poppins leading-relaxed mb-6">
              I'm always excited to take on new challenges and collaborate on innovative projects. 
              Let's discuss how we can bring your ideas to life!
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15 }}
              className="inline-flex items-center gap-2 bg-[var(--bg-primary)] text-[var(--text-primary)] px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-200 interactive will-change-transform"
            >
              Let's Connect
              <ExternalLink size={20} />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Separate AchievementCard component for better performance
const AchievementCard: React.FC<{
  achievement: Achievement;
  index: number;
  inView: boolean;
}> = ({ achievement, index, inView }) => {
  return (
    <div
      className="glass-card p-6 text-center interactive relative overflow-hidden will-change-transform"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
        transition: `all 0.6s ease ${index * 0.1}s`,
      }}
    >
      {/* Simplified background accent */}
      <div 
        className="absolute top-0 left-0 w-full h-1 opacity-80"
        style={{ backgroundColor: achievement.color }}
      />
      
      <div className="mb-4">
        <achievement.icon 
          size={48} 
          className="mx-auto mb-3 transition-transform duration-200 hover:scale-110"
          style={{ color: achievement.color }}
        />
        <span 
          className="inline-block px-3 py-1 rounded-full text-xs font-medium"
          style={{ 
            backgroundColor: `${achievement.color}20`,
            color: achievement.color 
          }}
        >
          {achievement.type}
        </span>
      </div>

      <h4 className="font-arvo font-bold text-lg text-[var(--text-primary)] mb-2">
        {achievement.title}
      </h4>
      
      <p className="font-poppins text-[var(--highlight)] text-sm mb-4 leading-relaxed">
        {achievement.description}
      </p>

      <div className="flex items-center justify-center gap-2 text-[var(--highlight)] text-sm mb-4">
        <Calendar size={16} />
        <span>{achievement.date}</span>
      </div>

      {/* QR Code */}
      <div className="flex items-center justify-center gap-3">
        <img 
          src={achievement.qrCode}
          alt="Certificate QR Code"
          className="w-12 h-12 opacity-70 hover:opacity-100 transition-opacity duration-200"
          loading="lazy"
        />
        <span className="text-xs text-[var(--highlight)] opacity-70">
          Scan for certificate
        </span>
      </div>
    </div>
  );
};

// Separate ExperienceCard component for better performance
const ExperienceCard: React.FC<{
  job: JobExperience;
  index: number;
  inView: boolean;
}> = ({ job, index, inView }) => {
  return (
    <div
      className={`relative mb-12 ${
        index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-8'
      } ml-12 md:ml-0`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0)' : `translateX(${index % 2 === 0 ? '-30px' : '30px'})`,
        transition: `all 0.6s ease ${index * 0.2}s`,
      }}
    >
      {/* Timeline Dot */}
      <div className="absolute w-4 h-4 bg-[var(--accent-primary)] rounded-full border-4 border-[var(--bg-primary)] left-[-2.5rem] md:left-auto md:right-[-2rem] top-6 z-10" />
      
      <div className="glass-card p-6 transition-transform duration-200 hover:scale-[1.01] will-change-transform">
        <div className="flex items-center gap-2 mb-2">
          <Calendar size={16} className="text-[var(--highlight)]" />
          <span className="text-[var(--highlight)] font-medium text-sm">
            {job.period}
          </span>
        </div>
        
        <h4 className="font-arvo font-bold text-xl text-[var(--accent-primary)] mb-1">
          {job.position}
        </h4>
        
        <h5 className="font-poppins font-semibold text-[var(--text-primary)] mb-4">
          {job.company}
        </h5>

        <ul className="space-y-2">
          {job.achievements.map((achievement: string, i: number) => (
            <li key={i} className="font-poppins text-[var(--highlight)] text-sm leading-relaxed flex items-start gap-2">
              <span className="text-[var(--accent-primary)] mt-1.5 block w-1.5 h-1.5 rounded-full flex-shrink-0" />
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Resume;