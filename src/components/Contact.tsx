import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Terminal, 
  Github, 
  Linkedin, 
  CheckCircle2, 
  Copy,
  ArrowRight,
} from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';
import { FaXTwitter } from 'react-icons/fa6';

const Contact: React.FC = () => {
  const [state, handleSubmit] = useForm("mjkreble");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copied, setCopied] = useState(false);

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

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('subashyagantisubbu@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/subhash-22-codes', label: 'GITHUB_REPO' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/subhash-yaganti-a8b3b626a/', label: 'LINKEDIN_ID' },
    { icon: FaXTwitter, href: 'https://x.com/SYaganti44806', label: 'TWITTER_X' },
  ];

  return (
    <section id="contact" className="relative py-12 lg:py-24 bg-[#020202] text-[#f4f4f5] overflow-hidden selection:bg-emerald-500/20">
      
      {/* Background Grid (Unified) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem] lg:bg-[size:6rem_6rem] pointer-events-none" />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-24 relative z-10">
        
        {/* HEADER */}
        <div className="mb-12 lg:mb-24 border-l-2 border-zinc-900 pl-4 sm:pl-6 md:pl-10">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center gap-3 mb-2"
          >
            {/* Your indicator content goes here */}
          </motion.div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter text-white uppercase leading-[0.85] break-words">
            Get_In<span className="text-zinc-800">.</span>Touch
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* LEFT: Connection Details */}
          <div className="space-y-10 md:space-y-12">
            <div className="space-y-6">
              <p className="text-lg sm:text-xl md:text-2xl text-zinc-400 leading-relaxed font-light max-w-xl">
                Engineering <span className="text-zinc-100 font-medium">high-scale systems</span> requires clear communication. 
                I am currently open for architectural roles and freelance backend development.
              </p>
            </div>

            {/* Direct Uplink (Email Box) */}
            <div className="group relative bg-[#080808] border border-zinc-900 rounded-3xl p-6 md:p-8 hover:border-zinc-700 transition-all">
              <button 
                onClick={handleCopyEmail}
                className="absolute top-4 right-4 text-zinc-600 hover:text-white transition-colors p-2 hover:bg-zinc-900 rounded-lg"
                title="Copy Email"
              >
                {copied ? <CheckCircle2 size={18} className="text-emerald-500" /> : <Copy size={18} />}
              </button>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-zinc-600 font-mono text-[10px] uppercase tracking-widest">
                  <Mail size={12} /> Primary_Uplink
                </div>
                <div className="text-sm sm:text-lg md:text-2xl font-mono text-zinc-100 break-all font-bold">
                  subashyagantisubbu@gmail.com
                </div>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <div className="p-5 bg-[#080808] border border-zinc-900 rounded-2xl flex items-center gap-4 hover:border-zinc-800 transition-colors">
                  <div className="p-3 bg-zinc-900 rounded-xl text-emerald-500"><Phone size={20} /></div>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-wider">Voice_Line</div>
                    <div className="text-zinc-200 text-sm font-bold mt-1">+91 9848074591</div>
                  </div>
               </div>
               <div className="p-5 bg-[#080808] border border-zinc-900 rounded-2xl flex items-center gap-4 hover:border-zinc-800 transition-colors">
                  <div className="p-3 bg-zinc-900 rounded-xl text-emerald-500"><MapPin size={20} /></div>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-wider">Base_Station</div>
                    <div className="text-zinc-200 text-sm font-bold mt-1">Hyderabad, India</div>
                  </div>
               </div>
            </div>

            {/* Social Matrix */}
            <div className="space-y-4">
              <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Social_Protocols</div>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a 
                    key={social.label}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[120px] flex items-center justify-center gap-2 py-4 border border-zinc-800 bg-[#080808] rounded-xl text-zinc-500 hover:text-white hover:border-zinc-600 transition-all group"
                  >
                    <social.icon size={18} />
                    <span className="font-mono text-[10px] uppercase tracking-wider hidden sm:inline-block">{social.label}</span>
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all hidden sm:block text-emerald-500" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: Transmission Form */}
          <div className="bg-[#080808] p-1 rounded-3xl md:rounded-[2.5rem] border border-zinc-900 relative overflow-hidden mt-8 lg:mt-0 shadow-2xl">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent opacity-50" />
              
              <AnimatePresence mode="wait">
                {/* SUCCESS STATE: TERMINAL LOG */}
                {state.succeeded ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="h-full min-h-[500px] flex flex-col items-center justify-center p-8 md:p-12 bg-[#0a0a0a] rounded-[2.3rem]"
                  >
                      <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6 border border-emerald-500/20">
                         <CheckCircle2 size={32} className="text-emerald-500" />
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">Transmission_Complete</h3>
                      
                      {/* Terminal Log */}
                      <div className="w-full max-w-sm bg-black border border-zinc-900 rounded-xl p-6 font-mono text-xs text-zinc-400 space-y-3 mb-8 text-left shadow-inner">
                         <div className="flex justify-between">
                            <span>&gt; Status:</span>
                            <span className="text-emerald-500">200 OK</span>
                         </div>
                         <div className="flex justify-between">
                            <span>&gt; Protocol:</span>
                            <span>HTTPS/Secure</span>
                         </div>
                         <div className="flex justify-between">
                            <span>&gt; Packet_ID:</span>
                            <span>#{Math.floor(Math.random() * 99999)}</span>
                         </div>
                         <div className="border-t border-zinc-800 pt-3 mt-3 text-zinc-500 italic">
                            &gt; Message logged. Expecting response sequence shortly...
                         </div>
                      </div>

                      <button 
                        onClick={() => window.location.reload()}
                        className="px-8 py-4 bg-zinc-900 text-white rounded-xl text-xs font-mono uppercase tracking-widest hover:bg-zinc-800 transition-all border border-zinc-800"
                      >
                        Reset_Uplink
                      </button>
                   </motion.div>
                ) : (
                   /* FORM STATE */
                   <motion.form 
                     key="form"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     onSubmit={handleSubmit} 
                     className="h-full flex flex-col justify-between p-6 md:p-10 lg:p-12 space-y-8 bg-[#0a0a0a] rounded-[2.3rem]"
                   >
                     <div className="space-y-8">
                       <div className="flex items-center gap-2 text-zinc-500 font-mono text-[10px] uppercase tracking-widest border-b border-zinc-900 pb-4">
                          <Terminal size={14} /> Initialize_Message_Sequence
                       </div>

                       {/* NOTE: 'text-base' (16px) is enforced on all inputs below.
                         This prevents iOS/iPhone from auto-zooming when clicking the fields.
                       */}

                       <div className="space-y-2">
                         <label className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest ml-1">User_ID</label>
                         <input 
                           type="text" 
                           name="name"
                           required
                           value={formData.name}
                           onChange={handleInputChange}
                           placeholder="Enter your name"
                           className="w-full bg-zinc-950 border border-zinc-900 rounded-xl px-4 py-4 text-white placeholder:text-zinc-800 focus:outline-none focus:border-emerald-500/50 transition-all font-mono text-base"
                         />
                       </div>

                       <div className="space-y-2">
                         <label className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest ml-1">Return_Address</label>
                         <input 
                           type="email" 
                           name="email"
                           required
                           value={formData.email}
                           onChange={handleInputChange}
                           placeholder="name@company.com"
                           className="w-full bg-zinc-950 border border-zinc-900 rounded-xl px-4 py-4 text-white placeholder:text-zinc-800 focus:outline-none focus:border-emerald-500/50 transition-all font-mono text-base"
                         />
                         <ValidationError prefix="Email" field="email" errors={state.errors} />
                       </div>

                       <div className="space-y-2">
                         <label className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest ml-1">Subject_Line</label>
                         <input 
                           type="text" 
                           name="subject"
                           required
                           value={formData.subject}
                           onChange={handleInputChange}
                           placeholder="Project Inquiry / Collaboration"
                           className="w-full bg-zinc-950 border border-zinc-900 rounded-xl px-4 py-4 text-white placeholder:text-zinc-800 focus:outline-none focus:border-emerald-500/50 transition-all font-mono text-base"
                         />
                       </div>

                       <div className="space-y-2">
                         <label className="text-zinc-500 font-mono text-[10px] uppercase tracking-widest ml-1">Data_Packet</label>
                         <textarea 
                           name="message"
                           required
                           rows={4}
                           value={formData.message}
                           onChange={handleInputChange}
                           placeholder="Enter your message parameters..."
                           className="w-full bg-zinc-950 border border-zinc-900 rounded-xl px-4 py-4 text-white placeholder:text-zinc-800 focus:outline-none focus:border-emerald-500/50 transition-all font-mono text-base resize-none"
                         />
                         <ValidationError prefix="Message" field="message" errors={state.errors} />
                       </div>
                     </div>

                     <button 
                       type="submit"
                       disabled={state.submitting}
                       className="w-full bg-white text-black font-bold py-5 rounded-xl hover:bg-zinc-200 transition-all flex items-center justify-center gap-3 group disabled:opacity-50"
                     >
                       {state.submitting ? (
                         <span className="font-mono text-xs uppercase tracking-widest animate-pulse">Transmitting...</span>
                       ) : (
                         <>
                           <span className="font-mono text-xs uppercase tracking-widest">INITIATE_TRANSMISSION</span>
                           <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                         </>
                       )}
                     </button>
                     
                     {state.errors && <p className="text-red-500 text-xs text-center font-mono">Transmission Error. Check Inputs.</p>}
                   </motion.form>
                )}
              </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;