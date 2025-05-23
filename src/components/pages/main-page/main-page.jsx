import s from "./main-page.module.css";
import ImgSwiper1 from "../../../assets/image/main-image-1.svg";
import ImgSwiper2 from "../../../assets/image/main-image-2.svg";
import ImgSwiper3 from "../../../assets/image/main-image-3.svg";
import ImgSwiper4 from "../../../assets/image/main-image-4.svg";
import ImgSwiper5 from "../../../assets/image/main-image-5.svg";
import ImgSwiper6 from "../../../assets/image/main-image-6.svg";
import ImageLogo from "../../../assets/icon/logo-header.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import CardSwiper from "../../card-swiper-main-page/card-swiper";
import Footer from "../../footer/footer";
import Reviews from "../../Reviews/reviews";
import Header from "../../header/header";
import { Link } from "react-router-dom";

const MainPage = () => {
  const images = [
    ImgSwiper1,
    ImgSwiper2,
    ImgSwiper3,
    ImgSwiper4,
    ImgSwiper5,
    ImgSwiper6,
  ];
  return (
    <>
    <Header/>
    <main className={s.main}>
      <div className={s.wrapper__swiper}>
        <Swiper
          className="mySwiper"
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay]}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <CardSwiper img={img} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={s.swiper__content}>
          <h3>
            Добро Пожаловать в<br />
            <span>BOOKWAY</span>
          </h3>
          <p>
            Книги – это сокровищницы знаний и эмоций, которые погружают человека
            вбескрайние просторы воображения. Они словно мосты между временем и
            пространством, позволяя нам соприкоснуться с мыслями великих умов
            прошлого и настоящего. Каждый прочитанный том открывает двери в
            новые миры, расширяет горизонты восприятия и углубляет понимание
            человеческой природы.
          </p>
        </div>
      </div>
      <div className={s.container__categories}>
        <Link to="/products" className={s.categories__item}>
        <div className={s.categories__item_blur}></div>
          <div className={s.categories__item_text}>
            <h2>Фантастика</h2>
          </div>
        </Link>
        <Link to="/products" className={s.categories__item}>
        <div className={s.categories__item_blur}></div>
          <div className={s.categories__item_text}>
            <h2>Психология и саморозвитие</h2>
        </div>
        </Link>
        <Link to="/products" className={s.categories__item}>
        <div className={s.categories__item_blur}></div>
          <div className={s.categories__item_text}>
            <h2>Художественная литература</h2>
          </div>
        </Link>
        <Link to="/products" className={s.categories__item}>
        <div className={s.categories__item_blur}></div>
          <div className={s.categories__item_text}>
            <h2>Филосифия</h2>
          </div>
        </Link>
        <Link to="/products" className={s.categories__item}>
        <div className={s.categories__item_blur}></div>
          <div className={s.categories__item_text}>
            <h2>IT</h2>
          </div>
        </Link>
      </div>
      <div className={s.about__Us}>
          <div className={s.main__about__first__logo}>
            <img src={ImageLogo} alt="логотип" />
          </div>
          <img
            className={s.main__about__first__fon}
            src={ImgSwiper1}
            alt="Обложка книги"
          />
          <h1 className={s.main__about__last__title}>О нас</h1>
          <p>
            Добро пожаловать в наш интернет-магазин, где качество встречается с
            стилем! Мы с гордостью представляем широкий ассортимент товаров,
            созданных с вниманием к каждой детали
          </p>
          <p>
            С момента нашего основания мы стремимся к тому, чтобы каждый клиент
            чувствовал себя особенным. Мы тщательно подбираем товары,
            сотрудничая с проверенными производителями и следя за последними
            трендами.
          </p>
          <p>
            Мы понимаем, что в современном мире время — на вес золота. Поэтому
            мы создали интуитивно понятный интерфейс, позволяющий вам легко
            находить нужные вещи и совершать покупки всего в несколько кликов.
          </p>
          <p>
            Мы ценим вашу лояльность и готовы предложить специальные акции и
            скидки для постоянных клиентов. Благодарим вас за то, что выбираете
            нас! Надеемся, вы наслаждаетесь шопингом так же, как мы наслаждаемся
            тем, что можем служить вам!
          </p>
          <Link to="/about" className={s.about__us_link}>Подробнее &gt;</Link>
      </div>
      <Reviews/>
      <Footer/>
    </main>
    </>
  );
};

export default MainPage;
