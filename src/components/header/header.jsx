import s from "./header.module.css";
import Logo from "../../assets/icon/logo-header.svg";
import Search from "../../assets/icon/search.svg";
import UserAuth from "../../assets/icon/user.svg";
import Frame from "../../assets/icon/Frame.svg";
import Frame2 from "../../assets/icon/Frame2.svg";
import FistCross from '../../assets/icon/fist-cross.svg';
import { auth } from "../../utils/firebase/firebase-config";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [activePanel, setActivePanel] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHidden(window.scrollY > 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = activePanel ? "hidden" : "";
  }, [activePanel]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const isAdmin = await getUserRole(currentUser.uid);
        setIsAdmin(isAdmin === "admin"); 
      }
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
      className={s.header__wrapper}
    >
      <div className={s.header__top}>
        <Link to="/">
          <img className={s.header__logo} src={Logo} alt="логотип" />
        </Link>
        <div className={s.search__bar}>
          <input type="text" placeholder="Поиск по сайту..." />
          <img src={Search} alt="поиск" />
        </div>
        <Link to={isAdmin === true ? "/admin-panel" : user ? "/profile" : "/login"} className={s.auth__block}>
          <img src={UserAuth} alt="пользователь" />
          <h3>{user ? (isAdmin ? "Админ-панель" : "Личный кабинет") : "Войти"}</h3>
        </Link>
        <div className={s.burger__menu}>
          <Link to={user ? "/profile" : "/login"} className={s.burger__manu_item}>
            <img src={UserAuth} alt="user" />
          </Link>
          <div className={s.burger__manu_item}>
            <img src={Frame2} alt="frame" />
          </div>
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
            <Link to="/products"><h5>Категории</h5></Link>
            <Link to="/about"><h5>О нас</h5></Link>
          </nav>
          <Link to={user ? "/basket" : "/login"} className={s.frame}>
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
        <Link to="/about" className={s.active__panel_link}>О нас</Link>
        <Link to="/products" className={s.active__panel_link}>Продукты</Link>
        <Link to={user ? "/profile" : "/login"} className={s.active__panel_link}>Профиль</Link>
        <Link to={user ? "/basket" : "/login"} className={s.active__panel_link}>Корзина</Link>
      </motion.div>
    </div>
  );
};

export default Header;
