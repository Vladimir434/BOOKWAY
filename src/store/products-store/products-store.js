import { collection, getDocs } from "firebase/firestore";
import { create } from "zustand";
import { db } from "../../utils/firebase/firebase-config";
export const productsCollectionRef = collection(db, "products2");

export const useRroductsStore = create((set) => ({
  product: [],
  isFetch: false,

  async getAllProducts() {
    try {
      set({ isFetch: true });
      const querySnapshot = await getDocs(productsCollectionRef);      
      const producrsData = querySnapshot.docs.map((doc) => {
        return{
          id: doc.id,
          ...doc.data(),
        }
      });
      set({ product: producrsData });
    } catch (error) {
      console.error(error);
    } finally{
      set({ isFetch: false });
    }
  },
}));
