
import React from 'react';

const Hero: React.FC = () => {
  const heroImageUrl = "https://res.cloudinary.com/dufnwlqeq/image/upload/v1763323767/Black_and_Blue_Festive_Flat_Illustration_Visual_Brand_Audit_Presentation_20251117_013204_0000_zonkin.jpg";

  return (
    <section 
      id="home" 
      className="relative w-full lg:h-[720px] min-h-[60vh] bg-black bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImageUrl})` }}
      aria-label="Luxury towels and curtains showcase"
    >
      {/* Intentionally empty to showcase the background image. Content can be added here later. */}
    </section>
  );
};

export default Hero;
