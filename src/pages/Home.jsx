import React from 'react';
import HeroSection from '../sections/HeroSection';
import PortfolioSection from '../sections/PortfolioSection';
import ExperienceSection from '../sections/ExperienceSection';
import SkillsSection from '../sections/SkillsSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <ExperienceSection />
      <PortfolioSection />
      <SkillsSection />
    </>
  );
};

export default Home;
