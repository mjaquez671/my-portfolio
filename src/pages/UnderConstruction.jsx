import React from 'react';
import { Link } from 'react-router-dom';

const UnderConstruction = () => {
  return (
    <section className="flex items-center justify-center min-h-[calc(100vh-4.5rem)] bg-espresso text-sand px-6">
      <div className="text-center max-w-xl">
        <h1 className="font-serif text-4xl font-semibold text-parchment mb-4">Under Construction</h1>
        <p className="text-lg text-sand/80 mb-8">
          This page is currently under construction. Please check back later or return to the home
          page to explore recent projects.
        </p>
        <Link to="/" className="font-semibold text-gold hover:underline underline-offset-4">
          ← Return to Home
        </Link>
      </div>
    </section>
  );
};

export default UnderConstruction;
