import { create } from 'zustand';
import { db } from '../../utils/firebase/firebase-config';
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc, onSnapshot } from 'firebase/firestore';
import { toast } from 'react-toastify';

export const useProductStore = create((set) => ({
  products: [],
  isLoading: false,
  
  subscribeToProducts: () => {
    set({ isLoading: true });
    const unsubscribe = onSnapshot(
      collection(db, 'products2'),
      (snapshot) => {
        const products = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        set({ products, isLoading: false });
      },
      (error) => {
        console.error("Ошибка", error);
        set({ isLoading: false });
        toast.error('Ошибка загрузки товаров');
      }
    );
    return unsubscribe;
  },

  addProduct: async (product) => {
    try {
      await addDoc(collection(db, 'products2'), product);
      return true;
    } catch (error) {
      console.error("Ошибка добавления", error);
      return false;
    }
  },

  getAllProduct: async () => {
    try {
      set({ isLoading: true });
      const productRef = await getDocs(collection(db, 'products2'));
      const productSnap = productRef.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      set({ products: productSnap });
    } catch (error) {
      console.log('error', error);
      toast('Произошла ошибка');
    } finally {
      set({ isLoading: false });
    }
  },

  deleteProduct: async (productId) => {
    try {
      await deleteDoc(doc(db, 'products2', productId));
      toast('Товар успешно удален');
    } catch (error) {
      toast('Ошибка при удалении товара');
      console.log('error', error);
    }
  },

  updateProductPresence: async (productId, presence) => {
    try {
      const productRef = doc(db, 'products2', productId);
      await updateDoc(productRef, { presence });
    } catch (error) {
      toast('Ошибка при обновлении статуса');
      console.error("Error", error);
    }
  }
}));