import React, { useState } from 'react';

interface NavLink {
  title: string;
  href: string;
}

interface HeaderProps {
  navLinks: NavLink[];
}

const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const XIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const Header: React.FC<HeaderProps> = ({ navLinks }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* Spacer to push logo to center */}
          <div className="flex-1"></div>

          {/* Logo (Center) */}
          <div className="flex-shrink-0">
            <a href="#home" aria-label="BEAUZEAD Home">
              <img 
                src="https://res.cloudinary.com/dufnwlqeq/image/upload/v1763307817/IMG-20251116-WA0021_tbcko8.jpg" 
                alt="BEAUZEAD Logo" 
                className="h-12 md:h-16 w-auto"
              />
            </a>
          </div>

          {/* Menu Button (Right) */}
          <div className="flex-1 flex justify-end items-center">
            <div>
              <button onClick={() => setIsOpen(!isOpen)} className="text-[#D4AF37] focus:outline-none" aria-label="Toggle menu" aria-expanded={isOpen}>
                {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
              </button>
            </div>
          </div>

        </div>
      </nav>
      
      {/* Navigation Menu */}
      <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <div className="flex flex-col items-center space-y-4 pt-4 pb-8 bg-black">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-lg text-white hover:text-[#D4AF37] transition-colors duration-300">
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;