import { useState } from 'react';
import { FiSearch, FiChevronDown, FiChevronUp, FiMessageCircle, FiBook, FiHelpCircle } from 'react-icons/fi';

const Support = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      id: 1,
      category: 'Getting Started',
      question: 'How do I create an account on Import Export Hub?',
      answer: 'Click on the "Login" button in the top right corner, then select "Sign Up". Fill in your details including name, email, and password. You can also sign up using Google authentication for faster registration.'
    },
    {
      id: 2,
      category: 'Getting Started',
      question: 'How do I list my products for export?',
      answer: 'After logging in, navigate to "Add Export" from the navigation menu. Fill in the product details including name, category, description, price, and upload product images. Once submitted, your listing will be visible to potential importers.'
    },
    {
      id: 3,
      category: 'Account Management',
      question: 'How can I edit my profile information?',
      answer: 'Go to your profile settings by clicking on your profile picture in the header. From there, you can update your personal information, business details, and contact preferences.'
    },
    {
      id: 4,
      category: 'Account Management',
      question: 'How do I reset my password?',
      answer: 'On the login page, click "Forgot Password". Enter your registered email address, and we will send you instructions to reset your password.'
    },
    {
      id: 5,
      category: 'Trading',
      question: 'How do I contact exporters/importers?',
      answer: 'You can contact other users through the messaging feature on their product listings or profile pages. Make sure you are logged in to send messages.'
    },
    {
      id: 6,
      category: 'Trading',
      question: 'What payment methods are supported?',
      answer: 'Import Export Hub facilitates connections between buyers and sellers. Payment terms and methods are negotiated directly between parties. We recommend using secure payment methods and trade agreements.'
    },
    {
      id: 7,
      category: 'Safety & Security',
      question: 'How do I verify a trading partner?',
      answer: 'Check for verified badges on user profiles, read reviews from other traders, and always conduct due diligence. We recommend starting with small transactions and gradually building trust.'
    },
    {
      id: 8,
      category: 'Safety & Security',
      question: 'What should I do if I encounter a suspicious listing?',
      answer: 'Report any suspicious activity or listings using the "Report" button on the listing page. Our team will investigate and take appropriate action to maintain platform integrity.'
    },
    {
      id: 9,
      category: 'Shipping & Logistics',
      question: 'Does Import Export Hub handle shipping?',
      answer: 'No, Import Export Hub is a marketplace platform that connects buyers and sellers. Shipping and logistics arrangements are made directly between trading parties. We recommend working with reputable freight forwarders.'
    },
    {
      id: 10,
      category: 'Shipping & Logistics',
      question: 'How do I calculate shipping costs?',
      answer: 'Shipping costs depend on product weight, dimensions, destination, and shipping method. We recommend getting quotes from multiple freight forwarders and including shipping terms in your negotiations.'
    }
  ];

  const categories = ['All', 'Getting Started', 'Account Management', 'Trading', 'Safety & Security', 'Shipping & Logistics'];

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container-custom py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            How Can We Help You?
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Find answers to common questions or contact our support team
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search for help..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Quick Help Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow cursor-pointer">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiBook className="text-blue-600 dark:text-blue-400" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Documentation
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Browse our comprehensive guides and tutorials
            </p>
            <button className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
              View Docs
            </button>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow cursor-pointer">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiMessageCircle className="text-green-600 dark:text-green-400" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Live Chat
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Chat with our support team in real-time
            </p>
            <button className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
              Start Chat
            </button>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow cursor-pointer">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiHelpCircle className="text-purple-600 dark:text-purple-400" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              Contact Support
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Submit a ticket and we'll get back to you
            </p>
            <button className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
              Contact Us
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h2>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFaqs.map((faq) => (
              <div
                key={faq.id}
                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                >
                  <div className="flex items-start gap-4 text-left">
                    <span className="inline-block px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded text-xs font-medium">
                      {faq.category}
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {faq.question}
                    </span>
                  </div>
                  {openFaq === faq.id ? (
                    <FiChevronUp className="text-gray-500 dark:text-gray-400 flex-shrink-0" size={20} />
                  ) : (
                    <FiChevronDown className="text-gray-500 dark:text-gray-400 flex-shrink-0" size={20} />
                  )}
                </button>
                {openFaq === faq.id && (
                  <div className="px-6 py-4 bg-white dark:bg-gray-800">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No results found for "{searchQuery}". Try different keywords or contact our support team.
              </p>
            </div>
          )}
        </div>

        {/* Still Need Help */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our support team is available 24/7 to assist you with any questions or issues you may have.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium">
              Contact Support
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;