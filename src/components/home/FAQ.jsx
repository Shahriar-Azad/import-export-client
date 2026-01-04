import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'How do I get started on Import Export Hub?',
      answer: 'Simply sign up for a free account, complete your business profile, and start browsing products or listing your own exports. Our verification process ensures a safe trading environment.'
    },
    {
      id: 2,
      question: 'Is there a fee to use the platform?',
      answer: 'Creating an account and browsing products is completely free. We offer premium memberships with additional features like priority listings and advanced analytics.'
    },
    {
      id: 3,
      question: 'How does the verification process work?',
      answer: 'We verify all business profiles through documentation review and background checks. Verified members receive a badge, helping build trust in the community.'
    },
    {
      id: 4,
      question: 'What payment methods are supported?',
      answer: 'Payment terms are negotiated directly between buyers and sellers. We recommend using secure payment methods and international trade agreements for protection.'
    },
    {
      id: 5,
      question: 'Can I export/import to any country?',
      answer: 'You can connect with traders from over 150 countries. However, you must comply with your local laws and international trade regulations for specific products and destinations.'
    }
  ];

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Everything you need to know about getting started
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <span className="font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </span>
                {openFaq === faq.id ? (
                  <FiChevronUp className="text-blue-600 dark:text-blue-400 flex-shrink-0" size={24} />
                ) : (
                  <FiChevronDown className="text-gray-400 flex-shrink-0" size={24} />
                )}
              </button>
              {openFaq === faq.id && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;