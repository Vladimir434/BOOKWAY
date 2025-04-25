import s from "./admin-products.module.css";
import Delete from "../../../assets/icon/close cross.svg";
import { useProductStore } from "../../../store/admin-store-products/admin-store-products";
import { useEffect } from "react";

const AdminProducts = () => {
  const {
    products,
    isLoading,
    deleteProduct,
    updateProductPresence,
    subscribeToProducts
  } = useProductStore();

  useEffect(() => {
    const unsubscribe = subscribeToProducts();
    return () => unsubscribe();
  }, [subscribeToProducts]);

  const handlePresenceChange = (productId, presence) => {
    updateProductPresence(productId, presence);
  };

  return (
    <main className={s.main}>
      <div className={s.main__content}>
        {isLoading ? (
          <h4>Загрузка...</h4>
        ) : products.length > 0 ? (
          products.map((prod) => (
            <div key={prod.id} className={s.main__content__item}>
              <button className={s.carts__item__delete}>
                <img
                  src={Delete}
                  onClick={() => deleteProduct(prod.id)}
                  alt="удалить товар"
                />
              </button>

              <div className={s.block__image}>
                <img src={prod.images[0].img} alt="book" />
              </div>

              <div className={s.item__info__text}>
                <label className={s.item__info__text__title}>{prod.name}</label>
                <label className={s.item__info__text__autor}>
                  Автор: {prod.autor}
                </label>
                <label className={s.item__info__text__presence}>
                  Артикул: {prod.article}
                </label>
              </div>

              <div className={s.presenceToggle}>
              <div className={`${s.presenceStatus} ${prod.presence ? s.available : s.unavailable}`}>
                {prod.presence ? '✓ В наличии' : '✗ Нет в наличии'}
              </div>
                <button
                  className={`${s.toggleButton} ${prod.presence ? s.active : ''}`}
                  onClick={() => handlePresenceChange(prod.id, true)}
                >
                  В наличии
                </button>
                <button
                  className={`${s.toggleButton} ${!prod.presence ? s.active : ''}`}
                  onClick={() => handlePresenceChange(prod.id, false)}
                >
                  Нет в наличии
                </button>
              </div>

            </div>
          ))
        ) : (
          <h4>Тут нет товаров</h4>
        )}
      </div>
    </main>
  );
};

export default AdminProducts;