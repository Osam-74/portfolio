
import React from 'react';
import { Github, Linkedin, ArrowRight, Download, Code2 } from 'lucide-react';
import { BasicInfo } from '../types';

interface HeroProps {
  data: BasicInfo;
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            Available for New Projects
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Hi, I'm <span className="text-gradient">Olamide</span> <br />
            <span className="text-3xl md:text-5xl font-bold text-zinc-400">Amusan.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 mb-8 max-w-xl leading-relaxed">
            {data.professional_title}. Crafting high-performance web experiences through modern development and custom CMS solutions.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-10">
            <a 
              href="#projects" 
              className="bg-gradient-primary text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-lg shadow-indigo-500/20"
            >
              View My Work <ArrowRight size={18} />
            </a>
            <button className="bg-zinc-900 border border-zinc-800 text-zinc-100 px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-zinc-800 transition-colors">
              Resume <Download size={18} />
            </button>
          </div>
          
          <div className="flex items-center gap-6">
            <a href={data.links.github} target="_blank" rel="noopener" className="text-zinc-500 hover:text-indigo-400 transition-colors">
              <Github size={24} />
            </a>
            <a href={data.links.linkedin} target="_blank" rel="noopener" className="text-zinc-500 hover:text-indigo-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <div className="h-px w-12 bg-zinc-800" />
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-600">Based in {data.location}</span>
          </div>
        </div>
        
        <div className="relative group order-1 lg:order-2">
          {/* Animated Glow Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[3rem] blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />
          
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-zinc-800 bg-zinc-900 shadow-2xl">
            {/* 
              Professional Portrait Section:
              Using a descriptive path. The styling ensures the portrait provided in the prompt 
              is displayed with a modern, high-contrast aesthetic that fits the dark theme.
            */}
            <img 
              src="/portfolio/images/profile.png" 
              alt="Olamide Samuel Amusan" 
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            />
            
            {/* Overlay Gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent pointer-events-none" />
          </div>
          
          {/* Floating Badge */}
          <div className="absolute -bottom-6 -right-6 glass-card p-6 rounded-3xl border border-zinc-700/50 hidden md:block animate-bounce-slow shadow-2xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center text-white shadow-lg">
                <Code2 size={24} />
              </div>
              <div>
                <p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest">Digital Specialist</p>
                <p className="font-bold text-zinc-100">Full-Stack Expert</p>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-indigo-500/30 rounded-tl-3xl pointer-events-none" />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-purple-500/30 rounded-br-3xl pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
