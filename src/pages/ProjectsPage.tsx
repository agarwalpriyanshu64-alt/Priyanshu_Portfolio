import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const projects = [
  { 
    title: "YouTube Fanfest India",
    category: "Strategy Pivot",
    image: "https://i.ibb.co/JjKpFXfN/Screenshot-2026-03-03-11-19-28-PM.png",
    description: "Orchestrated the strategic shift of YouTube Fanfest from a viewer-first to a creator-first event model, grounding audience strategy in deep creator segmentation and engagement intent to redefine the initiative's core value",
    hoverText: "Legacy: Viewer-First // Current: Creator-Led"
  },
  { 
    title: "YouTube Creator Collective",
    category: "AI-Powered Experiential Redesign",
    image: "https://i.ibb.co/1twmrd02/Screenshot-2026-03-03-2-09-01-PM.png",
    description: "Pioneered a 100% AI-integrated event model for YouTube Creator Collectives, architecting a scalable playbook of 15+ personalized experience layers—from smart-seating to automated growth insights—for 3,000+ creators across 13 cities.",
    hoverText: "SYSTEM_LOG: 15+ AI INSIGHTS GENERATED // 13 CITY ROLLOUT"
  },
  { 
    title: "AI-Driven Creator Lookbook",
    category: "The efficiency engine",
    image: "https://i.ibb.co/6RvYSCxt/Screenshot-2026-03-03-2-15-51-PM.png",
    description: "Automated the creator lookbook workflow by replacing manual curation with a custom AI-driven process, enhancing visual quality while reducing turnaround time by 80 hours.",
    hoverText: "OPTIMIZED: +80HR GAIN"
  },
  { 
    title: "Deep Dive on India 1 vs India 2",
    category: "Quantitative Commentary across suites",
    image: "https://i.ibb.co/bMMRJ22h/Screenshot-2026-03-03-3-19-14-PM.png",
    description: "Synthesized a strategic deep-dive into India 1 vs. India 2 consumption archetypes, delivering high-fidelity UXR immersions and quantitative suites to optimize platform resonance for premium, high-value audience segments.",
    hoverText: "Found Conclusive insights for product teams"
  },
  { 
    title: "YouTube Cultural Moments (CultMo)",
    category: "Long-term GTM Preparedness & Playbooking.",
    image: "https://i.ibb.co/nNNTNGJH/Screenshot-2026-03-03-4-15-30-PM.png",
    description: "Architected the 2026 GTM strategy for YouTube Cultural Moments, engineering a scalable playbook backed by social listening and viewer panel FGDs to maintain platform dominance across high-traffic events like the IPL and IIFA.",
    hoverText: "Conclusive GTM playbook"
  },
  { 
    title: "NotebookLM Competitive Intel",
    category: "Intelligence engine",
    image: "https://i.ibb.co/nsdkzttW/Screenshot-2026-03-03-4-23-20-PM.png",
    description: "Engineered a Gemini-powered competitive intelligence engine using NotebookLM to synthesize complex data across 16 global competitors—transforming 120+ hours of manual analysis into a streamlined strategic asset for global executive briefings.",
    hoverText: "Manual Research to Automated Strategic Synthesis"
  }
];

const ProjectKnot: React.FC<{ project: any, index: number }> = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex items-center justify-center w-full mb-20 md:mb-40 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      {/* The Knot (Center Point) */}
      <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent z-20 shadow-[0_0_15px_rgba(223,255,0,0.5)]" />
      
      {/* Project Content */}
      <motion.div 
        initial={{ opacity: 0, x: isEven ? -100 : 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full md:w-[45%] ${isEven ? 'md:pr-12 text-right' : 'md:pl-12 text-left'}`}
      >
        <div className="group relative">
          <div className="mb-4 overflow-hidden rounded-xl border border-white/10 group-hover:border-accent/50 transition-colors duration-500 relative">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full aspect-video object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            {project.hoverText && (
              <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6">
                <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-accent text-center leading-relaxed">
                  {project.hoverText}
                </p>
              </div>
            )}
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-2 block">
            {project.category}
          </span>
          <h3 className="font-display text-3xl md:text-5xl uppercase tracking-tighter mb-4">
            {project.title}
          </h3>
          <p className="font-mono text-xs text-muted leading-relaxed max-w-sm ml-auto mr-0 md:mr-auto md:ml-0">
            {project.description}
          </p>
        </div>
      </motion.div>

      {/* Spacer for the other side */}
      <div className="hidden md:block md:w-[45%]" />
    </div>
  );
};

export const ProjectsPage = () => {
  const { scrollYProgress } = useScroll();
  const fasterProgress = useTransform(scrollYProgress, [0, 0.85], [0, 1]);
  const scaleY = useSpring(fasterProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto relative">
        {/* The Thread (Vertical Line) */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-white/5 z-0">
          {/* Starting Knot */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border border-accent/50 z-10" />
          
          <motion.div 
            className="absolute top-0 left-0 right-0 bg-accent origin-top shadow-[0_0_20px_rgba(223,255,0,0.6)]"
            style={{ scaleY, height: '100%' }}
          />
          {/* Decorative knots along the line */}
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="absolute left-1/2 -translate-x-1/2 w-1 h-1 bg-white/20 rounded-full" 
              style={{ top: `${i * 5}%` }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center relative z-10"
        >
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted hover:text-accent transition-colors mb-12 group"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to System
          </Link>
          
          <h1 className="font-display text-6xl md:text-9xl uppercase tracking-tighter leading-[0.8] mb-8">
            Project <br />
            <span className="text-outline-accent">Archive</span>
          </h1>
          
          <p className="font-mono text-sm text-muted max-w-xl mx-auto leading-relaxed">
            A chronological thread of creative output. Each knot represents a milestone in strategy, design, and execution.
          </p>
        </motion.div>

        <div className="relative z-10">
          {projects.map((project, i) => (
            <ProjectKnot key={i} project={project} index={i} />
          ))}
        </div>

        {/* End Knot */}
        <div className="relative flex justify-center mt-20">
          <div className="w-8 h-8 rounded-full border border-accent flex items-center justify-center animate-bounce">
            <div className="w-2 h-2 rounded-full bg-accent" />
          </div>
        </div>
      </div>
    </div>
  );
};
