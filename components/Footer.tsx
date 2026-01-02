
import React from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';
import { BasicInfo } from '../types';

interface FooterProps {
  info: BasicInfo;
}

const Footer: React.FC<FooterProps> = ({ info }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-zinc-900 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="text-xl font-extrabold tracking-tighter flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center text-white text-sm">OS</span>
              <span>OLAMIDE <span className="text-indigo-400">AMUSAN</span></span>
            </div>
            <p className="text-sm text-zinc-600 font-medium">Full-Stack WordPress Developer & Digital Specialist</p>
          </div>
          
          <div className="flex items-center gap-6">
            <a href={info.links.github} target="_blank" rel="noopener" className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-700 transition-all">
              <Github size={20} />
            </a>
            <a href={info.links.linkedin} target="_blank" rel="noopener" className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-700 transition-all">
              <Linkedin size={20} />
            </a>
            <a href="#" className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-700 transition-all">
              <Twitter size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-zinc-600 uppercase tracking-widest">
          <p>© {currentYear} {info.full_name}. All Rights Reserved.</p>
          <div className="flex items-center gap-1">
            Built with <Heart size={12} className="text-red-500 fill-red-500" /> by Olamide
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
