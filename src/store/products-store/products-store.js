import { collection, getDocs } from "firebase/firestore";
import { create } from "zustand";
import { db } from "../../utils/firebase/firebase-config";

export const productsCollectionRef = collection(db, "products2");

export const useRroductsStore = create((set, get) => ({
  product: [],
  isFetch: false,

  async getAllProducts() {
    try {
      set({ isFetch: true });
      const querySnapshot = await getDocs(productsCollectionRef);      
      const productsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      set({ product: productsData });
    } catch (error) {
      console.error(error);
    } finally {
      set({ isFetch: false });
    }
  },

  searchProductsByName: (name) => {
    return get().product.filter(product => 
      product.name.toLowerCase().includes(name.toLowerCase())
    );
  },
}));