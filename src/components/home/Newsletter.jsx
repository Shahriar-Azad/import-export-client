import { useState } from 'react';
import { FiMail } from 'react-icons/fi';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
    alert('Thanks for subscribing!');
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <FiMail size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Ahead of the Market
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Subscribe to our newsletter for weekly trade insights, market trends, and exclusive opportunities
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm text-blue-100 mt-4">
            Join 10,000+ traders receiving our weekly insights
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;