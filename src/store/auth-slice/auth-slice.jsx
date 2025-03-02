import { create } from "zustand";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../utils/firebase/firebase-config";
import { toast } from "react-toastify";

export const userAuth = create((set) => ({
  isFetch: false,

  async registrUser(email, password, nav, isRememberMe) {
    set({ isFetch: true });
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);

      if (isRememberMe) {
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
      }

      console.log(user);
      nav("/");
      toast.success("Вы успешно зарегистрировались 👍");
    } catch (error) {
      console.error(error);
      toast.error("Ошибка при регистрации!");
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
        localStorage.setItem("password", password);
      } else {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
      }

      console.log(userCredentials);
      nav("/");
      toast.success("Вы вошли в аккаунт");
    } catch (error) {
      console.error(error);
      toast.error("Проверьте Email или пароль");
    } finally {
      set({ isFetch: false });
    }
  },

  async logoutUser(nav) {
    set({ isFetch: true });
    try {
      await signOut(auth);
      localStorage.removeItem("email");
      localStorage.removeItem("password");
      toast.info("Вы вышли из аккаунта");
      nav("/");
    } catch (error) {
      console.error(error);
      toast.error("Ошибка при выходе!");
    } finally {
      set({ isFetch: false });
    }
  },
}));
