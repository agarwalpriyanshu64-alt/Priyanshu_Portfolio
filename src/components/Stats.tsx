import React from 'react';
import { motion } from 'motion/react';

const stats = [
  { label: "Core Niches", value: "AI & Creator" },
  { label: "Projects", value: "20+" },
  { label: "Region", value: "India | UK" },
];

export const Stats = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter leading-none mb-8">
              At a <br /> <span className="text-accent">Glance</span>
            </h2>
            <p className="font-mono text-muted text-sm leading-relaxed max-w-md">
              Moving fast and scaling globally. From driving AI-led solutions to leading initiatives that have reached over 10,000 creators, here is a quick look at my track record.
            </p>
          </div>
          
          <div className="flex flex-col gap-3">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-secondary/50 p-5 md:p-6 rounded-xl border border-white/5 flex items-center justify-between group hover:border-accent/30 transition-colors"
              >
                <span className="font-mono text-[10px] text-muted uppercase tracking-widest">{stat.label}</span>
                <span className="font-display text-accent text-xl md:text-3xl lg:text-4xl leading-none whitespace-nowrap group-hover:scale-105 transition-transform">
                  {stat.value}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
