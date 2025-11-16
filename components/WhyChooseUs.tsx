
import React from 'react';

const CheckCircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const Feature: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="bg-gray-900 p-6 rounded-lg">
    <div className="flex items-start">
      <CheckCircleIcon className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
      <div className="ml-4">
        <h4 className="text-xl font-semibold text-white mb-2">{title}</h4>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  </div>
);

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 md:py-32 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] text-center mb-12">Why Choose BEAUZEAD?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Feature
            title="Unmatched Quality"
            description="We use only the finest, sustainably sourced materials to ensure longevity and luxurious feel in every product."
          />
          <Feature
            title="Exquisite Designs"
            description="Our collections are thoughtfully designed in the UK, reflecting both contemporary trends and timeless elegance."
          />
          <Feature
            title="Superior Craftsmanship"
            description="Each item is a testament to our commitment to quality, produced with meticulous attention to detail by skilled artisans."
          />
          <Feature
            title="Customer-Centric"
            description="Your satisfaction is our priority. We offer dedicated support and a seamless shopping experience."
          />
          <Feature
            title="Eco-Conscious"
            description="We are committed to sustainable practices, from sourcing materials to our packaging, to protect our planet."
          />
          <Feature
            title="Based in the UK"
            description="As a proud UK-based company, we understand the tastes and needs of our local clientele."
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
