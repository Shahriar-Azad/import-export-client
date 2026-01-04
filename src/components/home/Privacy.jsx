import { useState } from 'react';
import { FiShield, FiFileText } from 'react-icons/fi';

const Privacy = () => {
  const [activeTab, setActiveTab] = useState('privacy');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container-custom py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Legal Information
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Learn about how we protect your data and the terms of using our platform
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'privacy'
                ? 'bg-blue-600 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <FiShield size={20} />
            Privacy Policy
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'terms'
                ? 'bg-blue-600 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            <FiFileText size={20} />
            Terms of Service
          </button>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-12">
          {activeTab === 'privacy' ? (
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Privacy Policy
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Last updated: January 1, 2024
                </p>
              </div>

              <section className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  1. Information We Collect
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  At Import Export Hub, we collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                  <li>Account information (name, email address, password)</li>
                  <li>Business information (company name, address, contact details)</li>
                  <li>Product listings and descriptions</li>
                  <li>Communication and correspondence with other users</li>
                  <li>Payment and transaction information</li>
                </ul>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  2. How We Use Your Information
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices, updates, and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Detect, prevent, and address fraud and security issues</li>
                  <li>Comply with legal obligations and enforce our policies</li>
                </ul>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  3. Information Sharing
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  We may share your information in the following circumstances:
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                  <li>With other users when you choose to make your profile or listings public</li>
                  <li>With service providers who perform services on our behalf</li>
                  <li>When required by law or to protect our rights</li>
                  <li>With your consent or at your direction</li>
                </ul>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  4. Data Security
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We implement appropriate technical and organizational measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
                  over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  5. Your Rights
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your account and data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Export your data in a portable format</li>
                </ul>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  6. Cookies and Tracking
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We use cookies and similar tracking technologies to collect information about your browsing activities 
                  and to provide a personalized experience. You can control cookies through your browser settings.
                </p>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  7. Contact Us
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  If you have questions about this Privacy Policy, please contact us at privacy@importexporthub.com
                </p>
              </section>
            </div>
          ) : (
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Terms of Service
                </h2>
                <p className="text-gray-500 dark:text-gray-400">
                  Last updated: January 1, 2024
                </p>
              </div>

              <section className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  1. Acceptance of Terms
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  By accessing and using Import Export Hub, you accept and agree to be bound by these Terms of Service. 
                  If you do not agree to these terms, please do not use our platform.
                </p>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  2. User Accounts
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  When creating an account, you must:
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Be at least 18 years old or the age of majority in your jurisdiction</li>
                  <li>Not use the platform for any illegal or unauthorized purpose</li>
                </ul>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  3. User Conduct
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  You agree not to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                  <li>Post false, misleading, or fraudulent information</li>
                  <li>Violate any laws or regulations</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Harass, abuse, or harm other users</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Use automated systems to access the platform</li>
                </ul>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  4. Product Listings
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  When listing products, you must:
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 space-y-2">
                  <li>Ensure all information is accurate and up-to-date</li>
                  <li>Comply with all applicable trade laws and regulations</li>
                  <li>Not list prohibited or restricted items</li>
                  <li>Honor the terms presented in your listings</li>
                </ul>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  5. Transactions
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Import Export Hub serves as a marketplace platform connecting buyers and sellers. We are not party to 
                  transactions between users and are not responsible for the quality, safety, or legality of items listed, 
                  the accuracy of listings, or the ability of users to complete transactions.
                </p>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  6. Intellectual Property
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  All content on Import Export Hub, including text, graphics, logos, and software, is the property of 
                  Import Export Hub or its licensors and is protected by copyright and other intellectual property laws.
                </p>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  7. Limitation of Liability
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Import Export Hub shall not be liable for any indirect, incidental, special, or consequential damages 
                  arising out of or in connection with your use of the platform.
                </p>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  8. Termination
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We reserve the right to suspend or terminate your account at any time for violations of these Terms 
                  or for any other reason at our discretion.
                </p>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  9. Changes to Terms
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We may modify these Terms at any time. Continued use of the platform after changes constitutes 
                  acceptance of the modified Terms.
                </p>
              </section>

              <section className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  10. Contact
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  For questions about these Terms of Service, contact us at legal@importexporthub.com
                </p>
              </section>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            If you have any questions about our privacy practices or terms of service, 
            our legal team is here to help.
          </p>
          <button className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium">
            Contact Legal Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default Privacy;