import s from "./header.module.css";
import Logo from "../../assets/icon/logo-header.svg";
import Search from "../../assets/icon/search.svg";
import UserAuth from "../../assets/icon/user.svg";
import Frame from "../../assets/icon/Frame.svg";
import Frame2 from "../../assets/icon/Frame2.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utils/firebase/firebase-config";
const Header = () => {
  const [user,setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  },[]);

  return (
    <div className={s.header__wrapper}>
      <div className={s.header__top}>
        <Link to="/">
          <img className={s.header__logo} src={Logo} alt="логотип" />
        </Link>
        <div className={s.search__bar}>
          <input type="text" placeholder="Поиск по сайту..." />
          <img src={Search} alt="поиск" />
        </div>
        <Link to={user ? '/profile' : '/login'} className={s.auth__block}>
          <img src={UserAuth} alt="пользователь" />
          <h3>{user ? 'Личный кабинет' : 'Войти' }</h3>
        </Link>
        <div className={s.burger__menu}>
          <Link to="/profile" className={s.burger__manu_item}>
            <img src={UserAuth} alt="user" />
          </Link>
          <div className={s.burger__manu_item}>
            <img src={Frame2} alt="frame" />
          </div>
          <div className={s.burger__manu_item_cross}>
            <div className={s.cross__elem}></div>
            <div className={s.cross__elem}></div>
            <div className={s.cross__elem}></div>
          </div>
        </div>
      </div>
      <div className={s.header__bottom}>
        <div className={s.header__bottom_content}>
          <nav className={s.nav}>
            <ul className={s.nav__ul}>
              <li>Акции</li>
              <Link to="/products">Категории</Link>
              <Link to="/about">О нас</Link>
            </ul>
          </nav>
          <Link to="/basket" className={s.frame}>
            <img src={Frame} alt="корзина" />
            <h3>Корзина</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
