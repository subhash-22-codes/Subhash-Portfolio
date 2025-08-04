import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Calendar, MapPin, Building, GraduationCap, Award, Code, Globe, Trophy, Users } from 'lucide-react';

const Resume: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'certifications' | 'education' | 'skills'>('certifications');

  const certifications = [
    {
      title: 'Mastering Generative AI',
      issuer: 'GeeksforGeeks',
      period: '2024',
      category: 'Artificial Intelligence',
      description: [
        'Comprehensive understanding of generative AI models and architectures',
        'Hands-on experience with large language models and their applications',
        'Implementation of AI-powered solutions for real-world problems',
        'Best practices for prompt engineering and model optimization'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Transformers', 'OpenAI API']
    },
    {
      title: 'Google Project Management',
      issuer: 'Coursera',
      period: '2024',
      category: 'Project Management',
      description: [
        'Agile and Scrum methodologies for effective project delivery',
        'Risk management and stakeholder communication strategies',
        'Tools and techniques for project planning and execution',
        'Leadership skills for cross-functional team management'
      ],
      technologies: ['Agile', 'Scrum', 'Google Workspace', 'Project Planning', 'Risk Management']
    },
    {
      title: 'Cisco Certified Network Associate (CCNA)',
      issuer: 'NetAcad',
      period: '2023',
      category: 'Networking',
      description: [
        'Network fundamentals and routing/switching concepts',
        'Network security and access control implementation',
        'IP connectivity and services configuration',
        'Automation and programmability in networking'
      ],
      technologies: ['Cisco IOS', 'TCP/IP', 'VLAN', 'Routing Protocols', 'Network Security']
    },
    {
      title: 'NVIDIA Deep Learning',
      issuer: 'NVIDIA',
      period: '2023',
      category: 'Deep Learning',
      description: [
        'Neural network architectures and deep learning frameworks',
        'GPU-accelerated computing for machine learning',
        'Computer vision and natural language processing applications',
        'Model optimization and deployment strategies'
      ],
      technologies: ['CUDA', 'TensorFlow', 'PyTorch', 'CNNs', 'RNNs', 'GPU Programming']
    },
    {
      title: 'Python Data Science',
      issuer: 'University of Michigan',
      period: '2022',
      category: 'Data Science',
      description: [
        'Data manipulation and analysis using Python libraries',
        'Statistical analysis and hypothesis testing',
        'Data visualization and storytelling techniques',
        'Machine learning algorithms and model evaluation'
      ],
      technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn', 'Jupyter']
    }
  ];

  const achievements = [
    {
      title: 'HackAPTS State-Level Hackathon Winner',
      organization: 'GeeksforGeeks @ ANITS',
      period: '2024',
      category: 'Competition',
      description: 'Won first place in state-level hackathon, ranking in top 1% of participants',
      impact: 'Top 1% among 300+ participants'
    },
    {
      title: 'GTech DSA Co-Founder & Content Creator',
      organization: 'Instagram Tech Channel',
      period: '2023 - Present',
      category: 'Leadership',
      description: 'Co-founded educational platform teaching Data Structures and Algorithms',
      impact: '7.5K+ followers, 500K+ views, taught 10K+ students across Telangana'
    },
    {
      title: 'Smart India Hackathon Team Leader',
      organization: 'MRCET Internal Round',
      period: '2024',
      category: 'Leadership',
      description: 'Led team in national-level hackathon competition (Team ID: 16129)',
      impact: 'Successfully cleared internal rounds with innovative solution'
    },
    {
      title: 'Competitive Programming Excellence',
      organization: 'LeetCode & CodeChef',
      period: '2022 - Present',
      category: 'Problem Solving',
      description: 'Active problem solver with consistent performance',
      impact: '120+ problems solved on LeetCode, active contributor on CodeChef'
    },
    {
      title: 'Class Representative',
      organization: 'MRCET',
      period: '2022 - 2024',
      category: 'Leadership',
      description: 'Elected class representative for 2 consecutive years',
      impact: 'Led student initiatives and maintained communication between faculty and students'
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
    <section id="resume" className="py-20 relative">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">
            My <span className="text-accent-primary">Resume</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8 font-poppins">
            A comprehensive overview of my certifications, achievements, education, and technical expertise.
          </p>
          
          <motion.button
            onClick={downloadResume}
            className="btn-primary flex items-center gap-2 mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5" />
            Download Resume
          </motion.button>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {tabs.map(({ key, label, icon: Icon }) => (
            <motion.button
              key={key}
              onClick={() => setActiveTab(key as any)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeTab === key
                  ? 'bg-accent-primary text-bg-primary'
                  : 'glass-card hover:bg-glass-highlight'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-5 h-5" />
              {label}
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
            <div className="space-y-12">
              {/* Certifications Section */}
              <div>
                <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <Award className="w-8 h-8 text-accent-primary" />
                  Professional Certifications
                </h3>
                <div className="space-y-8">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      className="glass-card p-8"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -4 }}
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="text-2xl font-bold text-accent-primary">
                              {cert.title}
                            </h4>
                            <span className="px-3 py-1 bg-accent-primary/20 text-accent-primary rounded-full text-sm font-medium">
                              {cert.category}
                            </span>
                          </div>
                          <div className="flex items-center gap-4 text-text-secondary">
                            <div className="flex items-center gap-2">
                              <Building className="w-4 h-4" />
                              {cert.issuer}
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              {cert.period}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <ul className="space-y-2">
                          {cert.description.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-text-secondary">
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
                                className="px-3 py-1 bg-glass rounded-lg text-sm font-medium text-text-secondary"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Achievements Section */}
              <div>
                <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <Trophy className="w-8 h-8 text-accent-secondary" />
                  Achievements & Recognition
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      className="glass-card p-6"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ y: -4, scale: 1.02 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-accent-secondary/20 rounded-lg">
                          {achievement.category === 'Competition' && <Trophy className="w-6 h-6 text-accent-secondary" />}
                          {achievement.category === 'Leadership' && <Users className="w-6 h-6 text-accent-secondary" />}
                          {achievement.category === 'Problem Solving' && <Code className="w-6 h-6 text-accent-secondary" />}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="text-lg font-bold text-white">{achievement.title}</h4>
                            <span className="px-2 py-1 bg-accent-secondary/20 text-accent-secondary rounded text-xs font-medium">
                              {achievement.category}
                            </span>
                          </div>
                          <p className="text-text-secondary text-sm mb-2">
                            {achievement.organization} • {achievement.period}
                          </p>
                          <p className="text-text-secondary text-sm mb-3">
                            {achievement.description}
                          </p>
                          <div className="px-3 py-2 bg-glass rounded-lg">
                            <p className="text-accent-secondary text-sm font-medium">
                              Impact: {achievement.impact}
                            </p>
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
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="glass-card p-8"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-accent-secondary mb-2">
                        {edu.degree}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-text-secondary">
                        <div className="flex items-center gap-2">
                          <GraduationCap className="w-4 h-4" />
                          {edu.institution}
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
                    <p className="text-text-secondary leading-relaxed">
                      {edu.description}
                    </p>

                    <div>
                      <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-center gap-3 text-text-secondary">
                            <div className="w-2 h-2 bg-accent-secondary rounded-full" />
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
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Technical Skills */}
              <motion.div
                className="glass-card p-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-accent-primary mb-6 flex items-center gap-2">
                  <Code className="w-6 h-6" />
                  Technical Skills
                </h3>
                <div className="space-y-6">
                  {skills.technical.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-accent-primary font-semibold">{skill.level}%</span>
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
                className="glass-card p-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-accent-secondary mb-6 flex items-center gap-2">
                  <Globe className="w-6 h-6" />
                  Soft Skills
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      <div className="w-2 h-2 bg-accent-secondary rounded-full" />
                      <span className="text-text-secondary font-medium">{skill}</span>
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