import s from "./header.module.css";
import Logo from "../../assets/icon/logo-header.svg";
import Search from "../../assets/icon/search.svg";
import UserAuth from "../../assets/icon/user.svg";
import Frame from "../../assets/icon/Frame.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (   
    <div className={s.header__wrapper}>
      <div className={s.header__top}>
        <img className={s.header__logo} src={Logo} alt="логотип" />
        <div className={s.search__bar}>
          <input type="text" placeholder="Поиск по сайту..." />
          <img src={Search} alt="поиск" />
        </div>
        <Link to="/login" onClick={() => {localStorage.removeItem('token')}} className={s.auth__block}>
          <img src={UserAuth} alt="пользователь" />
          <h3>Личный кабинет</h3>
        </Link>
      </div>
      <div className={s.header__bottom}>
        <div className={s.header__bottom_content}>
          <nav className={s.nav}>
            <ul className={s.nav__ul}>
              <li>Акции</li>
              <li>Категории</li>
              <Link to="/about">О нас</Link>
            </ul>
          </nav>
          <div className={s.frame}>
            <img src={Frame} alt="корзина" />
            <h3>Корзина</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
