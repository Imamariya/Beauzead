
import React from 'react';

const socialLinks = [
  { name: 'Facebook', href: '#', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7.02h-2.54v-2.89h2.54V9.84c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.89h-2.33v7.02c4.78-.75 8.44-4.9 8.44-9.9C22 6.53 17.5 2.04 12 2.04z" /></svg> },
  { name: 'Instagram', href: '#', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2c-2.72 0-3.06.01-4.12.06-1.06.05-1.79.22-2.42.47-.65.25-1.23.59-1.77 1.13-.54.54-.88 1.12-1.13 1.77-.25.63-.42 1.36-.47 2.42C2.01 8.94 2 9.28 2 12s.01 3.06.06 4.12c.05 1.06.22 1.79.47 2.42.25.65.59 1.23 1.13 1.77.54.54 1.12.88 1.77 1.13.63.25 1.36.42 2.42.47 1.06.05 1.4.06 4.12.06s3.06-.01 4.12-.06c1.06-.05 1.79-.22 2.42-.47.65-.25 1.23-.59 1.77-1.13.54-.54.88-1.12-1.13-1.77.25-.63.42-1.36.47-2.42.05-1.06.06-1.4.06-4.12s-.01-3.06-.06-4.12c-.05-1.06-.22-1.79-.47-2.42-.25-.65-.59-1.23-1.13-1.77-.54-.54-1.12-.88-1.77-1.13-.63-.25-1.36-.42-2.42-.47C15.06 2.01 14.72 2 12 2zm0 1.8c2.67 0 2.98.01 4.04.06 1.03.05 1.5.2 1.8.33.4.15.7.35 1.02.67.32.32.52.62.67 1.02.13.3.28.77.33 1.8.05 1.06.06 1.37.06 4.04s-.01 2.98-.06 4.04c-.05 1.03-.2 1.5-.33 1.8-.15.4-.35.7-.67 1.02-.32.32-.62.52-1.02.67-.3.13-.77.28-1.8.33-1.06.05-1.37.06-4.04.06s-2.98-.01-4.04-.06c-1.03-.05-1.5-.2-1.8-.33-.4-.15-.7-.35-1.02-.67-.32-.32-.52-.62-.67-1.02-.13-.3-.28-.77-.33-1.8-.05-1.06-.06-1.37-.06-4.04s.01-2.98.06-4.04c.05-1.03.2-1.5.33-1.8.15-.4.35-.7.67-1.02.32-.32.62-.52 1.02-.67.3-.13.77-.28 1.8-.33C9.02 3.81 9.33 3.8 12 3.8zm0 3.35c-2.9 0-5.25 2.35-5.25 5.25s2.35 5.25 5.25 5.25 5.25-2.35 5.25-5.25-2.35-5.25-5.25-5.25zm0 8.7c-1.9 0-3.45-1.55-3.45-3.45s1.55-3.45 3.45-3.45 3.45 1.55 3.45 3.45-1.55 3.45-3.45 3.45zm5.85-8.8c-.6 0-1.09.49-1.09 1.09s.49 1.09 1.09 1.09 1.09-.49 1.09-1.09-.49-1.09-1.09-1.09z" /></svg> },
  { name: 'Twitter', href: '#', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.22-1.95-.55v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.52 8.52 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21c7.35 0 11.37-6.08 11.37-11.37 0-.17 0-.34-.01-.51.78-.57 1.45-1.28 1.98-2.08z" /></svg> },
];

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
    alert('Thank you for your query! We will get back to you soon.');
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-4">Get In Touch</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-12">
            Have a question or a special request? Fill out the form below, and our team will get back to you shortly.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="text" placeholder="Your Name" required className="w-full p-4 bg-black border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-white"/>
            <input type="email" placeholder="Your Email" required className="w-full p-4 bg-black border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-white"/>
            <textarea placeholder="Your Message" rows={5} required className="w-full p-4 bg-black border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-white"></textarea>
            <button type="submit" className="w-full py-4 px-8 bg-[#D4AF37] text-black font-bold rounded-md hover:bg-opacity-90 transition-transform duration-300 hover:scale-105">
              Send Message
            </button>
          </form>
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">Follow us on social media:</p>
            <div className="flex justify-center space-x-6">
              {socialLinks.map(link => (
                <a key={link.name} href={link.href} aria-label={link.name} className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
