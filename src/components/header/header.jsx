import s from "./header.module.css";
import Logo from "../../assets/icon/logo-header.svg";
import Search from "../../assets/icon/search.svg";
import UserAuth from "../../assets/icon/aboutMe.svg";
import Frame from "../../assets/icon/Frame.svg";
import Frame2 from "../../assets/icon/Frame2.svg";
import FistCross from '../../assets/icon/fist-cross.svg';
import About from "../../assets/icon/about.svg"
import { auth, db } from "../../utils/firebase/firebase-config";
import Book from "../../assets/icon/book.svg"
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useSearchStore } from "../../store/search-store/search-store";

const Header = () => { 
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState(null);
  const [hidden, setHidden] = useState(false);
  const [activePanel, setActivePanel] = useState(false);
  const { searchQuery, setSearchQuery, clearSearchQuery } = useSearchStore();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate("/products");
    }
  };

  const handleClaarQuary = () => {
    clearSearchQuery()
  }
  

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
        const userDoc = await getDoc(doc(db, "users", currentUser.uid));
        if (userDoc.exists()) {
          setIsAdmin(userDoc.data().isAdmin === true);
        }
      } else {
        setIsAdmin(false);
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
      className={s.header__wrapper}>
      <div className={s.header__top}>
        <Link to="/">
          <img className={s.header__logo} src={Logo} alt="логотип" />
        </Link>
        <div className={s.search__bar}>
          <form className={s.search__bar} onSubmit={handleSearch}>
            <input 
              type="text" 
              placeholder="Поиск по сайту..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <div
              className={s.clear__btn}
              onClick={handleClaarQuary}
              >
                <div className={`${s.clear_item_1} ${s.clear}`}></div>
                <div className={`${s.clear_item_2} ${s.clear}`}></div>
              </div>
            )}
            <button className={s.search_btn} type="submit">
              <img src={Search} alt="поиск" />
            </button>
          </form>
        </div>
        
        <Link to={user ? "/profile" : "/login"} className={s.auth__block}>
          <img src={UserAuth} alt="пользователь" />
          <h3>{user ? "Личный кабинет" : "Войти"}</h3>
        </Link>

        {isAdmin && (
          <Link to="/admin-panel" className={s.auth__block}>
            <img src={UserAuth} alt="админ" />
            <h3>Админ-панель</h3>
          </Link>
        )}

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
        <Link to={user ? '/about' : '/login'} className={s.active__panel_link}>
          <div className={s.burger__manu_item}>
            <img src={About} alt="about" />
          </div>
          О нас
        </Link>
        <Link to="/products" className={s.active__panel_link}>
          <div className={s.burger__manu_item}>
            <img src={Book} alt="products" />
          </div>
          Товары
        </Link>
        <Link to={user ? "/profile" : "/login"} className={s.active__panel_link}>
          <div className={s.burger__manu_item}>
            <img src={UserAuth} alt="user" />
          </div>
          Профиль
        </Link>
        <Link to={user ? "/basket" : "/login"} className={s.active__panel_link}>
          <div className={s.burger__manu_item}>
            <img src={Frame2} alt="frame" />
          </div>
          Корзина
        </Link>

        {isAdmin && (
          <Link to="/admin-panel" className={s.active__panel_link}>
            <div className={s.burger__manu_item}>
              <img src={UserAuth} alt="admin" />
            </div>
            Админ-панель
          </Link>
        )}
      </motion.div>
    </div>
  );
};

export default Header;