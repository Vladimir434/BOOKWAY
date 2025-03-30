import s from "./admin-panel.module.css"
import AdminStore from "./admin-store/admin-store"
import AdminUsers from "./admin-users/admin-users"
import AdminProducts from "./admin-products/admin-products"
import AdminCraete from "./admin-craete/admin-craete"
import { useState} from "react"
import Header from "../header/header";
import Footer from "../footer/footer";
import Reviews from "../Reviews/reviews";
import Story from "../../assets/icon/story.svg";
import SignOut from "../../assets/icon/signOut.svg";
import Book from "../../assets/icon/book.svg";
import Users from "../../assets/icon/aboutMe.svg";
import { userAuth } from "../../store/auth-slice/auth-slice";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const handleLogout = () => {
    logoutUser(navigate);
  };
  
  const navigate = useNavigate();
  const { logoutUser } = userAuth();
  const [products, setProducts] = useState("placeAd");
  const [activeTab, setActiveTab] = useState("products");
  return (
    <>
      <Header />
      <div className={s.admin__title_block}>
        <h2 className={s.admin__title}>
          Панель Админа
        </h2>
        {activeTab === "products" && (
          <div className={s.admin__title_render_wrapper}>
            <h3
              className={`${s.admin__title_render} ${
                products === "placeAd" ? s.active__tab : ""
              }`}
              onClick={() => setProducts("placeAd")}
            >
              Добавить товар
            </h3>
            <h3
              className={`${s.admin__title_render} ${
                products === "otherAds" ? s.active__tab : ""
              }`}
              onClick={() => setProducts("otherAds")}
            >
              Все товары
            </h3>
          </div>
        )}
      </div>
      <div
        className={`${s.admin__wrapper} 
      ${activeTab === "story" ? s.story_active : ""}
      `}
      >
        <div className={s.admin__nav}>
          <div className={s.admin__nav_item}>
            <div
              className={`${s.active__indicator} ${
                activeTab === "products" ? "" : s.hidden
              }`}
            ></div>
            <button
              className={s.admin__nav_button}
              onClick={() => setActiveTab("products")}
            >
              <img src={Book} alt="products" />
               Товары
            </button>
          </div>
          <div className={s.admin__nav_item}>
            <div
              className={`${s.active__indicator} ${
                activeTab === "story" ? "" : s.hidden
              }`}
            ></div>
            <button
              className={s.admin__nav_button}
              onClick={() => setActiveTab("story")}
            >
              <img src={Story} alt="story" />
              Заказы
            </button>
          </div>
          <div className={s.admin__nav_item}>
            <div
              className={`${s.active__indicator} ${
                activeTab === "users" ? "" : s.hidden
              }`}
            ></div>
            <button
              className={s.admin__nav_button}
              onClick={() => setActiveTab("users")}
            >
              <img src={Users} alt="users" />
              Пользователи
            </button>
          </div>
          <div className={s.admin__nav_item}>
            <div className={s.admin__indicator_exit}></div>
            <button className={s.admin__nav_button} onClick={handleLogout}>
              <img src={SignOut} alt="exit" /> Выйти
            </button>
          </div>
        </div>

        <div className={s.admin__components}>
        {activeTab === "story" && <AdminStore />}
        {activeTab === "users" && <AdminUsers />}
          {activeTab === "products" && (
            <>
              {products === "placeAd" && < AdminCraete/>}
              {products === "otherAds" && <AdminProducts/>}
            </>
          )}
        </div>
      </div>
      <Reviews />
      <Footer />
    </>
  );
}

export default AdminPanel