import React from 'react';
import { Link } from 'react-router-dom';

const navItems = [
  { href: '/#projects', label: 'Projects' },
  { href: '/#skills', label: 'Skills' },
];

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-parchment">
      <header className="sticky top-0 z-50 bg-espresso/95 backdrop-blur border-b border-bark">
        <div className="container mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link to="/" className="font-serif text-2xl font-semibold text-parchment hover:text-gold-light transition-colors">
            Mario Mendoza
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium text-sand/80">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-gold transition-colors">
                {item.label}
              </a>
            ))}
            <Link to="/under-construction" className="hover:text-gold transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="bg-espresso border-t border-bark text-sand/60 py-8 text-center text-sm">
        © {new Date().getFullYear()} Mario Mendoza. All rights reserved.
      </footer>
    </div>
  );
};

export default MainLayout;
