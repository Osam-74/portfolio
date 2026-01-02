
import React from 'react';
import { Calendar, MapPin, GraduationCap, ShieldCheck } from 'lucide-react';
import { WorkExperience, Education } from '../types';
/* Fix: Import portfolioData to access certifications */
import { portfolioData } from '../data';

interface ExperienceProps {
  experiences: WorkExperience[];
  education: Education;
}

const Experience: React.FC<ExperienceProps> = ({ experiences, education }) => {
  return (
    <section id="experience" className="py-24 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <div className="mb-12">
              <p className="text-indigo-400 font-bold uppercase tracking-widest text-sm mb-4">Career Journey</p>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Professional Experience</h2>
            </div>
            
            <div className="space-y-12 relative before:absolute before:left-6 before:top-4 before:bottom-4 before:w-px before:bg-zinc-800">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative pl-16">
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center z-10">
                    <div className="w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
                  </div>
                  
                  <div className="glass-card p-8 rounded-[2rem] border-zinc-800 hover:border-zinc-700 transition-colors">
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-zinc-100">{exp.position}</h3>
                        <p className="text-indigo-400 font-semibold">{exp.company}</p>
                      </div>
                      <div className="flex flex-col items-end text-sm text-zinc-500">
                        <span className="flex items-center gap-1.5 font-medium"><Calendar size={14} /> {exp.period}</span>
                        <span className="flex items-center gap-1.5"><MapPin size={14} /> {exp.location}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-4">
                      {exp.achievements.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-zinc-400 leading-relaxed">
                          <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-zinc-700 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-4 space-y-12">
            <div>
              <div className="mb-8">
                <p className="text-indigo-400 font-bold uppercase tracking-widest text-sm mb-4">Academic Background</p>
                <h2 className="text-3xl font-extrabold">Education</h2>
              </div>
              <div className="glass-card p-8 rounded-[2rem] border-zinc-800 relative overflow-hidden group">
                <div className="absolute -right-8 -bottom-8 text-zinc-800/20 group-hover:text-indigo-500/10 transition-colors">
                  <GraduationCap size={160} />
                </div>
                <h4 className="text-xl font-bold text-zinc-100 mb-2">{education.degree}</h4>
                <p className="text-indigo-400 font-semibold mb-4">{education.institution}</p>
                <div className="flex items-center gap-4 text-sm text-zinc-500">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {education.graduation_date}</span>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-8">
                <p className="text-indigo-400 font-bold uppercase tracking-widest text-sm mb-4">Learning</p>
                <h2 className="text-3xl font-extrabold">Certifications</h2>
              </div>
              <div className="space-y-4">
                {portfolioData.certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center text-indigo-400">
                      <ShieldCheck size={20} />
                    </div>
                    <p className="text-sm font-medium text-zinc-300">{cert}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
