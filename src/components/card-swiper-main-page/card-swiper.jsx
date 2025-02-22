/* eslint-disable react/prop-types */
import s from "./card-swiper.module.scss";

const CardSwiper = ({ img, title, titleSpan, subTitle }) => {
  return (
    <div className={s.swiper__item} style={{ backgroundImage: `url(${img})` }}>
      <div className={s.swiper__content}>
        <h3>{title} <br /><span>{titleSpan}</span></h3>
        <p>{subTitle}</p>
      </div>
    </div>
  );
};

export default CardSwiper;
