import s from "./footer.module.css";
import Logo from "../../assets/icon/logo-header.svg";
import Instagrsm from "../../assets/icon/instagram.svg";
import WhatsApp from "../../assets/icon/WhatsApp.svg";
const Footer = () => {
  return (
    <div className={s.footer__wrapper}>
      <div className={s.footer}>
        <div className={s.footer__logo}>
          <img src={Logo} alt="logo" className={s.footer__logo_image} />
          <button className={s.footer__button}>Написать в магазин</button>
        </div>
        <div className={s.footer__info}>
          <h4 className={s.footer__info_title}>Для клиента</h4>
          <p className={s.footer__info_item}>Акции</p>
          <p className={s.footer__info_item}>Обмен </p>
          <p className={s.footer__info_item}>Личный кабинет</p>
          <p className={s.footer__info_item}>регистрация</p>
          <p className={s.footer__info_item}>О нас</p>
        </div>
        <div className={s.footer__contacts}>
          <a href="#" className={s.footer__contacts_tel}>+ 996 - 708 - 107 - 436</a>
          <p className={s.footer__contacts_item}>Наш instagram и whatsapp</p>
          <div className={s.footer__contacts_images}>
          <img src={Instagrsm} alt="instagram" />
          <img src={WhatsApp} alt="whatsApp" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
