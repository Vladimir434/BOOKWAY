import { create } from 'zustand';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const db = getFirestore();

const useUserStore = create((set) => ({
  userInfo: null,
  isFetch: false,
  setUserInfo: (data) => set({ userInfo: data }),
  setIsFetch: (status) => set({ isFetch: status }),

  fetchUserInfo: async () => {
    const user = getAuth().currentUser;
    if (user) {
      set({ isFetch: true });
      const userDocRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(userDocRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        if (data.userInfo) {
          set({ userInfo: data.userInfo });
        } else {
          set({ userInfo: null });
        }
      }
      set({ isFetch: false });
    }
  },

  saveUserInfo: async (data) => {
    const user = getAuth().currentUser;
    if (user) {
      set({ isFetch: true });
      const userDocRef = doc(db, 'users', user.uid);
      
      await setDoc(userDocRef, { userInfo: data }, { merge: true });

      set({ userInfo: data, isFetch: false });
    }
  },
}));

export default useUserStore;
