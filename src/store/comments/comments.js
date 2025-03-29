import { create } from 'zustand';
import { db } from '../../utils/firebase/firebase-config';
import { collection, doc, getDoc, addDoc, query, orderBy, onSnapshot, setDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const useStore = create((set) => ({
  comments: [],
  userName: '',
  userLastName: '',
  isFetching: false,

  loadUserName: () => {
    try {
      set({ isFetching: true });
      const auth = getAuth();
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const userRef = doc(db, 'users', user.uid);
          const userSnap = await getDoc(userRef);
          if (userSnap.exists()) {
            const userData = userSnap.data();
            set({ userName: userData.name, userLastName: userData.lastName });
          }
        }
        set({ isFetching: false });
      });
    } catch (error) {
      console.error('Ошибка при загрузке имени пользователя:', error);
      set({ isFetching: false });
    }
  },

  loadComments: () => {
    try {
      set({ isFetching: true });
      const commentsRef = collection(db, 'comments');
      const unsubscribe = onSnapshot(query(commentsRef, orderBy('timestamp', 'asc')), (querySnapshot) => {
        const commentsList = querySnapshot.docs.map((doc) => doc.data());
        set({ comments: commentsList, isFetching: false });
      });
      return unsubscribe;
    } catch (error) {
      console.error('Ошибка при загрузке комментариев:', error);
      set({ isFetching: false });
    }
  },

  addComment: async (text) => {
    try {
      if (!text.trim()) return;

      set({ isFetching: true });
      const auth = getAuth();
      const user = auth.currentUser;
      if (!user) {
        set({ isFetching: false });
        return;
      }

      const userRef = doc(db, 'users', user.uid);
      const userSnap = await getDoc(userRef);
      if (!userSnap.exists()) {
        set({ isFetching: false });
        return;
      }

      const { name, lastName } = userSnap.data();

      const now = new Date();
      const formattedDate = now.toLocaleDateString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
      });
      const formattedTime = now.toLocaleTimeString('ru-RU', {
        hour: '2-digit',
        minute: '2-digit',
      });

      const newComment = {
        text,
        name,
        lastName,
        date: `${formattedDate} ${formattedTime}`,
        timestamp: now,
      };

      await addDoc(collection(db, 'comments'), newComment);

      await setDoc(userRef, {
        comments: [...(userSnap.data().comments || []), newComment],
      }, { merge: true });

      set({ isFetching: false });
    } catch (error) {
      console.error('Ошибка при добавлении комментария:', error);
      set({ isFetching: false });
    }
  },
}));
