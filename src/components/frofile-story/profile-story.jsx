import { useEffect, useState } from 'react'
import OrderContentsCard from '../order-contents-card/order-contents-card'
import s from './profile-story.module.css'
import Arrow from "../../assets/icon/arrow.svg";
import { getUserOrders } from '../../store/profile-story/profile-story';

const ProfileStory = () => {
  const { orders, isFetch, getOrders } = getUserOrders()
  
  useEffect(() => {
    getOrders()
  }, [getOrders])

  const [visibleLists, setVisibleLists] = useState(Array(1).fill(false));

  useEffect(() => {
    setVisibleLists(Array(orders.length).fill(false))
  },[orders.length])

  const toggleListVisibility = (index) => {
    setVisibleLists((prev) => {
      const newVisibleLists = [...prev];
      newVisibleLists[index] = !newVisibleLists[index];
      return newVisibleLists;
    });
  };

  return (
    <main className={s.main}>
      {isFetch ? (
        <h4 className={s.loading}>Загрузка...</h4>
      ) : orders.length > 0 ? (
        orders.map((item, index) => (
          <div key={index} className={s.story__wrapper}>
            <div className={s.story__info}>
              <div className={s.stoey__info_text_info}>
                <div className={s.stoey__info_text}>
                  <p>Дата:</p>
                  <h4>{item.date}</h4>
                </div>
                <div className={s.stoey__info_text}>
                  <p>Номер заказа:</p>
                  <h4>{item.numberOrder || 'не указан'}</h4>
                </div>
                <div className={s.stoey__info_text}>
                  <p>Кол-во товаров:</p>
                  <h4>{item.productData.reduce((total, product) => total + product.quantity, 0)}</h4>
                </div>
                <div className={s.stoey__info_text}>
                  <p>На сумму:</p>
                  <h4>{item.productData.reduce((sum, product) => sum + product.totalPrice, 0)}</h4>
                </div>
                <div className={s.stoey__info_text}>
                  <p>Статус:</p>
                  <h4>в обработке</h4>
                </div>
                <div className={s.stoey__info_text} onClick={() => toggleListVisibility(index)}>
                  <img src={Arrow} className={visibleLists[index] ? s.rotate : s.noyrotate} />
                </div>
              </div>
              {visibleLists[index] && (
                <div className={s.story__data}>
                  <div className={s.story__info_order}>
                    <div className={s.information}>
                      <h3 className={s.information__title}>Информация о заказе</h3>
                      <div className={s.information__block}>
                        <div className={s.information__block_item}>
                          <p>Номер заказа:</p>
                          <h4>{item.numberOrder || 'не указан'}</h4>
                        </div>
                        <div className={s.information__block_item}>
                          <p>Адрес:</p>
                          <h4>{item.userInfo.city}-{item.userInfo.street}</h4>
                        </div>
                        <div className={s.information__block_item}>
                          <p>Сумма заказа:</p>
                          <h4>{item.productData.reduce((sum, product) => sum + product.totalPrice, 0)}</h4>
                        </div>
                      </div>
                    </div>
                    {/* Остальной код без изменений */}
                    <div className={s.information}>
                      <h3 className={s.information__title}>Контактное лицо</h3>
                      <div className={s.information__block}>
                        <div className={s.information__block_item}>
                          <p>ФИ</p>
                          <h4>{item.userInfo.name || 'не указано'}</h4>
                        </div>
                        <div className={s.information__block_item}>
                          <p>Телефон</p>
                          <h4>{item.userInfo.phone || 'не указано'}</h4>
                        </div>
                        <div className={s.information__block_item}>
                          <p>Эл. почта</p>
                          <h4>{item.userInfo.email}</h4>
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
                        {item.productData.length > 0 ? (
                          item.productData.map((product, idx) => (
                            <OrderContentsCard 
                              key={idx}
                              article={product.article || 'AAS34PI5'}
                              autor={product.autor}
                              price={product.price}
                              quantity={product.quantity}
                              result={product.totalPrice}
                              title={product.name}
                              img={product.img}
                            />
                          ))
                        ) : (
                          <h4>тут нет товаров</h4>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className={s.delivery}>
                    <h4>Доставка</h4>
                    <h4>160 сом</h4>
                  </div>
                  <div className={s.delivery}>
                    <h4>Статус заказа</h4>
                    <h4>Получен</h4>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))
      ) : (
        <h4 className={s.load_info}>тут не чего нет</h4>
      )}
    </main>
  )
}

export default ProfileStory