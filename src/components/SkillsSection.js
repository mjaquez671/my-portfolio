// components/SkillsSection.js
import React from 'react';

const skills = [
  { name: 'Python', level: '95%' },
  { name: 'VB.NET', level: '90%' },
  { name: 'AWS', level: '83%' },
  { name: 'SQL', level: '80%' },
  { name: 'Docker', level: '78%' },
  { name: 'Java', level: '75%' },
  { name: 'JavaScript', level: '70%' },
  { name: 'React', level: '40%' },
];

const SkillsSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index}>
              <h3 className="text-lg font-bold mb-2">{skill.name}</h3>
              <div className="w-full bg-gray-200 h-4 rounded-full">
                <div
                  className="bg-indigo-600 h-4 rounded-full"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
