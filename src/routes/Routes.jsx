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