import { create } from "zustand";
import { db } from "../../utils/firebase/firebase-config";
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { toast } from "react-toastify";

export const useCartStore = create((set) => ({
  cart: [],
  isFetch: false,
  isFetchAddOrder: false,

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
  addProductOrder: async (productData) => {
    const auth = getAuth()
    const user = auth.currentUser;
    if(!user) return;

    const userDocRef = doc(db,'users', user.uid)
    const userSnap = await getDoc(userDocRef)

    const userInfo = userSnap.exists() ? userSnap.data().userInfo : null;

    if(!userInfo) {
      toast('заполните форму в профиле перед оформлением заказа')
      return;
    }
    set({isFetchAddOrder: true});

    const now = new Date();

    const formattedDate = now.toLocaleDateString('ru-RU',{
      day:'2-digit',
      month:'2-digit',
      year:'2-digit'
    });
    try {
      await updateDoc(userDocRef,{
        orders: arrayUnion({
          productData:Array.isArray(productData) ? productData : [productData],
          date:`${formattedDate}`,
          userInfo,  
        })
      })
    } catch (error) {
      toast('Ошибка при добавлении заказа',error)
    } finally {
      set({isFetchAddOrder:false})
    }
  },
}));
