import s from "./reviews.module.css";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Bgimage from '../../assets/image/main-image-1.svg'
const Reviews = () => {
  return (
    <div style={{backgroundImage:`url(${Bgimage})`}} className={s.reviews__wrapper}>
      <div className={s.blur}></div>
      <div className={s.reviews}>
        <h2 className={s.reviews__title}>Отзывы</h2>
        <div className={s.reviews__swiper}>
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-navigation-size": "20px",
              "--swiper-navigation-button-background": "rgba(0, 0, 0, 0.8)",
            }}
            navigation={true}
            modules={[Navigation]}
            className={s.mySwiper}
            loop={true}
          >
            {Array(5)
              .fill()
              .map((_, i) => (
                <SwiperSlide key={i}>
                  <div className={s.reviews_item}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus similique saepe modi, laboriosam voluptates
                    odit omnis libero itaque quisquam eius quos tempore
                    assumenda voluptatum laborum atque in iste maiores illo.
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
        <button className={s.reviews__button}>Читать все</button>
      </div>
    </div>
  );
};

export default Reviews;
