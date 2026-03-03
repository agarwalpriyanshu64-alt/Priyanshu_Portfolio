import React from 'react';
import { Hero } from './Hero';
import { ProjectGrid } from './ProjectGrid';
import { Stats } from './Stats';
import { Log } from './Log';

export const LandingPage = () => {
  return (
    <main>
      <Hero />
      
      <div className="max-w-[1600px] mx-auto">
        <ProjectGrid />
        <Stats />
        <Log />
      </div>
    </main>
  );
};
