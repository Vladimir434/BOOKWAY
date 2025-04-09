import { create } from 'zustand';
import { doc, getDoc, setDoc, collection } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { db } from '../../utils/firebase/firebase-config';  

export const useProfileStore = create((set) => ({
  userInfo: JSON.parse(localStorage.getItem('userInfo')) || null,
  isFetch: false,

  getUserProfile: async () => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (!user) return;

    set({ isFetch: true });

    const userDocRef = doc(collection(db, 'users'), user.uid);
    const userSnap = await getDoc(userDocRef);

    if (userSnap.exists()) {
      const data = userSnap.data().userInfo;
      set({ userInfo: data });
      localStorage.setItem('userInfo', JSON.stringify(data)); 
    } else {
      set({ userInfo: null });
      localStorage.removeItem('userInfo');
    }

    set({ isFetch: false });
  },

  saveUserProfile: async (formData) => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (!user) return;

    const userDocRef = doc(collection(db, 'users'), user.uid);
    await setDoc(userDocRef, { userInfo: formData }, { merge: true });
    set({ userInfo: formData });
    localStorage.setItem('userInfo', JSON.stringify(formData)); 
  }
}));
