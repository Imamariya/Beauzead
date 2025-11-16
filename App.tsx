
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import VisionMission from './components/VisionMission';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  const navLinks = [
    { title: 'Home', href: '#home' },
    { title: 'About Us', href: '#about' },
    { title: 'Our Products', href: '#products' },
    { title: 'Why Choose Us', href: '#why-us' },
    { title: 'Contact Us', href: '#contact' },
  ];

  return (
    <div className="bg-black font-sans">
      <Header navLinks={navLinks} />
      <main>
        <Hero />
        <AboutUs />
        <Products />
        <VisionMission />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
