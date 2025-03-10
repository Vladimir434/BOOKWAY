import s from './card-products.module.css'
import Cross from '../../assets/icon/cross.svg'
import Image from '../../assets/image/categories-img-1.svg'
const CardProducts = () => {
  return (
    <div className={s.card__container}>
      <div className={s.card__img}>
        <img src={Image} alt="book" />
      </div>
      <div className={s.card__info}>
        <div className={s.availability}>
          <img src={Cross} alt="cross" />
          <h4>В наличии</h4>
        </div>
        <h4 className={s.article}>
          Артикул: 47123CD
        </h4>
      </div>
      <h4 className={s.description}>
        Не всем достанется приз. Как управлять поколением Y
      </h4>
      <h4 className={s.autor}>Автор : Брюс Тулган</h4>
      <div className={s.price__block}>
        <h3>1002 com</h3>
        <h3>1234</h3>
      </div>
      <div className={s.block__btn}>
        <button>В корзину</button>
        <button>Купить в 1 клик</button>
      </div>
    </div>
  )
}

export default CardProducts