import React from 'react';

const Hero: React.FC = () => {
  const heroImageUrl = "https://res.cloudinary.com/dufnwlqeq/image/upload/v1763323767/Black_and_Blue_Festive_Flat_Illustration_Visual_Brand_Audit_Presentation_20251117_013204_0000_zonkin.jpg";

  return (
    <section 
      id="home" 
      className="-mt-20 md:-mt-24 relative w-full lg:h-[720px] min-h-[60vh] bg-black bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImageUrl})` }}
      aria-label="BEAUZEAD logo with tagline Elegance Redefined"
    >
      {/* The background image contains the hero content. bg-cover ensures it fills the space. */}
    </section>
  );
};

export default Hero;