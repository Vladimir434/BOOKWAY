import { create } from "zustand";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/firebase/firebase-config";

export const useProfileAdsStore = create((set) => {
  const savedCards = JSON.parse(localStorage.getItem("ads_cards")) || [];

  return {
    allCards: savedCards,
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

        localStorage.setItem("ads_cards", JSON.stringify(cards));
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      } finally {
        set({ isFetch: false });
      }
    }
  };
});
