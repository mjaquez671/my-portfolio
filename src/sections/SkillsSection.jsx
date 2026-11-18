import React from 'react';
import { skillGroups } from '../data/skills';

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-sand scroll-mt-20">
      <div className="container mx-auto px-6">
        <h2 className="font-serif text-4xl font-semibold text-ink mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {skillGroups.map((group) => (
            <div key={group.name}>
              <h3 className="font-serif italic text-xl text-gold-dark mb-4">{group.name}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="px-4 py-1.5 rounded-full bg-parchment border border-clay/30 text-sm text-ink font-medium"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
