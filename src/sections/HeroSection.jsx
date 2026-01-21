import React, { useEffect, useState } from 'react';
import { heroDetails } from '../data/hero';

const HeroSection = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [typedGreeting, setTypedGreeting] = useState('');
  const { name, roles, resume } = heroDetails;
  const greeting = `Hi, I'm ${name}`;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [roles.length]);

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
      className="h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
    >
      <div className="text-center px-4">
        <h1 className="text-white text-5xl font-bold">
          {typedGreeting}
          <span className="ml-1 text-white animate-pulse">|</span>
        </h1>
        <p className="text-white text-xl mt-4 carousel-text">{roles[currentTextIndex]}</p>
        <a
          href={resume.url}
          download
          className="inline-block mt-6 px-8 py-4 bg-white text-indigo-600 font-semibold rounded-md shadow-md hover:bg-gray-100 transition-colors"
        >
          {resume.label}
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
