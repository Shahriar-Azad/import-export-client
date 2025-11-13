import { Link } from 'react-router-dom';
import { FiStar, FiPackage } from 'react-icons/fi';

const ProductCard = ({ product }) => {
  const { _id, productName, productImage, price, originCountry, rating, availableQuantity } = product;

  return (
    <div className="card h-full flex flex-col">
      <div className="relative h-64 overflow-hidden">
        <img
          src={productImage}
          alt={productName}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          ${price}
        </div>
      </div>
      
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
          {productName}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 mb-3 flex items-center gap-2">
          <span className="text-2xl">{getFlagEmoji(originCountry)}</span>
          {originCountry}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1 text-yellow-500">
            <FiStar fill="currentColor" />
            <span className="text-gray-900 dark:text-white font-semibold">{rating}</span>
          </div>
          
          <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
            <FiPackage />
            <span className="text-sm">{availableQuantity} available</span>
          </div>
        </div>
        
        <Link
          to={`/product/${_id}`}
          className="mt-auto w-full text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          See Details
        </Link>
      </div>
    </div>
  );
};

// Helper function to get flag emoji
const getFlagEmoji = (countryName) => {
  const flags = {
    'USA': '🇺🇸',
    'China': '🇨🇳',
    'India': '🇮🇳',
    'Germany': '🇩🇪',
    'Japan': '🇯🇵',
    'UK': '🇬🇧',
    'France': '🇫🇷',
    'Italy': '🇮🇹',
    'Canada': '🇨🇦',
    'Australia': '🇦🇺',
    'Brazil': '🇧🇷',
    'Mexico': '🇲🇽',
    'Spain': '🇪🇸',
    'Bangladesh': '🇧🇩',
  };
  return flags[countryName] || '🌍';
};

export default ProductCard;