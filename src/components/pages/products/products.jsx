import Header from "../../header/header";
import Reviews from "../../Reviews/reviews";
import Footer from "../../footer/footer";
import s from "./products.module.css";
import Arrow from "../../../assets/icon/arrow.svg";
import FistCross from "../../../assets/icon/fist-cross.svg";
import CardProducts from "../../card-products/card-products";
import { useRroductsStore } from "../../../store/products-store/products-store";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SkeletonCard from "../../skeleton/skeleton";

const CATEGORIES_DATA = [
  
  {
    name: "Нон-фикшен",
    items: [
      "Психология и саморазвитие",
      "Нунчпон",
      "Красота и здоровье",
      "История",
      "Публицистика",
      "Философия",
      "IT",
      "Биографии и мемуары",
      "Искусство и культура"
    ]
  },
  {
    name: "Детям и родителям",
    items: [
      "Познавательная литература",
      "Художественная литература",
      "Воспитание детей",
      "Здоровье детей"
    ]
  },
  {
    name: "Художественная литература",
    items: [
      "Проза",
      "Комиксы и манга",
      "Фантастика",
      "Поэзия",
      "Детективы и триллеры",
      "Мистика"
    ]
  },
  {
    name: "Бизнес литература",
    items: [
      "Биографии и истории успеха",
      "Менеджмент и управление",
      "Маркетинг и продажи",
      "Экономика",
      "Финансы и инвестиции",
      "Переговоры и публичные выступления"
    ]
  }
];

const FILTERS_DATA = [
  
  {
    name: "Цена",
    type: "range",
    inputs: [
      { placeholder: "От" },
      { placeholder: "До" }
    ]
  },
  {
    name: "Издательство",
    type: "list",
    items: [
      "АСТ", "Эскимо", "Комильфо", "Мохаон",
      "Азбука", "Бомбора", "Монн , Иванов и Фербер"
    ]
  },
  {
    name: "Тип обложки",
    type: "list",
    items: [
      "Твердый переплет",
      "Мягкая обложка"
    ]
  },
  {
    name: "Автор",
    type: "list",
    items: [
      "Джо Наверро", "Джейн Остин", "Кори Альтхофф", "Брюс Тулгон",
      "Аристотель", "Дин Кунц", "Дж. К. Роулинг", "Мосян Тунсю",
      "Колин Маккалоу", "Дэшнур Джеймс", "Санто Версаче", "Ульям Шекспир"
    ]
  }
];

const Products = () => {
  const [visibleLists, setVisibleLists] = useState(Array(8).fill(false));
  const [activePanel, setActivePanel] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const { product, isFetch, getAllProducts } = useRroductsStore();

  const filteredProducts = selectedCategories.length > 0
    ? product.filter(item =>
      item.category &&
      item.category.some(cat => selectedCategories.includes(cat))
    )
    : product;

  const handleCategorySelect = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleListVisibility = (index) => {
    setVisibleLists(prev => {
      const newVisibleLists = [...prev];
      newVisibleLists[index] = !newVisibleLists[index];
      return newVisibleLists;
    });
  };

  useEffect(() => {
    getAllProducts();
  }, [getAllProducts]);

  useEffect(() => {
    if (activePanel !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activePanel]);

  const renderCategories = (categories, offset = 0) => (
    <div className={s.categories__container}>
      {categories.map((category, index) => (
        <div key={category.name} className={s.categories__item}>
          <h3
            className={s.categories__title}
            onClick={() => toggleListVisibility(index + offset)}
          >
            {category.name}
            <img
              src={Arrow}
              alt="arrow"
              className={visibleLists[index + offset] ? s.rotate : ""}
            />
          </h3>
          {visibleLists[index + offset] && (
            <ul>
              {category.items.map(item => (
                <li
                  key={item}
                  onClick={() => handleCategorySelect(item)}
                  className={selectedCategories.includes(item) ? s.selected__сategory : ""}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );

  const renderFilters = (filters, offset = 4) => (
    <>
      {filters.map((filter, index) => (
        <div key={filter.name} className={s.filter__item}>
          <h4
            onClick={() => toggleListVisibility(index + offset)}
            className={s.filter__item__title}
          >
            {filter.name}
            <img
              src={Arrow}
              alt="arrow"
              className={visibleLists[index + offset] ? s.rotate : ""}
            />
          </h4>
          {visibleLists[index + offset] && (
            filter.type === "range" ? (
              <>
                <div className={s.filter__item__block_input}>
                  <input type="number" placeholder={filter.inputs[0].placeholder} />
                  <div className={s.hyphen}></div>
                  <input type="number" placeholder={filter.inputs[1].placeholder} />
                </div>
                <button>Применить</button>
              </>
            ) : (
              <ul>
                {filter.items.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )
          )}
        </div>
      ))}
    </>
  );

  return (
    <>
      <Header />
      <main className={s.main__container}>
        <h1 className={s.main__title}>Категории</h1>
        {selectedCategories.length > 0 && (
          <button
            onClick={() => setSelectedCategories([])}
            className={s.resetButton}
          >
            Сбросить все категории
          </button>
        )}
        <div className={s.wrapper__categories__products}>
          <div className={s.container__categories__filters}>
            {renderCategories(CATEGORIES_DATA)}
            <div className={s.filter_containet}>
              <h3
                className={s.filter__title}
                onClick={() => toggleListVisibility(4)}
              >
                Фильтры
                <img
                  src={Arrow}
                  alt="arrow"
                  className={visibleLists[4] ? s.rotate : ""}
                />
              </h3>
              {visibleLists[4] && renderFilters(FILTERS_DATA)}
            </div>
          </div>

          <div className={s.container__products_wrapper}>
            <div className={s.container__filters}>
              <button
                onClick={() =>
                  setActivePanel(activePanel === "panel1" ? false : "panel1")
                }
              >
                Категория
              </button>
              <button
                onClick={() =>
                  setActivePanel(activePanel === "panel2" ? false : "panel2")
                }
              >
                Фильтры
              </button>

              <motion.div
                initial={{ x: "200%" }}
                animate={{ x: activePanel === "panel1" ? 0 : "200%" }}
                transition={{ duration: 0.3 }}
                className={s.active__panel}
                onClick={(event) => event.stopPropagation()}
              >
                <div className={s.block_cross}>
                  <img
                    src={FistCross}
                    alt="cross"
                    className={s.panel_cross}
                    onClick={() => setActivePanel(null)}
                  />
                </div>
                {renderCategories(CATEGORIES_DATA)}
              </motion.div>

              <motion.div
                initial={{ x: "200%" }}
                animate={{ x: activePanel === "panel2" ? 0 : "200%" }}
                transition={{ duration: 0.3 }}
                className={s.active__panel}
                onClick={(event) => event.stopPropagation()}
              >
                <div className={s.block_cross}>
                  <img
                    src={FistCross}
                    alt="cross"
                    className={s.panel_cross}
                    onClick={() => setActivePanel(null)}
                  />
                </div>
                <div className={s.filter_containet}>
                  {renderFilters(FILTERS_DATA)}
                </div>
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
              {isFetch ? (
                Array(8)
                .fill(null)
                .map((_, index) => <SkeletonCard key={index}/>)
              ) : filteredProducts.length > 0 ? (
                filteredProducts.map((item) => (
                  <Link to={`/products/${item.id}`} key={item.id}>
                  <CardProducts
                    img={item.image}
                    presence={item.presence}
                    article={item.article}
                    autor={item.autor}
                    name={item.name}
                    price={item.price}
                  /></Link>
                ))
              ) : (
                <h1 className={s.loading}>
                  {selectedCategories.length > 0
                    ? "Товаров по выбранным категориям не найдено"
                    : "Тут нет товаров"}
                </h1>
              )}
            </div>
          </div>
        </div>
      </main>

      <Reviews />
      <Footer />
    </>
  );
};

export default Products;