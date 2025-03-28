import { create } from "zustand";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db } from "../../utils/firebase/firebase-config";
import { toast } from "react-toastify";
import { collection, doc, setDoc } from "firebase/firestore";

const userCollactionRef = collection(db, 'users')

export const userAuth = create((set) => ({
  isFetch: false,

  async registerUser(email, password, name, lastName, nav, isRememberMe) {
    set({ isFetch: true });
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      if (user.user.uid) {
        const userDoc = doc(userCollactionRef, user.user.uid);
        await setDoc(userDoc,{
          name:name,
          lastName:lastName,
          email:email,
          isAdmin:false,
          cards:[],
          orders:[],
          comments:[],
        });
      }
      if (isRememberMe) {
        localStorage.setItem("email", email);
        // localStorage.setItem("password", password);
      }
      console.log(user);
      nav("/");
      toast.success("Вы успешно зарегистрировались 👍");
    } catch (error) {
      console.error(error);
      toast.error("Ошибка при регистрации: " + error.message);
    } finally {
      set({ isFetch: false });
    }
  },

  async loginUser(email, password, nav, isRememberMe) {
    set({ isFetch: true });
    try {
      const userCredentials = await signInWithEmailAndPassword(auth, email, password);

      if (isRememberMe) {
        localStorage.setItem("email", email);
        // localStorage.setItem("password", password);
      } else {
        localStorage.removeItem("email");
        // localStorage.removeItem("password");
      }

      console.log(userCredentials);
      nav("/");
      toast.success("Вы вошли в аккаунт");
    } catch (error) {
      console.error(error);
      toast.error("Проверьте Email или пароль: " + error.message);
    } finally {
      set({ isFetch: false });
    }
  },

  async logoutUser(nav) {
    set({ isFetch: true });
    try {
      await signOut(auth);
      localStorage.removeItem("email");
      // localStorage.removeItem("password");
      toast.info("Вы вышли из аккаунта");
      nav("/");
    } catch (error) {
      console.error(error);
      toast.error("Ошибка при выходе: " + error.message);
    } finally {
      set({ isFetch: false });
    }
  },
}));
