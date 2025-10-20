import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import TroscLogo from '../../Assests/TroscLogoRed.png';

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

  // Improved smooth scroll handler
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80; // Height of the navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#190A05] shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-20">
                <div className="flex-shrink-0">
                  <img
                    src= {TroscLogo}
                    alt="Trosc Logo"
                    className="h-10 w-auto"
                  />
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex space-x-10">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} onClick={(e) => handleScroll(e, link.href)} className={`text-white text-base font-medium hover:text-[#ff4444] transition-colors duration-300 relative group`}>
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff4444] transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-[#ff4444] transition-colors duration-300" aria-label={isOpen ? 'Close menu' : 'Open menu'}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>
        </div>
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#3b1d0f] border-t border-[#4a2313]">
                {navLinks.map((link) => (
                    <a key={link.name} href={link.href} onClick={(e) => handleScroll(e, link.href)} className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-[#ff4444] hover:bg-[#2c150b]">
                        {link.name}
                    </a>
                ))}
            </div>
        </div>
    </nav>
  );
};

export default Navbar;