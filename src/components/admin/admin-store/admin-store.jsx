import { useEffect, useState } from "react";
import OrderContentsCard from "../../order-contents-card/order-contents-card";
import s from "./admin-store.module.css";
import Arrow from "../../../assets/icon/arrow.svg";
import { getDataAllUsers } from "../../../store/admin-store/admin-store";

const AdminStore = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [visibleLists, setVisibleLists] = useState([]);

  const { getAllUsers, users, isFetch } = getDataAllUsers();

  useEffect(() => {
    getAllUsers();
  }, [getAllUsers]);

  useEffect(() => {
    if (users.length > 0) {
      const orders = users
        .filter(user => user.orders) 
        .flatMap(user => user.orders);
      setAllOrders(orders);
      setVisibleLists(Array(orders.length).fill(false));
    }
  }, [users]);

  const toggleListVisibility = (index) => {
    setVisibleLists((prev) => {
      const newVisibleLists = [...prev];
      newVisibleLists[index] = !newVisibleLists[index];
      return newVisibleLists;
    });
  };

  if (allOrders.length === 0) {
    return <p>Нет доступных заказов</p>;
  }
  return (
    <>
      <main className={s.main}>
        {isFetch ? (
          <h4>Загрузка...</h4>
        ) : allOrders.map((order, index) => (
        <div key={order.id || index} className={s.story__wrapper}>
          <div className={s.story__info}>
            <div className={s.stoey__info_text_info}>
              <div className={s.stoey__info_text}>
                <p>Дата:</p>
                <h4>{order.date || ''}</h4>
              </div>
              <div className={s.stoey__info_text}>
                <p>Номер заказа:</p>
                <h4>{order.numberOrder || 'не указан'}</h4>
              </div>
              <div className={s.stoey__info_text}>
                <p>Кол-во товаров:</p>
                <h4>{order.productData.reduce((total, product) => total + product.quantity, 0)}</h4>
              </div>
              <div className={s.stoey__info_text}>
                <p>На сумму:</p>
                <h4>{order.productData.reduce((sum, product) => sum + product.totalPrice, 0)}</h4>
              </div>
              <div className={s.stoey__info_text}>
                <p>Статус:</p>
                <p>В обработке</p>
              </div>
              <div
                className={s.stoey__info_text}
                onClick={() => toggleListVisibility(index)}
              >
                <img
                  src={Arrow}
                  className={visibleLists[index] ? s.rotate : s.noyrotate}
                />
              </div>
            </div>
            {visibleLists[index] && (
              <div className={s.story__data}>
                <div className={s.story__info_order}>
                  <div className={s.information}>
                    <h3 className={s.information__title}>
                      Информация о заказе
                    </h3>
                    <div className={s.information__block}>
                      <div className={s.information__block_item}>
                        <p>Номер заказа:</p>
                        <h4>{order.numberOrder}</h4>
                      </div>
                      <div className={s.information__block_item}>
                        <p>Адрес:</p>
                        <h4>{order.userInfo.city}-{order.userInfo.street}</h4>
                      </div>
                      <div className={s.information__block_item}>
                        <p>Сумма заказа:</p>
                        <h4>{order.productData.reduce((sum, product) => sum + product.totalPrice, 0)}</h4>
                      </div>
                    </div>
                  </div>
                  <div className={s.information}>
                    <h3 className={s.information__title}>Контактное лицо</h3>
                    <div className={s.information__block}>
                      <div className={s.information__block_item}>
                        <p>ФИ</p>
                        <h4>{order.userInfo.name || 'не указан'}</h4>
                      </div>
                      <div className={s.information__block_item}>
                        <p>Телефон</p>
                        <h4>{order.userInfo.phone || 'не указан'}</h4>
                      </div>
                      <div className={s.information__block_item}>
                        <p>Эл. почта</p>
                        <h4>{order.userInfo.email || 'не указан'}</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={s.content}>
                  <div className={s.content__title}>Содержимое заказа</div>
                  <div className={s.content__wrapper}>
                    <div className={s.content__info_block}>
                      <h4>Содержимое заказа</h4>
                      <div className={s.content__info_block_items}>
                        <p>Цена</p>
                        <p>Количество</p>
                        <p>Стоимость</p>
                      </div>
                    </div>
                    <div className={s.content__cards}>
                      {order.productData.map((product, index) => (
                          <OrderContentsCard 
                          key={product.id || index}
                          article={product.article}
                          autor={product.autor}
                          price={product.price}
                          quantity={product.quantity}
                          result={product.totalPrice}
                          title={product.name}
                          img={product.img}
                          />
                        ))}
                    </div>
                  </div>
                </div>
                <div className={s.delivery}>
                  <h4>Статус заказа</h4>
                <select>
                  <option value="В обработке">В обработке</option>
                  <option value="Прибыл на склад">Прибыл на склад</option>
                  <option value="Получен">Получен</option>
                </select>
                </div>
              </div>
            )}
          </div>
        </div>
        )) }
      </main>
    </>
  );
};
export default AdminStore;
