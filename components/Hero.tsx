
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      // The container is made relative to position the video inside it.
      // Overflow is hidden to ensure the video, when scaled, doesn't create scrollbars.
      className="relative w-full lg:h-[720px] min-h-[60vh] bg-black overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        // These classes make the video act as a background cover.
        // It's absolutely positioned to fill the parent section.
        // `object-cover` scales the video to cover the container while maintaining aspect ratio, cropping as needed.
        className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 object-cover z-0"
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
