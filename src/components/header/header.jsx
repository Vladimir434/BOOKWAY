import s from "./header.module.css";
import Logo from "../../assets/icon/logo-header.svg";
import Search from "../../assets/icon/search.svg";
import UserAuth from "../../assets/icon/user.svg";
import Frame from "../../assets/icon/Frame.svg";
const Header = () => {
  return (
    <div className={s.header__wrapper}>
      <div className={s.header__top}>
        <img className={s.header__logo} src={Logo} alt="логотип" />
        <div className={s.search__bar}>
          <input type="text" placeholder="Поиск по сайту..." />
          <img src={Search} alt="поиск" />
        </div>
        <div className={s.auth__block}>
          <img src={UserAuth} alt="пользователь" />
          <h3>Личный кабинет</h3>
        </div>
      </div>
      <div className={s.header__bottom}>
        <div className={s.header__bottom_content}>
          <nav className={s.nav}>
            <ul>
              <li>Акции</li>
              <li>Категории</li>
              <li>О нас</li>
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
