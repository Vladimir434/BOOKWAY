import s from "./main-page.module.css";
import ImgSwiper1 from "../../../assets/image/main-image-1.svg";
import ImgSwiper2 from "../../../assets/image/main-image-2.svg";
import ImgSwiper3 from "../../../assets/image/main-image-3.svg";
import ImgSwiper4 from "../../../assets/image/main-image-4.svg";
import ImgSwiper5 from "../../../assets/image/main-image-5.svg";
import ImgSwiper6 from "../../../assets/image/main-image-6.svg";
import ImageLogo from "../../../assets/icon/logo-header.svg";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
import "swiper/css";
import CardSwiper from "../../card-swiper-main-page/card-swiper";
import PromoCard from "../../promo-card/promo-card";

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
    <main>
      <div className={s.wrapper__swiper}>
        <Swiper
          className="mySwiper"
          loop={true}
          // autoplay={{ delay: 3000, disableOnInteraction: false }}
          // modules={[Autoplay]}
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

      <div className={s.Container__categories}>
        <div className={s.categories__item}>
          <div className={s.categories__item_text}>
            <h2>Фантастика</h2>
            <h3>&gt;</h3>
          </div>
        </div>
        <div className={s.categories__item}>
          <div className={s.categories__item_text}>
            <h2>Психология и саморозвитие</h2>
            <h3>&gt;</h3>
          </div>
        </div>
        <div className={s.categories__item}>
          <div className={s.categories__item_text}>
            <h2>Художественная литература</h2>
            <h3>&gt;</h3>
          </div>
        </div>
        <div className={s.categories__item}>
          <div className={s.categories__item_text}>
            <h2>Филосифия</h2>
            <h3>&gt;</h3>
          </div>
        </div>
        <div className={s.categories__item}>
          <div className={s.categories__item_text}>
            <h2>IT</h2>
            <h3>&gt;</h3>
          </div>
        </div>
      </div>
      <div className={s.promo}>
        <div className={s.promo__header}>
          <h2 className={s.promo__title}>Актуальные акции</h2>
          <button className={s.promo__button}>Все акции &gt;</button>
        </div>
        <div className={s.promo__cards}>
        <PromoCard img={ImgSwiper1} date={"действует до 30.03.26"} title={'lorem lorem lorem lorem'} description={"dsjkf  najsb dvha sbdkhv baskhb vfkhasb dvkbd kfjvbdjbv fjhbdfjvbdjv bfjdbvfjbjb bfjdbvfjbjb bfjdbvfjbjb"}/>
        <PromoCard img={ImgSwiper1} date={"действует до 30.03.26"} title={'lorem lorem lorem lorem'} description={"dsjkf  najsb dvha sbdkhv baskhb vfkhasb dvkbd kfjvbdjbv fjhbdfjvbdjv bfjdbvfjbjb"}/>
        <PromoCard img={ImgSwiper1} date={"действует до 30.03.26"} title={'lorem lorem lorem lorem'} description={"dsjkf  najsb dvha sbdkhv baskhb vfkhasb dvkbd kfjvbdjbv fjhbdfjvbdjv bfjdbvfjbjb bfjdbvfjbjb bfjdbvfjbjb bfjdbvfjbjb"}/>
        </div>
      </div>
      <div className={s.about__Us}>
        <div className={s.about__Us__first}>
          <div className={s.about__Us__first__logo}>
            <img src={ImageLogo} alt="логотип" />
          </div>
          <img src={ImgSwiper1} alt="Обложка книги" />
        </div>
        <div className={s.about__Us__last}>
          <h1 className={s.about__Us__last__title}>О нас</h1>
          <div className={s.about__Us__last__sub__title}>
            <p>
              Добро пожаловать в наш интернет-магазин, где качество встречается
              с стилем! Мы с гордостью представляем широкий ассортимент товаров,
              созданных с вниманием к каждой детали
            </p>
            <p>
              С момента нашего основания мы стремимся к тому, чтобы каждый
              клиент чувствовал себя особенным. Мы тщательно подбираем товары,
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
              скидки для постоянных клиентов. Благодарим вас за то, что
              выбираете нас! Надеемся, вы наслаждаетесь шопингом так же, как мы
              наслаждаемся тем, что можем служить вам!
            </p>
          </div>
          <button>Подробнее &gt;</button>
        </div>
      </div>
    </main>
  );
};

export default MainPage;
