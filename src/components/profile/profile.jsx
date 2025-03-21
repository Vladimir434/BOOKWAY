import { useState } from "react";
import { useNavigate } from "react-router-dom";
import s from "./profile.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import Reviews from "../Reviews/reviews";
import Story from "../../assets/icon/story.svg";
import AboutMe from "../../assets/icon/aboutMe.svg";
import SignOut from "../../assets/icon/signOut.svg";
import Exchange from "../../assets/icon/exchange.svg";
import { userAuth } from "../../store/auth-slice/auth-slice";
import ProfileInfo from "../profile-info/profile-info";
import ProfileStory from "../frofile-story/profile-story";

const Profile = () => {
  const navigate = useNavigate();
  const { logoutUser } = userAuth();
  const [activeTab, setActiveTab] = useState("aboutMe");
  // const [exchange, setAxchange] = useState("placeAd")

  const handleLogout = () => {
    logoutUser(navigate);
  };

  return (
    <>
      <Header />
      <div className={s.profile__title_block}>
        <h2 className={s.profile__title}>
          {activeTab === "exchange" ? 'Обмен' : "Личный кабинет"}
        </h2>
        {activeTab === "exchange" && (
          <>
            <h3 className={s.profile__title_render}>Поместить объявление</h3>
            <h3 className={s.profile__title_render}>Другие объявления</h3>
          </>
        )}
      </div>
      <div className={`${s.profile__wrapper} ${activeTab === 'story' ? s.story_active : ''} ${activeTab === 'aboutMe' ? s.active__aboutMe : ''}`}>
        <div className={s.profile__nav}>
          <div className={s.profile__nav_item}>
            <div className={`${s.active__indicator} ${activeTab === "story" ? "" : s.hidden}`}></div>
            <button className={s.profile__nav_button} onClick={() => setActiveTab("story")}>
              <img src={Story} alt="story" />
              История заказов
            </button>
          </div>
          <div className={s.profile__nav_item}>
            <div className={`${s.active__indicator} ${activeTab === "aboutMe" ? "" : s.hidden}`}></div>
            <button className={s.profile__nav_button} onClick={() => setActiveTab("aboutMe")}>
              <img src={AboutMe} alt="about me" />
              Информация обо мне
            </button>
          </div>
          <div className={s.profile__nav_item}>
            <div className={`${s.active__indicator} ${activeTab === "exchange" ? "" : s.hidden}`}></div>
            <button className={s.profile__nav_button} onClick={() => setActiveTab("exchange")}>
              <img src={Exchange} alt="exchange" />
              Обмен
            </button>
          </div>
          <div className={s.profile__nav_item}>
            <div className={s.active__indicator_exit}></div>
            <button className={s.profile__nav_button} onClick={handleLogout}>
              <img src={SignOut} alt="exit" /> Выйти
            </button>
          </div>
        </div>

        <div className={s.profile__components}>
          {activeTab === "aboutMe" && <ProfileInfo />}
          {activeTab === "story" && <ProfileStory />}
          {activeTab === "exchange" && <h1></h1>}
        </div>
      </div>
      <Reviews />
      <Footer />
    </>
  );
};

export default Profile;
