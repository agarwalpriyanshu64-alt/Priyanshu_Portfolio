import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { LandingPage } from './components/LandingPage';
import { AboutPage } from './pages/AboutPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { NeonWaveBackground } from './components/NeonWaveBackground';

const AppContent = () => {
  const location = useLocation();

  return (
    <div className="relative min-h-screen bg-transparent selection:bg-accent selection:text-black">
      {/* Background System */}
      <NeonWaveBackground />
      
      {/* Grain Overlay */}
      <div className="grain" />
      
      {/* Custom Cursor */}
      <CustomCursor />

      <Navbar />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Routes location={location}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </motion.div>
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
