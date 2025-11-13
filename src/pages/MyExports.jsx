import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUserProducts, deleteProduct, updateProduct } from '../utils/api';
import useAuth from '../hooks/useAuth';
import useTitle from '../hooks/useTitle';
import LoadingSpinner from '../components/shared/LoadingSpinner';
import UpdateExportModal from '../components/modals/UpdateExportModal';
import { exportToCSV } from '../utils/csvExport';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import { FiStar, FiTrash2, FiEdit, FiDownload } from 'react-icons/fi';

const MyExports = () => {
  useTitle('My Exports');
  const { user } = useAuth();
  const [exports, setExports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    if (user) {
      fetchExports();
    }
  }, [user]);

  const fetchExports = async () => {
    try {
      const data = await getUserProducts(user.email);
      setExports(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching exports:', error);
      toast.error('Failed to load exports');
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "This product will be permanently deleted",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3b82f6',
      cancelButtonColor: '#ef4444',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteProduct(id);
          setExports(exports.filter(item => item._id !== id));
          toast.success('Product deleted successfully');
        } catch (error) {
          console.error('Error deleting product:', error);
          toast.error('Failed to delete product');
        }
      }
    });
  };

  const handleUpdate = async (updatedData) => {
    try {
      await updateProduct(selectedProduct._id, updatedData);
      
      // Update local state
      setExports(exports.map(item => 
        item._id === selectedProduct._id 
          ? { ...item, ...updatedData }
          : item
      ));
      
      toast.success('Product updated successfully');
      setIsModalOpen(false);
      setSelectedProduct(null);
    } catch (error) {
      console.error('Error updating product:', error);
      toast.error('Failed to update product');
    }
  };

  const openUpdateModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleExportCSV = () => {
    if (exports.length === 0) {
      toast.error('No data to export');
      return;
    }
    exportToCSV(exports, 'my-exports.csv');
    toast.success('CSV downloaded successfully!');
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container-custom py-12">
      <div className="mb-8 flex justify-between items-center flex-wrap gap-4">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Exports
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage all the products you have added for export
          </p>
        </div>
        
        {exports.length > 0 && (
          <button
            onClick={handleExportCSV}
            className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <FiDownload />
            Download CSV
          </button>
        )}
      </div>

      {exports.length === 0 ? (
        <div className="text-center py-12 card">
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-4">
            You haven't added any products yet
          </p>
          <Link
            to="/add-export"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Add Your First Product
          </Link>
        </div>
      ) : (
        <div className="grid-3-col">
          {exports.map((item) => (
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
                    <span className="font-semibold">Stock:</span> {item.availableQuantity}
                  </div>
                </div>

                <div className="mt-auto flex gap-2">
                  <button
                    onClick={() => openUpdateModal(item)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <FiEdit />
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                  >
                    <FiTrash2 />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Update Modal */}
      <UpdateExportModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProduct(null);
        }}
        product={selectedProduct}
        onUpdate={handleUpdate}
      />
    </div>
  );
};

export default MyExports;