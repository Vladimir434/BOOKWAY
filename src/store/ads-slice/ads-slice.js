import { create } from "zustand";
import { toast } from "react-toastify";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from '../../utils/firebase/firebase-config';

const generateUniqueId = () => {
  return `id-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
};

export const useAdsStore = create((set) => ({
  isFetch: false,

  async addUserCard(name, email, country, city, phone, description, imageUrl, nav) {
    set({ isFetch: true });

    try {
      const user = auth.currentUser;
      if (!user) {
        nav("/login");
        throw new Error("Пользователь не авторизован");
      }

      const uniqueId = generateUniqueId();

      const newCard = {
        id: uniqueId,
        name,
        email,
        country,
        city,
        phone,
        description,
        imageUrl,
        createdAt: new Date().toISOString(),
      };

      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);
      const existingData = userSnap.exists() ? userSnap.data() : {};

      const updatedCards = [...(existingData.cards || []), newCard];

      await setDoc(userRef, { cards: updatedCards }, { merge: true });

      toast.success("Объявление добавлено 👍");
      nav("/profile");
    } catch (error) {
      console.error(error);
      toast.error("Ошибка при добавлении: " + error.message);
    } finally {
      set({ isFetch: false });
    }
  },
}));
