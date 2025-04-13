import s from "./basket.module.css";
import Header from "../../header/header";
import Reviews from "../../Reviews/reviews";
import Footer from "../../footer/footer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Delete from "../../../assets/icon/close cross.svg";
import Img from "../../../assets/image/1.webp";
import Rectangle from "../../../assets/icon/Rectangle.svg";
import { useCartStore } from "../../../store/basket-store/basket-store";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../utils/firebase/firebase-config";

const Basket = () => {
  const deliveryCost = 160;
  const { cart, fetchCart, isFetch, removeFromCart } = useCartStore();
  const [user, setUser] = useState(null);
  const [clickedItems, setClickedItems] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        await fetchCart();
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [fetchCart]);

  const total = cart.reduce(
    (sum, item) => { 
    if(!clickedItems[item.id]) return  sum;
    const price = Number(item.price);
    return isNaN(price) ? sum : sum + price
    },0
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
              {!user ? (
                <p className={s.emptyCart}>Войдите, чтобы увидеть корзину</p>
              ) : isFetch ? (
                <p className={s.loading}>Загрузка...</p>
              ) : cart.length > 0 ? (
                cart.map((item) => (
                  <div key={item.id} className={s.main__content__carts__item}>
                    <button
                      className={s.carts__item__delete}
                      onClick={() => removeFromCart(item.id)}
                    >
                      <img src={Delete} alt="удалить товар" />
                    </button>
                    <div className={s.carts__item__info}>
                      <img src={item?.images?.[0]?.img || Img} alt="картинка товара" />
                      <div className={s.carts__item__info__text}>
                        <label className={s.item__info__text__title}>{item.title}</label>
                        <label className={s.item__info__text__autor}>
                          Автор : {item.author}
                        </label>
                        <label className={s.item__info__text__presence}>
                          Количество : {item.quantity}
                        </label>
                      </div>
                    </div>
                    <p className={s.carts__item__price}>{item.price} сом</p>
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
                ))
              ) : (
                <p className={s.emptyCart}>Тут ничего нет</p>
              )}
            </div>
            {user && cart.length > 0 && !isFetch && (
              <div className={s.main__content__price}>
                <div className={s.main__content__price__wrapper}>
                  <div className={s.main__content__price__info}>
                    <p>Стоимость доставки : {deliveryCost} сом</p>
                    <p>Итого к оплате : {total} сом</p>
                  </div>
                  <Link to="/order" className={s.main__content__price__btn}>
                    Оформить заказ
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Reviews />
      <Footer />
    </>
  );
};

export default Basket;
