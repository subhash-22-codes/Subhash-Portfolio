import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Calendar, MapPin, Building, GraduationCap, Award, Code, Globe, Trophy, Users, ExternalLink } from 'lucide-react';
import { FaInstagram } from "react-icons/fa";
const Resume: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'certifications' | 'education' | 'skills'>('certifications');

  const certifications = [
    {
      title: 'Mastering Generative AI',
      issuer: 'GeeksforGeeks',
      period: '2025',
      category: 'Artificial Intelligence',
      description: [
        'Comprehensive understanding of generative AI models and architectures',
        'Hands-on experience with large language models and their applications',
        'Implementation of AI-powered solutions for real-world problems',
        'Best practices for prompt engineering and model optimization'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Transformers', 'OpenAI API'],
      certificateImage: '/images/genai.png'
    },
    {
      title: 'Google Project Management',
      issuer: 'Coursera',
      period: '2023',
      category: 'Project Management',
      description: [
        'Agile and Scrum methodologies for effective project delivery',
        'Risk management and stakeholder communication strategies',
        'Tools and techniques for project planning and execution',
        'Leadership skills for cross-functional team management'
      ],
      technologies: ['Agile', 'Scrum', 'Google Workspace', 'Project Planning', 'Risk Management'],
      certificateImage: '/images/google.png'
    },
    {
      title: 'Cisco Certified Network Associate (CCNA)',
      issuer: 'NetAcad',
      period: '2025',
      category: 'Networking',
      description: [
        'Network fundamentals and routing/switching concepts',
        'Network security and access control implementation',
        'IP connectivity and services configuration',
        'Automation and programmability in networking'
      ],
      technologies: ['Cisco IOS', 'TCP/IP', 'VLAN', 'Routing Protocols', 'Network Security'],
      certificateImage: '/images/ccna.png'
    },
    {
      title: 'NVIDIA Deep Learning',
      issuer: 'NVIDIA',
      period: '2024',
      category: 'Deep Learning & NLP',
      description: [
        'Designed and trained neural network architectures using deep learning frameworks',
        'Applied GPU-accelerated computing for high-performance machine learning',
        'Developed computer vision and natural language processing (NLP) applications',
        'Achieved 91% accuracy in NLP model assignments through model tuning and optimization',
        'Implemented model optimization techniques and deployment strategies'
      ],
      technologies: ['CUDA', 'TensorFlow', 'PyTorch', 'CNNs', 'RNNs', 'NLP', 'GPU Programming'],
      certificateImage: '/images/nvidia.png'
    },    
    {
      title: 'Python Data Structures & Algorithms',
      issuer: 'University of Michigan',
      period: '2023',
      category: 'Computer Science',
      description: [
        'Mastered Python data structures: lists, tuples, dictionaries, and sets',
        'Implemented stacks and queues for efficient data handling',
        'Built and traversed linked lists for dynamic data storage',
        'Worked with binary trees for hierarchical data representation',
        'Explored graphs with BFS and DFS for network and relationship modeling'
      ],
      technologies: ['Python', 'Stacks', 'Queues', 'Linked Lists', 'Binary Trees', 'Graphs'],
      certificateImage: '/images/pydsa.png'
    }    
  ];

  const achievements = [
  {
    title: 'HackAPTS State-Level Hackathon Winner',
    organization: 'GeeksforGeeks @ ANITS',
    period: '2025',
    category: 'Competition',
    description: 'Won state-level hackathon, ranking in top 1% of participants',
    impact: 'Top 1% among 300+ participants',
    certificateLink: 'https://anits.pod.ai/pages/certificate/skgYfC',
    hasCredentials: true,
    profileImage: '/images/hackapts.jpg'
  },
  {
    title: 'GTech DSA Co-Founder & Content Creator',
    organization: 'Instagram Tech Channel',
    period: 'July 2025 - Present',
    category: 'Leadership',
    description: 'Co-founded educational platform teaching Data Structures and Algorithms',
    impact: '10.5K+ followers, 900K+ views, taught 10K+ students across Telangana',
    link: 'https://instagram.com/gtech_dsa',
    profileImage: '/images/gtech_dsa.jpg',
    linkType: "instagram",
    hasLink: true
  },
  {
    title: "Smart India Hackathon 2024 – Team Leader",
    organization: "MRCET Internal Round",
    period: "2024",
    category: "Leadership",
    description: "Led a 6-member team with solution 'Inclusive Learning App for Deaf and Mute'.",
    impact: "Cleared internal rounds with a socially impactful solution.",
    profileImage: '/images/SIH.png'
  },
  {
    title: 'Competitive Programming Excellence',
    organization: 'LeetCode & CodeChef',
    period: '2022 - Present',
    category: 'Problem Solving',
    description: 'Active problem solver with consistent performance',
    impact: '150+ problems solved on LeetCode, active contributor on CodeChef',
    profileImage: '/images/lc.png',
    link: 'https://leetcode.com/u/SubhashY/', // ✅ Added here
    hasLink: true,
    linkType: "leetcode",
  },
  {
    title: 'Class Representative',
    organization: 'MRCET',
    period: '2022 - 2024',
    category: 'Leadership',
    description: 'Elected class representative for 2 consecutive years',
    impact: 'Led student initiatives and maintained communication between faculty and students',
    profileImage: '/images/class_rep.jpeg'
  }
];



  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science Engineering',
      institution: 'Malla Reddy College of Engineering and Technology (MRCET)',
      period: '2022 - 2026',
      location: 'Hyderabad, Telangana, India',
      description: 'Focused on software engineering, algorithms, data structures, and emerging technologies like AI/ML.',
      achievements: [
        'Class Representative for 2 consecutive years',
        'Smart India Hackathon Team Leader (Internal Round)',
        'Active participant in coding competitions and technical events',
        'Co-founder of GTech DSA educational initiative'
      ]
    }
  ];

  const skills = {
    technical: [
      { name: 'Python & Data Science', level: 90 },
      { name: 'React & TypeScript', level: 88 },
      { name: 'Machine Learning & AI', level: 85 },
      { name: 'Data Structures & Algorithms', level: 92 },
      { name: 'Networking & Security', level: 80 },
      { name: 'Project Management', level: 75 }
    ],
    soft: [
      'Problem Solving', 'Team Leadership', 'Communication',
      'Project Management', 'Mentoring', 'Content Creation'
    ]
  };

  const tabs = [
    { key: 'certifications', label: 'Certifications', icon: Award },
    { key: 'education', label: 'Education', icon: GraduationCap },
    { key: 'skills', label: 'Skills', icon: Code }
  ];

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/SubhashYagantiResume.pdf';
    link.download = 'Subhash_Yaganti_Resume.pdf';
    link.click();
  };

  return (
    <section id="resume" className="py-12 sm:py-16 lg:py-20 relative min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 font-poppins">
            My <span className="text-accent-primary">Resume</span>
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto mb-6 sm:mb-8 font-poppins px-4">
            A comprehensive overview of my certifications, achievements, education, and technical expertise.
          </p>
          
          <motion.button
            onClick={downloadResume}
            className="btn-primary flex items-center gap-2 mx-auto text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-4 h-4 sm:w-5 sm:h-5" />
            Download Resume
          </motion.button>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {tabs.map(({ key, label, icon: Icon }) => (
            <motion.button
              key={key}
              onClick={() => setActiveTab(key as any)}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium transition-all duration-300 text-sm sm:text-base ${
                activeTab === key
                  ? 'bg-accent-primary text-bg-primary'
                  : 'glass-card hover:bg-glass-highlight'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden xs:inline sm:inline">{label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeTab === 'certifications' && (
            <div className="space-y-8 sm:space-y-12">
              {/* Certifications Section */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-3 px-2">
                  <Award className="w-6 h-6 sm:w-8 sm:h-8 text-accent-primary" />
                  Professional Certifications
                </h3>
                <div className="space-y-6 sm:space-y-8">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      className="glass-card p-4 sm:p-6 lg:p-8"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -4 }}
                    >
                      <div className="flex flex-col xl:flex-row gap-6">
                        {/* Certificate Content */}
                        <div className="flex-1">
                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 sm:mb-6">
                            <div>
                              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                                <h4 className="text-xl sm:text-2xl font-bold text-accent-primary">
                                  {cert.title}
                                </h4>
                                <span className="px-2 sm:px-3 py-1 bg-accent-primary/20 text-accent-primary rounded-full text-xs sm:text-sm font-medium w-fit">
                                  {cert.category}
                                </span>
                              </div>
                              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-text-secondary text-sm sm:text-base">
                                <div className="flex items-center gap-2">
                                  <Building className="w-3 h-3 sm:w-4 sm:h-4" />
                                  {cert.issuer}
                                </div>
                                <div className="flex items-center gap-2">
                                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                                  {cert.period}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <ul className="space-y-2">
                              {cert.description.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-text-secondary text-sm sm:text-base">
                                  <div className="w-2 h-2 bg-accent-primary rounded-full mt-2 flex-shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>

                            <div className="pt-4">
                              <h5 className="text-sm font-semibold text-white mb-3">Key Technologies:</h5>
                              <div className="flex flex-wrap gap-2">
                                {cert.technologies.map((tech) => (
                                  <span
                                    key={tech}
                                    className="px-2 sm:px-3 py-1 bg-glass rounded-lg text-xs sm:text-sm font-medium text-text-secondary"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Certificate Image */}
                        <div className="xl:w-80 xl:flex-shrink-0">
                          <div className="glass-card p-3 rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                            <img
                              src={cert.certificateImage}
                              alt={`${cert.title} Certificate`}
                              className="w-full h-48 sm:h-56 xl:h-64 object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Achievements Section */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 flex items-center gap-3 px-2">
                  <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-accent-secondary" />
                  Achievements & Recognition
                </h3>
                <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      className="glass-card p-4 sm:p-6"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -4, scale: 1.02 }}
                    >
                      <div className="flex flex-col sm:flex-row items-start gap-4">
                        <div className="flex items-center gap-4 w-full sm:w-auto">
                          <div className="p-2 sm:p-3 bg-accent-secondary/20 rounded-lg flex-shrink-0">
                            {achievement.category === 'Competition' && <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-accent-secondary" />}
                            {achievement.category === 'Leadership' && <Users className="w-5 h-5 sm:w-6 sm:h-6 text-accent-secondary" />}
                            {achievement.category === 'Problem Solving' && <Code className="w-5 h-5 sm:w-6 sm:h-6 text-accent-secondary" />}
                          </div>
                          
                          {/* GTech DSA Profile Image */}
                          {achievement.profileImage && (
                            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden flex-shrink-0">
                              <img
                                src={achievement.profileImage}
                                alt="GTech DSA Profile"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  // Fallback to default image if profile image fails to load
                                  const target = e.target as HTMLImageElement;
                                  target.src = 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=200';
                                }}
                              />
                            </div>
                          )}
                        </div>
                        
                        <div className="flex-1 w-full">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                            <h4 className="text-base sm:text-lg font-bold text-white">{achievement.title}</h4>
                            <span className="px-2 py-1 bg-accent-secondary/20 text-accent-secondary rounded text-xs font-medium w-fit">
                              {achievement.category}
                            </span>
                          </div>
                          <p className="text-text-secondary text-sm mb-2">
                            {achievement.organization} • {achievement.period}
                          </p>
                          <p className="text-text-secondary text-sm mb-3">
                            {achievement.description}
                          </p>
                          <div className="px-3 py-2 bg-glass rounded-lg mb-3">
                            <p className="text-accent-secondary text-sm font-medium">
                              Impact: {achievement.impact}
                            </p>
                          </div>
                          
                          {/* Action Buttons */}
                          <div className="flex flex-wrap gap-2">
                            {achievement.hasLink && (
                              <a
                                href={achievement.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-3 py-2 bg-accent-secondary/20 text-accent-secondary rounded-lg text-sm font-medium hover:bg-accent-secondary/30 transition-colors"
                              >
                                {/* Instagram */}
                                {achievement.linkType === "instagram" && (
                                  <>
                                    <FaInstagram className="w-4 h-4 text-[#E4405F]" />
                                    Visit Channel
                                  </>
                                )}

                                {/* LeetCode */}
                                {achievement.linkType === "leetcode" && (
                                  <>
                                    <img
                                      src="/images/leetcode.png" // 👈 add leetcode logo here
                                      alt="LeetCode"
                                      className="w-4 h-4"
                                    />
                                    Visit Profile
                                  </>
                                )}

                                <ExternalLink className="w-3 h-3" />
                              </a>
                            )}

                            
                            {achievement.hasCredentials && (
                              <a
                                href={achievement.certificateLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-3 py-2 bg-accent-primary/20 text-accent-primary rounded-lg text-sm font-medium hover:bg-accent-primary/30 transition-colors"
                              >
                                <Award className="w-4 h-4" />
                                View Credentials
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'education' && (
            <div className="space-y-6 sm:space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="glass-card p-4 sm:p-6 lg:p-8"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 sm:mb-6">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-accent-secondary mb-2">
                        {edu.degree}
                      </h3>
                      <div className="flex flex-col gap-2 text-text-secondary text-sm sm:text-base">
                        <div className="flex items-center gap-2">
                          <GraduationCap className="w-4 h-4" />
                          <span className="break-words">{edu.institution}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {edu.period}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                  </div>
        
                  <div className="space-y-4">
                    <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
                      {edu.description}
                    </p>

                    <div>
                      <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3 text-text-secondary text-sm sm:text-base">
                            <div className="w-2 h-2 bg-accent-secondary rounded-full mt-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
              {/* Technical Skills */}
              <motion.div
                className="glass-card p-4 sm:p-6 lg:p-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-xl sm:text-2xl font-bold text-accent-primary mb-4 sm:mb-6 flex items-center gap-2">
                  <Code className="w-5 h-5 sm:w-6 sm:h-6" />
                  Technical Skills
                </h3>
                <div className="space-y-4 sm:space-y-6">
                  {skills.technical.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-medium text-sm sm:text-base">{skill.name}</span>
                        <span className="text-accent-primary font-semibold text-sm sm:text-base">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-glass rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-full bg-accent-primary rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Soft Skills */}
              <motion.div
                className="glass-card p-4 sm:p-6 lg:p-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-xl sm:text-2xl font-bold text-accent-secondary mb-4 sm:mb-6 flex items-center gap-2">
                  <Globe className="w-5 h-5 sm:w-6 sm:h-6" />
                  Soft Skills
                </h3>
                <div className="grid grid-cols-1 gap-3 sm:gap-4">
                  {skills.soft.map((skill, index) => (
                    <motion.div
                      key={skill}
                      className="flex items-center gap-3 p-3 bg-glass rounded-lg"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="w-2 h-2 bg-accent-secondary rounded-full flex-shrink-0" />
                      <span className="text-text-secondary font-medium text-sm sm:text-base">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;