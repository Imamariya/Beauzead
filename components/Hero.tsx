import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      // Set a container with a fixed height on desktop and a minimum height on mobile.
      // Flexbox is used to perfectly center the video inside this container.
      className="w-full flex justify-center items-center bg-black lg:h-[720px] min-h-[60vh]"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        // These classes ensure the video scales to fit within its container,
        // never exceeding the container's width or height. This prevents cropping.
        className="max-w-full max-h-full"
        poster="https://res.cloudinary.com/dufnwlqeq/video/upload/VID-20251116-WA0019_pvfgfi.jpg"
      >
        {/* Using a single, optimized video source to ensure consistent and correct display */}
        <source 
          src="https://res.cloudinary.com/dufnwlqeq/video/upload/q_auto/VID-20251116-WA0019_pvfgfi.mp4" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default Hero;