import s from "./footer.module.css";
import Logo from "../../assets/icon/logo-header.svg";
import Instagrsm from "../../assets/icon/instagram.svg";
import WhatsApp from "../../assets/icon/WhatsApp.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className={s.footer__wrapper}>
      <div className={s.footer}>
        <div className={s.footer__logo}>
          <Link to="/">
            <img src={Logo} alt="logo" className={s.footer__logo_image} />
          </Link>
          <button className={s.footer__button}>Написать в магазин</button>
        </div>
        <div className={s.footer__info}>
          <h4 className={s.footer__info_title}>Для клиента</h4>
          <a className={s.footer__info_item}>Акции</a>
          <a className={s.footer__info_item}>Обмен </a>
          <Link to="/about" className={s.footer__info_item}>
            О нас
          </Link>
        </div>
        <div className={s.footer__contacts}>
          <a href="tel:+996107436" className={s.footer__contacts_tel}>
            + 996 - 708 - 107 - 436
          </a>
          <p className={s.footer__contacts_item}>Наш instagram и whatsapp</p>
          <div className={s.footer__contacts_images}>
            <a href="https://www.instagram.com/_libangl?igsh=MXJwdWppNHBsYXRicg==">
              <img src={Instagrsm} alt="instagram" />
            </a>
            <a href="http://wa.me/996708107436">
              <img src={WhatsApp} alt="whatsApp" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
