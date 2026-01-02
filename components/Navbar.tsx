
import React, { useState } from 'react';
import { Menu, X, Code2, User, Cpu, Briefcase, FolderKanban, Mail } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', icon: User },
    { name: 'About', href: '#about', icon: Cpu },
    { name: 'Skills', href: '#skills', icon: Code2 },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Projects', href: '#projects', icon: FolderKanban },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 py-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card rounded-2xl px-6 py-4 flex items-center justify-between">
          <a href="#home" className="text-xl font-extrabold tracking-tighter flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center text-white text-sm">OS</span>
            <span className="hidden sm:inline">OLAMIDE <span className="text-indigo-400">AMUSAN</span></span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-indigo-400 ${
                  activeSection === link.href.slice(1) ? 'text-indigo-400' : 'text-zinc-400'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-zinc-100 text-zinc-950 px-5 py-2 rounded-xl text-sm font-bold hover:bg-zinc-200 transition-colors"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-zinc-400 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden mt-4 glass-card rounded-2xl p-4 overflow-hidden animate-in slide-in-from-top-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                    activeSection === link.href.slice(1)
                      ? 'bg-indigo-500/10 text-indigo-400'
                      : 'text-zinc-400 hover:bg-zinc-800'
                  }`}
                >
                  <link.icon size={18} />
                  <span className="font-medium">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
