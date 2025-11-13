import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import ThemeToggle from '../shared/ThemeToggle';
import toast from 'react-hot-toast';

const Header = () => {
  const { user, logOut } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success('Logged out successfully!');
      })
      .catch((error) => {
        toast.error('Error logging out');
        console.error(error);
      });
  };

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? 'text-blue-600 dark:text-blue-400 font-semibold'
            : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/all-products"
        className={({ isActive }) =>
          isActive
            ? 'text-blue-600 dark:text-blue-400 font-semibold'
            : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
        }
      >
        All Products
      </NavLink>
      {user && (
        <>
          <NavLink
            to="/my-exports"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-600 dark:text-blue-400 font-semibold'
                : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
            }
          >
            My Exports
          </NavLink>
          <NavLink
            to="/my-imports"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-600 dark:text-blue-400 font-semibold'
                : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
            }
          >
            My Imports
          </NavLink>
          <NavLink
            to="/add-export"
            className={({ isActive }) =>
              isActive
                ? 'text-blue-600 dark:text-blue-400 font-semibold'
                : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
            }
          >
            Add Export
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <nav className="container-custom py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">IE</span>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Import Export Hub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            
            {user ? (
              <div className="hidden md:flex items-center gap-4">
                <img
                  src={user.photoURL || 'https://via.placeholder.com/40'}
                  alt={user.displayName}
                  className="w-10 h-10 rounded-full border-2 border-blue-600"
                  title={user.displayName}
                />
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="hidden md:block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Login
              </Link>
            )}

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 dark:text-gray-300"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4 pb-4">
            {navLinks}
            {user ? (
              <>
                <div className="flex items-center gap-3 pt-2 border-t border-gray-200 dark:border-gray-700">
                  <img
                    src={user.photoURL || 'https://via.placeholder.com/40'}
                    alt={user.displayName}
                    className="w-10 h-10 rounded-full border-2 border-blue-600"
                  />
                  <span className="text-gray-700 dark:text-gray-300">{user.displayName}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="w-full text-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Login
              </Link>
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;