import React from 'react';
import { experience } from '../data/experience';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-parchment scroll-mt-20">
      <div className="container mx-auto px-6">
        <h2 className="font-serif text-4xl font-semibold text-ink mb-12">Experience</h2>

        <ol className="relative border-l border-clay/30 ml-2 space-y-12">
          {experience.map((role) => (
            <li key={role.company} className="pl-8 relative">
              <span
                aria-hidden="true"
                className="absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full bg-gold ring-4 ring-parchment"
              />
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-3">
                <h3 className="font-serif text-2xl font-semibold text-ink">
                  {role.company}
                  <span className="block md:inline md:ml-3 font-sans text-base font-medium text-umber">
                    {role.title}
                  </span>
                </h3>
                <p className="font-serif italic text-gold-dark shrink-0">{role.dates}</p>
              </div>
              <ul className="space-y-2 max-w-4xl">
                {role.highlights.map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed text-umber">
                    <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-clay" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ExperienceSection;
