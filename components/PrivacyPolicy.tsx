import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-black text-gray-300">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-[#D4AF37] mb-8 text-center">Privacy Policy</h1>
        
        <p className="mb-6 text-justify">At Beauzead, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or interact with our services. By accessing our website, you agree to the terms outlined in this policy.</p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Information We Collect</h2>
        <h3 className="text-xl font-semibold text-white mt-4 mb-2">a. Personal Information</h3>
        <p className="mb-4">We may collect personal information that you voluntarily provide, including:</p>
        <ul className="list-disc list-inside mb-4 pl-4 space-y-1">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Billing and shipping address</li>
          <li>Payment information (processed securely through third-party payment providers)</li>
          <li>Account login details (if you create an account)</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mt-4 mb-2">b. Automatically Collected Information</h3>
        <p className="mb-4">When you browse our website, we may automatically collect:</p>
        <ul className="list-disc list-inside mb-4 pl-4 space-y-1">
            <li>IP address</li>
            <li>Browser type</li>
            <li>Device information</li>
            <li>Pages visited</li>
            <li>Time spent on pages</li>
            <li>Cookies and tracking technologies (for analytics and site performance)</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. How We Use Your Information</h2>
        <p className="mb-4">Beauzead uses collected data to:</p>
        <ul className="list-disc list-inside mb-4 pl-4 space-y-1">
            <li>Provide and improve our products and services</li>
            <li>Process and fulfill orders</li>
            <li>Communicate with you regarding orders, updates, promotions, and support</li>
            <li>Personalize your website experience</li>
            <li>Analyze website performance</li>
            <li>Prevent fraud and enhance security</li>
            <li>Comply with legal requirements</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Cookies &amp; Tracking Technologies</h2>
        <p className="mb-4 text-justify">We use cookies and similar technologies to:</p>
        <ul className="list-disc list-inside mb-4 pl-4 space-y-1">
            <li>Improve browsing experience</li>
            <li>Enable essential site functions</li>
            <li>Track website analytics</li>
            <li>Remember user preferences</li>
            <li>Deliver tailored content or marketing</li>
        </ul>
        <p className="mb-4 text-justify">You may disable cookies through your browser settings, but some features may not function properly.</p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Sharing Your Information</h2>
        <p className="mb-4 text-justify">We do not sell your personal information. We may share information with:</p>
        <ul className="list-disc list-inside mb-4 pl-4 space-y-1">
            <li>Trusted third-party service providers (payment processors, shipping partners, analytics tools, marketing services)</li>
            <li>Legal authorities, if required by law or to protect our rights</li>
            <li>Business partners, in case of merger, acquisition, or business restructuring (with notice provided)</li>
        </ul>
        <p className="mb-4 text-justify">All third-party partners are required to maintain strict confidentiality and data-protection standards.</p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Data Security</h2>
        <p className="mb-4 text-justify">We implement industry-standard security measures to protect your information, including encryption, secure servers, and access controls. However, no online transmission is 100% secure, and we cannot guarantee absolute protection.</p>
        
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Your Rights &amp; Choices</h2>
        <p className="mb-4 text-justify">Depending on your region, you may have the right to:</p>
        <ul className="list-disc list-inside mb-4 pl-4 space-y-1">
            <li>Access or request a copy of your personal data</li>
            <li>Update or correct information</li>
            <li>Request deletion of your data</li>
            <li>Opt out of marketing communications</li>
            <li>Restrict or object to data processing</li>
            <li>Disable cookies</li>
        </ul>
        <p className="mb-4">To exercise your rights, contact us at: <a href="mailto:info@beauzead.com" className="text-[#D4AF37] hover:underline">info@beauzead.com</a></p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">7. Third-Party Links</h2>
        <p className="mb-4 text-justify">Our website may contain links to third-party websites. We are not responsible for the content or privacy practices of those sites. We encourage you to review their privacy policies.</p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">8. Children’s Privacy</h2>
        <p className="mb-4 text-justify">Beauzead does not knowingly collect personal information from children under 13. If we become aware that such information has been collected, we will delete it immediately.</p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">9. Changes to This Privacy Policy</h2>
        <p className="mb-4 text-justify">We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date. Continued use of the website indicates acceptance of the updated policy.</p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">10. Contact Us</h2>
        <p className="mb-4">If you have any questions or concerns about this Privacy Policy, please contact us:</p>
        <ul className="list-none mb-4 pl-4 space-y-1">
            <li><a href="mailto:info@beauzead.com" className="text-[#D4AF37] hover:underline">info@beauzead.com</a></li>
            <li>+447555394997 Head Office United Kingdom</li>
        </ul>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
