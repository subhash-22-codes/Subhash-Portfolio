import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {  
  Send, 
  Github, 
  Linkedin, 
  CheckCircle2, 
  Copy,
  MapPin,
} from 'lucide-react';
import { useForm } from '@formspree/react';
import { FaXTwitter } from 'react-icons/fa6';

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("mjkreble");
  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', message: ''
  });
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  }, [state.succeeded]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('subashyagantisubbu@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/subhash-22-codes' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/subhash-yaganti-a8b3b626a/' },
    { icon: FaXTwitter, href: 'https://x.com/SYaganti44806' },
  ];

  const revealScale = {
    initial: { opacity: 0, scale: 0.98, y: 20 },
    whileInView: { 
      opacity: 1, scale: 1, y: 0, 
      transition: { duration: 2.2, ease: [0.16, 1, 0.3, 1] } 
    },
    exit: { opacity: 0, scale: 0.98, y: 10, transition: { duration: 0.8 } }
  };

  return (
    <section id="contact" className="relative min-h-screen bg-[#0a0a0a] text-white py-20 md:py-32 overflow-hidden px-6 md:px-20">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER */}
        <motion.div 
          variants={revealScale}
          initial="initial"
          whileInView="whileInView"
          exit="exit"
          viewport={{ once: false, amount: 0.2 }}
          className="mb-24 md:mb-32"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-white/20"></span>
            <span className="font-sans text-[11px] tracking-[0.4em] uppercase text-white/50">Connectivity</span>
          </div>
          <h2 className="font-serif text-7xl md:text-9xl tracking-tightest leading-none">
            Let's <span className="text-white/30 italic">talk.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* LEFT COLUMN: THE HUMAN STORY */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            
            {/* BIO: No box, just raw typography for elegance */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="font-serif text-3xl md:text-4xl italic text-white/80 leading-tight">
                "I design logic that feels effortless."
              </h3>
              <p className="font-sans text-xl text-white/40 leading-relaxed font-light max-w-sm">
                Based in Hyderabad, building high-performance systems for the next generation of web applications.
              </p>
            </motion.div>

            {/* THE CHANNEL CARD: One unified container for all details */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 relative overflow-hidden group"
            >
              <div className="space-y-12">
                {/* Email Section */}
                <div onClick={handleCopyEmail} className="cursor-pointer">
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-white/20">Direct Channel</span>
                    <AnimatePresence mode="wait">
                      {copied ? (
                        <motion.div key="copied" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2 text-white/60">
                          <CheckCircle2 size={14} strokeWidth={1.5} />
                        </motion.div>
                      ) : (
                        <Copy size={14} className="text-white/10 group-hover:text-white/30 transition-colors" />
                      )}
                    </AnimatePresence>
                  </div>
                  <p className="font-sans text-lg md:text-xl font-light text-white/60 group-hover:text-white transition-colors">
                    subashyagantisubbu@gmail.com
                  </p>
                </div>

                {/* Location & Socials Divider */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                  <div className="space-y-2">
                    <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-white/20">Location</span>
                    <p className="font-sans text-xs font-bold flex items-center gap-2 tracking-widest text-white/40">
                      <MapPin size={12} strokeWidth={1.5} /> Hyderabad, India
                    </p>
                  </div>
                  <div className="flex gap-6">
                    {socialLinks.map((social, i) => (
                      <a key={i} href={social.href} target="_blank" rel="noreferrer" className="text-white/20 hover:text-white transition-all hover:-translate-y-1">
                        <social.icon size={18} strokeWidth={1.5} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: THE FORM (Restored Purity) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            className="lg:col-span-7 bg-white/[0.02] border border-white/5 rounded-[3rem] relative overflow-hidden shadow-2xl"
          >
            <AnimatePresence mode="wait">
              {state.succeeded ? (
                <motion.div key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-20 text-center space-y-6">
                  <CheckCircle2 size={60} strokeWidth={1} className="text-white mx-auto mb-4" />
                  <h3 className="font-serif text-4xl text-white/90">Talk soon.</h3>
                  <p className="font-sans text-white/30 text-sm">Your message has been received.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="p-10 md:p-16 space-y-14">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    
                    {/* NAME INPUT */}
                    <div className="space-y-3 relative group">
                      <label className="font-sans text-[9px] uppercase tracking-[0.4em] text-white/20 ml-1 transition-colors group-focus-within:text-white/50">
                        Identity
                      </label>
                      <input 
                        type="text" 
                        name="name" 
                        required 
                        value={formData.name} 
                        onChange={handleInputChange}
                        placeholder="Name"
                        className="w-full bg-transparent border-b border-white/10 py-4 text-white outline-none focus:outline-none font-sans text-base placeholder:text-white/10 transition-all duration-500"
                      />
                      {/* KINETIC UNDERLINE: Grows from center on focus */}
                      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-focus-within:scale-x-100 transition-transform duration-700 ease-[0.16, 1, 0.3, 1] origin-center" />
                    </div>

                    {/* EMAIL INPUT */}
                    <div className="space-y-3 relative group">
                      <label className="font-sans text-[9px] uppercase tracking-[0.4em] text-white/20 ml-1 transition-colors group-focus-within:text-white/50">
                        Email
                      </label>
                      <input 
                        type="email" 
                        name="email" 
                        required 
                        value={formData.email} 
                        onChange={handleInputChange}
                        placeholder="Address"
                        className="w-full bg-transparent border-b border-white/10 py-4 text-white outline-none focus:outline-none font-sans text-base placeholder:text-white/10 transition-all duration-500"
                      />
                      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-focus-within:scale-x-100 transition-transform duration-700 ease-[0.16, 1, 0.3, 1] origin-center" />
                    </div>
                  </div>

                  {/* MESSAGE TEXTAREA */}
                  <div className="space-y-3 relative group">
                    <label className="font-sans text-[9px] uppercase tracking-[0.4em] text-white/20 ml-1 transition-colors group-focus-within:text-white/50">
                      Message
                    </label>
                    <textarea 
                      name="message" 
                      required 
                      rows={3} 
                      value={formData.message} 
                      onChange={handleInputChange}
                      placeholder="Share your vision..."
                      className="w-full bg-transparent border-b border-white/10 py-4 text-white outline-none focus:outline-none font-sans text-base resize-none placeholder:text-white/10 transition-all duration-500"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-focus-within:scale-x-100 transition-transform duration-700 ease-[0.16, 1, 0.3, 1] origin-center" />
                  </div>

                  {/* BUTTON: Clean & Heavy */}
                  <button 
                    type="submit" 
                    disabled={state.submitting}
                    className="w-full py-6 bg-white text-black font-sans text-[10px] font-bold uppercase tracking-[0.5em] rounded-full hover:bg-zinc-200 active:scale-[0.98] transition-all flex items-center justify-center gap-4 group disabled:opacity-50"
                  >
                    {state.submitting ? 'Sending...' : 'Send Message'}
                    <Send size={14} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-700 ease-[0.16, 1, 0.3, 1]" />
                  </button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;