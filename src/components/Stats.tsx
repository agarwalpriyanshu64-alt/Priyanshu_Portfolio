import React from 'react';
import { motion } from 'motion/react';

const stats = [
  { label: "Experience", value: "02 YRS" },
  { label: "Projects", value: "13+" },
  { label: "Region", value: "India | UK" },
];

export const Stats = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tighter leading-none mb-8">
              Performance <br /> <span className="text-accent">Specs</span>
            </h2>
            <p className="font-mono text-muted text-sm leading-relaxed max-w-md">
              Quantifying the output. From creator focused initiatives to AI-driven efficiency, these are the metrics that define the pace of my work.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-secondary p-8 rounded-2xl border border-white/5 flex flex-col gap-4 ${i === 2 ? 'col-span-2' : ''}`}
              >
                <span className="font-mono text-[10px] text-muted uppercase tracking-widest">{stat.label}</span>
                <span className="font-display text-accent text-3xl md:text-5xl leading-none">
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
