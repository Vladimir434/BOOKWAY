import s from "./header.module.css";
import Logo from "../../assets/icon/logo-header.svg";
import Search from "../../assets/icon/search.svg";
import UserAuth from "../../assets/icon/user.svg";
import Frame from "../../assets/icon/Frame.svg";
import Frame2 from "../../assets/icon/Frame2.svg";
import FistCross from '../../assets/icon/fist-cross.svg'
import { auth } from "../../utils/firebase/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Header = () => {
  const [user, setUser] = useState(null);
  const [hidden, setHidden] = useState(false)
  const [activePanel, setActivePanel] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHidden(window.scrollY > 150);
    };

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = activePanel ? "hidden" : ''
  }, [activePanel])

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div style={{
      position: 'relative',
      top: hidden ? '-200px' : '0',
      transition: 'top 0.8s ease',
      width: '100%',
      zIndex: '40'

    }}
      className={s.header__wrapper}>
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
          <h3>{user ? 'Личный кабинет' : 'Войти'}</h3>
        </Link>
        <div className={s.burger__menu}>
          <div onClick={() => setActivePanel(true)} className={s.burger__manu_item_cross}>
            <div className={s.cross__elem}></div>
            <div className={s.cross__elem}></div>
            <div className={s.cross__elem}></div>
          </div>
        </div>
      </div>
      <div className={s.header__bottom}>
        <div className={s.header__bottom_content}>
          <nav className={s.nav}>
            <Link to="/products"><h5>Товары</h5></Link>
            <Link to="/about"><h5>О нас</h5></Link>
          </nav>
          <Link to={user ? './basket' : './login'} className={s.frame}>
            <img src={Frame} alt="корзина" />
            <h3>Корзина</h3>
          </Link>
        </div>
      </div>
      {activePanel && (
        <div className={s.blur__panel} onClick={() => setActivePanel(false)}></div>
      )}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: activePanel ? 0 : '100%' }}
        transition={{ duration: 0.3 }}
        className={s.active__panel}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={s.block__active_panel}>
          <img src={FistCross} alt="cross" onClick={() => setActivePanel(false)} />
        </div>
        <h4>О нас</h4>
        <Link to={user ? '/about' : '/login'} className={s.active__panel_link}>
          <div className={s.burger__manu_item}>
            <img src='#' alt="about" />
          </div>
          о нас
        </Link>
        <Link to={user ? '/products' : '/login'} className={s.active__panel_link}>
          <div className={s.burger__manu_item}>
            <img src='#' alt="products" />
          </div>
          продукты
        </Link>
        <Link to={user ? '/profile' : '/login'} className={s.active__panel_link}>
          <div className={s.burger__manu_item}>
            <img src={UserAuth} alt="user" />
          </div>
          профиль
        </Link>
        <Link to={user ? '/basket' : '/login'} className={s.active__panel_link}>
        <div className={s.burger__manu_item}>
          <img src={Frame2} alt="frame" />
        </div>
        корзина
        </Link>
      </motion.div>

    </div>
  );
};

export default Header;
