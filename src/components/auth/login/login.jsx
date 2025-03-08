import s from "./login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { userAuth } from "../../../store/auth-slice/auth-slice";
import { toast } from "react-toastify";
import BgImage from "../../../assets/image/main-image-1.svg";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../utils/firebase/firebase-config";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isCheck, setisCheck] = useState(false);
  const { loginUser, isFetch } = userAuth();
  const nav = useNavigate();

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      loginUser(email, password, nav, isCheck);
      setEmail("");
      setPassword("");
    } else {
      toast("Произошла ошибка!!!");
    }
  };

  const handleResetPassword = () => {
    if (!email) {
      toast("Введите email для смены пароля");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast("Если такой email существует, ссылка для сброса пароля отправлена.");
      })
      .catch((error) => {
        console.error(error);
        toast("Ошибка при отправке письма. Попробуйте позже.");
      });
  };

  return (
    <main style={{ backgroundImage: `url(${BgImage})` }} className={s.main}>
      <div className={s.main__wrapper}></div>
      {isFetch ? (
        <h1>Loading...</h1>
      ) : (
        <form onSubmit={onHandleSubmit} className={s.main__form}>
          <h1 className={s.main__form__title}>Вход в аккаунт</h1>
          <div className={s.main__form__inner}>
            <div className={s.form__inner}>
              <label>Почта</label>
              <input
                autoComplete="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
                placeholder="Введите вашу почту"
              />
            </div>
            <div className={s.form__inner}>
              <label>Пароль</label>
              <input
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                required
                placeholder="Введите ваш пароль"
              />
            </div>
          </div>
          <label className={s.main__form__remember}>
            <input
              type="checkbox"
              onChange={(e) => setisCheck(e.target.checked)}
              checked={isCheck}
            />
            Запомнить меня
          </label>
          <div className={s.main__form__btn}>
            <button>
              <div className={s.main__form__btn__link}> Войти</div>
            </button>
          </div>
          <div className={s.main__form__button}>
            Нет аккаунта?
            <Link className={s.main__form__button__link} to="/registr">
              Создать.
            </Link>
          </div>
            <h2 className={s.main__form__pasword} onClick={handleResetPassword}>Забыли пароль ?</h2>
        </form>
      )}
    </main>
  );
};

export default Login;
