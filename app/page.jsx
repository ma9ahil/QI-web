"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket, Code, Layers, Zap, Activity, Cpu, Globe, CheckCircle } from 'lucide-react';

const QuantumIgnitionsSite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-50 font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden">
      
      {/* --- BACKGROUND MESH & AMBIENT LIGHT --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.15]"
             style={{
               backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)',
               backgroundSize: '24px 24px'
             }}>
        </div>
        <div className="absolute top-0 -left-20 md:left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/20 rounded-full blur-[80px] md:blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 -right-20 md:right-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-cyan-600/10 rounded-full blur-[80px] md:blur-[120px]"></div>
      </div>

      {/* --- FULL WIDTH TOP NAVBAR --- */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
          scrolled || isMenuOpen 
            ? 'bg-slate-900/80 backdrop-blur-xl border-white/10 py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center gap-2 md:gap-3 cursor-pointer group" onClick={() => window.scrollTo(0,0)}>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 blur-lg opacity-0 group-hover:opacity-50 transition-opacity"></div>
              <img src="/logo.webp" alt="Logo" className="relative h-8 md:h-9 w-auto object-contain" />
            </div>
            <span className="font-bold text-base md:text-lg tracking-tighter text-white">
              QUANTUM <span className="text-cyan-400">IGNITIONS</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="ml-4 px-5 py-2.5 text-sm font-bold text-black bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-all shadow-[0_0_15px_rgba(34,211,238,0.4)] hover:shadow-[0_0_25px_rgba(34,211,238,0.6)]">
              Start Project
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden text-slate-300 hover:text-white p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-white/10 shadow-2xl transition-all duration-300 origin-top overflow-hidden ${isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col py-4 px-4 space-y-2">
             {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)} 
                  className="block px-4 py-3 text-left text-slate-300 hover:text-white hover:bg-white/5 rounded-xl text-lg font-medium"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2">
                <a 
                  href="#contact" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full px-4 py-4 text-center font-bold text-black bg-cyan-400 hover:bg-cyan-300 rounded-xl"
                >
                  Start Project
                </a>
              </div>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden min-h-[85dvh] flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 text-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6 md:mb-8 hover:bg-blue-500/20 transition-colors cursor-default">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            Future Ready Tech
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight text-white mb-6 drop-shadow-2xl leading-tight">
            Turning Ideas Into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 animate-gradient bg-[length:200%_auto]">
              Reality, Fast.
            </span>
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-base md:text-xl text-slate-400 leading-relaxed mb-8 md:mb-10 px-4">
            We help innovators build high-quality MVPs and digital products. 
            <span className="text-white block md:inline"> From concept to launch, instantly.</span>
          </p>

          <div className="flex justify-center px-4">
            <a href="#contact" className="w-full md:w-auto group relative px-8 py-4 md:px-10 md:py-5 rounded-2xl bg-blue-600 text-white font-bold overflow-hidden transition-all hover:scale-105 shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:shadow-[0_0_50px_rgba(37,99,235,0.5)] text-base md:text-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative flex items-center justify-center gap-3">
                Launch Project <Rocket size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-16 md:py-24 bg-slate-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-10 lg:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Who We Are</h2>
              <div className="h-1 w-20 bg-blue-500 mb-8 rounded-full"></div>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                We are a <span className="text-white font-semibold">UK-based</span> team of tech enthusiasts, developers, and designers passionate about bringing ideas to life. We specialize in transforming concepts into functional products, helping you test, validate, and launch your vision quickly.
              </p>
              <ul className="space-y-4">
                {[
                  "Fast MVP Development",
                  "Custom Digital Solutions",
                  "End-to-End Product Support"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-200">
                    <CheckCircle className="text-blue-400 flex-shrink-0" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-2xl transform rotate-3 opacity-10"></div>
              <div className="relative bg-slate-800/50 border border-white/5 p-8 rounded-2xl shadow-2xl backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-4">
                   <div className="p-3 bg-blue-500/20 rounded-full text-blue-400">
                      <Globe size={24} />
                   </div>
                   <div>
                      <h4 className="text-white font-bold">Global Standards, UK Roots</h4>
                      <p className="text-slate-400 text-sm">London • Manchester • Remote</p>
                   </div>
                </div>
                <p className="text-xl font-light text-slate-300 italic">
                  "No matter your industry or idea, we provide the expertise and tools to turn it into a working MVP or digital solution."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES --- */}
      <section id="services" className="py-16 md:py-24 relative z-10 bg-slate-900/30 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="mb-10 md:mb-16 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">What We Do</h2>
            <div className="h-1 w-20 md:w-24 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto md:mx-0"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { icon: Rocket, title: "MVP Development", desc: "Validate core concepts in weeks, not months." },
              { icon: Globe, title: "Web Applications", desc: "High-performance React & Next.js solutions." },
              { icon: Layers, title: "UI/UX Design", desc: "Interfaces that feel magical to use." },
              { icon: Cpu, title: "AI Integration", desc: "Smart algorithms to power your business logic." },
              { icon: Activity, title: "Rapid Prototyping", desc: "Visualizing ideas before writing code." },
              { icon: Zap, title: "Consulting", desc: "Technical strategy aligned with business goals." },
            ].map((service, idx) => (
              <div key={idx} className="group relative p-6 md:p-8 bg-slate-900/40 border border-white/5 rounded-2xl hover:bg-slate-800/60 transition-all duration-300 hover:border-blue-500/30 active:scale-95 md:active:scale-100">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center mb-4 md:mb-6 border border-white/5 group-hover:border-blue-500/50">
                  <service.icon className="text-blue-400 group-hover:text-cyan-300 transition-colors" size={24} />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROCESS --- */}
      <section id="process" className="py-16 md:py-24 bg-slate-900/30 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center">
            <div className="w-full md:w-1/3 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How We <br className="hidden md:block"/><span className="text-blue-500">Accelerate</span> You</h2>
              <p className="text-slate-400">Our agile process is designed to cut through the noise and deliver working software fast.</p>
            </div>
            
            <div className="w-full md:w-2/3 grid gap-4 md:gap-6">
              {[
                { step: "01", title: "Discovery", desc: "We adhere to your vision and map out the technical path." },
                { step: "02", title: "Development", desc: "Sprints, rapid updates, and constant feedback loops." },
                { step: "03", title: "Launch", desc: "Deployment, testing, and handover for scale." }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 md:gap-6 p-5 md:p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-colors">
                  <span className="text-3xl md:text-4xl font-black text-slate-800 stroke-blue-500 opacity-50 shrink-0">{item.step}</span>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-slate-400 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT WITH FORMSUBMIT --- */}
      <section id="contact" className="py-16 md:py-24 relative">
         <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600/10 blur-[60px] md:blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
          <div className="bg-slate-900/80 backdrop-blur-xl p-6 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
            <div className="text-center mb-8 md:mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Let's Build Something Great</h2>
              <p className="text-slate-400 mt-2 text-sm md:text-base">Fill out the form and we'll get back to you within 24 hours.</p>
            </div>

            {/* Form Configuration */}
            <form 
              action="https://formsubmit.co/manahilsupwork@gmail.com" 
              method="POST"
              className="space-y-4 md:space-y-6"
            >
              {/* Optional: Configuration for FormSubmit */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Inquiry from Quantum Ignitions Website" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <input type="text" name="name" required placeholder="Name" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 md:py-4 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-600 text-sm md:text-base" />
                <input type="email" name="email" required placeholder="Email" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 md:py-4 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-600 text-sm md:text-base" />
              </div>
              <textarea name="message" required rows={4} placeholder="Tell us about your project..." className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 md:py-4 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-600 text-sm md:text-base"></textarea>
              
              <button type="submit" className="w-full py-3 md:py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-shadow text-base md:text-lg">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-6 md:py-8 border-t border-white/5 text-center text-slate-500 text-xs md:text-sm bg-black/40 backdrop-blur-md">
        <div className="flex justify-center items-center gap-2 mb-4">
           <img src="/logo.webp" alt="Logo" className="h-5 md:h-6 w-auto opacity-50 grayscale hover:grayscale-0 transition-all" />
        </div>
        <p>© {new Date().getFullYear()} Quantum Ignitions. Built for the future.</p>
      </footer>
    </div>
  );
};

export default QuantumIgnitionsSite;