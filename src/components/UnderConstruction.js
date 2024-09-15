// src/components/UnderConstruction.js
import React from 'react';

const UnderConstruction = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Under Construction</h1>
        <p className="text-lg mb-4">This page is currently under construction. Please check back later.</p>
        <a href="/" className="text-blue-500 hover:underline">Return to Home</a>
      </div>
    </div>
  );
};

export default UnderConstruction;
