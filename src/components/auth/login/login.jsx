import s from "./login.module.css";
import { Link } from "react-router-dom";
import {  useState } from "react";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isCheck, setisCheck] = useState(false);

  

  return (
    <main className={s.main} >
      <div className={s.main__wrapper}></div>
      <form onSubmit className={s.main__form}>
        <h1 className={s.main__form__title}>Вход в аккаунт</h1>
        <div className={s.main__form__inner}>
          <div className={s.form__inner}>
            <label>Почта</label>
            <input
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
            <Link  className={s.main__form__btn__link} to="/"> Войти</Link>
          </button>
        </div>
        <div className={s.main__form__button}>
          Нет аккаунта?
          <Link className={s.main__form__button__link} to="/registr" >
            Создать
          </Link>
        </div>
      </form>
    </main>
  );
};

export default Login;