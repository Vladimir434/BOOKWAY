import Logo from "../../assets/логотип.svg";
import Search from "../../assets/search.svg";
import User from "../../assets/user.svg";
import Basket from "../../assets/basket.svg";

const header = () => {
  return (
    <div className="header">
      <div className="header__wrapper">
        <div className="header__section">
          <div className="header__section__innet">
            <div className="hesder__logo">
              <img src={Logo} alt="Логотип" />
            </div>
            <div className="header__search">
              <input type="text" placeholder="Поиск по сайту..." />
              <img src={Search} alt="поиск" />
            </div>
          </div>
          <div className="header__cabinet">
            <img src={User} alt="Личный кабинет" />
            <h3>Личный кабинет</h3>
          </div>
        </div>
        <div className="header__section">
          <nav className="header__nav">
            <a href="#" className="header__nav__link">
              Акции
            </a>
            <a href="#" className="header__nav__link">
              Категории
            </a>
            <a href="#" className="header__nav__link">
              О нас
            </a>
          </nav>
          <div className="header__basket">
            <img src={Basket} alt="Корзина" />
            <h3>Корзина</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default header;
