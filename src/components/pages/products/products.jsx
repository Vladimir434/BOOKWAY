import Header from "../../header/header";
import Reviews from "../../Reviews/reviews";
import Footer from "../../footer/footer";
import s from "./products.module.css";
import Arrow from "../../../assets/icon/arrow.svg";
import FistCross from "../../../assets/icon/fist-cross.svg";
import CardProducts from "../../card-products/card-products";
import { useRroductsStore } from "../../../store/products-store/products-store"; 
import { useSearchStore } from "../../../store/search-store/search-store"; 
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
      "Мистика",
      "Манга",
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
  const { product, isFetch, getAllProducts, searchProductsByName } = useRroductsStore();
  const { searchQuery, clearSearchQuery } = useSearchStore();
  const [sortOrder, setSortOrder] = useState("");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [selectedFilters, setSelectedFilters] = useState({
    publishing: [],
    binding: [],
    author: []
  });

  const handleFilterSelect = (filterType, value) => {
    setSelectedFilters(prev => {
      const currentValues = prev[filterType];
      const newValues = currentValues.includes(value)
        ? currentValues.filter(item => item !== value)
        : [...currentValues, value];
      
      return {
        ...prev,
        [filterType]: newValues
      };
    });
  };

  const getFilteredProducts = () => {
    let filtered = product;
    
    if (searchQuery) {
      filtered = searchProductsByName(searchQuery);
    }
    
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(item =>
        item.category &&
        item.category.some(cat => selectedCategories.includes(cat))
      );
    }
    
    if (selectedFilters.publishing.length > 0) {
      filtered = filtered.filter(item =>
        selectedFilters.publishing.includes(item.publishing)
      );
    }
    
    if (selectedFilters.binding.length > 0) {
      filtered = filtered.filter(item =>
        selectedFilters.binding.includes(item.binding)
      );
    }
    
    if (selectedFilters.author.length > 0) {
      filtered = filtered.filter(item =>
        selectedFilters.author.includes(item.autor)
      );
    }
    
    return filtered;
  };

  const filteredProducts = getFilteredProducts();

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
    return () => {
      clearSearchQuery();
    };
  }, [getAllProducts, clearSearchQuery]);

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

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPriceRange((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sortProducts = (products) => {
    switch (sortOrder) {
      case "price_asc":
        return [...products].sort((a, b) => a.price - b.price);
      case "price_desc":
        return [...products].sort((a, b) => b.price - a.price);
      case "newest":
        return [...products].sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
      case "name":
        return [...products].sort((a, b) => a.name.localeCompare(b.name));
      default:
        return products;
    }
  };

  const sortedProducts = sortProducts(filteredProducts.filter((item) => {
    const withinPriceRange =
      (priceRange.min === "" || item.price >= Number(priceRange.min)) &&
      (priceRange.max === "" || item.price <= Number(priceRange.max));
    return withinPriceRange;
  }));

  const resetAllFilters = () => {
    setSelectedCategories([]);
    setSelectedFilters({
      publishing: [],
      binding: [],
      author: []
    });
    setPriceRange({ min: "", max: "" });
  };

  const hasActiveFilters = () => {
    return (
      selectedCategories.length > 0 ||
      selectedFilters.publishing.length > 0 ||
      selectedFilters.binding.length > 0 ||
      selectedFilters.author.length > 0 ||
      priceRange.min !== "" ||
      priceRange.max !== ""
    );
  };

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
                  <input
                    type="number"
                    name="min"
                    value={priceRange.min}
                    onChange={handlePriceChange}
                    placeholder={filter.inputs[0].placeholder}
                  />
                  <div className={s.hyphen}></div>
                  <input
                    type="number"
                    name="max"
                    value={priceRange.max}
                    onChange={handlePriceChange}
                    placeholder={filter.inputs[1].placeholder}
                  />
                </div>
              </>
            ) : (
              <ul>
                {filter.items.map(item => {
                  let filterType = '';
                  if (filter.name === "Издательство") filterType = 'publishing';
                  if (filter.name === "Тип обложки") filterType = 'binding';
                  if (filter.name === "Автор") filterType = 'author';
                  
                  return (
                    <li 
                      key={item}
                      onClick={() => handleFilterSelect(filterType, item)}
                      className={
                        selectedFilters[filterType]?.includes(item) 
                          ? s.selected__сategory
                          : ""
                      }
                    >
                      {item}
                    </li>
                  );
                })}
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
        {hasActiveFilters() && (
          <button
            onClick={resetAllFilters}
            className={s.resetButton}
          >
            Сбросить все фильтры
          </button>
        )}
        {searchQuery && (
          <div className={s.searchResultsInfo}>
            Результаты поиска по запросу: "{searchQuery}"
          </div>
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

              <select className={s.select} onChange={handleSortChange}>
                <option value="">Сортировка</option>
                <option value="price_asc">По возрастанию цен</option>
                <option value="price_desc">По убыванию цен</option>
                <option value="newest">Новые</option>
                <option value="name">По названию</option>
              </select>
            </div>

            <div className={s.container__products}>
              {isFetch ? (
                Array(8)
                  .fill(null)
                  .map((_, index) => <SkeletonCard key={index} />)
              ) : sortedProducts.length > 0 ? (
                sortedProducts.map((item) => (
                  <Link to={`/products/${item.id}`} key={item.id}>
                    <CardProducts
                      img={item?.images[0]?.img}
                      presence={item?.presence}
                      article={item?.article}
                      autor={item?.autor}
                      name={item?.name}
                      price={item?.price}
                      category={item?.category}
                      subcategory={item?.subcategory}
                      pages={item?.pages}
                      yearofpublication={item?.yearofpublication}
                    />
                  </Link>
                ))
              ) : (
                <h2 className={s.loading}>
                  {searchQuery 
                    ? "Товаров по вашему запросу не найдено"
                    : hasActiveFilters()
                      ? "Товаров по выбранным фильтрам не найдено"
                      : "Тут нет товаров"}
                </h2>
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