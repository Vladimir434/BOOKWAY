/* eslint-disable react/prop-types */
import s from "./card-swiper.module.css";

const CardSwiper = ({ img }) => {
  return (
    <div className={s.swiper__item} style={{ backgroundImage: `url(${img})` }}>
      <div className={s.swiper__ten}>
      </div>
    </div>
  );
};

export default CardSwiper;
