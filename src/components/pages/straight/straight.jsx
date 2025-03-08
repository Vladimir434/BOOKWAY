import s from "./straight.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import BgImage from "../../../assets/image/main-image-1.svg";
import Art from "../../../assets/image/art.svg";
import Img1 from "../../../assets/image/1.webp";

const Straight = () => {
  const [quantity, setQuantity] = useState(1);

  const changeQuantity = (amount) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };

  return (
    <>
      <main style={{ backgroundImage: `url(${BgImage})` }} className={s.main}>
        <div className={s.main__wrapper}></div>
        <div className={s.main__form__wrapper}>
          <h1 className={s.main__form__title}>Купить в 1 клик</h1>
          <div className={s.main__form__inner}>
            <div className={s.form__inner__img__wrapper}>
              <img src={Img1} className={s.main__form__inner__img} />
            </div>
            <div className={s.main__form__description}>
              <div className={s.product__description__art}>
                <label className={s.product__description__art__title}>
                  <img src={Art} /> В наличии
                </label>
                <label>Артикул: A102B</label>
              </div>
              <h3 className={s.main__form__description__section1}>
                Гордость и предубеждение.
              </h3>
              <p className={s.main__form__description__section2}>
              Автор : Джейн Остин
              </p>
              <div className={s.main__form__price}>
                <div className={s.main__form__price__quantity}>
                  <button
                    className={s.main__form__price__button}
                    onClick={() => changeQuantity(-1)}
                  >
                    -
                  </button>
                  <span className={s.main__form__price__text}>{quantity}</span>
                  <button
                    className={s.main__form__price__button}
                    onClick={() => changeQuantity(1)}
                  >
                    +
                  </button>
                </div>
                <p className={s.main__form__price__price}>
                  {290 * quantity} сом
                </p>
              </div>
            </div>
          </div>

          <form className={s.main__form}>
            <div className={s.main__form__section}>
              <h4>Имя</h4>
              <input
                type="text"
                placeholder="Введите ваше имя"
                className={s.main__form__section__input}
              />
            </div>
            <div className={s.main__form__section}>
              <h4>Телефон</h4>
              <input
                type="tel"
                placeholder="Введите ваш номер телефона"
                className={s.main__form__section__input }
              />
            </div>
            <Link className={s.main__form__button__link} to="/products/1">
              Оформить заказ
            </Link>
          </form>
        </div>
      </main>
    </>
  );
};

export default Straight;
