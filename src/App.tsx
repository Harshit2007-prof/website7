import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { 
  Menu, X, 
  Send, ChevronRight, ExternalLink, Moon, Sun, Mail
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.classList.toggle('light');
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "glass py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.a 
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-bold tracking-tighter"
        >
          HG<span className="text-accent-blue">.</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium hover:text-accent-blue transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full glass hover:bg-white/10 transition-colors"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
           <button 
            onClick={toggleTheme}
            className="p-2 rounded-full glass"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 glass border-t border-white/10 p-6 flex flex-col space-y-4 md:hidden"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-[120px] animate-pulse delay-700" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 glass rounded-full text-xs font-semibold tracking-widest uppercase text-accent-blue">
            Available for freelance
          </span>
          <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 tracking-tight">
            Harshit <span className="text-gradient">Gupta</span>
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Creative Graphic Designer <br />
            <span className="text-neutral-200 italic">"Designing visuals that speak louder than words"</span>
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-black font-bold rounded-full flex items-center gap-2 group transition-all hover:bg-accent-blue hover:text-white neon-glow-blue"
            >
              View My Work
              <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass font-bold rounded-full hover:bg-white/10 transition-all"
            >
              Let's Talk
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent-blue to-transparent" />
      </motion.div>
    </section>
  );
};

const About = () => {
  const skills = [
    "Photoshop", "Illustrator", "Canva", "UI/UX Design", "Branding", "Logo Design", "Typography", "Motion Graphics"
  ];

  return (
    <section id="about" className="py-24 px-6 bg-neutral-900/50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-accent-blue to-accent-purple rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
          <div className="relative aspect-square rounded-2xl overflow-hidden glass">
            <img 
              src="https://picsum.photos/seed/designer/800/800" 
              alt="Harshit Gupta" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-display font-bold mb-6">About Me</h2>
          <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
            I'm Harshit Gupta, a passionate graphic designer with a keen eye for detail and a love for creative storytelling. 
            With over 5 years of experience, I specialize in transforming complex ideas into visually stunning designs that resonate with audiences.
          </p>
          <p className="text-lg text-neutral-400 mb-10 leading-relaxed">
            My approach is simple: I believe that every pixel should serve a purpose. Whether it's a minimal logo or a full-scale branding project, I strive for excellence and innovation in everything I create.
          </p>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 glass rounded-lg text-sm font-medium hover:text-accent-blue transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const projects = [
    { title: "Lumina Branding", category: "Branding", img: "https://picsum.photos/seed/lumina/600/800", link: "https://ibb.co/fzjd84yQ" },
    { title: "Vortex UI Kit", category: "UI/UX", img: "https://picsum.photos/seed/vortex/600/400", link: "https://ibb.co/ns6wv4DS" },
    { title: "Neon Socials", category: "Social Media", img: "https://picsum.photos/seed/neon/600/600", link: "https://ibb.co/n8144SH8" },
    { title: "Eco Logo Design", category: "Logo", img: "https://picsum.photos/seed/eco/600/500", link: "https://ibb.co/9HMYSZYz" },
    { title: "Future Tech Poster", category: "Print", img: "https://picsum.photos/seed/future/600/700", link: "https://ibb.co/0yVphzdw" },
    { title: "Minimalist App", category: "UI/UX", img: "https://picsum.photos/seed/minimal/600/450", link: "https://ibb.co/YShBSW6" },
    { title: "Abstract Identity", category: "Branding", img: "https://picsum.photos/seed/abstract/600/550", link: "https://ibb.co/JWgVCwJG" },
    { title: "Digital Campaign", category: "Social Media", img: "https://picsum.photos/seed/digital/600/650", link: "https://ibb.co/SwgJWFDb" },
  ];

  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-display font-bold mb-4">Selected Works</h2>
            <p className="text-neutral-400 max-w-md">A collection of projects that define my creative journey and technical expertise.</p>
          </div>
          <div className="flex gap-4">
            <button className="text-sm font-bold border-b-2 border-accent-blue pb-1">All</button>
            <button className="text-sm font-bold text-neutral-500 hover:text-neutral-300 transition-colors pb-1">Branding</button>
            <button className="text-sm font-bold text-neutral-500 hover:text-neutral-300 transition-colors pb-1">UI/UX</button>
          </div>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="block relative group overflow-hidden rounded-2xl glass cursor-pointer"
            >
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-accent-blue text-xs font-bold uppercase tracking-widest mb-2">{project.category}</span>
                <h3 className="text-2xl font-display font-bold mb-2">{project.title}</h3>
                <div className="flex items-center gap-2 text-sm font-medium text-neutral-300">
                  View Project <ExternalLink size={14} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    { name: "Sarah Johnson", role: "CEO, TechFlow", text: "Harshit transformed our brand identity completely. His attention to detail and creative vision are unmatched." },
    { name: "Michael Chen", role: "Founder, CreativeCo", text: "Working with Harshit was a breeze. He understood our requirements perfectly and delivered beyond expectations." },
    { name: "Emma Davis", role: "Marketing Director", text: "The social media designs Harshit created for us saw a 40% increase in engagement. Highly recommended!" },
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-display font-bold mb-16">Client Feedback</h2>
        
        <div className="relative h-64">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: active === i ? 1 : 0,
                scale: active === i ? 1 : 0.9,
                x: active === i ? 0 : (active < i ? 100 : -100)
              }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <p className="text-2xl md:text-3xl font-light italic text-neutral-300 mb-8">"{t.text}"</p>
              <h4 className="font-bold text-lg">{t.name}</h4>
              <span className="text-accent-blue text-sm uppercase tracking-widest">{t.role}</span>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button 
              key={i}
              onClick={() => setActive(i)}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                active === i ? "w-8 bg-accent-blue" : "bg-neutral-700"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-neutral-900/50">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-display font-bold mb-6">Let's Create Something <span className="text-gradient">Extraordinary</span></h2>
          <p className="text-lg text-neutral-400 mb-10">
            Have a project in mind? Or just want to say hi? Feel free to reach out. I'm always open to new opportunities and collaborations.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 glass rounded-full flex items-center justify-center text-accent-blue">
                <Mail size={20} />
              </div>
              <a href="mailto:anskhig@gmail.com" className="hover:text-accent-blue transition-colors">anskhig@gmail.com</a>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-3xl"
        >
          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-blue transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Email</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-blue transition-colors" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-neutral-500">Message</label>
              <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-blue transition-colors" placeholder="Tell me about your project..." />
            </div>
            <button className="w-full py-4 bg-gradient-to-r from-accent-blue to-accent-purple text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity neon-glow-blue">
              Send Message <Send size={18} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-xl font-display font-bold">HG<span className="text-accent-blue">.</span></div>
        <div className="text-neutral-500 text-sm">
          © {new Date().getFullYear()} Harshit Gupta. All rights reserved.
        </div>
        <div className="flex gap-6 text-sm font-medium text-neutral-400">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div 
        className="custom-cursor hidden lg:block"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointer ? 2.5 : 1})`,
          borderColor: isPointer ? 'var(--color-accent-blue)' : 'white',
          backgroundColor: isPointer ? 'rgba(0, 210, 255, 0.1)' : 'transparent'
        }}
      />
      <div 
        className="custom-cursor-dot hidden lg:block"
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />
    </>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-accent-blue z-[60] origin-left" style={{ scaleX }} />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
