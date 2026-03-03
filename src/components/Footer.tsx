import React from 'react';
import { motion } from 'motion/react';

export const Footer = () => {
  return (
    <footer className="pt-8 pb-12 overflow-hidden">
      <div className="relative flex whitespace-nowrap border-y border-white/10 py-12 mb-20">
        <motion.div
          animate={{ x: [0, "-50%"] }}
          transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
          className="flex gap-12 items-center"
        >
          {[...Array(20)].map((_, i) => (
            <span key={i} className="font-display text-3xl md:text-6xl uppercase tracking-tighter text-outline-accent hover:text-accent transition-colors cursor-default shrink-0">
              LET'S KEEP BUILDING INSANE STORIES
            </span>
          ))}
        </motion.div>
      </div>

      <div className="px-6 md:px-12 flex flex-col md:flex-row justify-between items-start gap-12">
        <div>
          <a href="mailto:agarwalpriyanshu64@gmail.com" className="font-display text-4xl md:text-6xl uppercase hover:text-accent transition-colors inline-block">
            Get in touch
          </a>
        </div>
        
        <div className="flex gap-24 md:gap-32">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[10px] text-muted uppercase tracking-widest mb-2">Social</span>
            <a 
              href="https://www.instagram.com/_priiiiiiiiiii_?igsh=ZmRwZnJlejZnNW5r&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-mono text-xs hover:text-accent"
            >
              Instagram
            </a>
            <a 
              href="https://www.linkedin.com/in/priyanshuagarwal-" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-mono text-xs hover:text-accent"
            >
              LinkedIn
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[10px] text-muted uppercase tracking-widest mb-2">Location</span>
            <span className="font-mono text-xs">India</span>
            <span className="font-mono text-xs">United Kingdom</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
