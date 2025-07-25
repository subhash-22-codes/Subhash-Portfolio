import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import animationData from "../assets/animations/buy-online.json";
import { FaXTwitter } from 'react-icons/fa6'; // 

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
    rootMargin: '50px 0px',
  });

  const [state, handleSubmit] = useForm("mjkreble");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    if (state.succeeded) {
      localStorage.setItem("form_email_sent", formData.email);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  }, [state.succeeded, formData.email]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'subashyagantisubbu@gmail.com',
      link: 'mailto:subashyagantisubbu@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9848074591',
      link: 'tel:+919848074591'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India, Hyderabad',
      link: 'https://maps.google.com'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/subhash-22-codes',
      color: '#000000'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/subhash-yaganti-a8b3b626a/',
      color: '#0A66C2'
    },
    {
      icon: FaXTwitter ,
      label: 'Twitter',
      url: 'https://x.com/SYaganti44806',
      color: '#000000'
    },
    {
      icon: ExternalLink,
      label: 'Portfolio',
      url: '',
      color: '#333333'
    }
  ];

  // Optimized spring transition config
  const springTransition = {
    type: 'spring' as const,
    stiffness: 100,
    damping: 20,
  };

  // Staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: springTransition,
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: springTransition,
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: springTransition,
    },
  };

  return (
    <section 
      id="contact" 
      ref={ref} 
      className="py-12 md:py-20 px-4 min-h-screen"
      style={{ willChange: inView ? 'auto' : 'transform' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={springTransition}
          className="text-center mb-12 md:mb-16"
          style={{ willChange: inView ? 'auto' : 'transform' }}
        >
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-5xl gradient-text mb-4 md:mb-6">
            Let's Work Together
          </h2>
          <p className="font-poppins text-base sm:text-lg lg:text-xl text-[var(--highlight)] max-w-2xl mx-auto px-4">
            Ready to bring your ideas to life? Let's discuss your project and see how we can collaborate.
          </p>
          <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-[var(--accent-primary)] to-[var(--highlight)] mx-auto rounded-full mt-4 md:mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6 md:space-y-8"
            style={{ willChange: 'transform' }}
          >
            <div>
              <h3 className="font-arvo font-bold text-xl md:text-2xl text-[var(--accent-primary)] mb-4 md:mb-6">
                Get In Touch
              </h3>
              <p className="font-poppins text-[var(--text-primary)] leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
                I'm always excited to work on new projects and collaborate with talented people. 
                Whether you have a project in mind or just want to chat about technology, 
                feel free to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="space-y-4 md:space-y-6"
            >
              {contactInfo.map((info) => (
                <motion.a
                  key={info.label}
                  href={info.link}
                  target={info.label === 'Location' ? '_blank' : undefined}
                  rel={info.label === 'Location' ? 'noopener noreferrer' : undefined}
                  variants={itemVariants}
                  whileHover={{ 
                    x: 5, 
                    scale: 1.02,
                    transition: { type: 'spring', stiffness: 400, damping: 25 }
                  }}
                  className="contact-item flex items-center gap-3 md:gap-4 p-3 md:p-4 glass-card hover:bg-white hover:bg-opacity-5 transition-all duration-300 interactive"
                  style={{ 
                    willChange: 'transform',
                    backfaceVisibility: 'hidden'
                  }}
                >
                  <div className="p-2 md:p-3 bg-[var(--accent-primary)] bg-opacity-10 rounded-full flex-shrink-0">
                    <info.icon size={20} className="text-black md:w-6 md:h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-poppins font-medium text-[var(--text-primary)] text-sm md:text-base">
                      {info.label}
                    </div>
                    <div className="font-poppins text-[var(--highlight)] text-sm md:text-base break-all">
                      {info.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ ...springTransition, delay: 0.4 }}
              className="pt-6 md:pt-8"
            >
              <h4 className="font-arvo font-bold text-base md:text-lg text-[var(--text-primary)] mb-3 md:mb-4">
                Connect With Me
              </h4>
              <div className="flex gap-3 md:gap-4 flex-wrap">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{
                      delay: 0.5 + index * 0.05,
                      ...springTransition
                    }}
                    whileHover={{
                      scale: 1.15,
                      y: -3,
                      transition: { type: 'spring', stiffness: 400, damping: 25 }
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="social-link p-2 md:p-3 glass-card group hover:bg-[--hover-color] hover:bg-opacity-10 transition-all duration-300 interactive"
                    style={{
                      '--hover-color': social.color,
                      willChange: 'transform'
                    } as React.CSSProperties}
                  >
                    <social.icon
                      size={20}
                      className="transition-colors duration-300 text-[var(--highlight)] group-hover:text-[var(--accent-primary)] md:w-6 md:h-6"
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            style={{ willChange: 'transform' }}
            className="w-full"
          >
            {!state.succeeded ? (
              <form onSubmit={handleSubmit} className="glass-card w-full p-4 md:p-6 lg:p-8">
                <h3 className="font-arvo font-bold text-xl md:text-2xl lg:text-3xl text-[var(--accent-primary)] mb-4 md:mb-6 text-center">
                  Send a Message
                </h3>

                <div className="space-y-4 md:space-y-6">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block font-poppins font-medium text-[var(--text-primary)] mb-2 text-sm md:text-base">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="custom-input"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block font-poppins font-medium text-[var(--text-primary)] mb-2 text-sm md:text-base">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="custom-input"
                        placeholder="your@email.com"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block font-poppins font-medium text-[var(--text-primary)] mb-2 text-sm md:text-base">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="custom-input"
                      placeholder="What's this about?"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block font-poppins font-medium text-[var(--text-primary)] mb-2 text-sm md:text-base">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="custom-input resize-none min-h-[120px] md:min-h-[140px]"
                      placeholder="Tell me about your project or what you'd like to discuss..."
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={state.submitting}
                    whileHover={!state.submitting ? {
                      scale: 1.05,
                      y: -2,
                      transition: { type: 'spring', stiffness: 400, damping: 25 }
                    } : {}}
                    whileTap={!state.submitting ? { scale: 0.95 } : {}}
                    className={`btn-primary w-full py-3 md:py-4 flex items-center justify-center gap-2 md:gap-3 text-sm md:text-base font-poppins ${
                      state.submitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                    style={{ willChange: state.submitting ? 'auto' : 'transform' }}
                  >
                    {state.submitting ? (
                      <>
                        <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-[var(--bg-primary)] border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={18} className="md:w-5 md:h-5" />
                      </>
                    )}
                  </motion.button>

                  {/* Submit Error */}
                  {Array.isArray(state.errors) && state.errors.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={springTransition}
                      className="text-center py-3 px-4 rounded-lg bg-red-500 bg-opacity-10 text-red-400 text-sm md:text-base font-poppins"
                    >
                      ❌ Failed to send message. Please check the fields and try again.
                    </motion.div>
                  )}
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={springTransition}
                className="success-card w-full p-4 md:p-6 lg:p-8 text-center flex flex-col items-center justify-center space-y-4 shadow-xl rounded-2xl"
              >
                <Lottie
                  animationData={animationData}
                  loop={true}
                  autoplay={true}
                  className="w-40 sm:w-52"
                  />

                <h3 className="text-xl md:text-2xl lg:text-3xl font-arvo font-bold text-green-400">
                  Thank you for reaching out! 💌
                </h3>

                <p className="font-poppins text-[var(--text-primary)] text-sm md:text-base lg:text-lg max-w-lg">
                  I've received your message and will get back to you soon. Your interest means a lot — really!
                </p>

                <p className="font-poppins text-[var(--highlight)] text-xs md:text-sm italic">
                  Explore my portfolio or connect with me on socials while you wait!
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ ...springTransition, delay: 0.6 }}
          className="text-center mt-12 md:mt-20 pt-8 md:pt-12 border-t border-[var(--highlight)] border-opacity-20"
        >
          <p className="font-poppins text-[var(--highlight)] mb-2 md:mb-4 text-sm md:text-base">
            Built with passion by Subhash Yaganti
          </p>
          <p className="font-poppins text-[var(--highlight)] text-xs md:text-sm opacity-70">
            © 2025 Subhash Yaganti. All rights reserved.
          </p>
        </motion.footer>
      </div>
    </section>
  );
};

export default Contact;