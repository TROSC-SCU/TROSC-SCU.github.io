import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import TroscLogo from '../TroscLogoRed.png'; // added import

type NavLink = {
  name: string;
  href: string;
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navLinks: NavLink[] = [
    { name: 'Home', href: '#home' },
    { name: 'Tracks', href: '#tracks' },
    { name: 'Events', href: '#events' },
    { name: 'Contact us', href: '#contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#3b1d0f] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={TroscLogo}
              alt="Trosc Logo"
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`text-white text-base font-medium hover:text-[#ff4444] transition-colors duration-300 relative group ${
                  link.name === 'Home' ? 'text-[#ff4444]' : ''
                }`}
              >
                {link.name}
                {link.name === 'Home' && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#ff4444]"></span>
                )}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff4444] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#ff4444] transition-colors duration-300"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-[#3b1d0f] border-t border-[#4a2313]">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                link.name === 'Home'
                  ? 'text-[#ff4444] bg-[#2c150b]'
                  : 'text-white hover:text-[#ff4444] hover:bg-[#2c150b]'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
