import React from 'react';
import { skillSet } from '../data/skills';

const SkillsSection = () => {
  return (
    <section id="skills" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skillSet.map((skill) => (
            <div key={skill.name}>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-bold">{skill.name}</h3>
                <span className="text-sm text-gray-600">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
                <div
                  className="bg-indigo-600 h-4 rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
