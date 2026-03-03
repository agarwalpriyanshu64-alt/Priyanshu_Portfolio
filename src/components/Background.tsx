import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

const ScribbleWave: React.FC<{ 
  d: string, 
  color?: string, 
  speed?: number, 
  delay?: number,
  className?: string 
}> = ({ 
  d, 
  color = "rgba(161, 161, 170, 0.15)", 
  speed = 1, 
  delay = 0,
  className = "" 
}) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200 * speed]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10 * speed]);

  return (
    <motion.svg
      viewBox="0 0 400 1000"
      preserveAspectRatio="none"
      className={`absolute h-[200%] w-full pointer-events-none ${className}`}
      style={{ y, rotate }}
    >
      <motion.path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, delay, ease: "easeInOut" }}
      />
    </motion.svg>
  );
};

export const Background = () => {
  const scribbles = [
    {
      d: "M50,0 Q100,100 50,200 T50,400 T50,600 T50,800 T50,1000",
      className: "left-[-10%] top-0",
      speed: 1.2,
      color: "rgba(223, 255, 0, 0.1)" // Neon green accent
    },
    {
      d: "M200,0 Q150,150 200,300 T200,600 T200,900 T200,1200",
      className: "left-[20%] top-[-10%]",
      speed: 0.8,
      color: "rgba(161, 161, 170, 0.1)"
    },
    {
      d: "M350,0 Q400,200 350,400 T350,800 T350,1200",
      className: "left-[50%] top-[-5%]",
      speed: 1.5,
      color: "rgba(223, 255, 0, 0.05)" // Subtle neon green accent
    },
    {
      d: "M100,0 C150,100 50,200 100,300 S150,500 100,600 S50,800 100,900",
      className: "left-[70%] top-[-15%]",
      speed: 1.1,
      color: "rgba(161, 161, 170, 0.08)"
    },
    {
      d: "M0,100 Q100,50 200,100 T400,100 T600,100 T800,100",
      className: "left-0 top-[20%] w-[200%] h-full rotate-12",
      speed: 0.5,
      color: "rgba(223, 255, 0, 0.03)" // Very subtle neon green accent
    }
  ];

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-background">
      {/* Organic Scribble Layers */}
      <div className="absolute inset-0">
        {scribbles.map((scribble, i) => (
          <ScribbleWave 
            key={i} 
            d={scribble.d} 
            className={scribble.className} 
            speed={scribble.speed}
            color={scribble.color}
            delay={i * 0.2}
          />
        ))}
      </div>

      {/* Subtle Neon Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-accent/5 blur-[120px]" />
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90" />
    </div>
  );
};
