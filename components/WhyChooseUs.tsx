
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
        <p className="text-gray-400 text-justify">{description}</p>
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
            title="Elegance Redefined"
            description="We create products that combine modern sophistication with timeless style, helping you express your uniqueness with effortless elegance."
          />
          <Feature
            title="Premium Quality You Can Trust"
            description="From ingredients to design and craftsmanship, every Beauzead product is made with the highest standards for performance, comfort, and durability."
          />
          <Feature
            title="Thoughtfully Curated for You"
            description="We believe beauty and lifestyle should feel personal. Our collections are thoughtfully designed to meet your real needs—functional, stylish, and made to enhance your daily routine."
          />
          <Feature
            title="Innovation Meets Simplicity"
            description="At Beauzead, we blend innovation with ease of use, ensuring every product feels intuitive, accessible, and a joy to experience."
          />
          <Feature
            title="A Brand with Heart"
            description="We care about people and the planet. Our approach emphasizes ethical sourcing, mindful production, and a dedication to empowering confidence and individuality."
          />
          <Feature
            title="Exceptional Customer Experience"
            description="Your satisfaction is our priority. From smooth shopping to attentive support, we ensure a seamless, enjoyable experience every step of the way."
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
