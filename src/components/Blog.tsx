// import React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { Calendar, Clock, ArrowRight, ExternalLink } from 'lucide-react';

// interface BlogPost {
//   id: number;
//   title: string;
//   summary: string;
//   date: string;
//   readTime: string;
//   category: string;
//   image: string;
//   link: string;
// }

// const Blog: React.FC = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//     rootMargin: '50px 0px',
//   });

//   const blogPosts: BlogPost[] = [
//     {
//       id: 1,
//       title: 'Why I Use Flask Over Express for API Development',
//       summary: 'Exploring the advantages of Python Flask for building robust and scalable APIs, including performance comparisons and real-world use cases.',
//       date: '2024-01-15',
//       readTime: '8 min read',
//       category: 'Backend',
//       image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
//       link: 'https://blog.subhash.dev/flask-vs-express'
//     },
//     {
//       id: 2,
//       title: 'Mastering React Context Like a Boss',
//       summary: 'Deep dive into React Context API patterns, best practices, and advanced techniques for state management in large applications.',
//       date: '2024-01-08',
//       readTime: '12 min read',
//       category: 'Frontend',
//       image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
//       link: 'https://blog.subhash.dev/react-context-mastery'
//     },
//     {
//       id: 3,
//       title: 'Building Real-time Features with WebSockets',
//       summary: 'Complete guide to implementing real-time functionality in web applications using WebSockets, Socket.io, and modern best practices.',
//       date: '2023-12-22',
//       readTime: '15 min read',
//       category: 'Full Stack',
//       image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
//       link: 'https://blog.subhash.dev/websockets-guide'
//     },
//     {
//       id: 4,
//       title: 'The Art of Database Design for Scalable Apps',
//       summary: 'Essential principles and patterns for designing databases that scale, with practical examples using PostgreSQL and MongoDB.',
//       date: '2023-12-10',
//       readTime: '10 min read',
//       category: 'Database',
//       image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
//       link: 'https://blog.subhash.dev/database-design'
//     },
//     {
//       id: 5,
//       title: 'Docker for Developers: From Zero to Production',
//       summary: 'Comprehensive guide to containerizing applications with Docker, including best practices for development and deployment workflows.',
//       date: '2023-11-28',
//       readTime: '18 min read',
//       category: 'DevOps',
//       image: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=800',
//       link: 'https://blog.subhash.dev/docker-guide'
//     },
//     {
//       id: 6,
//       title: 'Modern CSS Animations That Actually Perform',
//       summary: 'Creating smooth, performant animations using CSS transforms, transitions, and the latest browser APIs for better user experiences.',
//       date: '2023-11-15',
//       readTime: '7 min read',
//       category: 'Frontend',
//       image: 'https://images.pexels.com/photos/1181266/pexels-photo-1181266.jpeg?auto=compress&cs=tinysrgb&w=800',
//       link: 'https://blog.subhash.dev/css-animations'
//     }
//   ];

//   const formatDate = (dateString: string) => {
//     return new Date(dateString).toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric'
//     });
//   };

//   const getCategoryColor = (category: string) => {
//     const colors: { [key: string]: string } = {
//       'Frontend': '#61DAFB',
//       'Backend': '#68A063',
//       'Full Stack': '#F7DF1E',
//       'Database': '#336791',
//       'DevOps': '#FF6B6B'
//     };
//     return colors[category] || 'var(--accent-primary)';
//   };

//   // Optimized spring transition config
//   const springTransition = {
//     type: 'spring' as const,
//     stiffness: 100,
//     damping: 20,
//   };

//   // Staggered animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.08,
//         delayChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: springTransition,
//     },
//   };

//   return (
//     <section id="blog" ref={ref} className="py-20 px-4" style={{ willChange: inView ? 'auto' : 'transform' }}>
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={springTransition}
//           className="text-center mb-16"
//           style={{ willChange: inView ? 'auto' : 'transform' }}
//         >
//           <h2 className="font-montserrat font-bold text-3xl md:text-5xl gradient-text mb-6">
//             Technical Blog
//           </h2>
//           <p className="font-poppins text-lg md:text-xl text-[var(--highlight)] max-w-2xl mx-auto">
//             Sharing insights, tutorials, and thoughts on modern web development
//           </p>
//           <div className="w-20 h-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--highlight)] mx-auto rounded-full mt-6" />
//         </motion.div>

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate={inView ? "visible" : "hidden"}
//           className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
//         >
//           {blogPosts.map((post) => (
//             <motion.article
//               key={post.id}
//               variants={itemVariants}
//               whileHover={{ 
//                 y: -8, 
//                 scale: 1.02,
//                 transition: { type: 'spring', stiffness: 400, damping: 25 }
//               }}
//               className="glass-card overflow-hidden interactive group"
//               style={{ 
//                 willChange: 'transform',
//                 backfaceVisibility: 'hidden',
//                 perspective: 1000
//               }}
//             >
//               <div className="relative overflow-hidden">
//                 <img
//                   src={post.image}
//                   alt={post.title}
//                   className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
//                   loading="lazy"
//                   decoding="async"
//                   style={{ willChange: 'transform' }}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent opacity-60" />
                
//                 {/* Category Badge */}
//                 <div 
//                   className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium text-white"
//                   style={{ backgroundColor: getCategoryColor(post.category) }}
//                 >
//                   {post.category}
//                 </div>
//               </div>

//               <div className="p-6">
//                 <div className="flex items-center gap-4 text-[var(--highlight)] text-sm mb-4">
//                   <div className="flex items-center gap-1">
//                     <Calendar size={14} />
//                     <span>{formatDate(post.date)}</span>
//                   </div>
//                   <div className="flex items-center gap-1">
//                     <Clock size={14} />
//                     <span>{post.readTime}</span>
//                   </div>
//                 </div>

//                 <h3 className="font-arvo font-bold text-lg md:text-xl text-[var(--text-primary)] mb-3 leading-tight group-hover:text-[var(--accent-primary)] transition-colors duration-300">
//                   {post.title}
//                 </h3>

//                 <p className="font-poppins text-[var(--highlight)] text-sm leading-relaxed mb-6">
//                   {post.summary}
//                 </p>

//                 <motion.a
//                   href={post.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   whileHover={{ x: 5, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
//                   className="inline-flex items-center gap-2 text-[var(--accent-primary)] font-medium group-hover:gap-3 transition-all duration-300"
//                 >
//                   Read Article
//                   <ArrowRight size={16} />
//                 </motion.a>
//               </div>
//             </motion.article>
//           ))}
//         </motion.div>

//         {/* View All Posts CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ ...springTransition, delay: 0.4 }}
//           className="text-center mt-12"
//         >
//           <motion.a
//             href="https://blog.subhash.dev"
//             target="_blank"
//             rel="noopener noreferrer"
//             whileHover={{ 
//               scale: 1.05, 
//               y: -2,
//               transition: { type: 'spring', stiffness: 400, damping: 25 }
//             }}
//             whileTap={{ scale: 0.95 }}
//             className="btn-secondary font-poppins text-lg px-8 py-4 interactive inline-flex items-center gap-3"
//             style={{ willChange: 'transform' }}
//           >
//             View All Posts
//             <ExternalLink size={20} />
//           </motion.a>
//         </motion.div>

//         {/* Newsletter Signup */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ ...springTransition, delay: 0.6 }}
//           className="mt-16"
//         >
//           <div className="accent-card p-8 text-center max-w-2xl mx-auto">
//             <h3 className="font-arvo font-bold text-2xl mb-4">
//               Stay Updated
//             </h3>
//             <p className="font-poppins mb-6 leading-relaxed">
//               Get notified when I publish new articles about web development, 
//               programming tips, and industry insights.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="flex-1 px-4 py-3 rounded-full border-2 border-[var(--bg-primary)] bg-white text-[var(--bg-primary)] focus:outline-none focus:border-[var(--bg-secondary)] transition-colors duration-200"
//               />
//               <motion.button
//                 whileHover={{ 
//                   scale: 1.05,
//                   transition: { type: 'spring', stiffness: 400, damping: 25 }
//                 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-6 py-3 bg-[var(--bg-primary)] text-[var(--text-primary)] rounded-full font-semibold hover:bg-[var(--bg-secondary)] transition-all duration-300 interactive"
//                 style={{ willChange: 'transform' }}
//               >
//                 Subscribe
//               </motion.button>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Blog;