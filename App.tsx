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
import PrivacyPolicy from './components/PrivacyPolicy';

const App: React.FC = () => {
  const path = window.location.pathname;

  // If on a sub-page, nav links should point to the root with a hash for scrolling.
  const navLinks = [
    { title: 'Home', href: path === '/' ? '#home' : '/#home' },
    { title: 'About Us', href: path === '/' ? '#about' : '/#about' },
    { title: 'Our Products', href: path === '/' ? '#products' : '/#products' },
    { title: 'Why Choose Us', href: path === '/' ? '#why-us' : '/#why-us' },
    { title: 'Contact Us', href: path === '/' ? '#contact' : '/#contact' },
  ];
  
  const renderPage = () => {
    if (path === '/privacy-policy') {
      return <PrivacyPolicy />;
    }

    return (
      <>
        <Hero />
        <AboutUs />
        <Products />
        <VisionMission />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </>
    );
  };


  return (
    <div className="bg-black font-sans">
      <Header navLinks={navLinks} />
      <main className="pt-20 md:pt-24">
        {renderPage()}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
