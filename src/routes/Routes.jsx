import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AllProducts from '../pages/AllProducts';
import ProductDetails from '../pages/ProductDetails';
import MyImports from '../pages/MyImports';
import MyExports from '../pages/MyExports';
import AddExport from '../pages/AddExport';
import ErrorPage from '../pages/ErrorPage';
import PrivateRoute from '../components/shared/PrivateRoute';
import About from '../components/home/About';
import Blog from '../components/home/Blog';
import Contact from '../components/home/Contact';
import Support from '../components/home/Support';
import Privacy from '../components/home/Privacy';
// import Dashboard from '../pages/Dashboard';
import MyProfile from '../pages/MyProfile';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/all-products',
        element: <AllProducts />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/support',
        element: <Support />
      },
      {
        path: '/privacy',
        element: <Privacy />
      },
      //       {
      //   path: '/dashboard',
      //   element: (
      //     <PrivateRoute>
      //       <Dashboard />
      //     </PrivateRoute>
      //   )
      // },
      {
        path: '/my-profile',
        element: (
          <PrivateRoute>
            <MyProfile />
          </PrivateRoute>
        )
      },
      {
        path: '/product/:id',
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        )
      },
      {
        path: '/my-imports',
        element: (
          <PrivateRoute>
            <MyImports />
          </PrivateRoute>
        )
      },
      {
        path: '/my-exports',
        element: (
          <PrivateRoute>
            <MyExports />
          </PrivateRoute>
        )
      },
      {
        path: '/add-export',
        element: (
          <PrivateRoute>
            <AddExport />
          </PrivateRoute>
        )
      }
    ]
  }
]);

export default router;