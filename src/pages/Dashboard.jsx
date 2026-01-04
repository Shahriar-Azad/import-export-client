import { useState, useEffect } from 'react';
import { 
  FiPackage, 
  FiTrendingUp, 
  FiDollarSign, 
  FiActivity,
  FiHome,
  FiUser,
  FiPlusCircle,
  FiMenu,
  FiX
} from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Dashboard = () => {
  const { user } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [stats, setStats] = useState({
    totalExports: 0,
    totalImports: 0,
    totalRevenue: 0,
    recentActivities: []
  });
  const [loading, setLoading] = useState(true);

  // Fetch actual user data
  useEffect(() => {
    const fetchDashboardData = async () => {
      if (!user) {
        console.log('❌ No user found');
        return;
      }
      
      console.log('🔍 Fetching dashboard data for:', user.email);
      setLoading(true);
      
      try {
        // Fetch user's exports
        console.log('📤 Fetching exports from: http://localhost:5001/exports?email=' + user.email);
        const exportsResponse = await fetch(
          `http://localhost:5001/exports?email=${user.email}`
        );
        console.log('📤 Exports response status:', exportsResponse.status);
        
        if (!exportsResponse.ok) {
          console.error('❌ Exports fetch failed:', exportsResponse.statusText);
        }
        
        const exportsData = await exportsResponse.json();
        console.log('📤 Exports data received:', exportsData);
        console.log('📤 Total exports found:', exportsData.length);

        // Fetch user's imports
        console.log('📥 Fetching imports from: http://localhost:5001/imports?email=' + user.email);
        const importsResponse = await fetch(
          `http://localhost:5001/imports?email=${user.email}`
        );
        console.log('📥 Imports response status:', importsResponse.status);
        
        if (!importsResponse.ok) {
          console.error('❌ Imports fetch failed:', importsResponse.statusText);
        }
        
        const importsData = await importsResponse.json();
        console.log('📥 Imports data received:', importsData);
        console.log('📥 Total imports found:', importsData.length);

        // Calculate total revenue from exports
        const totalRevenue = exportsData.reduce((sum, item) => {
          const price = parseFloat(item.price) || 0;
          console.log(`💰 Adding price: ${item.productName} = $${price}`);
          return sum + price;
        }, 0);
        console.log('💰 Total revenue calculated:', totalRevenue);

        // Combine and sort recent activities
        const exportActivities = exportsData.slice(0, 5).map(item => ({
          id: item._id,
          type: 'export',
          product: item.productName,
          quantity: item.quantity || 'N/A',
          buyer: 'Pending',
          date: item.createdAt || new Date().toISOString(),
          status: 'active'
        }));
        console.log('📤 Export activities:', exportActivities);

        const importActivities = importsData.slice(0, 5).map(item => ({
          id: item._id,
          type: 'import',
          product: item.productName,
          quantity: item.quantity || 'N/A',
          seller: item.sellerName || 'Unknown',
          date: item.createdAt || new Date().toISOString(),
          status: item.status || 'pending'
        }));
        console.log('📥 Import activities:', importActivities);

        const allActivities = [...exportActivities, ...importActivities]
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 5);
        console.log('📊 All activities (sorted):', allActivities);

        const newStats = {
          totalExports: exportsData.length,
          totalImports: importsData.length,
          totalRevenue: totalRevenue,
          recentActivities: allActivities
        };
        
        console.log('✅ Final stats:', newStats);
        setStats(newStats);
        
      } catch (error) {
        console.error('❌ ERROR fetching dashboard data:', error);
        console.error('Error details:', {
          message: error.message,
          stack: error.stack
        });
        
        setStats({
          totalExports: 0,
          totalImports: 0,
          totalRevenue: 0,
          recentActivities: []
        });
      } finally {
        setLoading(false);
        console.log('🏁 Dashboard data fetch complete');
      }
    };

    fetchDashboardData();
  }, [user]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
      case 'active':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'in-transit':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <div className="flex min-h-[calc(100vh-64px)]">
        {/* Mobile Overlay */}
        {/* {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )} */}



        {/* Main Content - RIGHT SECTION */}
        <main className="flex-1 min-w-0 lg:ml-0">
          {/* Mobile Menu Button */}
          <div className="lg:hidden bg-white dark:bg-gray-800 p-4 flex items-center justify-between sticky top-0 z-30">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
            >
              <FiMenu size={24} />
            </button>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
            <div className="w-10"></div>
          </div>

          {/* Dashboard Content */}
          <div className="p-6 lg:p-8">
            {/* Welcome Section */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Welcome back, {user?.displayName?.split(' ')[0] || 'User'}!
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Here's an overview of your import-export activities
              </p>
            </div>

            {loading ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              </div>
            ) : (
              <>
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {/* Total Exports */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                        <FiPackage className="text-blue-600 dark:text-blue-400" size={24} />
                      </div>
                    </div>
                    <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">
                      Total Exports
                    </h3>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">
                      {stats.totalExports}
                    </p>
                  </div>

                  {/* Total Imports */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                        <FiTrendingUp className="text-purple-600 dark:text-purple-400" size={24} />
                      </div>
                    </div>
                    <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">
                      Total Imports
                    </h3>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">
                      {stats.totalImports}
                    </p>
                  </div>

                  {/* Total Value */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                        <FiDollarSign className="text-green-600 dark:text-green-400" size={24} />
                      </div>
                    </div>
                    <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">
                      Total Value
                    </h3>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">
                      ${stats.totalRevenue.toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* Recent Activities */}
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                  <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                        <FiActivity className="text-orange-600 dark:text-orange-400" size={20} />
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                        Recent Activities
                      </h2>
                    </div>
                  </div>

                  {stats.recentActivities.length > 0 ? (
                    <div className="divide-y divide-gray-200 dark:divide-gray-700">
                      {stats.recentActivities.map((activity) => (
                        <div key={activity.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                            <div className="flex-1 min-w-0">
                              <div className="flex flex-wrap items-center gap-3 mb-2">
                                <span
                                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                                    activity.type === 'export'
                                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                                      : 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                                  }`}
                                >
                                  {activity.type === 'export' ? 'Export' : 'Import'}
                                </span>
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(activity.status)}`}>
                                  {activity.status}
                                </span>
                              </div>
                              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                                {activity.product}
                              </h3>
                              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                                Quantity: {activity.quantity}
                              </p>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {activity.type === 'export' ? 'Buyer' : 'Seller'}:{' '}
                                {activity.type === 'export' ? activity.buyer : activity.seller}
                              </p>
                            </div>
                            <div className="text-left sm:text-right flex-shrink-0">
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                {new Date(activity.date).toLocaleDateString('en-US', {
                                  month: 'short',
                                  day: 'numeric',
                                  year: 'numeric'
                                })}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-12 text-center">
                      <FiActivity className="mx-auto text-gray-400 dark:text-gray-600 mb-4" size={48} />
                      <p className="text-gray-500 dark:text-gray-400 text-lg mb-2">
                        No activities yet
                      </p>
                      <p className="text-gray-400 dark:text-gray-500 text-sm mb-6">
                        Start by adding your first export product
                      </p>
                      <Link
                        to="/add-export"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <FiPlusCircle size={20} />
                        Add Export
                      </Link>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;