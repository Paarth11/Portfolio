import React from 'react';
import { SkillCardProps } from '../types';

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <div className="bg-slate-700/50 p-6 rounded-lg text-center hover:bg-purple-500/20 transition transform hover:scale-105">
      <div className="flex justify-center mb-3 text-purple-400">
        {skill.icon}
      </div>
      <h3 className="font-semibold">{skill.name}</h3>
    </div>
  );
};

export default SkillCard;