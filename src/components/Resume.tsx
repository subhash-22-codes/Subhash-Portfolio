import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Download, 
  Award, 
  Trophy, 
  GraduationCap, 
  Code2, 
  Building, 
  ExternalLink,
  CheckCircle2,
  Terminal,
  FileText,
  MapPin,
  Instagram
} from 'lucide-react';

const Resume: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'certifications' | 'achievements' | 'education' | 'skills'>('certifications');

  // --- 1. FULL DATA RESTORED (Exact Match) ---
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
      title: 'HackAPTS State-Level Hackathon – 3rd Place',
      organization: 'GeeksforGeeks @ ANITS',
      period: '2025',
      category: 'Competition',
      description: 'Secured 3rd place at HackAPTS 2025, a premier state-level hackathon for AP & TS students. Solved challenging real-world DSA problems under the theme of Innovation and Problem Solving.',
      impact: 'Ranked in the top 1% among 300+ participants.',
      link: 'https://anits.pod.ai/pages/certificate/skgYfC',
      certificateLink: '/certificates/HackAPTS_Certificate.pdf',
      linkType: "external",
      hasLink: true,
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
      description: "Led a 6-member team with the solution 'Inclusive Learning App for Deaf and Mute'.",
      impact: "Cleared internal rounds with a socially impactful solution.",
      certificateLink: "/certificates/SIH_CERTIFICATE.pdf",
      hasCredentials: true,
      profileImage: "/images/SIH.png"
    },
    {
      title: 'Competitive Programming Excellence',
      organization: 'LeetCode & CodeChef',
      period: '2022 - Present',
      category: 'Problem Solving',
      description: 'Active problem solver with consistent performance',
      impact: '269+ problems solved on LeetCode, active contributor on CodeChef',
      profileImage: '/images/lc.png',
      link: 'https://leetcode.com/u/SubhashY/',
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
      { name: 'Python', level: 90 },
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
    { key: 'certifications', label: 'CERTIFICATES', icon: Award },
    { key: 'achievements', label: 'ACHIEVEMENTS', icon: Trophy },
    { key: 'education', label: 'EDUCATION', icon: GraduationCap },
    { key: 'skills', label: 'SKILLS', icon: Code2 }
  ];

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/SubhashYagantiResume.pdf';
    link.download = 'Subhash_Yaganti_Resume.pdf';
    link.click();
  };

  return (
    <section id="resume" className="relative min-h-screen bg-[#020202] text-[#fdfdfd] py-12 lg:py-24 overflow-hidden selection:bg-emerald-500/30">
      
      {/* Background Matrix (Consistent with other sections) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem] lg:bg-[size:6rem_6rem] pointer-events-none opacity-60" />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-24 relative z-10">
        
        {/* HEADER: Industrial File System */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 lg:mb-24 gap-8 border-b border-zinc-900 pb-8 lg:pb-12">
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-emerald-500 font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em]"
            >
              <FileText size={14} /> 
              <span>Personnel_Record</span>
            </motion.div>
            
            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter uppercase leading-[0.85] text-white opacity-90">
              Resume<span className="text-zinc-800">.</span>Doc
            </h2>
          </div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            onClick={downloadResume}
            className="group flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-white text-black rounded-full font-bold hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            <Download size={18} />
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest">DOWNLOAD_PDF</span>
          </motion.button>
        </div>

        {/* TABS: High-Speed Selector */}
        <div className="flex flex-wrap gap-2 mb-10 lg:mb-12 overflow-x-auto pb-2 scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as any)}
              className={`flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full font-mono text-[10px] sm:text-xs uppercase tracking-widest transition-all whitespace-nowrap ${
                activeTab === tab.key 
                ? 'bg-zinc-100 text-black border border-white' 
                : 'bg-[#0a0a0a] border border-zinc-800 text-zinc-500 hover:text-zinc-300 hover:border-zinc-600'
              }`}
            >
              <tab.icon size={14} className={activeTab === tab.key ? 'text-black' : 'text-zinc-600'} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* CONTENT AREA: The Matter */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            
            {/* 1. CERTIFICATIONS - Grid Display */}
            {activeTab === 'certifications' && (
              <motion.div 
                key="certs"
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {certifications.map((cert, idx) => (
                  <div key={idx} className="group bg-[#080808] border border-zinc-900 rounded-3xl p-6 sm:p-8 hover:border-zinc-700 transition-all flex flex-col h-full relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-6 opacity-10 grayscale group-hover:grayscale-0 transition-all duration-500">
                        <img src={cert.certificateImage} className="w-16 h-16 object-contain" alt="logo" onError={(e) => (e.target as HTMLImageElement).style.display = 'none'} />
                    </div>

                    <div className="relative z-10 flex flex-col h-full">
                        <div className="mb-6">
                            <div className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest mb-2">{cert.category}</div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight mb-2 pr-12">{cert.title}</h3>
                            <div className="text-xs text-zinc-500 flex gap-2 font-mono">
                                <span>{cert.issuer}</span>
                                <span className="text-zinc-700">//</span>
                                <span>{cert.period}</span>
                            </div>
                        </div>

                        <ul className="space-y-3 mb-8 flex-grow">
                            {cert.description.map((desc, i) => (
                            <li key={i} className="flex items-start gap-3 text-zinc-400 text-sm leading-relaxed">
                                <span className="mt-1.5 w-1 h-1 bg-zinc-700 rounded-full shrink-0 group-hover:bg-emerald-500 transition-colors" />
                                {desc}
                            </li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 pt-6 border-t border-zinc-900/50 mt-auto">
                            {cert.technologies.map(t => (
                            <span key={t} className="px-2.5 py-1 bg-zinc-900/50 border border-zinc-800 rounded text-[10px] font-mono uppercase text-zinc-500 group-hover:text-zinc-300 transition-colors">
                                {t}
                            </span>
                            ))}
                        </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* 2. ACHIEVEMENTS - Grid Display */}
            {activeTab === 'achievements' && (
              <motion.div 
                key="achieve"
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {achievements.map((item, idx) => (
                  <div key={idx} className="bg-[#080808] border border-zinc-900 rounded-3xl p-6 sm:p-8 hover:border-zinc-700 transition-all group flex flex-col h-full">
                    <div className="flex items-start gap-5 mb-6">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden shrink-0">
                          {item.profileImage ? (
                            <img src={item.profileImage} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all" alt="" />
                          ) : <Trophy size={24} className="m-auto mt-4 text-zinc-600" />}
                        </div>
                        <div>
                          <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-400 transition-colors leading-tight">{item.title}</h4>
                          <div className="text-xs text-zinc-500 mt-1 font-mono">{item.organization} • {item.period}</div>
                        </div>
                    </div>
                    
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                      {item.description}
                    </p>
                    
                    <div className="mt-auto pt-5 border-t border-zinc-900 space-y-4">
                      <div className="flex items-center gap-3 text-xs font-mono text-emerald-500 bg-emerald-500/5 p-3 rounded-xl border border-emerald-500/10">
                        <Terminal size={14} />
                        <span className="line-clamp-1">Impact: {item.impact}</span>
                      </div>

                      {item.hasLink && (
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-white transition-colors group/link"
                        >
                          {item.linkType === 'instagram' ? <Instagram size={14} /> : <ExternalLink size={14} />}
                          <span className="font-mono uppercase tracking-wider group-hover/link:underline underline-offset-4">Verify_Credential</span>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* 3. EDUCATION - Detailed Card */}
            {activeTab === 'education' && (
              <motion.div 
                key="edu"
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="max-w-4xl"
              >
                {education.map((edu, idx) => (
                  <div key={idx} className="bg-[#080808] border border-zinc-900 rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-700 pointer-events-none">
                        <GraduationCap size={200} />
                    </div>
                    
                    <div className="relative z-10">
                      <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                        <div className="p-4 bg-zinc-900 rounded-2xl text-emerald-500 w-fit border border-zinc-800">
                          <Building size={28} />
                        </div>
                        <div>
                           <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">{edu.degree}</h3>
                           <div className="text-zinc-500 font-mono text-xs uppercase tracking-wide mt-2 flex flex-wrap gap-2">
                             <span>{edu.institution}</span>
                             <span className="text-zinc-700">|</span>
                             <span>{edu.period}</span>
                           </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-zinc-400 mb-8 px-1">
                        <MapPin size={16} className="text-emerald-500" /> {edu.location}
                      </div>

                      <p className="text-zinc-300 text-lg leading-relaxed mb-10 max-w-2xl border-l-2 border-zinc-800 pl-6">
                        {edu.description}
                      </p>

                      <div className="space-y-6">
                        <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-[0.2em] flex items-center gap-2">
                           <Award size={14} className="text-emerald-500" /> Key Achievements
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {edu.achievements.map((ach, i) => (
                            <div key={i} className="flex items-center gap-3 p-4 bg-zinc-900/30 border border-zinc-800/50 rounded-xl text-sm text-zinc-300 hover:border-zinc-700 hover:bg-zinc-900/50 transition-all">
                               <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                               {ach}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* 4. SKILLS SUMMARY - Lists */}
            {activeTab === 'skills' && (
              <motion.div 
                key="skills"
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              >
                {/* Technical Skills */}
                <div className="bg-[#080808] border border-zinc-900 rounded-3xl p-6 sm:p-8 hover:border-zinc-800 transition-colors">
                   <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                     <div className="p-2 bg-zinc-900 rounded-lg text-emerald-500"><Code2 size={20} /></div>
                     Technical Competencies
                   </h3>
                   <div className="space-y-6">
                      {skills.technical.map((skill, idx) => (
                        <div key={idx} className="group">
                           <div className="flex justify-between text-sm mb-2.5">
                             <span className="text-zinc-300 font-medium">{skill.name}</span>
                             <span className="text-zinc-500 font-mono text-xs">{skill.level}%</span>
                           </div>
                           <div className="h-1.5 bg-zinc-900 rounded-full overflow-hidden">
                              <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.level}%` }}
                                transition={{ duration: 1, delay: idx * 0.1 }}
                                className="h-full bg-emerald-500/80 group-hover:bg-emerald-400 transition-colors" 
                              />
                           </div>
                        </div>
                      ))}
                   </div>
                </div>

                {/* Soft Skills */}
                <div className="bg-[#080808] border border-zinc-900 rounded-3xl p-6 sm:p-8 hover:border-zinc-800 transition-colors h-fit">
                   <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                     <div className="p-2 bg-zinc-900 rounded-lg text-emerald-500"><Terminal size={20} /></div>
                     Soft Skills & Leadership
                   </h3>
                   <div className="flex flex-wrap gap-3">
                      {skills.soft.map((skill, idx) => (
                        <div key={idx} className="flex items-center gap-3 px-4 py-3 bg-zinc-900/30 border border-zinc-800 rounded-full text-zinc-300 text-sm hover:bg-zinc-900 hover:border-emerald-500/30 transition-all cursor-default">
                           <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                           {skill}
                        </div>
                      ))}
                   </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Resume;