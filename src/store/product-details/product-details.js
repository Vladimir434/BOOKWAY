import { create } from "zustand";
import { productsCollectionRef } from "../products-store/products-store";
import { doc, getDoc } from "firebase/firestore";

export const productDetails = create((set) => ({
  product: JSON.parse(localStorage.getItem("selectedProduct")) || null, // Загружаем из localStorage
  isFetch: false,
  selectedProduct: null,

  getDefineProduct: async (id) => {
    try {
      set({ isFetch: true });
      const defineProductsRef = doc(productsCollectionRef, id);
      const productSnap = await getDoc(defineProductsRef);
      set({ product: { id: productSnap.id, ...productSnap.data() } });
    } catch (error) {
      console.log("error", error);
    } finally {
      set({ isFetch: false });
    }
  },

  setSelectedProduct: (product) => {
    set({ selectedProduct: product });
    localStorage.setItem("selectedProduct", JSON.stringify(product)); // Сохраняем в localStorage
  },
}));
