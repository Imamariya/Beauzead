import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-black text-gray-300">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-8 text-center">Terms of Service</h1>
        
        <p className="mb-6 text-justify">Welcome to Beauzead. By accessing or using our website and services, you agree to be bound by the following Terms of Service. Please read them carefully. If you do not agree, please discontinue use of our site.</p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Acceptance of Terms</h2>
        <p className="mb-4 text-justify">By using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service, our Privacy Policy, and any other policies posted on the site.</p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Use of Website</h2>
        <p className="mb-4 text-justify">You agree to use our website only for lawful purposes and in accordance with these Terms. You must not:</p>
        <ul className="list-disc list-inside mb-4 pl-4 space-y-1">
          <li>Engage in any fraudulent or harmful activity</li>
          <li>Attempt to interfere with the website’s functionality or security</li>
          <li>Copy, redistribute, or misuse any content without permission</li>
          <li>Use the website in any way that may harm Beauzead or other users</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Account Registration</h2>
        <p className="mb-4 text-justify">If you create an account:</p>
        <ul className="list-disc list-inside mb-4 pl-4 space-y-1">
          <li>You must provide accurate and complete information</li>
          <li>You are responsible for maintaining the confidentiality of your login details</li>
          <li>You are responsible for all activities that occur under your account</li>
          <li>You must notify us immediately of any unauthorized access or security breaches</li>
        </ul>
        <p className="mb-4 text-justify">Beauzead reserves the right to terminate accounts at its discretion.</p>
        
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Orders &amp; Payments</h2>
        <h3 className="text-xl font-semibold text-white mt-4 mb-2">a. Product Availability</h3>
        <p className="mb-4 text-justify">All products are subject to availability. Prices and descriptions may change without notice.</p>
        <h3 className="text-xl font-semibold text-white mt-4 mb-2">b. Payment</h3>
        <p className="mb-4 text-justify">We accept payments through secure third-party payment processors. By placing an order, you authorize Beauzead to charge the provided payment method.</p>
        <h3 className="text-xl font-semibold text-white mt-4 mb-2">c. Order Confirmation</h3>
        <p className="mb-4 text-justify">We reserve the right to refuse or cancel any order for reasons including product availability, errors in pricing, or suspected fraud.</p>
        
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Shipping &amp; Delivery</h2>
        <p className="mb-4 text-justify">Shipping times are estimates and may vary based on location and external factors. Beauzead is not responsible for delays caused by couriers, customs, or events outside our control.</p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Returns &amp; Refunds</h2>
        <p className="mb-4 text-justify">Returns and refunds are governed by our Return Policy. Please review it for detailed instructions on eligibility, timeframes, and procedures.</p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">7. Intellectual Property</h2>
        <p className="mb-4 text-justify">All website content—including text, graphics, images, logos, videos, trademarks, and product designs—is the property of Beauzead or its content creators and is protected by copyright and intellectual property laws. You may not:</p>
        <ul className="list-disc list-inside mb-4 pl-4 space-y-1">
            <li>Copy, reproduce, distribute, or modify any content</li>
            <li>Use Beauzead trademarks without written permission</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">8. User Conduct</h2>
        <p className="mb-4 text-justify">While using the site, you agree not to:</p>
        <ul className="list-disc list-inside mb-4 pl-4 space-y-1">
            <li>Post or transmit any harmful, offensive, or illegal content</li>
            <li>Upload malicious code or attempt to hack the site</li>
            <li>Infringe on the rights of Beauzead or others</li>
            <li>Use the site to send spam or unauthorized promotions</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">9. Third-Party Links</h2>
        <p className="mb-4 text-justify">Our website may contain links to third-party websites. Beauzead is not responsible for:</p>
        <ul className="list-disc list-inside mb-4 pl-4 space-y-1">
            <li>Their content</li>
            <li>Their policies</li>
            <li>Any damages or issues arising from their use</li>
        </ul>
        <p className="mb-4 text-justify">We encourage you to review the terms and policies of external sites.</p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">10. Disclaimer of Warranties</h2>
        <p className="mb-4 text-justify">Our website and products are provided “as is” and “as available.” Beauzead makes no warranties, express or implied, regarding:</p>
        <ul className="list-disc list-inside mb-4 pl-4 space-y-1">
            <li>Accuracy or completeness of information</li>
            <li>Continuous or error-free operation</li>
            <li>Fitness for a particular purpose</li>
            <li>Security of data (though we use industry-standard protections)</li>
        </ul>
        <p className="mb-4 text-justify">Use of the site is at your own risk.</p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">11. Limitation of Liability</h2>
        <p className="mb-4 text-justify">To the fullest extent permitted by law, Beauzead is not liable for:</p>
        <ul className="list-disc list-inside mb-4 pl-4 space-y-1">
            <li>Any direct, indirect, incidental, or consequential damages</li>
            <li>Loss of data, profits, or business opportunities</li>
            <li>Issues arising from the use or inability to use the website or products</li>
        </ul>
        <p className="mb-4 text-justify">Your sole remedy is to discontinue use of the site and services.</p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">12. Indemnification</h2>
        <p className="mb-4 text-justify">You agree to indemnify and hold harmless Beauzead, its directors, employees, and partners from any claims arising from:</p>
        <ul className="list-disc list-inside mb-4 pl-4 space-y-1">
            <li>Website misuse</li>
            <li>Violation of these Terms</li>
            <li>Infringement of rights of others</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">13. Termination</h2>
        <p className="mb-4 text-justify">Beauzead may suspend or terminate your access at any time, with or without notice, for violations of these Terms or any illegal or harmful behavior.</p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">14. Governing Law</h2>
        <p className="mb-4 text-justify">These Terms of Service are governed by the laws of Registered country.</p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">15. Changes to Terms</h2>
        <p className="mb-4 text-justify">We may update or modify these Terms at any time. Updates will be posted on this page with a new “Last Updated” date. Continued use of the site indicates acceptance of the revised Terms.</p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">16. Contact Us</h2>
        <p className="mb-4">For questions or concerns regarding these Terms, contact us:</p>
        <ul className="list-none mb-4 pl-4 space-y-1">
            <li><a href="mailto:info@beauzead.com" className="text-[#D4AF37] hover:underline">info@beauzead.com</a></li>
            <li>+447555394997</li>
        </ul>

        <p className="mt-8 text-center font-semibold">UNITED KINGDOM /KENYA/INDIA/USA/EUROPE</p>
      </div>
    </section>
  );
};

export default TermsOfService;
