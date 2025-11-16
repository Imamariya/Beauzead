import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-6 text-center">About BEAUZEAD</h2>
          <p className="text-gray-300 mb-4 text-justify">
            At Beauzead, we believe beauty is more than appearance—it’s an experience. Founded with the desire to bring refined elegance into everyday life, Beauzead curates high-quality lifestyle and beauty products designed to enhance confidence, comfort, and self-expression.
          </p>
          <p className="text-gray-300 text-justify">
            Rooted in craftsmanship, innovation, and a passion for aesthetics, our brand strives to deliver solutions that feel luxurious yet accessible. Whether through beauty essentials, lifestyle accessories, or personal-care innovations, we are dedicated to elevating your daily routine with a touch of sophistication.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;