import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById, updateProductQuantity, addImport } from '../utils/api';
import LoadingSpinner from '../components/shared/LoadingSpinner';
import ImportModal from '../components/modals/ImportModal';
import useAuth from '../hooks/useAuth';
import useTitle from '../hooks/useTitle';
import toast from 'react-hot-toast';
import { FiStar, FiPackage, FiMapPin, FiDollarSign } from 'react-icons/fi';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useTitle(product ? product.productName : 'Product Details');

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const data = await getProductById(id);
      setProduct(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching product:', error);
      toast.error('Failed to load product details');
      setLoading(false);
      navigate('/all-products');
    }
  };

  const handleImport = async (quantity) => {
    try {
      // Create import record
      const importData = {
        productId: product._id,
        userId: user.email,
        productName: product.productName,
        productImage: product.productImage,
        price: product.price,
        rating: product.rating,
        originCountry: product.originCountry,
        importedQuantity: quantity
      };

      await addImport(importData);

      // Update product quantity
      await updateProductQuantity(product._id, quantity);

      // Update local state
      setProduct({
        ...product,
        availableQuantity: product.availableQuantity - quantity
      });

      toast.success(`Successfully imported ${quantity} units!`);
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error importing product:', error);
      toast.error('Failed to import product');
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!product) {
    return (
      <div className="container-custom py-12 text-center">
        <p className="text-gray-600 dark:text-gray-400 text-lg">Product not found</p>
      </div>
    );
  }

  return (
    <div className="container-custom py-12">
      <div className="card overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 p-8">
          {/* Product Image */}
          <div>
            <img
              src={product.productImage}
              alt={product.productName}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {product.productName}
            </h1>

            <div className="flex items-center gap-6 mb-6 flex-wrap">
              <div className="flex items-center gap-2">
                <FiDollarSign className="text-blue-600 dark:text-blue-400" />
                <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  ${product.price}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <FiStar className="text-yellow-500" fill="currentColor" />
                <span className="text-xl font-semibold text-gray-900 dark:text-white">
                  {product.rating}
                </span>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <FiMapPin className="text-gray-500 dark:text-gray-400" size={20} />
                <span className="text-lg">Origin: {product.originCountry}</span>
              </div>

              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <FiPackage className="text-gray-500 dark:text-gray-400" size={20} />
                <span className="text-lg">
                  Available: {product.availableQuantity} units
                </span>
              </div>

              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <span className="text-lg">Added by: {product.addedBy}</span>
              </div>
            </div>

            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg mb-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Product Description
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                High-quality product from {product.originCountry}. This item is perfect for
                businesses looking to import premium goods at competitive prices.
              </p>
            </div>

            {product.availableQuantity > 0 ? (
              <button
                onClick={() => setIsModalOpen(true)}
                className="btn-primary w-full md:w-auto"
              >
                Import Now
              </button>
            ) : (
              <button
                disabled
                className="w-full md:w-auto px-6 py-3 bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 rounded-lg font-medium cursor-not-allowed"
              >
                Out of Stock
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Import Modal */}
      <ImportModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={product}
        onImport={handleImport}
        maxQuantity={product.availableQuantity}
      />
    </div>
  );
};

export default ProductDetails;