import s from "./product.module.css";
import Header from "../../header/header";
import Reviews from "../../Reviews/reviews";
import Footer from "../../footer/footer";
import Art from "../../../assets/image/art.svg";
import { useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Img1 from "../../../assets/image/1.webp";
import Img2 from "../../../assets/image/2.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

const Product = () => {
  const images = [Img1, Img2];
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <ChatIvon />
      <Header />
      <main className={s.main}>
        <div className={s.main__wrapper}>
          <div className={s.main__product}>
            <div className={s.main__product__info}>
              <div className={s.main__product__info__swiper}>
                <Swiper
                  style={{
                    "--swiper-navigation-color": "#000",
                    "--swiper-pagination-color": "#000",
                    marginBottom: "12px",
                  }}
                  loop={true}
                  spaceBetween={10}
                  navigation={true}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs]}
                >
                  {images.map((img, index) => (
                    <SwiperSlide className={s.img__wrapper} key={index}>
                      <img className={s.img} src={img} alt="no img" />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  loop={true}
                  spaceBetween={10}
                  slidesPerView={8}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                >
                  {images.map((img, index) => (
                    <SwiperSlide className={s.img2__wrapper} key={index}>
                      <img src={img} className={s.img2} alt="no img" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <div className={s.main__product__description}>
              <h2 className={s.product__description__title}>
                Гордость и предубеждение.
              </h2>
              <div className={s.product__description__art}>
                <label className={s.product__description__art__title}>
                  <img src={Art} /> В наличии
                </label>
                <label>Артикул: A102B</label>
              </div>
              <div className={s.product__description__characteristics}>
                <h2 className={s.product__description__characteristics__title}>
                  Характеристики
                </h2>
                <div className={s.product__description__characteristics__item}>
                  <h3>Автор</h3>
                  <p>Джейн Остен</p>
                </div>
                <hr />
                <div className={s.product__description__characteristics__item}>
                  <h3>Издательство</h3>
                  <p>АСТ</p>
                </div>
                <hr />
                <div className={s.product__description__characteristics__item}>
                  <h3>Жанр</h3>
                  <p>Художественная литература </p>
                </div>
                <hr />
                <div className={s.product__description__characteristics__item}>
                  <h3>Тематика</h3>
                  <p>Проза</p>
                </div>
                <hr />
                <div className={s.product__description__characteristics__item}>
                  <h3>Тип обложки</h3>
                  <p>Мягкая обложка</p>
                </div>
                <hr />
                <div className={s.product__description__characteristics__item}>
                  <h3>Количество страниц</h3>
                  <p>384</p>
                </div>
                <hr />
                <div className={s.product__description__characteristics__item}>
                  <h3>Возраст</h3>
                  <p>16+</p>
                </div>
                <hr />
                <div className={s.product__description__characteristics__item}>
                  <h3>Год издания </h3>
                  <p>2022</p>
                </div>
                <hr />
              </div>
            </div>
            <div className={s.main__product__price}>
              <h4 className={s.product__price__title}>290 сом</h4>
              <div className={s.product__price__btn}>
                <button className={s.product__price__btn__section1}>
                  В корзину
                </button>
                <Link
                  to="/straight"
                  className={s.product__price__btn__section2}
                >
                  Купить в 1 клик
                </Link>
              </div>
            </div>
          </div>
          <div className={s.main__description}>
            <h2 className={s.main__description__title}>Описание</h2>
            <p className={s.main__description__text}>
              «Гордость и предубеждение», один из самых известных английских
              романов, сначала назывался «Первые впечатления». Он был написан в
              1796–1797 гг., но отклонен издателем. Спустя годы, когда другой ее
              роман «Чувство и чувствительность» завоевал любовь читателей,
              Остен переработала старую рукопись и опубликовала в 1813 г. Это
              история о том, как сестры из обедневшего благородного семейства
              пытаются найти выгодные партии для брака, история о любви и
              расчете, благоразумии и безрассудстве, гордости и предубеждении...
            </p>
          </div>
          {/* <div className={s.main__similar}>
            <h2 className={s.main__similar__title}>Книги из этой же категории</h2>
            <div className={s.main__similar__content}></div>
          </div> */}
        </div>
      </main>
      <Reviews />
      <Footer />
    </>
  );
};

export default Product;
