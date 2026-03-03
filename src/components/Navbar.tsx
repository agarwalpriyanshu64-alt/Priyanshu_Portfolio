import React from 'react';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
];

export const Navbar = () => {
  const location = useLocation();

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 glass"
    >
      <Link to="/" className="font-display text-xl tracking-tighter hover:text-accent transition-colors">
        PRIYANSHU AGARWAL<span className="text-accent">.</span>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={`relative group font-mono text-xs uppercase tracking-widest transition-colors ${
              location.pathname === item.href ? 'text-accent' : 'text-muted hover:text-white'
            }`}
          >
            {item.name}
            <span className={`absolute -bottom-1 left-0 h-[1px] bg-accent transition-all duration-300 ${
              location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
            }`} />
          </Link>
        ))}
      </div>
    </motion.nav>
  );
};
