
import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { BasicInfo } from '../types';

interface ContactProps {
  info: BasicInfo;
}

const Contact: React.FC<ContactProps> = ({ info }) => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass-card rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <p className="text-indigo-400 font-bold uppercase tracking-widest text-sm mb-4">Contact</p>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
                Let's start a <span className="text-gradient">conversation.</span>
              </h2>
              <p className="text-zinc-400 text-lg mb-12 leading-relaxed">
                Whether you have a specific project in mind or just want to explore how we can work together, feel free to reach out.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-indigo-400 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Email Me</p>
                    <a href={`mailto:${info.email}`} className="text-xl font-bold text-zinc-200 hover:text-indigo-400 transition-colors">{info.email}</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-purple-400 shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Call Me</p>
                    <a href={`tel:${info.phone}`} className="text-xl font-bold text-zinc-200 hover:text-purple-400 transition-colors">{info.phone}</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-400 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Location</p>
                    <p className="text-xl font-bold text-zinc-200">{info.location}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-zinc-950/50 p-8 md:p-12 rounded-[2.5rem] border border-zinc-800/50">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest px-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 text-zinc-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest px-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 text-zinc-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest px-1">Subject</label>
                  <select className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 text-zinc-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all appearance-none">
                    <option>Web Development</option>
                    <option>WordPress Solution</option>
                    <option>UI/UX Design</option>
                    <option>Site Migration</option>
                    <option>Other Enquiry</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest px-1">Your Message</label>
                  <textarea 
                    rows={5} 
                    placeholder="Tell me about your project..."
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl px-5 py-4 text-zinc-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
                  ></textarea>
                </div>
                
                <button className="w-full bg-gradient-primary text-white py-5 rounded-2xl font-extrabold flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform shadow-xl shadow-indigo-500/20 group">
                  Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
