import { useEffect, useState } from "react";
import Header from "../../header/header";
import s from "./products.module.css";
import Arrow from "../../../assets/icon/arrow.svg";
import CardProducts from "../../card-products/card-products";
import { useRroductsStore } from "../../../store/products-store/products-store";
import { motion } from "framer-motion";
const Products = () => {
  const [visibleLists, setVisibleLists] = useState(Array(8).fill(false));
  const [activePanel, setActivePanel] = useState(null)
  const { product, isFetch, getAllProducts } = useRroductsStore();

  const toggleListVisibility = (index) => {
    setVisibleLists((prev) => {
      const newVisibleLists = [...prev];
      newVisibleLists[index] = !newVisibleLists[index];
      return newVisibleLists;
    });
  };
  useEffect(() => {
    getAllProducts();
  }, [getAllProducts])

  useEffect(() => {
    if (activePanel !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [activePanel])

  return (
    <>
      <Header />
      <main className={s.main__container}>
        <h1 className={s.main__title}>Категории</h1>
        <div className={s.wrapper__categories__products}>
          <div className={s.container__categories__filters}>
            <div className={s.categories__container}>
              <div className={s.categories__item}>
                <h3
                  className={s.categories__title}
                  onClick={() => toggleListVisibility(0)}
                >
                  Нон - фикшен
                  <img
                    src={Arrow}
                    alt="arrow"
                    className={visibleLists[0] ? s.rotate : ""}
                  />
                </h3>
                {visibleLists[0] && (
                  <ul>
                    <li>Психология и саморазвитие</li>
                    <li>Нунчпон</li>
                    <li>Красота и здоровье</li>
                    <li>История</li>
                    <li>Публицистика</li>
                    <li>Философия</li>
                    <li>IT</li>
                    <li>Биографии и мемуары</li>
                    <li>Искусство и культура</li>
                  </ul>
                )}
              </div>
              <div className={s.categories__item}>
                <h3
                  className={s.categories__title}
                  onClick={() => toggleListVisibility(1)}
                >
                  Детям и родителям
                  <img
                    src={Arrow}
                    alt="arrow"
                    className={visibleLists[1] ? s.rotate : ""}
                  />
                </h3>
                {visibleLists[1] && (
                  <ul>
                    <li>Позновательная литература</li>
                    <li>Художественная литература</li>
                    <li>Воспитание детей</li>
                    <li>Здоровье детей</li>
                  </ul>
                )}
              </div>
              <div className={s.categories__item}>
                <h3
                  className={s.categories__title}
                  onClick={() => toggleListVisibility(2)}
                >
                  Художесвенная литература
                  <img
                    src={Arrow}
                    alt="arrow"
                    className={visibleLists[2] ? s.rotate : ""}
                  />
                </h3>
                {visibleLists[2] && (
                  <ul>
                    <li>Проза</li>
                    <li>Комиксы и манга</li>
                    <li>Фонтастика</li>
                    <li>Поэзия</li>
                    <li>Детиктивы и триллеры</li>
                    <li>Мистика</li>
                  </ul>
                )}
              </div>
              <div className={s.categories__item}>
                <h3
                  className={s.categories__title}
                  onClick={() => toggleListVisibility(3)}
                >
                  Бизнес литература
                  <img
                    src={Arrow}
                    alt="arrow"
                    className={visibleLists[3] ? s.rotate : ""}
                  />
                </h3>
                {visibleLists[3] && (
                  <ul>
                    <li>Биографии и истории успеха</li>
                    <li>Менеджмент и управление</li>
                    <li>Маркетинг и продажи</li>
                    <li>Экономика</li>
                    <li>Финансы и инвестиция</li>
                    <li>Переговоры и публичные выступления</li>
                  </ul>
                )}
              </div>
            </div>
            <div className={s.filter_containet}>
              <h3 className={s.filter__title} onClick={() => toggleListVisibility(4)}>Фильтры<img src={Arrow} alt="arrow" className={visibleLists[4] ? s.rotate : ""} /></h3>
              {visibleLists[4] && (
                <>
                  <div className={s.filter__item}>
                    <h4 className={s.filter__item__title}>Цена</h4>
                    <>
                      <div className={s.filter__item__block_input}>
                        <input type="number" placeholder="От" />
                        <div className={s.hyphen}></div>
                        <input type="number" placeholder="До" />
                      </div>
                      <button>Применить</button>
                    </>
                  </div>
                  <div className={s.filter__item}>
                    <h4
                      onClick={() => toggleListVisibility(5)}
                      className={s.filter__item__title}
                    >
                      Издательство
                      <img
                        src={Arrow}
                        alt="arrow"
                        className={visibleLists[5] ? s.rotate : ""}
                      />
                    </h4>
                    {visibleLists[5] && (
                      <ul>
                        <li>АСТ</li>
                        <li>Эскимо</li>
                        <li>Комильфо</li>
                        <li>Мохаон</li>
                        <li>Азбука</li>
                        <li>Бомбора</li>
                        <li>Монн , Иванов и Фербер</li>
                      </ul>
                    )}
                  </div>
                  <div className={s.filter__item}>
                    <h4
                      onClick={() => toggleListVisibility(6)}
                      className={s.filter__item__title}
                    >
                      Тип обложки
                      <img
                        src={Arrow}
                        alt="arrow"
                        className={visibleLists[6] ? s.rotate : ""}
                      />
                    </h4>
                    {visibleLists[6] && (
                      <ul>
                        <li>Твердый переплет</li>
                        <li>Мягкая обложка</li>
                      </ul>
                    )}
                  </div>
                  <div className={s.filter__item}>
                    <h4
                      onClick={() => toggleListVisibility(7)}
                      className={s.filter__item__title}
                    >
                      Автор
                      <img
                        src={Arrow}
                        alt="arrow"
                        className={visibleLists[7] ? s.rotate : ""}
                      />
                    </h4>
                    {visibleLists[7] && (
                      <ul>
                        <li>Джо Наверро</li>
                        <li>Джейн Остин</li>
                        <li>Кори Альтхофф</li>
                        <li>Брюс Тулгон</li>
                        <li>Аристотель</li>
                        <li>Дин Кунц</li>
                        <li>Дж. К. Роулинг</li>
                        <li>Мосян Тунсю</li>
                        <li>Колин Маккалоу</li>
                        <li>Дэшнур Джеймс</li>
                        <li>Санто Версаче</li>
                        <li>Ульям Шекспир</li>
                      </ul>
                    )}
                  </div>

                </>
              )}
            </div>
          </div>
          <div className={s.container__products_wrapper}>
            <div className={s.container__filters}>
              <button onClick={() => setActivePanel(activePanel === 'panel1' ? false : 'panel1')} >Категория</button>
              <button onClick={() => setActivePanel(activePanel === 'panel2' ? false : 'panel2')}>Фильтры</button>
              <motion.div
                initial={{ x: '200%' }}
                animate={{ x: activePanel === 'panel1' ? 0 : '200%' }}
                transition={{ duration: 0.3 }}
                className={s.active__panel}
                onClick={(event) => event.stopPropagation()}
              >
                <button onClick={() => setActivePanel(null)}>Close</button>
                <h1>Список</h1>
                <ul>
                  <li>Элемент 1</li>
                  <li>Элемент 2</li>
                  <li>Элемент 3</li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ x: '200%' }}
                animate={{ x: activePanel === 'panel2' ? 0 : '200%' }}
                transition={{ duration: 0.3 }}
                className={s.active__panel}
                onClick={(event) => event.stopPropagation()}
              >
                <button type="button" onClick={() => setActivePanel(null)}>Close</button>
                <h1>Список</h1>
                <ul>
                  <li>Элемент 4</li>
                  <li>Элемент 5</li>
                  <li>Элемент 6</li>
                </ul>
              </motion.div>
              {activePanel && (
                <div
                  onClick={() => setActivePanel(false)}
                  className={s.blur_body}
                ></div>
              )}
              <select className={s.select}>
                <option value="#">Сортировка</option>
                <option value="#">По возрастанию цен</option>
                <option value="#">По убыванию цен</option>
                <option value="#">Новые</option>
                <option value="#">По названию</option>
              </select>
            </div>
            <div className={s.container__products}>
              {/* {Array(6).fill(
              <CardProducts
                autor={'Vladimir'}
                img={Arrow}
                presence={'не в наличии'}
                description={'loiuy ksdin isdnfijsn isdnfisjnf'}
                price={'1345'}
                article={'ASLOT2AS'}
              />
            )} */}
              {isFetch ? (
                <h2 className={s.loading}>Loading...</h2>
              ) : product.length > 0 ? (
                product.map((item) => (
                  <CardProducts
                    key={item.id}
                    img={item.image}
                    isAvialiable={item.isAvialiable}
                    article={item.article}
                    autor={item.autor}
                    description={item.descr}
                    price={item.age} />
                ))
              ) : (
                <h1 className={s.loading}>тут нет товаров</h1>
              )}
            </div>
          </div>
        </div>
      </main >
    </>
  );
};

export default Products;
