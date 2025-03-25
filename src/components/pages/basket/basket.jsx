import s from "./basket.module.css";
import Header from "../../header/header";
import Reviews from "../../Reviews/reviews";
import Footer from "../../footer/footer";
import { useState } from "react";
import { Link } from "react-router-dom";
import Delete from "../../../assets/icon/close cross.svg";
import Img from "../../../assets/image/1.webp";
import Rectangle from "../../../assets/icon/Rectangle.svg";

const Basket = () => {
  const deliveryCost = 160;

  const items = [
    {
      id: 1,
      title: "Гордость и предубеждения",
      author: "Джейн Остин",
      price: 240,
      quantity: 1,
      image: Img,
    },
    {
      id: 2,
      title: "Гордость и предубеждения",
      author: "Джейн Остин",
      price: 240,
      quantity: 1,
      image: Img,
    },
    {
      id: 3,
      title: "Гордость и предубеждения",
      author: "Джейн Остин",
      price: 480,
      quantity: 2,
      image: Img,
    },
  ];
  const [clickedItems, setClickedItems] = useState({});

  const total =
    items.reduce(
      (sum, item) => (clickedItems[item.id] ? sum + item.price : sum),
      0
    ) + deliveryCost;

  const togglePurchase = (id) => {
    setClickedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  return (
    <>
      <Header />
      <main>
        <div className={s.main__wrapper}>
          <p className={s.main__wrapper__title}>Корзина товаров</p>
          <div className={s.main__content}>
            <div className={s.main__content__carts}>
              {items.map((item) => (
                <div key={item.id} className={s.main__content__carts__item}>
                  <button className={s.carts__item__delete}>
                    <img src={Delete} alt="удалить товар" />
                  </button>
                  <div className={s.carts__item__info}>
                    <img src={item.image} alt="картинка товара" />
                    <div className={s.carts__item__info__text}>
                      <label className={s.item__info__text__title}>
                        {item.title}
                      </label>
                      <label className={s.item__info__text__autor}>
                        Автор : {item.author}
                      </label>
                      <label className={s.item__info__text__presence}>
                        Количество : {item.quantity}
                      </label>
                    </div>
                  </div>

                  <p className={s.carts__item__price}>
                    {item.price} сом
                  </p>
                  <div className={s.carts__item__btn}>
                    {!clickedItems[item.id] ? (
                      <button
                        onClick={() => togglePurchase(item.id)}
                        className={s.carts__item__btn__dutton}
                      >
                        Купить
                      </button>
                    ) : (
                      <img
                        onClick={() => togglePurchase(item.id)}
                        src={Rectangle}
                        className={s.carts__item__btn__img}
                        alt="Куплено"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className={s.main__content__price}>
              <div className={s.main__content__price__wrapper}>
                <div className={s.main__content__price__info}>
                  <p>Стоимость доставки : 160 сом</p>
                  <p>Итого к оплате : {total} сом</p>
                </div>
                <Link to="/order" className={s.main__content__price__btn}>
                  Оформить заказ
                </Link>
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

export default Basket;
