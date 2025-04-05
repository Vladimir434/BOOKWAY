import { create } from "zustand";
import { db } from "../../utils/firebase/firebase-config";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { toast } from "react-toastify";

export const useCartStore = create((set) => ({
  cart: [],
  isFetch: false,

  fetchCart: async () => {
    try {
      set({ isFetch: true });
      const auth = getAuth();
      const user = auth.currentUser;

      if (!user) {
        toast("Нет авторизованного пользователя");
        set({ isFetch: false });
        return;
      }

      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const userData = userSnap.data();
        set({ cart: userData.card || [] });
      } else {
        toast("Документ пользователя не найден");
      }
    } catch (error) {
      toast.error("Ошибка при загрузке корзины", error);
    } finally {
      set({ isFetch: false });
    }
  },

  addToCard: async (product) => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;
      if (!user) return;

      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);
      if (!userSnap.exists()) return;

      const userData = userSnap.data();
      const cart = userData.card || [];

      if (cart.some((item) => item.id === product.id)) {
        toast("Этот товар уже в корзине");
        return;
      }

      const updatedCard = [...cart, product];
      await setDoc(userRef, { card: updatedCard }, { merge: true });
      set({ cart: updatedCard });
      toast("Товар добавлен в корзину!");
    } catch (error) {
      toast.error("Ошибка при добавлении товара", error);
    }
  },

  removeFromCart: async (productId) => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;
      if (!user) return;

      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);
      if (!userSnap.exists()) return;

      const userData = userSnap.data();
      const cart = userData.card || [];
      const updatedCart = cart.filter((item) => item.id !== productId);

      await setDoc(userRef, { card: updatedCart }, { merge: true });
      set({ cart: updatedCart });
      toast("Товар удален из корзины!");
    } catch (error) {
      toast.error("Ошибка при удалении товара", error);
    }
  },
}));
