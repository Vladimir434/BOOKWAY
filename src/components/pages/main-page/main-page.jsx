import s from "./main-page.module.scss";
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

const MainPage = () => {
  return (
    <>
      <Swiper
        className="mySwiper"
        loop={true}
        // autoplay={{ delay: 3000, disableOnInteraction: false }}
        // modules={[Autoplay]}
      >
        <SwiperSlide>
          <CardSwiper
            img={ImgSwiper1}
            title={"Добро Пожаловать в"}
            titleSpan={"BOOKWAY"}
            subTitle={`
          Книги – это сокровищницы знаний и эмоций, которые погружают человека вбескрайние просторы воображения. Они словно мосты между временем и
          пространством, позволяя нам соприкоснуться с мыслями великих умов
          прошлого и настоящего. Каждый прочитанный том открывает двери в новые
          миры, расширяет горизонты восприятия и углубляет понимание
          человеческой природы.
            `}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardSwiper
            img={ImgSwiper2}
            title={"Добро Пожаловать в"}
            titleSpan={"BOOKWAY"}
            subTitle={`
          Книги – это сокровищницы знаний и эмоций, которые погружают человека вбескрайние просторы воображения. Они словно мосты между временем и
          пространством, позволяя нам соприкоснуться с мыслями великих умов
          прошлого и настоящего. Каждый прочитанный том открывает двери в новые
          миры, расширяет горизонты восприятия и углубляет понимание
          человеческой природы.
            `}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardSwiper
            img={ImgSwiper3}
            title={"Добро Пожаловать в"}
            titleSpan={"BOOKWAY"}
            subTitle={`
          Книги – это сокровищницы знаний и эмоций, которые погружают человека вбескрайние просторы воображения. Они словно мосты между временем и
          пространством, позволяя нам соприкоснуться с мыслями великих умов
          прошлого и настоящего. Каждый прочитанный том открывает двери в новые
          миры, расширяет горизонты восприятия и углубляет понимание
          человеческой природы.
            `}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardSwiper
            img={ImgSwiper4}
            title={"Добро Пожаловать в"}
            titleSpan={"BOOKWAY"}
            subTitle={`
          Книги – это сокровищницы знаний и эмоций, которые погружают человека вбескрайние просторы воображения. Они словно мосты между временем и
          пространством, позволяя нам соприкоснуться с мыслями великих умов
          прошлого и настоящего. Каждый прочитанный том открывает двери в новые
          миры, расширяет горизонты восприятия и углубляет понимание
          человеческой природы.
            `}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardSwiper
            img={ImgSwiper5}
            title={"Добро Пожаловать в"}
            titleSpan={"BOOKWAY"}
            subTitle={`
          Книги – это сокровищницы знаний и эмоций, которые погружают человека вбескрайние просторы воображения. Они словно мосты между временем и
          пространством, позволяя нам соприкоснуться с мыслями великих умов
          прошлого и настоящего. Каждый прочитанный том открывает двери в новые
          миры, расширяет горизонты восприятия и углубляет понимание
          человеческой природы.
            `}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardSwiper
            img={ImgSwiper6}
            title={"Добро Пожаловать в"}
            titleSpan={"BOOKWAY"}
            subTitle={`
          Книги – это сокровищницы знаний и эмоций, которые погружают человека вбескрайние просторы воображения. Они словно мосты между временем и
          пространством, позволяя нам соприкоснуться с мыслями великих умов
          прошлого и настоящего. Каждый прочитанный том открывает двери в новые
          миры, расширяет горизонты восприятия и углубляет понимание
          человеческой природы.
            `}
          />
        </SwiperSlide>
      </Swiper>
      <div className={s.Container__categories}>
        <div className={s.categoties__item}>
          <div className={s.categories__item_text}>
            <h2>Фантастика</h2>
            <h3>{">"}</h3>
          </div>
        </div>
        <div className={s.categoties__item}>
          <div className={s.categories__item_text}>
            <h2>Психология и саморозвитие</h2>
            <h3>{">"}</h3>
          </div>
        </div>
        <div className={s.categoties__item}>
          <div className={s.categories__item_text}>
            <h2>Художественная литература</h2>
            <h3>{">"}</h3>
          </div>
        </div>
        <div className={s.categoties__item}>
          <div className={s.categories__item_text}>
            <h2>Филосифия</h2>
            <h3>{">"}</h3>
          </div>
        </div>
        <div className={s.categoties__item}>
          <div className={s.categories__item_text}>
            <h2>IT</h2>
            <h3>{">"}</h3>
          </div>
        </div>
      </div>
      <div className={s.promo}>
        <div className={s.promo__header}>
          <h2 className={s.promo__title}>Актуальные акции</h2>
          <button className={s.promo__button}>Все акции {">"}</button>
        </div>
        <div className={s.promo__cards}></div>
      </div>
      <div className={s.about__Us}>
        <div className={s.about__Us__first}>
          <img src={ImageLogo} alt="логотип" />
          <img src={ImgSwiper1} alt="no image" />
        </div>
        <div className={s.about__Us__last}>
          <h1 className={s.about__Us__last__title}>О нас</h1>
          <p className={s.about__Us__last__sub__title}>
            Добро пожаловать в наш интернет-магазин, где качество встречается с
            стилем! Мы с гордостью представляем широкий ассортимент товаров,
            созданных с вниманием к каждой детали С момента нашего основания мы
            стремимся к тому, чтобы каждый клиент чувствовал себя особенным. Мы
            тщательно подбираем товары, сотрудничая с проверенными
            производителями и следя за последними трендами. Мы понимаем, что в
            современном мире время — на вес золота. Поэтому мы создали
            интуитивно понятный интерфейс, позволяющий вам легко находить нужные
            вещи и совершать покупки всего в несколько кликов. Мы ценим вашу
            лояльность и готовы предложить специальные акции и скидки для
            постоянных клиентов. Благодарим вас за то, что выбираете нас!
            Надеемся, вы наслаждаетесь шопингом так же, как мы наслаждаемся тем,
            что можем служить вам!
          </p>
          <button>Подробнее {">"}</button>
        </div>
      </div>
    </>
  );
};

export default MainPage;
