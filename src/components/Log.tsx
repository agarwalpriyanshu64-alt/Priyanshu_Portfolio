import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const logs = [
  { label: "Creators Reached", value: "3000+ Creators", description: "Curated partnerships synchronized for maximum brand resonance." },
  { label: "Time saved", value: "80+ Hours", description: "AI-integrated workflows engineered to eliminate friction and cost." },
  { label: "Cost Savings", value: "$6K", description: "Cost Savings through AI efficiency." },
];

export const Log = () => {
  return (
    <section id="log" className="pt-20 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-8">
          <h2 className="font-display text-5xl md:text-7xl uppercase tracking-tighter leading-none">
            Campaign <span className="text-outline-accent">telemetry</span>
          </h2>
        </div>

        <div className="border-t border-white/10">
          {logs.map((log, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col lg:flex-row lg:items-center justify-between py-10 border-bottom border-white/10 hover:bg-white/5 px-4 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-8 lg:w-1/2 mb-6 lg:mb-0">
                <span className="font-mono text-xs text-muted md:w-48 shrink-0">{log.label}</span>
                <h3 className="font-display text-2xl md:text-3xl uppercase tracking-tight group-hover:text-accent transition-colors">
                  {log.value}
                </h3>
              </div>
              
              <div className="flex items-center justify-between flex-1 gap-8">
                <p className="font-mono text-xs text-muted leading-relaxed max-w-sm">
                  {log.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
