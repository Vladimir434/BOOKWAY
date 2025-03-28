import { useEffect , useState} from 'react'
import { useRroductsStore } from '../../../store/products-store/products-store'
import OrderContentsCard from '../../order-contents-card/order-contents-card'
import s from './admin-story.module.css'
import Arrow from "../../assets/icon/arrow.svg";

const AdminStore = () => {
  const {getAllProducts, product} = useRroductsStore()
  useEffect(() => {
    getAllProducts()
  },[getAllProducts])

  const [visibleLists, setVisibleLists] = useState(Array(1).fill(false));
  const toggleListVisibility = (index) => {
    setVisibleLists((prev) => {
      const newVisibleLists = [...prev];
      newVisibleLists[index] = !newVisibleLists[index];
      return newVisibleLists;
    });
  };

  return (
    <>
    
    <main className={s.main}>
      <div className={s.story__wrapper}>
        <div className={s.story__info}>
          <div className={s.stoey__info_text_info}>
            <div className={s.stoey__info_text}>
              <p>Дата:</p>
              <h4>34567890-</h4>
            </div>
            <div className={s.stoey__info_text}>
              <p>Номер заказа:</p>
              <h4>949485</h4>
            </div>
            <div className={s.stoey__info_text}>
              <p>Кол-во товаров:</p>
              <h4>3</h4>
            </div>
            <div className={s.stoey__info_text}>
              <p>На сумму:</p>
              <h4>8000 сом</h4>
            </div>
            <div className={s.stoey__info_text}>
              <p>Статус:</p>
              <h4>Получен</h4>
            </div>
            <div className={s.stoey__info_text}  onClick={() => toggleListVisibility(0)}>
              <img src={Arrow} className={visibleLists[0] ? s.rotate : s.noyrotate}/>
            </div>
          </div>
          {visibleLists[0] && (
            <div className={s.story__data}>
            <div className={s.story__info_order}>
              <div className={s.information}>
                <h3 className={s.information__title}>Информация о заказе</h3>
                <div className={s.information__block}>
                  <div className={s.information__block_item}>
                    <p>Номер заказа:</p>
                    <h4>11366 от 11.01.2025, 20:56:40</h4>
                  </div>
                  <div className={s.information__block_item}>
                    <p>Адрес:</p>
                    <h4>Г. Кара-Балта , Косманавтов 62</h4>
                  </div>
                  <div className={s.information__block_item}>
                    <p>Сумма заказа:</p>
                    <h4>1080 сом</h4>
                  </div>
                </div>
              </div>
              <div className={s.information}>
                <h3 className={s.information__title}>Контактное лицо</h3>
                <div className={s.information__block}>
                  <div className={s.information__block_item}>
                    <p>ФИ</p>
                    <h4>Кальнева Ангелина </h4>
                  </div>
                  <div className={s.information__block_item}>
                    <p>Телефон</p>
                    <h4>+996708107436</h4>
                  </div>
                  <div className={s.information__block_item}>
                    <p>Эл. почта</p>
                    <h4>linakalneva@gmail.com</h4>
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
                    {product.map((item, index) => (
                      <>
                    <OrderContentsCard 
                    key={index}
                    img={item.image}
                    article={'2343242'} 
                    autor={item.autor} 
                    price={item.price}
                    quantity={'4'}
                    result={3456}
                    title={item.name}  
                    />
                    <OrderContentsCard 
                    key={index}
                    img={item.image}
                    article={'2343242'} 
                    autor={item.autor} 
                    price={item.price}
                    quantity={'4'}
                    result={3456}
                    title={item.name}  
                    />
                    <OrderContentsCard 
                    key={index}
                    img={item.image}
                    article={'2343242'} 
                    autor={item.autor} 
                    price={item.price}
                    quantity={'4'}
                    result={3456}
                    title={item.name}  
                    />
                    </>
                    ))}
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
     </main>
   </>
  )
}
export default AdminStore