/* eslint-disable react/prop-types */
import s from  './promo-card.module.css';
import Arrow from '../../assets/icon/arrow.svg'
const PromoCard = ({img, date, title ,description}) => {
  return (
    <div className={s.promo__card}>
      <div className={s.promo__image}>
        <img src={img} alt="image promo card" />
      </div>
      <p className={s.promo__date}>{date}</p>
      <h2 className={s.promo__title}>{title}</h2>
      <p className={s.promo__description}>{description}</p>
      <div className={s.promo__button__container}>
        <button className={s.promo__button}>Подробнее</button>
        <img src={Arrow} alt="Arrow" className={s.promo__arrow} />
      </div>
    </div>
  )
}

export default PromoCard