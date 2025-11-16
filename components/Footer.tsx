import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-8">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <h3 className="text-3xl md:text-4xl font-bold text-[#D4AF37] tracking-wider uppercase mb-6">
          BEAUZEAD
        </h3>
        <p className="mb-4">&copy; {new Date().getFullYear()} BEAUZEAD. All Rights Reserved.</p>
        <div className="flex justify-center space-x-6">
          <a href="/privacy-policy" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a>
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
