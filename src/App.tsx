import { motion, useScroll, useTransform } from 'motion/react';
import React, { useRef } from 'react';
import { ArrowUpRight, Github, Twitter, Linkedin, Mail, Download, MoveRight, CheckCircle, Home, Briefcase, Layers, Send } from 'lucide-react';

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div ref={containerRef} className="min-h-screen font-sans bg-[#0A0A0A] text-white selection:bg-[#00FF00] selection:text-black flex flex-col items-center">
      <Navbar />
      
      <main className="mx-auto w-full max-w-[1280px] p-4 md:p-8 flex flex-col gap-4 flex-1 mt-20 md:mt-24">
        {/* Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <Hero className="lg:col-span-8" scrollYProgress={scrollYProgress} />
          <div className="lg:col-span-4 flex flex-col gap-4">
            <AboutSection className="flex-1" />
            <ResumeWidget className="flex-1" />
          </div>
        </div>
        
        {/* Row 2: Skills Bento Grid */}
        <ServicesSection />
        
        {/* Row 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <SelectedWork className="lg:col-span-7" />
          <CtaSection className="lg:col-span-5" />
        </div>

        {/* Row 4 */}
        <SkillsMarquee />
      </main>

      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 md:p-6 bg-[#0A0A0A]/80 backdrop-blur-lg border-b border-white/5 max-w-[1400px] mx-auto w-full"
    >
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="flex items-center gap-3 cursor-pointer group"
      >
        <div className="w-8 h-8 bg-[#00FF00] rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,255,0,0.2)] group-hover:shadow-[0_0_20px_rgba(0,255,0,0.4)] transition-shadow">
          <span className="text-black font-black text-xs">NR</span>
        </div>
        <span className="font-medium tracking-widest hidden sm:inline-block uppercase font-display text-white">NITIN RANA</span>
      </motion.div>
      <div className="hidden md:flex gap-8 text-xs font-mono text-gray-400 uppercase items-center">
        <motion.a whileHover={{ y: -2 }} href="#" className="flex items-center gap-2 text-[#00FF00] hover:text-[#00FF00] transition-colors">
          <Home size={14} /> <span>HOME</span>
        </motion.a>
        <motion.a whileHover={{ y: -2 }} href="#work" className="flex items-center gap-2 hover:text-white transition-colors">
          <Briefcase size={14} /> <span>PROJECTS</span>
        </motion.a>
        <motion.a whileHover={{ y: -2 }} href="#about" className="flex items-center gap-2 hover:text-white transition-colors">
          <Layers size={14} /> <span>SERVICES</span>
        </motion.a>
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#contact" 
          className="flex items-center gap-2 px-5 py-2 border border-gray-700 rounded-full hover:border-[#00FF00] hover:text-[#00FF00] hover:bg-[#00FF00]/10 transition-all cursor-pointer text-white"
        >
          <Send size={14} /> <span>CONTACT ME</span>
        </motion.a>
      </div>
    </motion.nav>
  );
}

function Hero({ scrollYProgress, className }: { scrollYProgress: any, className?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`bg-[#141414] rounded-3xl p-6 md:p-8 border border-white/5 flex flex-col justify-between items-start min-h-[380px] hover:border-[#00FF00]/30 transition-colors ${className}`}
    >
      <div className="w-full">
        <p className="text-[#00FF00] font-mono text-xs mb-6 uppercase tracking-[0.2em]">Available for freelance</p>
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.9] tracking-tighter">
          CRAFTING<br/>DIGITAL<br/><span className="text-gray-500">INTERFACES.</span>
        </h1>
      </div>
      <div className="flex justify-between items-end w-full mt-12 gap-8">
        <p className="text-gray-400 max-w-sm text-sm leading-relaxed hidden sm:block">
          Specialized in high-conversion e-commerce experiences and bespoke React applications. Turning complex ideas into functional beauty.
        </p>
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center -rotate-45 text-black flex-shrink-0">
          <ArrowUpRight size={24} />
        </div>
      </div>
    </motion.div>
  );
}

function ResumeWidget({ className }: { className?: string }) {
  return (
    <motion.a 
      href="/resume.pdf" download 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`bg-[#00FF00] rounded-3xl p-6 text-black flex items-center justify-between group cursor-pointer hover:bg-white transition-colors min-h-[160px] ${className}`}
    >
      <div className="flex flex-col">
        <span className="font-mono text-[10px] uppercase font-bold opacity-60 tracking-widest mb-1">Documentation</span>
        <h3 className="text-2xl md:text-3xl font-bold leading-none font-display">RESUME.PDF</h3>
        <p className="text-[10px] uppercase font-bold tracking-[0.2em] mt-3 opacity-80">Download CV 2024</p>
      </div>
      <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center flex-shrink-0 group-hover:-rotate-12 transition-transform duration-300">
        <Download size={24} color="white" />
      </div>
    </motion.a>
  );
}

function AboutSection({ className }: { className?: string }) {
  const [time, setTime] = React.useState("11:42");
  
  React.useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }));
    };
    updateTime();
    const timer = setInterval(updateTime, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`bg-[#141414] rounded-3xl p-6 border border-white/5 flex flex-col justify-center text-center items-center min-h-[180px] hover:border-white/10 transition-colors ${className}`}
    >
       <div className="text-4xl md:text-5xl font-mono mb-2 tracking-tight flex items-baseline justify-center gap-1">
         {time} <span className="text-sm text-gray-600 font-sans tracking-normal">LT</span>
       </div>
       <span className="text-[10px] text-gray-500 uppercase tracking-[0.3em] font-mono">Planet Earth</span>
       <div className="mt-6 flex items-center justify-center gap-2">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <span className="text-[10px] uppercase font-bold tracking-widest text-white">Busy coding</span>
       </div>
    </motion.div>
  );
}

function ServicesSection() {
  const skills = [
    { name: "React", desc: "Scalable web apps with modern component architecture.", num: "01 / DEV", color: "bg-cyan-400", hoverColor: "hover:border-cyan-400/30" },
    { name: "Figma", desc: "Precision design systems and high-fidelity prototypes.", num: "02 / UI/UX", color: "bg-purple-500", hoverColor: "hover:border-purple-500/30" },
    { name: "Webflow", desc: "Clean code output with professional interactions.", num: "03 / NO-CODE", color: "bg-blue-500", hoverColor: "hover:border-blue-500/30" },
    { name: "Shopify", desc: "Bespoke liquid themes and headless commerce setups.", num: "04 / E-COMM", color: "bg-[#95BF47]", hoverColor: "hover:border-[#00FF00]/30" },
  ];

  return (
    <section id="about" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {skills.map((skill, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className={`bg-[#141414] rounded-3xl p-6 md:p-8 border border-white/5 flex flex-col justify-between transition-all min-h-[220px] cursor-pointer ${skill.hoverColor}`}
        >
          <div className="flex justify-between items-center mb-8">
            <span className="font-mono text-[10px] text-gray-500 tracking-widest">{skill.num}</span>
            <div className={`w-2 h-2 rounded-full ${skill.color}`}></div>
          </div>
          <div>
            <h3 className="text-2xl font-bold uppercase tracking-tight font-display">{skill.name}</h3>
            <p className="text-xs text-gray-500 mt-2 font-mono leading-relaxed">{skill.desc}</p>
          </div>
        </motion.div>
      ))}
    </section>
  );
}

function SelectedWork({ className }: { className?: string }) {
  const works = [
    { name: "Neo-Kinetic Store", type: "E-Commerce", year: "2024" },
    { name: "Aura Aesthetics", type: "Shopify", year: "2023" },
    { name: "Studio Minimal", type: "Webflow", year: "2024" }
  ];

  return (
    <motion.section 
      id="work"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`bg-[#1A1A1A] rounded-3xl p-8 border border-white/5 flex flex-col overflow-hidden relative min-h-[320px] ${className}`}
    >
      <div className="flex justify-between items-start z-10 mb-8">
        <span className="bg-white/10 px-2 py-1 rounded text-[10px] font-mono tracking-widest text-[#00FF00]">FEATURED_PROJECTS</span>
        <span className="text-[10px] opacity-50 uppercase tracking-widest font-mono hidden sm:block">Recent Client Work</span>
      </div>
      
      <div className="flex flex-col gap-0 z-10 relative flex-1 justify-center">
         {works.map((work, i) => (
           <div key={i} className="group relative flex cursor-pointer justify-between items-center border-b border-white/5 py-5 last:border-0 hover:border-white/20 transition-colors">
             <div>
               <h4 className="text-xl md:text-2xl font-bold uppercase tracking-tight font-display group-hover:text-[#00FF00] transition-colors">{work.name}</h4>
               <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-widest font-mono">{work.type} / {work.year}</p>
             </div>
             <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#00FF00] group-hover:bg-[#00FF00] group-hover:text-black transition-all">
               <ArrowUpRight size={18} />
             </div>
           </div>
         ))}
      </div>
      
      <div className="absolute bottom-[-30%] right-[-10%] w-64 h-64 border border-[#00FF00]/10 rounded-full opacity-20 pointer-events-none"></div>
    </motion.section>
  );
}

function CtaSection({ className }: { className?: string }) {
  const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Extracted form data
    const form = e.currentTarget;
    const data = new FormData(form);
    
    try {
      // Form submission simulation (to configure Web3Forms or Formspree plug their URL into fetch)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setStatus('success');
      form.reset();
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <motion.div 
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`bg-[#141414] rounded-3xl p-8 border border-white/5 flex flex-col justify-center items-center min-h-[320px] ${className}`}
    >
      {status === 'success' ? (
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex flex-col items-center text-center"
        >
          <CheckCircle size={48} className="text-[#00FF00] mb-4" />
          <h3 className="text-3xl font-display font-bold uppercase tracking-tight text-white mb-2">Message Sent</h3>
          <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">I'll get back to you soon.</p>
          <button 
            onClick={() => setStatus('idle')}
            className="mt-8 text-[10px] font-mono text-gray-400 hover:text-[#00FF00] transition-colors uppercase tracking-[0.2em]"
          >
            Send another
          </button>
        </motion.div>
      ) : (
        <div className="w-full flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tighter mb-2 text-white">
            Contact Me
          </h2>
          <p className="text-[10px] font-mono tracking-widest text-[#00FF00] mb-6 uppercase">Let's build together</p>
          
          <form onSubmit={handleSubmit} className="w-full max-w-sm flex flex-col gap-3">
            <input 
              required 
              name="name"
              type="text" 
              placeholder="NAME" 
              className="w-full bg-[#1A1A1A] border border-white/5 rounded-xl px-4 py-3 text-xs font-mono text-white placeholder-gray-600 focus:outline-none focus:border-[#00FF00]/50 transition-colors" 
            />
            <input 
              required 
              name="email"
              type="email" 
              placeholder="EMAIL" 
              className="w-full bg-[#1A1A1A] border border-white/5 rounded-xl px-4 py-3 text-xs font-mono text-white placeholder-gray-600 focus:outline-none focus:border-[#00FF00]/50 transition-colors" 
            />
            <textarea 
              required 
              name="message"
              placeholder="YOUR MESSAGE..." 
              rows={3} 
              className="w-full bg-[#1A1A1A] border border-white/5 rounded-xl px-4 py-3 text-xs font-mono text-white placeholder-gray-600 focus:outline-none focus:border-[#00FF00]/50 transition-colors resize-none" 
            />
            
            <button 
              type="submit" 
              disabled={status === 'submitting'} 
              className="w-full mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#00FF00]/10 text-[#00FF00] border border-[#00FF00]/20 px-6 py-3 text-xs font-mono font-bold uppercase tracking-widest transition-all hover:bg-[#00FF00] hover:text-black disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              {status === 'submitting' ? 'SENDING...' : 'SEND MESSAGE'}
              {status !== 'submitting' && <MoveRight size={14} className="group-hover:translate-x-1 transition-transform" />}
            </button>
          </form>
        </div>
      )}
    </motion.div>
  );
}

function SkillsMarquee({ className }: { className?: string }) {
  const skills = ["React", "Shopify", "Webflow", "Figma", "Digital Design", "Tailwind"];
  
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`bg-[#141414] rounded-3xl border border-white/5 overflow-hidden flex items-center h-20 md:h-24 py-4 ${className}`}
    >
      <motion.div 
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex min-w-max whitespace-nowrap items-center h-full"
      >
        {[...skills, ...skills, ...skills].map((skill, index) => (
          <div key={index} className="flex items-center">
            <span className="px-6 font-mono text-lg md:text-xl font-bold uppercase tracking-widest text-transparent" style={{ WebkitTextStroke: '1px #00FF00' }}>
              {skill}
            </span>
            <span className="text-white/20 text-sm font-mono tracking-tighter">///</span>
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto max-w-[1280px] w-full p-4 md:px-8 pb-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono text-gray-500 border-t border-white/5 pt-6 mt-8 gap-6">
      <div className="flex gap-6 uppercase">
        <a href="#" className="hover:text-white transition-colors">Twitter (X)</a>
        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        <a href="#" className="hover:text-white transition-colors">GitHub</a>
        <a href="#" className="hover:text-white transition-colors">Dribbble</a>
      </div>
      <div className="text-center tracking-widest hidden md:block">© {new Date().getFullYear()} PORTFOLIO — BUILT WITH REACT & TAILWIND</div>
      <div className="text-[#00FF00] text-center tracking-widest">STATUS: OPEN FOR NEW PROJECTS</div>
    </footer>
  );
}
