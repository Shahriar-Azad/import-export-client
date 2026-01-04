import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';

const CTA = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container-custom">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Ready to Expand Your Business Globally?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful traders and take your import-export business to the next level
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Link
              to="/register"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-lg inline-flex items-center gap-2"
            >
              Start Trading Now <FiArrowRight />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold text-lg"
            >
              Contact Sales
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-8 mt-8 pt-8 border-t border-white border-opacity-20">
            <div className="flex items-center gap-2">
              <FiCheckCircle size={20} />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <FiCheckCircle size={20} />
              <span>Free account setup</span>
            </div>
            <div className="flex items-center gap-2">
              <FiCheckCircle size={20} />
              <span>24/7 support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;