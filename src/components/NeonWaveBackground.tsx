import React, { useEffect, useRef } from 'react';

export const NeonWaveBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scrollYRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('scroll', handleScroll);
    resize();

    // Wave parameters
    const waves = [
      {
        y: height / 2,
        length: 0.01,
        amplitude: 100,
        frequency: 0.01,
        color: 'rgba(255, 255, 255, 0.05)',
        speed: 0.02
      },
      {
        y: height / 2,
        length: 0.008,
        amplitude: 150,
        frequency: 0.015,
        color: 'rgba(57, 255, 20, 0.08)', // Neon Green
        speed: 0.015
      },
      {
        y: height / 2,
        length: 0.012,
        amplitude: 80,
        frequency: 0.02,
        color: 'rgba(255, 255, 255, 0.03)',
        speed: 0.025
      },
      {
        y: height / 2,
        length: 0.005,
        amplitude: 200,
        frequency: 0.01,
        color: 'rgba(57, 255, 20, 0.05)', // Neon Green
        speed: 0.01
      }
    ];

    let increment = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, width, height);

      // Scroll reactivity
      const scrollFactor = scrollYRef.current * 0.001;
      
      waves.forEach((wave, index) => {
        ctx.beginPath();
        ctx.moveTo(0, height / 2);

        // Dynamic amplitude and frequency based on scroll
        const dynamicAmplitude = wave.amplitude + Math.sin(scrollFactor + index) * 50;
        const dynamicFrequency = wave.frequency + (scrollYRef.current * 0.00001);

        for (let i = 0; i < width; i++) {
          ctx.lineTo(
            i,
            wave.y +
              Math.sin(i * wave.length + increment * wave.speed + scrollFactor) *
                dynamicAmplitude *
                Math.sin(increment * dynamicFrequency)
          );
        }

        ctx.strokeStyle = wave.color;
        ctx.lineWidth = 2;
        ctx.stroke();
      });

      increment += 1;
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="neon-wave-canvas"
      className="fixed inset-0 z-[-1] pointer-events-none"
      style={{ background: 'transparent' }}
    />
  );
};
