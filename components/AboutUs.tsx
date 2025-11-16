import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-6 text-center">About BEAUZEAD</h2>
          <p className="text-gray-300 mb-4 text-justify">
            Based in the heart of the UK, BEAUZEAD was founded on a simple yet profound principle: to bring exceptional quality and timeless design into every home. We specialize in premium towels and curtains that are not just functional items, but pieces of art that elevate your living space.
          </p>
          <p className="text-gray-300 text-justify">
            Our journey began with a passion for textiles and a commitment to craftsmanship. We source the finest materials and work with skilled artisans to create products that promise durability, comfort, and an touch of sophisticated luxury. At BEAUZEAD, we believe your home should be a sanctuary of comfort and style.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;