
import React from 'react';

const VisionIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const MissionIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const VisionMission: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-[#D4AF37] transition-colors duration-300">
            <div className="flex items-center mb-4">
              <MissionIcon className="h-10 w-10 text-[#D4AF37]" />
              <h3 className="text-2xl font-bold text-white ml-4">Our Mission</h3>
            </div>
            <p className="text-gray-300 text-justify">
              To enrich homes across the UK by providing meticulously crafted, high-quality towels and curtains that blend functionality with artistic design, ensuring every product contributes to a more comfortable and beautiful living environment.
            </p>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 hover:border-[#D4AF37] transition-colors duration-300">
            <div className="flex items-center mb-4">
              <VisionIcon className="h-10 w-10 text-[#D4AF37]" />
              <h3 className="text-2xl font-bold text-white ml-4">Our Vision</h3>
            </div>
            <p className="text-gray-300 text-justify">
              To be the UK's most trusted and sought-after brand for luxury home textiles, synonymous with elegance, quality, and innovation, while championing sustainable practices and exceptional customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;