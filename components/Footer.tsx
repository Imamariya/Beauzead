import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-8">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <img 
          src="https://res.cloudinary.com/dufnwlqeq/image/upload/v1763307817/IMG-20251116-WA0021_tbcko8.jpg" 
          alt="BEAUZEAD Logo" 
          className="h-28 md:h-32 w-auto mx-auto mb-6" 
        />
        <p className="mb-4">&copy; {new Date().getFullYear()} BEAUZEAD. All Rights Reserved.</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a>
          <span>|</span>
          <a href="#" className="hover:text-[#D4AF37] transition-colors">Terms of Service</a>
          <span>|</span>
          <a href="#" className="hover:text-[#D4AF37] transition-colors">Shipping & Returns</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;