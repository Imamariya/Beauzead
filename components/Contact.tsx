import React, { useState } from 'react';

const MapPinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);

const MailIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
);

const PhoneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
);

const LoadingSpinner: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
);

const socialLinks = [
  { name: 'Facebook', href: '#', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7.02h-2.54v-2.89h2.54V9.84c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.89h-2.33v7.02c4.78-.75 8.44-4.9 8.44-9.9C22 6.53 17.5 2.04 12 2.04z" /></svg> },
  { name: 'Instagram', href: 'https://www.instagram.com/beauzead_/', icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2c-2.72 0-3.06.01-4.12.06-1.06.05-1.79.22-2.42.47-.65.25-1.23.59-1.77 1.13-.54.54-.88 1.12-1.13 1.77-.25.63-.42 1.36-.47 2.42C2.01 8.94 2 9.28 2 12s.01 3.06.06 4.12c.05 1.06.22 1.79.47 2.42.25.65.59 1.23 1.13 1.77.54.54 1.12.88 1.77 1.13.63.25 1.36.42 2.42.47 1.06.05 1.4.06 4.12.06s3.06-.01 4.12-.06c1.06-.05 1.79-.22 2.42-.47.65-.25 1.23-.59 1.77-1.13.54-.54.88-1.12-1.13-1.77.25-.63.42-1.36.47-2.42.05-1.06.06-1.4.06-4.12s-.01-3.06-.06-4.12c-.05-1.06-.22-1.79-.47-2.42-.25-.65-.59-1.23-1.13-1.77-.54-.54-1.12-.88-1.77-1.13-.63-.25-1.36-.42-2.42-.47C15.06 2.01 14.72 2 12 2zm0 1.8c2.67 0 2.98.01 4.04.06 1.03.05 1.5.2 1.8.33.4.15.7.35 1.02.67.32.32.52.62.67 1.02.13.3.28.77.33 1.8.05 1.06.06 1.37.06 4.04s-.01 2.98-.06 4.04c-.05 1.03-.2 1.5-.33 1.8-.15.4-.35.7-.67 1.02-.32.32-.62.52-1.02.67-.3.13-.77.28-1.8.33-1.06.05-1.37.06-4.04.06s-2.98-.01-4.04-.06c-1.03-.05-1.5-.2-1.8-.33-.4-.15-.7-.35-1.02-.67-.32-.32-.52-.62-.67-1.02-.13-.3-.28-.77-.33-1.8-.05-1.06-.06-1.37-.06-4.04s.01-2.98.06-4.04c.05-1.03.2-1.5.33-1.8.15-.4.35-.7.67-1.02.32-.32.62-.52 1.02-.67.3-.13.77-.28 1.8-.33C9.02 3.81 9.33 3.8 12 3.8zm0 3.35c-2.9 0-5.25 2.35-5.25 5.25s2.35 5.25 5.25 5.25 5.25-2.35 5.25-5.25-2.35-5.25-5.25-5.25zm0 8.7c-1.9 0-3.45-1.55-3.45-3.45s1.55-3.45 3.45-3.45 3.45 1.55 3.45 3.45-1.55 3.45-3.45 3.45zm5.85-8.8c-.6 0-1.09.49-1.09 1.09s.49 1.09 1.09 1.09 1.09-.49 1.09-1.09-.49-1.09-1.09-1.09z" /></svg> },
];

const serviceLocations = ['UNITED KINGDOM', 'KENYA', 'INDIA', 'USA', 'EUROPE'];

const Contact: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsLoading(false);
    
    alert('Thank you for your query! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' }); // Reset form
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
            <input 
              type="text" 
              name="name"
              placeholder="Your Name" 
              value={formData.name}
              onChange={handleChange}
              required 
              className="w-full p-4 bg-black border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-white"
            />
            <input 
              type="email" 
              name="email"
              placeholder="Your Email" 
              value={formData.email}
              onChange={handleChange}
              required 
              className="w-full p-4 bg-black border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-white"
            />
            <textarea 
              name="message"
              placeholder="Your Message" 
              rows={5} 
              value={formData.message}
              onChange={handleChange}
              required 
              className="w-full p-4 bg-black border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-white"
            ></textarea>
            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full flex items-center justify-center py-4 px-8 bg-[#D4AF37] text-black font-bold rounded-md hover:bg-opacity-90 transition-all duration-300 hover:scale-105 disabled:bg-opacity-70 disabled:cursor-not-allowed disabled:scale-100"
            >
              {isLoading ? (
                <>
                  <LoadingSpinner className="animate-spin -ml-1 mr-3 h-5 w-5" />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>

        {/* Address & Locations Section */}
        <div className="mt-20 text-center">
          {/* Contact Details */}
          <div className="grid md:grid-cols-3 gap-10 mb-16 max-w-5xl mx-auto">
            <div className="flex flex-col items-center">
              <MapPinIcon className="w-8 h-8 text-[#D4AF37] mb-3" />
              <h4 className="text-xl font-semibold text-white mb-1">Address</h4>
              <p className="text-gray-400">23, MK6 5HH<br/>United Kingdom</p>
            </div>
            <div className="flex flex-col items-center">
              <MailIcon className="w-8 h-8 text-[#D4AF37] mb-3" />
              <h4 className="text-xl font-semibold text-white mb-1">Email</h4>
              <a href="mailto:info@beauzead.com" className="text-gray-400 hover:text-[#D4AF37] transition-colors">info@beauzead.com</a>
            </div>
            <div className="flex flex-col items-center">
              <PhoneIcon className="w-8 h-8 text-[#D4AF37] mb-3" />
              <h4 className="text-xl font-semibold text-white mb-1">Phone</h4>
              <p className="text-gray-400">+447555394997</p>
            </div>
          </div>

          {/* Service Locations */}
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">Service Locations</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-5xl mx-auto mb-16">
            {serviceLocations.map(location => (
              <div key={location} className="bg-black p-6 rounded-lg border border-gray-800 hover:border-[#D4AF37] hover:scale-105 transition-all duration-300 flex items-center justify-center">
                <h4 className="font-semibold text-white tracking-wider uppercase text-sm">{location}</h4>
              </div>
            ))}
          </div>
          
          {/* Social Media */}
          <p className="text-gray-400 mb-4">Follow us on social media:</p>
          <div className="flex justify-center space-x-6">
            {socialLinks.map(link => (
              <a key={link.name} href={link.href} aria-label={link.name} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#D4AF37] transition-colors duration-300">
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;