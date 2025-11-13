import { useEffect, useState } from 'react';
import { getLatestProducts } from '../../utils/api';
import ProductCard from '../products/ProductCard';
import LoadingSpinner from '../shared/LoadingSpinner';
import toast from 'react-hot-toast';

const LatestProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLatestProducts();
  }, []);

  const fetchLatestProducts = async () => {
    try {
      const data = await getLatestProducts();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      toast.error('Failed to load products');
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <section className="container-custom py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Latest Products
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Discover the newest additions to our marketplace from exporters around the world
        </p>
      </div>
      
      {products.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400 text-lg">No products available yet</p>
        </div>
      ) : (
        <div className="grid-3-col">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
};

export default LatestProducts;