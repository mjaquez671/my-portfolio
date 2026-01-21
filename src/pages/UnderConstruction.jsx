import React from 'react';
import { Link } from 'react-router-dom';

const UnderConstruction = () => {
  return (
    <section className="flex items-center justify-center h-screen bg-gray-100 px-4">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl font-bold mb-4">Under Construction</h1>
        <p className="text-lg mb-6">
          This page is currently under construction. Please check back later or return to the home
          page to explore recent projects.
        </p>
        <Link to="/" className="text-indigo-600 font-semibold hover:underline">
          Return to Home
        </Link>
      </div>
    </section>
  );
};

export default UnderConstruction;
