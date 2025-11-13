import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addProduct } from '../utils/api';
import useAuth from '../hooks/useAuth';
import useTitle from '../hooks/useTitle';
import toast from 'react-hot-toast';
import { FiPackage, FiImage, FiDollarSign, FiMapPin, FiStar, FiLayers } from 'react-icons/fi';

const AddExport = () => {
  useTitle('Add Export');
  const { user } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    productName: '',
    productImage: '',
    price: '',
    originCountry: '',
    rating: '',
    availableQuantity: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate rating
    if (parseFloat(formData.rating) < 0 || parseFloat(formData.rating) > 5) {
      toast.error('Rating must be between 0 and 5');
      return;
    }

    const productData = {
      ...formData,
      price: parseFloat(formData.price),
      rating: parseFloat(formData.rating),
      availableQuantity: parseInt(formData.availableQuantity),
      addedBy: user.email
    };

    try {
      await addProduct(productData);
      toast.success('Product added successfully!');
      navigate('/my-exports');
    } catch (error) {
      console.error('Error adding product:', error);
      toast.error('Failed to add product');
    }
  };

  return (
    <div className="container-custom py-12">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Add New Product
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            List your product for export to reach global markets
          </p>
        </div>

        <div className="card p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Product Name
              </label>
              <div className="relative">
                <FiPackage className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="productName"
                  value={formData.productName}
                  onChange={handleChange}
                  className="input-field pl-10"
                  placeholder="Enter product name"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Product Image URL
              </label>
              <div className="relative">
                <FiImage className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="url"
                  name="productImage"
                  value={formData.productImage}
                  onChange={handleChange}
                  className="input-field pl-10"
                  placeholder="https://example.com/image.jpg"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Price (USD)
                </label>
                <div className="relative">
                  <FiDollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    step="0.01"
                    min="0"
                    className="input-field pl-10"
                    placeholder="0.00"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Origin Country
                </label>
                <div className="relative">
                  <FiMapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="originCountry"
                    value={formData.originCountry}
                    onChange={handleChange}
                    className="input-field pl-10"
                    placeholder="Country name"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Rating (0-5)
                </label>
                <div className="relative">
                  <FiStar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="number"
                    name="rating"
                    value={formData.rating}
                    onChange={handleChange}
                    step="0.1"
                    min="0"
                    max="5"
                    className="input-field pl-10"
                    placeholder="4.5"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Available Quantity
                </label>
                <div className="relative">
                  <FiLayers className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="number"
                    name="availableQuantity"
                    value={formData.availableQuantity}
                    onChange={handleChange}
                    min="1"
                    className="input-field pl-10"
                    placeholder="100"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full btn-primary"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddExport;