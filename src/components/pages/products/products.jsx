import { useState } from "react";
import Header from "../../header/header";
import s from "./products.module.css";
import Arrow from "../../../assets/icon/arrow.svg";
import CardProducts from "../../card-products/card-products";

const Products = () => {
  const [visibleLists, setVisibleLists] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const toggleListVisibility = (index) => {
    setVisibleLists((prev) => {
      const newVisibleLists = [...prev];
      newVisibleLists[index] = !newVisibleLists[index];
      return newVisibleLists;
    });
  };

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
                        <input type="numder" placeholder="До" />
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
          <div className={s.container__products}>
            <CardProducts />
            <CardProducts />
            <CardProducts />
            <CardProducts />
            <CardProducts />
            <CardProducts />
            <CardProducts />
            <CardProducts />
          </div>
        </div>
      </main>
    </>
  );
};

export default Products;
