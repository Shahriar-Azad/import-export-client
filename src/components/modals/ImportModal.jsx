import { useState } from 'react';
import { FiX } from 'react-icons/fi';

const ImportModal = ({ isOpen, onClose, product, onImport, maxQuantity }) => {
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState('');

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    setQuantity(value);

    if (value > maxQuantity) {
      setError(`Maximum available quantity is ${maxQuantity}`);
    } else if (value < 1) {
      setError('Quantity must be at least 1');
    } else {
      setError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (quantity > maxQuantity || quantity < 1) {
      return;
    }

    onImport(quantity);
    setQuantity(1);
    setError('');
  };

  if (!isOpen) return null;

  const isDisabled = quantity > maxQuantity || quantity < 1;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <FiX size={24} />
        </button>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Import Product
        </h2>

        <div className="mb-6">
          <img
            src={product.productImage}
            alt={product.productName}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {product.productName}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Available: {maxQuantity} units
          </p>
          <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg">
            ${product.price} per unit
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Quantity to Import
            </label>
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
              max={maxQuantity}
              className="input-field"
              required
            />
            {error && (
              <p className="text-red-600 dark:text-red-400 text-sm mt-2">
                {error}
              </p>
            )}
          </div>

          <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="text-gray-700 dark:text-gray-300">Total Cost:</span>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                ${(product.price * quantity).toFixed(2)}
              </span>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isDisabled}
              className={`flex-1 px-4 py-2 rounded-lg transition-colors ${
                isDisabled
                  ? 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Import Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ImportModal;