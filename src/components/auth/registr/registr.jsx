import s from "./registr.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { userAuth } from "../../../store/auth-slice/auth-slice";
import { toast } from "react-toastify";
import BgImage from '../../../assets/image/main-image-1.svg'

const Registr = () => {
  const nav = useNavigate()
  
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isCheck, setIsCheck] = useState(false);
  const {registrUser} = userAuth()

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      registrUser(email, password, nav, isCheck)
      if (isCheck){
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
      } else {
        localStorage.removeItem('email')
        localStorage.removeItem('password')
      }
      setEmail('')
      setPassword('')
    } else {
      toast('Произошла ошибка !!!')
    }
  }

  return (
    <main style={{backgroundImage:`url(${BgImage})`}} className={s.main}>
      <div className={s.main__wrapper}></div>
      <form onSubmit={onHandleSubmit} className={s.main__form}>
        <h1 className={s.main__form__title}>Регистрация</h1>
        <div className={s.main__form__inner}>
          <div className={s.form__inner}>
            <label>Имя</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              required
              placeholder="Введите ваше имя"
            />
          </div>
          <div className={s.form__inner}>
            <label>Фамилия</label>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              required
              placeholder="Введите вашу фамилию"
            />
          </div>
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
              placeholder="Введите ваш пароль"
              autoComplete="new-password"
            />
          </div>
        </div>
        <label className={s.main__form__remember}>
          <input
            type="checkbox"
            onChange={(e) => setIsCheck(e.target.checked)}
            checked={isCheck}
          />
          Запомнить меня
        </label>
        <div className={s.main__form__btn}>
            <button className={s.main__form__btn__link}>
              Создать аккаунт
            </button>
        </div>
        <div className={s.main__form__button}>
          Есть аккаунт?
          <Link className={s.main__form__button__link} to="/login">
            Войти
          </Link>
        </div>
      </form>
    </main>
  );
};

export default Registr;

