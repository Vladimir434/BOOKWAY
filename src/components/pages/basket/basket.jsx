import s from "./basket.module.css";
import Header from "../../header/header";
import Reviews from "../../Reviews/reviews";
import Footer from "../../footer/footer";
import { useEffect, useState } from "react";
import Delete from "../../../assets/icon/close cross.svg";
import Img from "../../../assets/image/1.webp";
import Rectangle from "../../../assets/icon/Rectangle.svg";
import { useCartStore } from "../../../store/basket-store/basket-store";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../utils/firebase/firebase-config";
import { toast } from "react-toastify";

const Basket = () => {
  const deliveryCost = 160;
  const { cart, fetchCart, isFetch, removeFromCart, addProductOrder } = useCartStore();
  const [user, setUser] = useState(null);
  const [clickedItems, setClickedItems] = useState({});
  const [quantitys, setQuantitys] = useState({});
  const [isOrderProcessing, setIsOrderProcessing] = useState(false);

  const changeQuantity = (id, amount) => {
    setQuantitys(prev => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + amount)
    }))
  }

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
      if (!clickedItems[item.id]) return sum;
      const price = Number(item.price);
      const quantity = quantitys[item.id] || 1;
      return isNaN(price) ? sum : sum + (price * quantity)
    }, 0
  ) + deliveryCost;

  const togglePurchase = (id) => {
    setClickedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleAddOrder = async () => {
    if (!user) return;

    const selectedProducts = cart
      .filter(item => clickedItems[item.id])
      .map(item => {
        const quantity = quantitys[item.id] || 1;
        const price = Number(item.price);
        return {
          name: item.name,
          img: item?.images?.[0]?.img,
          autor: item?.autor,
          quantity: quantity,
          totalPrice: price * quantity,
          price: price, 
          article:item?.article,
        }
      });

    if (selectedProducts.length === 0) {
      toast("Выберите товары для заказа");
      return;
    }
    setIsOrderProcessing(true)
    try {
      console.log("Отправляемые товары:", selectedProducts);
      await addProductOrder(selectedProducts);
      toast.success("Заказ успешно оформлен!");
      
      setClickedItems({});
      setQuantitys({});
    } catch (error) {
      toast.error("Ошибка при оформлении заказа");
    } finally{
      setIsOrderProcessing(false)
    }
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
                        <label className={s.item__info__text__title}>{item?.name}</label>
                        <label className={s.item__info__text__autor}>
                          Автор : {item?.autor}
                        </label>
                        <label className={s.item__info__text__presence}>
                          Количество : 
                          <div className={s.block__presence}>
                            <button onClick={() => changeQuantity(item.id, -1)}>-</button> 
                            {quantitys[item.id] || 1} 
                            <button onClick={() => changeQuantity(item.id, 1)}>+</button>
                          </div>
                        </label>
                      </div>
                    </div>
                    <p className={s.carts__item__price}>{item?.price} сом</p>
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
                <p className={s.emptyCart}>Тут пока нет заказов</p>
              )}
            </div>
            {user && cart.length > 0 && !isFetch && (
              <div className={s.main__content__price}>
                <div className={s.main__content__price__wrapper}>
                  <div className={s.main__content__price__info}>
                    <p>Стоимость доставки : {deliveryCost} сом</p>
                    <p>Итого к оплате : {total} сом</p>
                  </div>
                  <button 
                    className={s.main__content__price__btn}
                    onClick={handleAddOrder}
                    disabled={isOrderProcessing}
                  >
                    {isOrderProcessing ? 'Оформляем...' : 'Оформить заказ'}
                  </button>
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