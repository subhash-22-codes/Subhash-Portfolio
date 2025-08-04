import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Github, Linkedin, ExternalLink } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import animationData from "../assets/animations/buy-online.json";
import { FaXTwitter } from 'react-icons/fa6';

const Contact: React.FC = () => {
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
      title: 'Email',
      value: 'subashyagantisubbu@gmail.com',
      link: 'mailto:subashyagantisubbu@gmail.com',
      color: 'text-accent-primary'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9848074591',
      link: 'tel:+919848074591',
      color: 'text-accent-secondary'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'India, Hyderabad',
      link: 'https://maps.google.com',
      color: 'text-accent-tertiary'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/subhash-22-codes',
      label: 'GitHub',
      color: 'hover:bg-gray-900 hover:text-white hover:border-gray-900',
      brandColor: '#24292e'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/subhash-yaganti-a8b3b626a/',
      label: 'LinkedIn',
      color: 'hover:bg-blue-600 hover:text-white hover:border-blue-600',
      brandColor: '#0077b5'
    },
    {
      icon: FaXTwitter,
      href: 'https://x.com/SYaganti44806',
      label: 'Twitter',
      color: 'hover:bg-black hover:text-white hover:border-black',
      brandColor: '#000000'
    },
    {
      icon: ExternalLink,
      href: '',
      label: 'Portfolio',
      color: 'hover:bg-accent-primary hover:text-bg-primary hover:border-accent-primary',
      brandColor: '#64ffda'
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 font-poppins">
            Get In <span className="text-accent-primary">Touch</span>
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto font-poppins px-4">
            Ready to start your next project? Let's discuss how I can help bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          
          {/* Contact Information */}
          <motion.div 
            className="space-y-6 sm:space-y-8 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Contact Info Cards */}
            <div className="space-y-4 sm:space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  target={info.title === 'Location' ? '_blank' : undefined}
                  rel={info.title === 'Location' ? 'noopener noreferrer' : undefined}
                  className="glass-card p-4 sm:p-6 flex items-center gap-3 sm:gap-4 group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-glass flex items-center justify-center group-hover:bg-accent-primary/10 transition-colors flex-shrink-0`}>
                    <info.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${info.color}`} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs sm:text-sm text-text-muted font-poppins">{info.title}</div>
                    <div className="text-sm sm:text-base text-white font-medium font-poppins break-words">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white font-poppins">
                Connect With Me
              </h3>
              <div className="flex gap-3 sm:gap-4 flex-wrap">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-link ${social.color} w-10 h-10 sm:w-12 sm:h-12 transition-all duration-300 ease-in-out`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.15, 
                      y: -6,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                    style={{
                      '--brand-color': social.brandColor
                    } as React.CSSProperties}
                  >
                    <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              className="glass-card p-4 sm:p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 text-accent-primary font-poppins">
                Let's Work Together
              </h3>
              <p className="text-text-secondary text-xs sm:text-sm leading-relaxed font-poppins">
                I'm always open to discussing new opportunities, interesting projects, 
                and creative ideas. Whether you have a question or just want to say hi, 
                I'll try my best to get back to you!
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="contact-form order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {!state.succeeded ? (
              <>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-accent-primary font-poppins">
                  Send Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <label className="block text-xs sm:text-sm font-medium mb-2 text-text-secondary font-poppins">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="input-modern w-full"
                        placeholder="Your name"
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <label className="block text-xs sm:text-sm font-medium mb-2 text-text-secondary font-poppins">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="input-modern w-full"
                        placeholder="your.email@example.com"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <label className="block text-xs sm:text-sm font-medium mb-2 text-text-secondary font-poppins">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="input-modern w-full"
                      placeholder="Project inquiry"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <label className="block text-xs sm:text-sm font-medium mb-2 text-text-secondary font-poppins">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="input-modern w-full resize-none"
                      placeholder="Tell me about your project..."
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={state.submitting}
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base py-3 sm:py-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {state.submitting ? (
                      <>
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  {/* Submit Error */}
                  {Array.isArray(state.errors) && state.errors.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-center py-3 px-4 rounded-lg bg-red-500 bg-opacity-10 text-red-400 text-xs sm:text-sm font-poppins"
                    >
                      ❌ Failed to send message. Please check the fields and try again.
                    </motion.div>
                  )}
                </form>
              </>
            ) : (
              <motion.div
                className="text-center py-6 sm:py-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Lottie
                  animationData={animationData}
                  loop={true}
                  autoplay={true}
                  className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 mx-auto mb-4 sm:mb-6"
                />
                <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-accent-primary mx-auto mb-3 sm:mb-4" />
                <h4 className="text-lg sm:text-xl font-semibold mb-2 text-white font-poppins">
                  Thank you for reaching out! 💌
                </h4>
                <p className="text-text-secondary font-poppins text-sm sm:text-base">
                  I've received your message and will get back to you soon. Your interest means a lot — really!
                </p>
                <p className="text-text-muted text-xs sm:text-sm italic mt-3 sm:mt-4 font-poppins">
                  Explore my portfolio or connect with me on socials while you wait!
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;