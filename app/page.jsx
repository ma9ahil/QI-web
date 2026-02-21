"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Rocket, Code, Layers, Zap, Activity, Cpu, Globe, CheckCircle } from 'lucide-react';
import CookieBanner from './components/CookieBanner'; //need to add GA4 id for this to have functionality

const QuantumIgnitionsSite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer to highlight active navbar link
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', 
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach((link) => {
      const sectionId = link.href.substring(1); 
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [navLinks]);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-50 font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden">
      
      <CookieBanner />

      {/* --- BACKGROUND MESH --- */}
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

      {/* --- NAVBAR --- */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${scrolled || isMenuOpen ? 'bg-slate-900/80 backdrop-blur-xl border-white/10 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 md:gap-3 cursor-pointer group" onClick={() => { window.scrollTo(0,0); setActiveSection(''); }}>
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 blur-lg opacity-0 group-hover:opacity-50 transition-opacity"></div>
              <img src="/logo.webp" alt="Logo" className="relative h-8 md:h-9 w-auto object-contain" />
            </div>
            <span className="font-bold text-base md:text-lg tracking-tighter text-white">
              QUANTUM <span className="text-cyan-400">IGNITIONS</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a 
                  key={link.name} 
                  href={link.href} 
                  // UPDATED: Text Glow effect for active state and hover
                  className={`px-4 py-2 text-sm transition-all duration-300 ${
                    isActive 
                      ? 'text-white-400 font-bold [text-shadow:0_0_15px_rgba(34,211,238,0.8)]' 
                      : 'text-slate-300 font-medium hover:text-white-200 hover:[text-shadow:0_0_10px_rgba(34,211,238,0.5)]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <a href="#contact" className="ml-4 px-5 py-2.5 text-sm font-bold text-black bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-all shadow-[0_0_15px_rgba(34,211,238,0.4)] hover:shadow-[0_0_25px_rgba(34,211,238,0.6)]">
              Start Project
            </a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-slate-300 hover:text-white p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-white/10 shadow-2xl transition-all duration-300 origin-top">
             {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsMenuOpen(false)} 
                    // UPDATED: Text Glow effect for Mobile Menu
                    className={`block px-8 py-4 text-left text-lg border-b border-white/5 transition-all duration-300 ${
                      isActive 
                        ? 'text-cyan-400 font-bold [text-shadow:0_0_15px_rgba(34,211,238,0.8)]' 
                        : 'text-slate-300 font-medium hover:text-cyan-200 hover:[text-shadow:0_0_10px_rgba(34,211,238,0.5)]'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="p-4">
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block w-full px-4 py-4 text-center font-bold text-black bg-cyan-400 hover:bg-cyan-300 rounded-xl">
                  Start Project
                </a>
              </div>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden min-h-[85dvh] flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 text-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6 md:mb-8 hover:bg-blue-500/20 transition-colors cursor-default">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            igniting future tech
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight text-white mb-6 drop-shadow-2xl leading-tight">
            Turning Ideas Into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 animate-gradient bg-[length:200%_auto]">
              Reality, Fast.
            </span>
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-base md:text-xl text-slate-400 leading-relaxed mb-8 md:mb-10 px-4">
            We help innovators build high-quality MVPs and digital products.
              <br/>
            <span className="text-white block md:inline">From concept to launch, instantly.</span>
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
                We are a <span className="text-white font-semibold">UK-based</span> team of tech enthusiasts, developers, and designers passionate about bringing ideas to life. We specialize in transforming concepts into functional products.
              </p>
              <ul className="space-y-4">
                {["Fast MVP Development", "Custom Digital Solutions", "End-to-End Product Support"].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-slate-200">
                    <CheckCircle className="text-blue-400 flex-shrink-0" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative bg-slate-800/50 border border-white/5 p-8 rounded-2xl shadow-2xl backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-4">
                   <div className="p-3 bg-blue-500/20 rounded-full text-blue-400"><Globe size={24} /></div>
                   <div>
                      <h4 className="text-white font-bold">Global Standards, UK Roots</h4>
                      <p className="text-slate-400 text-sm">London • Manchester • Remote</p>
                   </div>
                </div>
                <p className="text-xl font-light text-slate-300 italic">"No matter your industry or idea, we provide the expertise and tools to turn it into a working MVP."</p>
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
              { icon: Rocket, title: "MVP Development", desc: "Validate core concepts in hours." },
              { icon: Globe, title: "Web Applications", desc: "High-performance solutions." },
              { icon: Layers, title: "UI/UX Design", desc: "Interfaces that feel magical to use." },
              { icon: Cpu, title: "AI Integration", desc: "Smart algorithms to power your business logic." },
              { icon: Activity, title: "Rapid Prototyping", desc: "Visualizing ideas before writing code." },
              { icon: Zap, title: "Consulting", desc: "Technical strategy aligned with business goals." },
            ].map((service, idx) => (
              <div key={idx} className="group relative p-6 md:p-8 bg-slate-900/40 border border-white/5 rounded-2xl hover:bg-slate-800/60 transition-all duration-300 hover:border-blue-500/30">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center mb-4 md:mb-6 border border-white/5 group-hover:border-blue-500/50">
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
                { step: "1", title: "Discovery", desc: "We adhere to your vision and map out the technical path." },
                { step: "2", title: "Development", desc: "Sprints, rapid updates, and constant feedback loops." },
                { step: "3", title: "Launch", desc: "Deployment, testing, and handover for scale." }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 md:gap-6 p-5 md:p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/30 transition-colors">
                  <span className="text-3xl md:text-4xl font-bold text-white">{item.step}</span>
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

      {/* --- CONTACT --- */}
      <section id="contact" className="py-16 md:py-24 relative">
         <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600/10 blur-[60px] md:blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
          <div className="bg-slate-900/80 backdrop-blur-xl p-6 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
            <div className="text-center mb-8 md:mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Let's Build Something Great</h2>
              <p className="text-slate-400 mt-2 text-sm md:text-base">Fill out the form and we'll get back to you within 24 hours.</p>
            </div>
            <form action="https://formsubmit.co/manahilsupwork@gmail.com" method="POST" className="space-y-4 md:space-y-6">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Inquiry from Quantum Ignitions" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <input type="text" name="name" required placeholder="Name" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 md:py-4 text-white focus:border-blue-500 outline-none transition-all placeholder:text-slate-600" />
                <input type="email" name="email" required placeholder="Email" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 md:py-4 text-white focus:border-blue-500 outline-none transition-all placeholder:text-slate-600" />
              </div>
              <textarea name="message" required rows={4} placeholder="Tell us about your project..." className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 md:py-4 text-white focus:border-blue-500 outline-none transition-all placeholder:text-slate-600"></textarea>
              <button type="submit" className="w-full py-3 md:py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-shadow text-base md:text-lg">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-8 border-t border-white/5 bg-black/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
             <img src="/logo.webp" alt="Logo" className="h-6 w-auto opacity-70 grayscale hover:grayscale-0 transition-all" />
          </div>
          
          <p className="text-slate-400 text-sm mb-2">
            © 2026 Quantum Ignitions Ltd 
          </p>
          <p className="text-slate-500 text-xs">
            Office Address: [Your Registered Address] • Registered Number: [12345678]
          </p>

          <div className="flex justify-center gap-6 mt-4 text-sm text-slate-500">
             <Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
             <Link href="/terms" className="hover:text-blue-400 transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default QuantumIgnitionsSite;