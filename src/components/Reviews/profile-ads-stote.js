// store/profileAdsStore.js
import { create } from "zustand";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/firebase/firebase-config";

export const useProfileAdsStore = create((set) => ({
  allCards: [],
  isFetch: false,

  fetchCards: async () => {
    try {
      set({ isFetch: true });
      const usersSnapshot = await getDocs(collection(db, "users"));
      const allUsers = usersSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      const cards = allUsers.flatMap(user => user.cards || []);
      set({ allCards: cards });
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    } finally {
      set({ isFetch: false });
    }
  }
}));
