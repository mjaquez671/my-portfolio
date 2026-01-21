import React from 'react';
import { Link } from 'react-router-dom';

const navItems = [
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
];

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link to="/" className="text-2xl font-bold text-indigo-600">
            Mario Mendoza
          </Link>
          <nav className="flex items-center gap-4 text-sm font-semibold text-gray-700">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-indigo-600">
                {item.label}
              </a>
            ))}
            <Link to="/under-construction" className="hover:text-indigo-600">
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="bg-gray-900 text-gray-300 py-6 text-center text-sm">
        © {new Date().getFullYear()} Mario Mendoza. All rights reserved.
      </footer>
    </div>
  );
};

export default MainLayout;
