import React from 'react';
import { Menu, X } from 'lucide-react';
import { NavbarProps } from '../types';

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav className="fixed w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            DEV PORTFOLIO
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-purple-400 transition">Home</a>
            <a href="#about" className="hover:text-purple-400 transition">About</a>
            <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
            <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-slate-800/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 hover:bg-purple-500/20 rounded">Home</a>
            <a href="#about" className="block px-3 py-2 hover:bg-purple-500/20 rounded">About</a>
            <a href="#projects" className="block px-3 py-2 hover:bg-purple-500/20 rounded">Projects</a>
            <a href="#contact" className="block px-3 py-2 hover:bg-purple-500/20 rounded">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;