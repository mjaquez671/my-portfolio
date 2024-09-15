// components/PortfolioSection.js
import React from 'react';
import PortfolioImage from '../images/my-portfolio-image.png'; 
import ergCoachImage from '../images/erg-coach-main-image.png';
import waveInvoiceImage from '../images/wave-invoice-main-image.png';
import aerospaceAdhesiveImage from '../images/temp-tracking-main-image.png';
const UnderConstruction = './under-construction'; // Replace with your actual under construction URL
const baseUrl = './'; // Replace with your actual project image URL
const projects = [
  {
    title: 'My Portfolio',
    description: 'A personal portfolio showcasing my skills as a Software Engineer, Cloud Architect/Developer, and Full Stack Developer. Built using React, JavaScript, and Tailwind CSS, it features a dynamic text carousel, project gallery, and responsive design.',
    link: UnderConstruction, // Replace with your actual portfolio link
    image: PortfolioImage, // Replace with a screenshot or relevant image of your portfolio
  },
  {
    
    title: 'Erg Coach Race Tracker',
    description: 'A web application for monitoring and tracking the performance of a group of athletes in real-time. Built with JavaScript and WebSocket for live data updates, it provides detailed pre-race settings and displays race board information with boat details.',
    link: UnderConstruction,
    image: ergCoachImage,
  },
  {
    title: 'Wave Invoice Reminder System',
    description: 'An automated system for managing invoice reminders using the Wave Invoice API (GraphQL) and AWS Lambda. This project queries the API to retrieve past due and upcoming invoices, then sends two types of reminders via a Gmail SMTP server to simulate an email from the requestor rather than Wave. The solution leverages Python in AWS Lambda functions and is scheduled using AWS Events to ensure timely notifications.',
    link: UnderConstruction, // Replace with your actual project link
    image: waveInvoiceImage, // Replace with an image or screenshot of your project
  },
  {
    title: 'Aerospace Adhesive Tracking System',
    description: 'An advanced system using Arduino™ and NRF24L01+ transceivers to monitor out times for aerospace adhesives. The setup features an ATtiny85 with an internal temperature sensor to track when the adhesive goes above a set temperature and measures its duration. Data is sent to a master unit, which uploads it to AWS IoT Core and stores it in a database. Includes an algorithm for auto-calibration and drift adjustment.',
    link: UnderConstruction, // Replace with your actual project link
    image: aerospaceAdhesiveImage, // Replace with an image or screenshot of your project
  },
  // Add more projects as needed
];

const PortfolioSection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="text-indigo-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
