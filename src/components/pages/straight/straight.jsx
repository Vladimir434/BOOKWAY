import s from "./straight.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import BgImage from "../../../assets/image/main-image-1.svg";
import Art from "../../../assets/image/art.svg";
import { productDetails } from "../../../store/product-details/product-details";
import { toast } from "react-toastify";

const Straight = () => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate()
  const selectedProduct = productDetails((state) => state.selectedProduct);
  const addProductInOrders = productDetails((state) => state.addProductInOrders)
  const isFetchAddOrder = productDetails((state) => state.isFetchAddOrder)
  const changeQuantity = (amount) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };

  useEffect(() => {
    if (!selectedProduct) {
      const savedProduct = JSON.parse(localStorage.getItem("selectedProduct"));
      if (savedProduct) {
        productDetails.getState().setSelectedProduct(savedProduct);
      }
    }
  }, [selectedProduct]);

  const handleAddOrder = async (e) => {
    e.preventDefault();

    const totalPrice = selectedProduct?.price * quantity;

    const dataProduct = {
      img:selectedProduct?.images[0].img,
      autor:selectedProduct?.autor,
      quantity:quantity,
      totalPrice: totalPrice,
      name:'Viltor',
      email:'Leon'
    }
    
    try {
      await addProductInOrders(dataProduct)
      toast('Вы успешно заказали товар')
    } catch (error) {
      console.log(error);
      toast('Ошибка при добавлении заказа');
    }
  }
  return (
    <>
      <main style={{ backgroundImage: `url(${BgImage})` }} className={s.main}>
        <div className={s.main__wrapper}></div>
        <div className={s.main__form__wrapper}>
        <button onClick={() => navigate(-1)}>Back</button>
          <h1 className={s.main__form__title}>Купить в 1 клик</h1>
          <div className={s.main__form__inner}>
            <div className={s.form__inner__img__wrapper}>
              <img src={selectedProduct?.images[0].img} className={s.main__form__inner__img} />
            </div>
            <div className={s.main__form__description}>
              <div className={s.product__description__art}>
                <label className={s.product__description__art__title}>
                  <img src={Art} /> В наличии
                </label>
                <label>Артикул: {selectedProduct?.article}</label>
              </div>
              <h3 className={s.main__form__description__section1}>
                {selectedProduct?.name}
              </h3>
              <p className={s.main__form__description__section2}>
                Автор: {selectedProduct?.autor}
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
                  {selectedProduct?.price * quantity} сом
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
                className={s.main__form__section__input}
              />
            </div>
            <button className={s.main__form__button__link} onClick={handleAddOrder}>
              {isFetchAddOrder ? 'добавляем...' : 'Оформить заказ'}
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Straight;
