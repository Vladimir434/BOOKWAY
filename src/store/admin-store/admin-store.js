import { collection, deleteDoc, doc, getDocs, } from "firebase/firestore";
import { create } from "zustand";
import { db } from "../../utils/firebase/firebase-config";
import { toast } from "react-toastify";
export const getDataAllUsers = create((set) => ({
  users: [],
  isFetch: false,
  getAllUsers: async () => {
    try {
      set({ isFetch: true })
      const querySnap = await getDocs(collection(db, 'users'));
      const usersData = querySnap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      set({ users: usersData })
    } catch (error) {
      toast('arror')
      console.log(error);
    } finally {
      set({ isFetch: false })
    }
  },
  deleteUser: async (userId) => {
    try {
      await deleteDoc(doc(db, 'users', userId));
      toast("Пользователь удалён");
      await getUsersStore.getState().getAllUsers();
    } catch (error) {
      toast("Ошибка при удалении пользователя");
      console.log('error', error);
    }
  },
}))