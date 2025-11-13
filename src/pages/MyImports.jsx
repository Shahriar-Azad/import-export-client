import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUserImports, deleteImport } from '../utils/api';
import useAuth from '../hooks/useAuth';
import useTitle from '../hooks/useTitle';
import LoadingSpinner from '../components/shared/LoadingSpinner';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import { FiStar, FiTrash2, FiEye } from 'react-icons/fi';

const MyImports = () => {
  useTitle('My Imports');
  const { user } = useAuth();
  const [imports, setImports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchImports();
    }
  }, [user]);

  const fetchImports = async () => {
    try {
      const data = await getUserImports(user.email);
      setImports(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching imports:', error);
      toast.error('Failed to load imports');
      setLoading(false);
    }
  };

  const handleRemove = async (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "This import will be removed from your list",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3b82f6',
      cancelButtonColor: '#ef4444',
      confirmButtonText: 'Yes, remove it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteImport(id);
          setImports(imports.filter(item => item._id !== id));
          toast.success('Import removed successfully');
        } catch (error) {
          console.error('Error deleting import:', error);
          toast.error('Failed to remove import');
        }
      }
    });
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container-custom py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          My Imports
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Manage all the products you have imported
        </p>
      </div>

      {imports.length === 0 ? (
        <div className="text-center py-12 card">
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
            You haven't imported any products yet
          </p>
          <Link
            to="/all-products"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="grid-3-col">
          {imports.map((item) => (
            <div key={item._id} className="card h-full flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.productImage}
                  alt={item.productName}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  ${item.price}
                </div>
              </div>

              <div className="p-5 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.productName}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  {item.originCountry}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-yellow-500">
                    <FiStar fill="currentColor" />
                    <span className="text-gray-900 dark:text-white font-semibold">
                      {item.rating}
                    </span>
                  </div>

                  <div className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Qty:</span> {item.importedQuantity}
                  </div>
                </div>

                <div className="mt-auto flex gap-2">
                  <Link
                    to={`/product/${item.productId}`}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <FiEye />
                    Details
                  </Link>
                  <button
                    onClick={() => handleRemove(item._id)}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    <FiTrash2 />
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyImports;