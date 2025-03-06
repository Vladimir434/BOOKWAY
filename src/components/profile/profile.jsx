import s from "./profile.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import Reviews from "../Reviews/reviews";
import Story from "../../assets/icon/story.svg";
import AboutMe from "../../assets/icon/aboutMe.svg";
import SignOut from "../../assets/icon/signOut.svg";
import Exchange from "../../assets/icon/exchange.svg";
import { useNavigate } from "react-router-dom";
import { userAuth } from "../../store/auth-slice/auth-slice";
import ChatIcon from "../pages/chat.icon/chat.icon";

const Profile = () => {
  const navigate = useNavigate();
  const {logoutUser} = userAuth()

  const handleLogout = () => {
    logoutUser(navigate)
  };
  return (
    <>
      <ChatIcon/>
      <Header />
      <h2 className={s.profile__title}>Личный кабинет</h2>
      <div className={s.profile__wrapper}>
        <div className={s.profile__nav}>
          <div className={s.profile__nav_item}>
            <button className={s.profile__nav_button}>
              <img src={Story} alt="story" />
              История заказов
            </button>
          </div>
          <div className={s.profile__nav_item}>
            <button className={s.profile__nav_button}>
              <img src={AboutMe} alt="about me" />
              Информация обо мне
            </button>
          </div>
          <div className={s.profile__nav_item}>
            <button
              className={s.profile__nav_button}
              onClick={handleLogout}
            >
              <img src={SignOut} alt="get out" /> Выйти
            </button>
          </div>
          <div className={s.profile__nav_item}>
            <button className={s.profile__nav_button}>
              <img src={Exchange} alt="exchange" />
              Обмен
            </button>
          </div>
        </div>
        <div className={s.profile__info}>
          <h2>Информация обо мне</h2>
        </div>
      </div>
      <Reviews />
      <Footer />
    </>
  );
};

export default Profile;
