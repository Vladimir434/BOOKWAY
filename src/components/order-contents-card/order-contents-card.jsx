import s from './order-contents-card.module.css'

const OrderContentsCard = ({ img, title, article, autor, price, quantity, result }) => {
  return (
    <main className={s.main}>
      <div className={s.main__block_image}>
        <img src={img} alt="booc" />
      </div>
      <div className={s.main__info}>
        <p>{title}</p>
        <p>Автор:{autor}</p>
        <p>Артикул:{article}</p>
      </div>
      <div className={s.main__block__price}>
        <h2 className={s.price}>{price}</h2>
        <h3 className={s.price}>{quantity}</h3>
        <h2 className={s.price}>{result}</h2>
      </div>
    </main>
  )
}

export default OrderContentsCard