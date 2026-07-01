import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Prism from './components/Prism/Prism';
import { 
  Linkedin, 
  Instagram, 
  Dribbble, 
  Plus, 
  Minus, 
  ArrowUpRight, 
  ChevronDown,
  Mail,
  MapPin,
  Phone,
  Facebook,
  Download,
  Heading1,
  Moon,
  Sun
} from 'lucide-react';

// --- Components ---

const FadeIn = ({ children, delay = 0, direction = 'up', className = "" }: { children: React.ReactNode, delay?: number, direction?: 'up' | 'left' | 'right', className?: string }) => {
  const variants = {
    hidden: { opacity: 0, y: direction === 'up' ? 40 : 0, x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0 },
    visible: { opacity: 1, y: 0, x: 0 }
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 px-6 transition-all duration-500 flex justify-between items-center ${isScrolled ? 'py-4 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl shadow-sm border-b border-black/5 dark:border-white/5' : 'py-6 bg-transparent'}`}>
      <div className="text-2xl font-display font-bold tracking-tighter">ME_PROFILE.</div>
      <div className="hidden md:flex items-center gap-8 font-medium">
        <a href="#services" className="hover:text-accent-start transition-colors">Services</a>
        <a href="#portfolio" className="hover:text-accent-start transition-colors">Portfolio</a>
        <a href="#about" className="hover:text-accent-start transition-colors">About</a>
        <a href="#contact" className="hover:text-accent-start transition-colors">Contact</a>
      </div>
      <div className="flex items-center gap-4 md:gap-6">
        <div className="flex gap-4 opacity-60 hover:opacity-100 transition-opacity">
          <a href="https://www.linkedin.com/in/riel-jake-engana-585644372/" className="hover:text-accent-start hover:scale-110 transition-all"><Linkedin size={20} /></a>
          <a href="https://www.instagram.com/real_jexkz/?hl=en" className="hover:text-accent-start hover:scale-110 transition-all"><Instagram size={20} /></a>
          <a href="https://www.facebook.com/Engana08" className="hover:text-accent-start hover:scale-110 transition-all"><Facebook size={20} /></a>
        </div>
        <a
          href="/RIEL JAKE_ENGANA _VERCEL RESUME_ Geidi.jpg"
          download
          className="flex items-center gap-2 gradient-bg text-white px-4 md:px-6 py-2 rounded-full font-semibold text-xs md:text-sm hover:scale-105 transition-transform shadow-lg shadow-accent-start/20"
        >
          <Download size={16}/>
          <span className="hidden md:inline">Download Resume</span>
          <span className="inline md:hidden">Resume</span>
        </a>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden px-6 md:px-20">
    {/* Background Typography */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-display font-black text-black/[0.03] dark:text-white/[0.02] select-none pointer-events-none uppercase tracking-tighter transition-colors">
      Agentic
    </div>

    <div className="grid md:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10"
      >
        <h1 className="text-5xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter mb-6 mt-12 md:mt-0">
          AI Engineering,<br />
          <span className="gradient-text"> Agentic</span><br />
          Automation.
        </h1>
        <p className="text-xl text-ink/60 dark:text-slate-400 max-w-md mb-8 leading-relaxed">
          Hi, I'm <span className="text-ink dark:text-white font-semibold">Riel Jake Engaña</span>, an Industrial Engineer Intern at Geidi IT specializing in AI Automation. I build autonomous AI agents and agentic workflows that reason, plan, and execute complex tasks — moving beyond chatbots into systems that actually get work done. My background blends industrial engineering rigor with hands-on AI development: designing multi-agent architectures, orchestrating LLM pipelines, and automating end-to-end business processes. Currently deploying production agentic systems at Geidi while finishing my Software Development degree at USJ-R.
        </p>
        
        <div className="relative inline-block">
          <span className="font-signature text-5xl text-accent-start -rotate-6 block absolute -top-8 -right-12 pointer-events-none opacity-80">
          </span>
          <button className="bg-ink dark:bg-white top-20 bottom-20 text-white dark:text-ink px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 hover:bg-ink/90 dark:hover:bg-white/90 transition-colors group">
            View My Work
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative flex justify-center"
      >
        {/* Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-radial from-accent-start/20 to-transparent blur-3xl rounded-full" />
        
        <div className="relative w-full max-w-md aspect-square rounded-full overflow-hidden border-4 md:border-8 border-white dark:border-slate-800 shadow-2xl transition-colors">
          <img 
            src="/699273422_1702802617512994_1962015335284207172_n.jpg" 
            alt="Designer Portrait" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Floating Tags */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
                  className="absolute top-4 md:top-10 -left-2 md:-left-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md px-3 md:px-4 py-1.5 md:py-2 rounded-full shadow-lg font-bold text-xs md:text-sm border border-black/5 dark:border-white/10 cursor-pointer"
                >
                  🤖 Agentic AI
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 } }}
                  className="absolute bottom-10 md:bottom-20 -right-2 md:-right-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md px-3 md:px-4 py-1.5 md:py-2 rounded-full shadow-lg font-bold text-xs md:text-sm border border-black/5 dark:border-white/10 cursor-pointer"
                >
                  ⚡ Multi-Agent
                </motion.div>
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ x: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 } }}
                  className="absolute top-1/2 -right-2 md:-right-10 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md px-3 md:px-4 py-1.5 md:py-2 rounded-full shadow-lg font-bold text-xs md:text-sm border border-black/5 dark:border-white/10 cursor-pointer"
                >
                  🔧 LLM Ops
                </motion.div>

                {/* Experience Badge */}
                <div className="absolute -bottom-6 left-0 md:left-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md p-4 md:p-6 rounded-2xl shadow-xl border border-black/5 dark:border-white/10 max-w-[160px] md:max-w-[200px]">
                  <div className="text-2xl md:text-3xl font-display font-bold text-accent-start mb-1">OJT</div>
                  <p className="text-[10px] md:text-xs font-semibold text-ink/60 dark:text-slate-400 uppercase tracking-wider leading-tight">
                    Industrial Engineer Intern — AI Automation @ Geidi IT
                  </p>
                </div>
      </motion.div>
    </div>
  </section>
);

const ServiceAccordion = () => {
  const [expanded, setExpanded] = useState<number | null>(1);

  const services = [
    { id: 0, title: "Branding", desc: "Crafting unique visual identities that resonate with your audience and stand the test of time." },
    { id: 1, title: "Design", desc: "Efficient, knowledgeable, and smooth experience. Highly recommended for complex UI/UX challenges." },
    { id: 2, title: "Marketing", desc: "Strategic digital marketing campaigns designed to drive growth and maximize ROI." },
    { id: 3, title: "Code", desc: "Clean, performant front-end development using the latest modern frameworks and best practices." },
    { id: 4, title: "Video Editing", desc: "Creating high-quality, engaging videos by cutting, mixing, and adding effects to tell your story." },
    { id: 5, title: "Agentic Automation", desc: "Building autonomous AI agents and automated workflows that reason, plan, and execute complex tasks independently." }
  ];

  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter">
            My Specialized<br />Services.
          </h2>
          <p className="text-ink/60 dark:text-slate-400 max-w-xs text-lg">
            I provide comprehensive design solutions tailored to your business goals.
          </p>
        </div>

        <div className="space-y-4">
          {services.map((service, idx) => (
            <FadeIn 
              key={service.id}
              delay={idx * 0.1}
              className={`rounded-3xl border transition-all duration-500 overflow-hidden ${
                expanded === service.id ? 'bg-black/5 dark:bg-white/10 border-transparent shadow-inner' : 'bg-white/50 dark:bg-slate-800/50 border-black/5 dark:border-white/5 hover:border-black/20 dark:hover:border-white/20 backdrop-blur-sm'
              }`}
            >
              <button 
                onClick={() => setExpanded(expanded === service.id ? null : service.id)}
                className="w-full p-6 md:px-8 md:py-10 flex justify-between items-center text-left gap-4"
              >
                <span className="text-2xl md:text-5xl font-display font-bold tracking-tight">
                  {service.title}
                </span>
                <div className={`w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full flex items-center justify-center transition-colors ${
                  expanded === service.id ? 'bg-accent-start text-white' : 'bg-black/5 dark:bg-white/10 text-ink dark:text-white'
                }`}>
                  {expanded === service.id ? <Minus /> : <Plus />}
                </div>
              </button>
              <AnimatePresence>
                {expanded === service.id && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 md:px-8 md:pb-10 max-w-2xl">
                      <p className="text-lg md:text-xl text-ink/70 dark:text-slate-300 leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutStats = () => (
  <section id="about" className="py-32 px-6 relative overflow-hidden">
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-2xl md:text-5xl font-display font-medium leading-tight mb-12 md:mb-20"
      >
        "UI/UX designer crafting intuitive, user-friendly experiences through wireframing, prototyping, and visual design."
      </motion.h2>

      <div className="flex justify-center mb-20">
        <div className="relative group">
          <div className="absolute inset-0 bg-accent-start blur-2xl opacity-20 group-hover:opacity-40 transition-opacity rounded-full" />
          <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl transition-colors cursor-pointer hover:scale-105 duration-500">
            <img 
              src="/699273422_1702802617512994_1962015335284207172_n.jpg" 
              alt="Designer Profile" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { label: "Years of Experience", value: "05" },
          { label: "Projects Completed", value: "50+" },
          { label: "Client Rating", value: "4.50" },
          { label: "Design Awards", value: "17" }
        ].map((stat, i) => (
          <FadeIn key={i} delay={i * 0.1} className="flex flex-col items-center">
            <span className="text-4xl md:text-7xl font-display font-bold mb-2">{stat.value}</span>
            <span className="text-xs font-bold uppercase tracking-widest text-ink/40 dark:text-slate-500">{stat.label}</span>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

const Portfolio = () => {
  const projects = [
    { title: "Mockup Design", category: "Mockup", img: "/branding.jpg" },
    { title: "Book Design", category: "Editorial", img: "/books.jpg" },
    { title: "Kriti Project", category: "Brand Identity", img: "/kriti-project.png" },
    { title: "Application UI", category: "Product", img: "/Web App.png" }
  ];

  return (
    <section id="portfolio" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex justify-between items-end mb-20">
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter">Latest<br />Portfolio.</h2>
            <button className="hidden md:flex items-center gap-2 font-bold uppercase tracking-widest text-sm hover:text-accent-start transition-colors">
              View All Projects <ArrowUpRight size={18} />
            </button>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <motion.div 
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-6">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500">
                    <ArrowUpRight className="text-ink" size={32} />
                  </div>
                </div>
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-white/90 dark:bg-slate-800/90 dark:text-white backdrop-blur-sm rounded-full text-xs font-bold uppercase tracking-widest shadow-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-3xl font-display font-bold">{project.title}</h3>
                <div className="w-12 h-12 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center group-hover:bg-ink dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-ink transition-colors">
                  <ArrowUpRight size={20} />
                </div>
              </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Simulated API response for testimonials
  const allTestimonials = [
    { 
      quote: "Very experienced and knowledgeable. I learned a lot about visual design from him.",
      name: "John Caried Dimaranan",
      role: "CEO at UNO Caffee"
    },
    { 
      quote: "Jake is one of my most consistent and reliable designers, especially when it comes to Festivals.",
      name: "Marianie Mandela Jumawan",
      role: "Festival Choreographer"
    },
    { 
      quote: "Highly affordable with student-friendly rates. I absolutely recommend his services!",
      name: "Jayzen Cordove",
      role: "Design Director at JT"
    },
    {
      quote: "Exceptional attention to detail. He delivered the web project well before our strict deadline.",
      name: "Sarah Jenkins",
      role: "Marketing Manager"
    },
    {
      quote: "His UI/UX skills transformed our platform. User engagement has improved significantly.",
      name: "Michael Chen",
      role: "Product Owner"
    },
    {
      quote: "A brilliant young developer with a professional work ethic. Fantastic results overall!",
      name: "Elena Rodriguez",
      role: "Startup Founder"
    }
  ];

  // Automatically slide every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(allTestimonials.length / 3));
    }, 10000);
    return () => clearInterval(timer);
  }, [allTestimonials.length]);

  const visibleTestimonials = allTestimonials.slice(currentIndex * 3, (currentIndex + 1) * 3);

  return (
    <section className="py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="grid md:grid-cols-3 gap-12"
          >
            {visibleTestimonials.map((t, i) => (
              <div key={i} className="flex flex-col h-full">
                <div className="text-accent-start mb-6">
                  {[...Array(5)].map((_, index) => (
                    <span key={index} className="text-2xl">★</span>
                  ))}
                </div>
                <p className="text-2xl font-display font-medium mb-8 flex-grow italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-black/5 dark:bg-white/10">
                    {/* Use the name to generate a consistent mock avatar */}
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${t.name.replace(' ', '')}`} alt={t.name} referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h4 className="font-bold">{t.name}</h4>
                    <p className="text-xs text-ink/40 dark:text-slate-500 uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Slideshow Indicators */}
        <div className="flex justify-center mt-16 gap-3">
          {[...Array(Math.ceil(allTestimonials.length / 3))].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all duration-500 ${i === currentIndex ? 'w-8 bg-accent-start' : 'w-2 bg-black/20 dark:bg-white/20 hover:bg-black/40 dark:hover:bg-white/40'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillsTicker = () => {
  const skills = [
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { name: "JAVA", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "REACT", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "NODE.JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "TYPESCRIPT", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "LARAVEL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
    { name: "TAILWIND", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "MONGODB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MYSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "ORACLE", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
    { name: "FIGMA", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { name: "CANVA", icon: "https://cdn.worldvectorlogo.com/logos/canva-1.svg" },
    { name: "PHOTOSHOP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg" },
    { name: "AFFINITY", icon: "https://cdn.worldvectorlogo.com/logos/affinity-designer.svg" },
    { name: "ILLUSTRATOR", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-original.svg" },
    { name: "HERMES AGENT", icon: "https://hermes-agent.nousresearch.com/logo.png" }
  ];

  return (
    <section className="py-12 overflow-hidden flex whitespace-nowrap">
      <motion.div 
        className="flex items-center w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
      >
        {[...skills, ...skills].map((skill, index) => (
          <div 
            key={index} 
            className="flex items-center gap-4 px-8 py-4 mx-4 font-display font-black text-2xl tracking-tighter opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-default"
          >
            <img src={skill.icon} alt={`${skill.name} logo`} className="w-8 h-8 object-contain" />
            {skill.name}
          </div>
        ))}
      </motion.div>
    </section>
  );
};

const FaqCard = ({ faq, index }: { faq: { q: string, a: string }, index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <FadeIn delay={index * 0.1}>
      <motion.div
        className="group bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-3xl border border-black/5 dark:border-white/10 overflow-hidden transition-all duration-300 hover:border-black/10 dark:hover:border-white/20 hover:shadow-lg"
        initial={false}
        layout
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full p-6 md:p-8 flex items-center justify-between gap-4 text-left"
          aria-expanded={isOpen}
        >
          <h3 className="font-display font-bold text-2xl md:text-3xl pr-12">
            {faq.q}
          </h3>
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex-shrink-0 text-ink/40 dark:text-slate-500"
          >
            <Plus className="w-6 h-6" />
          </motion.div>
        </button>
        
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="overflow-hidden"
        >
          <div className="px-6 pb-8 md:px-8 md:pb-10 border-t border-black/5 dark:border-white/10 bg-black/2 dark:bg-white/2">
            <p className="text-lg leading-relaxed text-ink/70 dark:text-slate-300">
              {faq.a}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </FadeIn>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "What services do you offer?", a: "I offer a full range of design services including UI/UX design, branding, product strategy, graphic design, motion graphics, video editing, photo manipulation, system management, and web development and many more." },
    { q: "How can I contact you?", a: "You can reach out via the contact: Email: riel.engana@student.passerellesnumeriques.org. or call 09850254857" },
    { q: "How much does a project cost?", a: "Project costs vary based on scope and complexity. I provide custom quotes after an initial discovery call." },
    { q: "Which tools do you provide?", a: "I primarily use Figma for design, and for development I use HTML, CSS, PHP, JAVA, REACT, NODEJS, TYPESCRIPT, and modern web technologies like LARAVEL, TAILWIND, and ANYTHING for development, and in regards with databases, I use MongoDB, MySQL and Oracle." }
  ];

  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-center mb-20 tracking-tighter">Frequently Asked<br />Questions.</h2>
        </FadeIn>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <FaqCard key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-32 px-6 relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-display font-black text-black/[0.03] dark:text-white/[0.02] select-none pointer-events-none uppercase tracking-tighter transition-colors">
      Contact
    </div>

    <div className="max-w-7xl mx-auto relative z-10">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <FadeIn direction="right" className="relative">
          <div className="absolute inset-0 bg-accent-start blur-3xl opacity-20 rounded-full" />
          <div className="relative aspect-square rounded-3xl md:rounded-[3rem] overflow-hidden border-4 md:border-8 border-white/50 dark:border-slate-800/50 shadow-2xl transition-colors">
            <img 
              src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTZ5ZG8wMzBsYnQ5MHdwODl0MzdvYzVrdmVuNnZ1N253ejE4Y2U5MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qnC0HHjoN5kSJyq2Zc/giphy.gif" 
              alt="Contact" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </FadeIn>
        
        <FadeIn direction="left">
          <div className="text-2xl font-display font-bold tracking-tighter mb-8">SEND ME AN EMAIL NOW!</div>
          
          <form 
            action="https://formsubmit.co/rieljake.engana.24@usjr.edu.ph" 
            method="POST"
            className="space-y-6"
          >
            <input type="hidden" name="_subject" value="You have New Message from your client Jake!" />
            <input type="hidden" name="_captcha" value="false" />

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-ink/40 dark:text-slate-500">
                Full Name
              </label>
              <input 
                type="text" 
                name="name"
                required
                placeholder="Name"
                className="w-full bg-black/5 dark:bg-white/10 dark:text-white rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-accent-start transition-shadow"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-ink/40 dark:text-slate-500">
                Email
              </label>
              <input 
                type="email" 
                name="email"
                required
                placeholder="yourname@email.com"
                className="w-full bg-black/5 dark:bg-white/10 dark:text-white rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-accent-start transition-shadow"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-ink/40 dark:text-slate-500">
                Message
              </label>
              <textarea 
                name="message"
                required
                rows={4}
                placeholder="Write your message..."
                className="w-full bg-black/5 dark:bg-white/10 dark:text-white rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-accent-start resize-none transition-shadow"
              />
            </div>

            <button
              type="submit"
              className="w-full gradient-bg text-white py-4 rounded-2xl font-bold hover:scale-[1.02] transition-transform"
            >
              Send Email
            </button>
          </form>
        </FadeIn>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 px-6 bg-ink dark:bg-black text-white transition-colors duration-500">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="text-2xl font-display font-bold tracking-tighter">ME_PROFILE.</div>
      <div className="flex gap-8 text-white/60 text-sm font-medium">
        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        <a href="#" className="hover:text-white transition-colors">Cookies</a>
      </div>
      <p className="text-white/40 text-xs">© 2026 ME_PROFILE. All rights reserved.</p>
    </div>
  </footer>
);

export default function PortfolioPage() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme');
    if (savedTheme) return savedTheme === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
      window.localStorage.setItem('portfolio-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
      window.localStorage.setItem('portfolio-theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-ink dark:text-white transition-colors duration-500 selection:bg-accent-start selection:text-white">
      <div className="fixed inset-0 z-0 h-screen w-screen overflow-hidden pointer-events-none">
        <Prism
          animationType="3drotate"
          height={3.8}
          baseWidth={5.8}
          glow={1.35}
          noise={0.22}
          transparent
          scale={2.9}
          hueShift={0.45}
          colorFrequency={1.15}
          bloom={1.1}
          timeScale={0.35}
        />
      </div>
      <div className="fixed inset-0 z-0 pointer-events-none bg-white/62 dark:bg-slate-950/48" />
      <div className="fixed inset-0 z-0 pointer-events-none bg-gradient-to-br from-slate-50/70 via-white/38 to-[#a3beff]/26 dark:from-slate-950/45 dark:via-slate-900/24 dark:to-[#a3beff]/16" />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <ServiceAccordion />
        <AboutStats />
        <Portfolio />
        <Testimonials />
        <SkillsTicker />
        <FAQ />
        <Contact />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>

      {/* Dark Mode Toggle */}
      <button 
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-ink dark:bg-white text-white dark:text-ink shadow-2xl hover:scale-110 transition-transform"
        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        aria-pressed={isDarkMode}
      >
        {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>
    </div>
  );
}
