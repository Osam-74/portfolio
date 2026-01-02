
import React from 'react';
import { ExternalLink, Github, PlayCircle } from 'lucide-react';
import { Project } from '../types';

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <p className="text-indigo-400 font-bold uppercase tracking-widest text-sm mb-4">Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Featured Projects</h2>
            <p className="text-zinc-400 max-w-xl">A selection of my recent works across web development, systems architecture, and e-commerce solutions.</p>
          </div>
          <a href="#" className="group flex items-center gap-2 text-zinc-400 hover:text-indigo-400 font-bold transition-colors">
            View All Projects <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group glass-card rounded-[2.5rem] border-zinc-800 overflow-hidden flex flex-col hover:border-indigo-500/30 transition-all duration-500">
              <div className="aspect-video relative overflow-hidden bg-zinc-900">
                <img 
                  src={`https://picsum.photos/seed/${idx + 50}/800/450`} 
                  alt={project.name} 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
                
                <div className="absolute top-6 right-6 flex gap-2">
                  {project.links?.source_code && (
                    <a href={project.links.source_code} className="w-10 h-10 rounded-full bg-zinc-900/80 backdrop-blur-md flex items-center justify-center text-zinc-400 hover:text-white hover:bg-indigo-600 transition-all">
                      <Github size={20} />
                    </a>
                  )}
                  {project.links?.live_demo && (
                    <a href={project.links.live_demo} className="w-10 h-10 rounded-full bg-zinc-900/80 backdrop-blur-md flex items-center justify-center text-zinc-400 hover:text-white hover:bg-indigo-600 transition-all">
                      <ExternalLink size={20} />
                    </a>
                  )}
                  {project.links?.video_demo && (
                    <a href={project.links.video_demo} className="w-10 h-10 rounded-full bg-zinc-900/80 backdrop-blur-md flex items-center justify-center text-zinc-400 hover:text-white hover:bg-indigo-600 transition-all">
                      <PlayCircle size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="p-10 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-500 group-hover:text-indigo-400 group-hover:border-indigo-500/20 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-zinc-100">{project.name}</h3>
                <p className="text-zinc-400 leading-relaxed mb-8 flex-grow">{project.description}</p>
                
                <div className="flex items-center gap-4 pt-4 border-t border-zinc-900">
                  <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                  <span className="text-xs font-bold text-zinc-600 uppercase tracking-widest">Completed</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
