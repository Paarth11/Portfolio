import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
          Hi, I am Paarth Jung Thapa
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Full Stack Developer & Creative Problem Solver
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#contact" className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full transition transform hover:scale-105">
            Get In Touch
          </a>
          <a href="#projects" className="border border-purple-400 hover:bg-purple-400/10 px-8 py-3 rounded-full transition">
            View Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;