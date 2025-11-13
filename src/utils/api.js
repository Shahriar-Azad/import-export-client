import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'https://import-export-server-eight.vercel.app/';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Products API
export const getAllProducts = async () => {
  const response = await api.get('/api/products');
  return response.data;
};

export const getLatestProducts = async () => {
  const response = await api.get('/api/products/latest');
  return response.data;
};

export const getProductById = async (id) => {
  const response = await api.get(`/api/products/${id}`);
  return response.data;
};

export const getUserProducts = async (email) => {
  const response = await api.get(`/api/products/user/${email}`);
  return response.data;
};

export const addProduct = async (productData) => {
  const response = await api.post('/api/products', productData);
  return response.data;
};

export const updateProduct = async (id, productData) => {
  const response = await api.put(`/api/products/${id}`, productData);
  return response.data;
};

export const updateProductQuantity = async (id, quantity) => {
  const response = await api.patch(`/api/products/${id}/quantity`, { quantity });
  return response.data;
};

export const deleteProduct = async (id) => {
  const response = await api.delete(`/api/products/${id}`);
  return response.data;
};

// Imports API
export const getUserImports = async (email) => {
  const response = await api.get(`/api/imports/${email}`);
  return response.data;
};

export const addImport = async (importData) => {
  const response = await api.post('/api/imports', importData);
  return response.data;
};

export const deleteImport = async (id) => {
  const response = await api.delete(`/api/imports/${id}`);
  return response.data;
};

export default api;