import React from 'react';
import { ArrowRight, Code2, Users, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const Capacities: React.FC = () => {
  const capacities = [
    {
      id: 'wordpress-developer',
      title: 'WordPress Developer',
      description: 'Full-Stack WordPress development with custom themes, plugins, and WooCommerce integration',
      icon: Code2,
      color: 'indigo'
    },
    {
      id: 'virtual-assistant',
      title: 'Virtual Assistant',
      description: 'Executive support, schedule management, and professional communication services',
      icon: Users,
      color: 'purple'
    },
    {
      id: 'administrative-support',
      title: 'Administrative Support',
      description: 'Data management, workflow optimization, and operational efficiency improvement',
      icon: Briefcase,
      color: 'emerald'
    }
  ];

  return (
    <section id="capacities" className="py-24 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="text-indigo-400 font-bold uppercase tracking-widest text-sm mb-4">Expertise</p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Areas of Expertise</h2>
          <p className="text-zinc-400 max-w-2xl">I specialize in multiple areas. Select below to explore my services, projects, and expertise in each specialization.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {capacities.map((capacity) => {
            const Icon = capacity.icon;
            const colorClasses = {
              indigo: 'from-indigo-500 to-indigo-600 hover:from-indigo-400 hover:to-indigo-500',
              purple: 'from-purple-500 to-purple-600 hover:from-purple-400 hover:to-purple-500',
              emerald: 'from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500'
            };

            return (
              <Link
                key={capacity.id}
                to={`/capacity/${capacity.id}`}
                className="group glass-card rounded-[2.5rem] p-8 border-zinc-800 hover:border-zinc-700 transition-all duration-500 flex flex-col"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colorClasses[capacity.color as keyof typeof colorClasses]} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon size={28} />
                </div>

                <h3 className="text-2xl font-bold text-zinc-100 mb-3">{capacity.title}</h3>
                <p className="text-zinc-400 mb-8 flex-grow leading-relaxed">{capacity.description}</p>

                <div className="flex items-center gap-2 text-indigo-400 font-bold group-hover:gap-3 transition-all">
                  Explore <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Capacities;
