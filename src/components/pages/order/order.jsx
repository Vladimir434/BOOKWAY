import s from "./order.module.css";
import Header from "../../header/header";
import Reviews from "../../Reviews/reviews";
import Footer from "../../footer/footer";
import Arrow from "../../../assets/icon/arrow.svg";
import Img from "../../../assets/image/1.webp";
import { useState } from "react";

const Order = () => {
  const deliveryCost = 160;

  const items = [
    {
      id: 1,
      title: "Гордость и предубеждения",
      image: Img,
      price: 240,
      quantity: 1,
    },
    {
      id: 2,
      title: "Гордость и предубеждения",
      price: 240,
      image: Img,
      quantity: 1,
    },
    {
      id: 3,
      title: "Гордость и предубеждения",
      price: 480,
      image: Img,
      quantity: 2,
    },
  ];

  const [visibleLists, setVisibleLists] = useState(Array(1).fill(false));
  const toggleListVisibility = (index) => {
    setVisibleLists((prev) => {
      const newVisibleLists = [...prev];
      newVisibleLists[index] = !newVisibleLists[index];
      return newVisibleLists;
    });
  };
  const result = items.reduce(
    (acc, item) => acc + item.price * item.quantity + deliveryCost,
    0
  );
  const productResult = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <>
      <Header />
      <main className={s.main}>
        <div className={s.main__wrapper}>
          <p className={s.main__title}>Оформление заказа</p>
          <div className={s.main__inner}>
            <div className={s.main__content}>
              <div className={s.main__content__wrapper}>
                <div className={s.main__content__data}>
                  <p className={s.content__data__title}>Данные покупателя</p>
                  <div className={s.content__data__info}>
                    <div className={s.content__data__info__item}>
                      <label>Имя</label>
                      <input type="text" />
                    </div>
                    <div className={s.content__data__info__item}>
                      <label>E-mail</label>
                      <input type="text" />
                    </div>
                    <div className={s.content__data__info__item}>
                      <label>Телефон</label>
                      <input type="text" />
                    </div>
                  </div>
                </div>
                <div className={s.main__content__adres}>
                  <p className={s.content__adres__title}>Данные покупателя</p>
                  <div className={s.content__adres__info}>
                    <div className={s.content__adres__info__item}>
                      <label>Город</label>
                      <input type="text" />
                    </div>
                    <div className={s.content__adres__info__item}>
                      <label>Улица</label>
                      <input type="text" />
                    </div>
                    <div className={s.content__adres__info__item}>
                      <label>Дом/Квартира</label>
                      <input type="text" />
                    </div>
                  </div>
                </div>
              </div>

              <p className={s.main__content__payment}>
                Оплата наличными при получении .
              </p>
              <button className={s.main__content__btn}>
                Подтвердить заказ
              </button>
            </div>
            <div className={s.main__order}>
              <div className={s.main__content__choice}>
                <div className={s.main__content__choice__info}>
                  <p className={s.main__content__choice__info__title} onClick={() => toggleListVisibility(0)}>
                    Выбранные товары
                    <img
                      src={Arrow}
                      alt="arrow"
                      className={visibleLists[0] ? s.rotate : ""}
                    />
                  </p>

                  {visibleLists[0] && (
                    <div className={s.content__choice__info__products}>
                      {items.map((item) => (
                        <div
                          key={item.id}
                          className={s.choice__info__products__item}
                        >
                          <img
                            src={item.image}
                            alt="картинка выбраного товара"
                          />
                          <div className={s.info__products__item__imfo}>
                            <p>{item.title}</p>
                            <p>
                              {item.price} сом × {item.quantity} шт
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <p>Сумма доставки : {deliveryCost} сом</p>
                <p>Сумма по товарам : {productResult}</p>
                <p>Итого : {result}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Reviews />
      <Footer />
    </>
  );
};

export default Order;
