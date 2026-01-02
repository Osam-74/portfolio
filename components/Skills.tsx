
import React from 'react';

interface SkillsProps {
  skills: Record<string, string[]>;
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-bold uppercase tracking-widest text-sm mb-4">My Stack</p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Technical Expertise</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">A comprehensive collection of technologies and tools I use to bring ideas to life across the full digital spectrum.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Explicitly casting Object.entries to fix the 'unknown' inference error */}
          {(Object.entries(skills) as [string, string[]][]).map(([category, items], index) => (
            <div 
              key={category}
              className="glass-card p-8 rounded-[2.5rem] border-zinc-800 group hover:border-indigo-500/50 transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-zinc-100">{category}</h3>
                <span className="text-zinc-600 font-black text-4xl opacity-10 group-hover:opacity-100 group-hover:text-indigo-500 transition-all duration-500">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-zinc-400 group-hover:text-zinc-100 group-hover:border-zinc-700 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
