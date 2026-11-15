import React from 'react';
import { skillSet } from '../data/skills';

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-sand scroll-mt-20">
      <div className="container mx-auto px-6">
        <h2 className="font-serif text-4xl font-semibold text-ink mb-10">Skills</h2>
        <ul className="flex flex-wrap gap-3">
          {skillSet.map((skill) => (
            <li
              key={skill}
              className="px-5 py-2 rounded-full bg-parchment border border-clay/40 text-ink font-medium"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SkillsSection;
