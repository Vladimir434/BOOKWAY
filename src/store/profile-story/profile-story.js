import { create } from "zustand";
import { db } from "../../utils/firebase/firebase-config";
import { getAuth } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";

export const getUserOrders = create((set) => ({
  orders: [],
  isFetch: false,

  getOrders: async () => {
    try {
      set({ isFetch: true });
      const auth = getAuth();
      const user = auth.currentUser;

      const userDocRef = doc(db, 'users', user.uid);
      const userSnap = await getDoc(userDocRef)

      if (userSnap.exists()) {
        const userData = userSnap.data();
        set({ orders: userData.orders || [] })
      } else {
        toast('произошла ошибка при получении!')
      }
    } catch (error) {
      toast('произошла ощибка при получении заказов');
      console.error('getOrders error',error);

    } finally {
      set({ isFetch: false });
    }
  },
}))