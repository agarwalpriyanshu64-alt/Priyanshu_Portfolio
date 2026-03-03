import React from 'react';
import { motion } from 'motion/react';

const projects = [
  { image: "https://i.ibb.co/DHGV7JkH/Whats-App-Image-2025-09-13-at-2-18-16-PM.jpg" },
  { image: "https://i.ibb.co/v6b2p5Zn/Screenshot-2026-03-02-11-53-08-PM.png" },
  { image: "https://i.ibb.co/zTmQHm8n/Screenshot-2026-03-02-11-43-16-PM.png" },
  { image: "https://i.ibb.co/XM7hQRf/Screenshot-2026-03-03-12-11-58-AM.png" },
  { image: "https://i.ibb.co/0pYzwZ5b/Screenshot-2026-03-03-12-12-21-AM.png" },
  { image: "https://i.ibb.co/3yc5FhMG/Screenshot-2026-03-03-12-27-10-AM.png" }
];

const ProjectItem: React.FC<{ project: typeof projects[0], index: number }> = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.8 }}
    className="group relative overflow-hidden border-2 md:border-4 border-accent/40 hover:border-accent transition-all duration-500 rounded-xl"
  >
    <div className="aspect-video w-full overflow-hidden">
      <img 
        src={project.image} 
        alt="Selected Work"
        className="w-full h-full object-cover transition-all duration-700 grayscale hover:grayscale-0 group-hover:scale-[1.05]"
        referrerPolicy="no-referrer"
      />
    </div>
  </motion.div>
);

export const ProjectGrid = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-12">
      <div className="flex items-end justify-between mb-12">
        <div>
          <h2 className="font-display text-5xl md:text-8xl uppercase tracking-tighter leading-none">
            Selected <br /> <span className="text-outline-accent">Works</span>
          </h2>
        </div>
        <div className="hidden md:block font-mono text-xs text-muted uppercase tracking-widest max-w-[280px] text-right">
          A collection of work centered on one goal: finding what resonates.
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-start">
          {projects.map((project, i) => (
            <ProjectItem key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
