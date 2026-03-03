import React from 'react';
import { motion } from 'motion/react';

export const Hero = () => {
  const words = "MY PORTFOLIO".split(" ");

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
      </div>

      <div className="relative z-10 text-center">
        <h1 className="font-display text-6xl md:text-9xl leading-[0.85] tracking-tighter uppercase mb-4 flex flex-wrap justify-center gap-x-6 text-accent">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="max-w-2xl mx-auto text-muted font-mono text-sm leading-relaxed"
        >
          Centered on strategy, driven by creative, and built to connect. 
          A collection of marketing work defined by strategy on and off the screen.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-muted">Scroll to shift</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
};
