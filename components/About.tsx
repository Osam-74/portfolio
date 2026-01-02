
import React from 'react';
import { Target, Lightbulb, ShieldCheck } from 'lucide-react';

interface AboutProps {
  summary: string;
}

const About: React.FC<AboutProps> = ({ summary }) => {
  return (
    <section id="about" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <p className="text-indigo-400 font-bold uppercase tracking-widest text-sm mb-4">About Me</p>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
              Bridging Technical Proficiency with <span className="text-gradient">Operational Excellence.</span>
            </h2>
            <div className="space-y-6 text-lg text-zinc-400 leading-relaxed">
              <p>{summary}</p>
            </div>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-8 rounded-[2rem] border-zinc-800">
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6">
                <Target size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-zinc-100">Results-Driven</h3>
              <p className="text-zinc-400">Focusing on measurable outcomes, from zero-downtime migrations to high-volume event check-in systems.</p>
            </div>
            
            <div className="glass-card p-8 rounded-[2rem] border-zinc-800 mt-0 md:mt-8">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6">
                <Lightbulb size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-zinc-100">Creative Solutions</h3>
              <p className="text-zinc-400">Combining graphic design with custom PHP and JavaScript to build unique, brand-aligned digital products.</p>
            </div>
            
            <div className="glass-card p-8 rounded-[2rem] border-zinc-800">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-zinc-100">Reliable & Secure</h3>
              <p className="text-zinc-400">Expertise in WordPress security hardening, SSL management, and robust infrastructure monitoring.</p>
            </div>
            
            <div className="bg-gradient-primary p-8 rounded-[2rem] flex flex-col justify-between text-white mt-0 md:mt-8">
              <div>
                <p className="text-indigo-100 text-sm font-bold uppercase tracking-widest mb-2">Philosophy</p>
                <h3 className="text-2xl font-bold leading-tight">Delivering scale without compromising on quality.</h3>
              </div>
              <p className="mt-6 text-indigo-50 hover:underline cursor-pointer">Learn more about my process &rarr;</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
