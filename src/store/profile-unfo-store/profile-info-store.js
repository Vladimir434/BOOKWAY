import { create } from 'zustand';
import { doc, getDoc, setDoc, collection } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { db } from '../../utils/firebase/firebase-config';

export const useProfileStore = create((set) => ({
  userInfo: null,
  isFetch: false,

  getUserProfile: async () => {
    const auth = getAuth();

    set({ isFetch: true });

    onAuthStateChanged(auth, async (user) => {
      if (!user) {
        set({ isFetch: false, userInfo: null });
        return;
      }

      const userDocRef = doc(collection(db, 'users'), user.uid);
      const userSnap = await getDoc(userDocRef);

      if (userSnap.exists()) {
        const data = userSnap.data().userInfo;
        set({ userInfo: data });
      } else {
        set({ userInfo: null });
      }

      set({ isFetch: false });
    });
  },

  saveUserProfile: async (formData) => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (!user) return;

    const userDocRef = doc(collection(db, 'users'), user.uid);
    await setDoc(userDocRef, { userInfo: formData }, { merge: true });
    set({ userInfo: formData });
  }
}));
