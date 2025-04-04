import { create } from 'zustand';
import axios from 'axios';

export const useProductStore = create((set) => ({
  products: [], // Initial product state is an empty array.

  // Function to set products (optional, if needed)
  setProducts: (products) => set({ products }),

  // Function to create a new product
  createProduct: async (newProduct) => {
    try {
      // Send POST request to the backend
      const response = await axios.post('http://localhost:3000/api/products', newProduct); // Corrected endpoint

      // Update the state with the new product
      set((state) => ({ products: [...state.products, response.data] }));

      // Return success message
      return { success: true, message: 'Product Created Successfully' };
    } catch (error) {
      console.error('Error creating product:', error);

      // Return error message
      return { success: false, message: 'Failed to create product' };
    }
  },

  fetchProducts:  async () => {
        const response = await axios.get("http://localhost:3000/api/products");
        set({products : response.data});
  },

  deleteProduct : async (id) => {
                await axios.delete(`http://localhost:3000/api/products/${id}`);
                set((state)=> ({products : state.products.filter((products)=> products.id !== id)}));
                return { success : true}
  },

  editProduct : async (id, updatedProduct) => {


                console.log("geetting id on backend side", id);
               
                await axios.put(`http://localhost:3000/api/products/${id}`, updatedProduct);

                set((state) => ({
                    products: state.products.map((product)=> product.id === id ? {...product,...updatedProduct} : product )
                }))

                return {success : true};
  }





}));