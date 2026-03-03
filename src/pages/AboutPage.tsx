import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Zap, Scissors, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

const InterestCard: React.FC<{ icon: any, title: string, description: string, index: number }> = ({ icon: Icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className="group relative p-8 border border-white/10 bg-secondary/20 rounded-2xl hover:border-accent/50 transition-all duration-500 overflow-hidden"
  >
    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
      <Icon size={120} />
    </div>
    
    <div className="relative z-10">
      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6 text-accent group-hover:bg-accent group-hover:text-black transition-all duration-500">
        <Icon size={24} />
      </div>
      <h3 className="font-display text-3xl uppercase tracking-tight mb-4 group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="font-mono text-sm text-muted leading-relaxed max-w-xs">
        {description}
      </p>
    </div>
    
    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
  </motion.div>
);

export const AboutPage = () => {
  const interests = [
    {
      icon: Zap,
      title: "High-Velocity Systems",
      description: "Analyzing the split-second decisions and technical precision of Formula 1. It's where data-driven strategy meets the absolute limit of physics."
    },
    {
      icon: Scissors,
      title: "Analog Archiving",
      description: "Deconstructing the digital world through tactile junk journaling. A physical repository of textures, tickets, and transient moments."
    },
    {
      icon: Compass,
      title: "Experiential Curation",
      description: "Treating life as a series of high-fidelity data points. From underground gigs to remote landscapes, I'm always looking for the next core memory."
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted hover:text-accent transition-colors mb-12 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to System
          </Link>
          
          <h1 className="font-display text-6xl md:text-9xl uppercase tracking-tighter leading-[0.8] mb-8">
            Beyond the <br />
            <span className="text-outline-accent">Algorithm</span>
          </h1>
          
          <p className="font-mono text-sm text-muted max-w-xl leading-relaxed">
            When the screens go dark, the exploration continues. These are the frequencies I tune into to stay sharp, creative, and human.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {interests.map((interest, i) => (
            <InterestCard key={i} {...interest} index={i} />
          ))}
        </div>

        {/* Funky Background Element */}
        <div className="absolute top-1/2 right-[-10%] w-[500px] h-[500px] bg-accent/5 blur-[150px] rounded-full -z-10 animate-pulse" />
      </div>
    </div>
  );
};
