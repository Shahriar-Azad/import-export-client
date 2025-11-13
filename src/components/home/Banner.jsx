import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

const Banner = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-500 to-blue-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="container-custom py-20 md:py-32 relative z-10">
        <div className="max-w-3xl fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Connect Global Trade
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Discover premium products from exporters worldwide and manage your imports seamlessly
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/all-products"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Browse Products
              <FiArrowRight />
            </Link>
            <Link
              to="/add-export"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Start Exporting
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -ml-48 -mb-48"></div>
    </div>
  );
};

export default Banner;