import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star } from 'lucide-react';
import { capacitiesData } from '../data';
import GraphicDesignerPortfolio from './GraphicDesignerPortfolio';

const CapacityDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  const capacity = Object.values(capacitiesData).find(
    c => c.id === id
  ) as any;

  if (!capacity) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Capacity not found</h1>
          <Link to="/" className="text-indigo-400 hover:text-indigo-300">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Back Button */}
        <Link to="/#capacities" className="flex items-center gap-2 text-zinc-400 hover:text-indigo-400 mb-12 transition-colors">
          <ArrowLeft size={18} /> Back to Capacities
        </Link>

        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">{capacity.title}</h1>
          <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">{capacity.overview}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Portfolio Gallery - Graphic Designer */}
            {capacity.portfolio && capacity.portfolio.length > 0 && (
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8">Design Portfolio</h2>
                <GraphicDesignerPortfolio images={capacity.portfolio} />
              </div>
            )}

            {/* About This Capacity */}
            <div className="mb-16 glass-card p-8 rounded-[2rem] border border-zinc-800">
              <h2 className="text-3xl font-bold mb-4">About This Capacity</h2>
              <p className="text-zinc-300 leading-relaxed whitespace-pre-line">{capacity.overview}</p>
            </div>

            {/* Skills */}
            {capacity.keySkills && capacity.keySkills.length > 0 && (
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8">Key Skills</h2>
                <div className="grid grid-cols-2 gap-4">
                  {capacity.keySkills?.map((skill: string) => (
                    <div
                      key={skill}
                      className="glass-card p-4 rounded-2xl border border-zinc-800 hover:border-indigo-500/30 transition-all"
                    >
                      <p className="text-zinc-200 font-semibold">{skill}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Projects */}
            {capacity.projects && capacity.projects.length > 0 && (
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8">Projects & Experience</h2>
                <div className="space-y-8">
                  {capacity.projects.map((project: any, idx: number) => (
                    <div key={idx} className="glass-card p-8 rounded-[2rem] border border-zinc-800 hover:border-indigo-500/30 transition-all">
                      <h3 className="text-2xl font-bold mb-3 text-zinc-100">{project.name}</h3>
                      <p className="text-zinc-400 mb-4">{project.description}</p>
                      {project.link && (
                        <a href={`https://${project.link}`} target="_blank" rel="noopener" className="text-indigo-400 hover:text-indigo-300 mb-4 inline-block">
                          Visit: {project.link} ↗
                        </a>
                      )}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech: string) => (
                          <span key={tech} className="text-xs font-bold uppercase px-3 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-indigo-400">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <p className="text-indigo-400 font-semibold">💡 {project.impact}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Responsibilities */}
            {capacity.responsibilities && capacity.responsibilities.length > 0 && (
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8">Key Responsibilities</h2>
                <ul className="space-y-4">
                  {capacity.responsibilities.map((responsibility: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-4">
                      <span className="w-2 h-2 rounded-full bg-indigo-500 mt-3 shrink-0" />
                      <span className="text-zinc-300">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Outcomes */}
            {capacity.outcomes && capacity.outcomes.length > 0 && (
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8">Outcomes & Results</h2>
                <ul className="space-y-4">
                  {capacity.outcomes.map((outcome: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-4">
                      <span className="w-2 h-2 rounded-full bg-purple-500 mt-3 shrink-0" />
                      <span className="text-zinc-300">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Testimonials */}
            {capacity.testimonials && capacity.testimonials.length > 0 && (
              <div className="mb-16">
                <h2 className="text-3xl font-bold mb-8">Client Testimonials</h2>
                <div className="space-y-6">
                  {capacity.testimonials.map((testimonial: any, idx: number) => (
                    <div key={idx} className="glass-card p-8 rounded-[2rem] border border-zinc-800">
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-zinc-300 mb-4 italic">"{testimonial.feedback}"</p>
                      <div>
                        <p className="font-bold text-zinc-100">{testimonial.client}</p>
                        <p className="text-sm text-zinc-500">{testimonial.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 flex flex-col gap-8">
            {/* Tools & Technologies */}
            <div className="glass-card p-8 rounded-[2rem] border border-zinc-800 sticky top-24">
              <h3 className="text-xl font-bold mb-6">Tools & Platforms</h3>
              <div className="space-y-3">
                {capacity.tools?.map((tool: string) => (
                  <div key={tool} className="flex items-center gap-2 p-2 rounded-lg bg-zinc-900/50">
                    <span className="w-2 h-2 rounded-full bg-indigo-500" />
                    <span className="text-sm text-zinc-300">{tool}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Link
              to="/#contact"
              className="block w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6 rounded-[2rem] font-bold text-center hover:scale-105 transition-transform shadow-lg shadow-indigo-500/20"
            >
              {capacity.cta}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapacityDetail;
