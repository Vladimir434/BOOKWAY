import s from './card-products.module.css'
import Cross from '../../assets/icon/cross.svg'
import Checkmark from '../../assets/icon/checkmark.svg'
const CardProducts = ({img, article, description, price, autor, isAvialiable }) => {
  return (
    <div className={s.card__container}>
      <div className={s.card__img}>
        <img src={img} alt="book" />
      </div>
      <div className={s.card__info}>
        <div className={s.availability}>
          {isAvialiable &&
          <>
            <img src={Checkmark} alt="checkmark" />
            <h4>в наличии</h4>
          </>
          }
          {!isAvialiable &&
          <>
          <img src={Cross} alt="cross" />
          <h4>нет в наличии</h4>
          </>
          }
        </div>
        <h4 className={s.article}>
          Артикул: {article}
        </h4>
      </div>
      <h4 className={s.description}>
        {description}
      </h4>
      <h4 className={s.autor}>Автор : {autor}</h4>
      <div className={s.price__block}>
        <h3>{price} com</h3>
      </div>
      <div className={s.block__btn}>
        <button>В корзину</button>
        <button>Купить в 1 клик</button>
      </div>
    </div>
  )
}

export default CardProducts