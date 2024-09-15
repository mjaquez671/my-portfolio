import Typist from 'react-typist';
import React, { useState, useEffect } from 'react';
import './HeroSection.css';
const texts = [
  "Software Engineer",
  "Cloud Architect/Developer",
  "Full Stack Developer",
  "Java Developer",
  "Python Specialist",
];

const HeroSection = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex(prevIndex => (prevIndex + 1) % texts.length);
    }, 4000); // Change text every 4 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="text-center">
        <h1 className="text-white text-5xl font-bold">
          <Typist avgTypingDelay={100} cursor={{ hideWhenDone: false }}>
            Hi, I'm Mario
          </Typist>
        </h1>
        <p className="text-white text-xl mt-4 carousel-text">{texts[currentTextIndex]}</p>
          <a
            href="/your-resume.pdf"
            download
            className="inline-block mt-6 px-8 py-4 bg-white text-indigo-600 font-semibold rounded-md shadow-md hover:bg-gray-100"
          >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
