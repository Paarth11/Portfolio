import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';
import { Skill } from '../types';
import SkillCard from './SkillCard';

const About: React.FC = () => {
  const skills: Skill[] = [
    { name: "React", icon: <Code className="w-6 h-6" /> },
    { name: "TypeScript", icon: <Code className="w-6 h-6" /> },
    { name: "UI/UX Design", icon: <Palette className="w-6 h-6" /> },
    { name: "Node", icon: <Zap className="w-6 h-6" /> }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-300 mb-7">
              I'm a passionate developer with a love for creating beautiful and functional web applications. 
              With years of experience in modern web technologies, I bring ideas to life through clean code 
              and intuitive design.
            </p>
            {/* <p className="text-lg text-gray-300">
              When I'm not coding, you can find me exploring new technologies, contributing to open source, 
              or sharing knowledge with the developer community.
            </p> */}
          </div>
          <div className="grid grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;