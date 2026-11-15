import React, { useEffect, useState } from 'react';
import { heroDetails } from '../data/hero';

const HeroSection = () => {
  const [typedGreeting, setTypedGreeting] = useState('');
  const { name, role, tagline, resume } = heroDetails;
  const greeting = `Hi, I'm ${name}`;

  useEffect(() => {
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      charIndex += 1;
      setTypedGreeting(greeting.slice(0, charIndex));
      if (charIndex === greeting.length) {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [greeting]);

  return (
    <section
      id="hero"
      className="min-h-[calc(100vh-4.5rem)] flex items-center bg-espresso bg-[radial-gradient(ellipse_at_top_right,_#3B2E22,_#211A14_65%)] text-sand"
    >
      <div className="container mx-auto px-6 py-24">
        <p className="font-serif italic text-xl text-gold mb-4">{role}</p>
        <h1 className="font-serif text-5xl md:text-7xl font-semibold text-parchment" aria-label={greeting}>
          <span aria-hidden="true">
            {typedGreeting}
            <span className="ml-1 text-gold animate-pulse">|</span>
          </span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-sand/80 leading-relaxed">{tagline}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={resume.url}
            download
            className="px-7 py-3 rounded-md bg-gold text-espresso font-semibold hover:bg-gold-light transition-colors"
          >
            {resume.label}
          </a>
          <a
            href="#projects"
            className="px-7 py-3 rounded-md border border-gold/60 text-gold font-semibold hover:bg-gold/10 transition-colors"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
