import { useState } from "react";
import { Select } from "antd";
import s from "./admin-craete.module.css";
import { useProductStore } from "../../../store/admin-store-products/admin-store-products";
import { toast } from "react-toastify";

const AdminCreate = () => {
  const [formData, setFormData] = useState({
    article: "",
    title: "",
    pages: "",
    year: "",
    age: "",
    genre: "",
    theme: "",
    publishing: "",
    binding: "",
    autor: "",
    description: "",
    price: "",
    img1: "",
    img2: "",
    img3: "",
    presence: true,
  });

  const { addProduct } = useProductStore();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = {
      age: formData.age + "+",
      article: formData.article,
      autor: formData.autor,
      binding: formData.binding,
      category: [formData.genre],
      description: formData.description,
      images: [
        { img: formData.img1 },
        { img: formData.img2 },
        { img: formData.img3 }
      ].filter(imgObj => imgObj.img),
      name: formData.title,
      pages: formData.pages,
      presence: formData.presence,
      presence: true,
      price: formData.price,
      publishing: formData.publishing,
      subcategory: [formData.theme],
      yearofpublication: formData.year
    };

    const success = await addProduct(productData);
    if (success) {
      toast.info("Товар успешно добавлен!");
      setFormData({
        article: "",
        title: "",
        pages: "",
        year: "",
        age: "",
        genre: "",
        theme: "",
        publishing: "",
        binding: "",
        autor: "",
        description: "",
        price: "",
        img1: "",
        img2: "",
        img3: "",
        presence: true,
      });
    } else {
      alert("Ошибка при добавлении товара");
    }
  };

  return (
    <>
      <main className={s.main}>
        <form className={s.main__form} onSubmit={handleSubmit}>
          <div className={s.main__form__item}>
            <label className={s.form__title}>Артикул:</label>
            <input
              className={s.form__input}
              type="text"
              name="article"
              value={formData.article}
              onChange={handleChange}
              required
            />
          </div>
          <div className={s.main__form__item}>
            <label className={s.form__title}>Название:</label>
            <input
              className={s.form__input}
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className={s.main__form__item}>
            <label className={s.form__title}>Количество страниц:</label>
            <input
              className={s.form__input}
              type="number"
              name="pages"
              value={formData.pages}
              onChange={handleChange}
              required
            />
          </div>
          <div className={s.main__form__item}>
            <label className={s.form__title}>Год издания:</label>
            <input
              className={s.form__input}
              type="number"
              name="year"
              value={formData.year}
              onChange={handleChange}
              required
            />
          </div>
          <div className={s.main__form__item}>
            <label className={s.form__title}>Возраст:</label>
            <input
              className={s.form__input}
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>
          <div className={s.main__form__item}>
            <label className={s.form__title}>Цена:</label>
            <input
              className={s.form__input}
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className={s.main__form__item}>
            <label className={s.form__title}>Жанр:</label>
            <select
              className={s.form__select}
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              required
            >
              <option value="">Выберите жанр</option>
              <option value="Художественная литература">Художественная литература</option>
              <option value="Познавательная литература">Познавательная литература</option>
              <option value="Воспитание детей">Воспитание детей</option>
              <option value="Здоровье детей">Здоровье детей</option>
            </select>
          </div>

          <div className={s.main__form__item}>
            <label className={s.form__title}>Тематика:</label>
            <select
              className={s.form__select}
              name="theme"
              value={formData.theme}
              onChange={handleChange}
              required
            >
              <option value="">Выберите тематику</option>
              <option value="Психология и саморазвитие ">
                Психология и саморазвитие
              </option>
              <option value="Психология и саморазвитие">Психология и саморазвитие</option>
              <option value="Нунчпон">Нунчпон</option>
              <option value="Красота и здоровье">Красота и здоровье</option>
              <option value="История">История</option>
              <option value="Публицистика">Публицистика</option>
              <option value="Философия">Философия</option>
              <option value="IT">IT</option>
              <option value="Биографии и мемуары">Биографии и мемуары</option>
              <option value="Искусство и культура">Искусство и культура</option>
              <option value="Проза">Проза</option>
              <option value="Комиксы и манга">Комиксы и манга</option>
              <option value="Фантастика">Фантастика</option>
              <option value="Поэзия">Поэзия</option>
              <option value="Детективы и триллеры">Детективы и триллеры</option>
              <option value="Поэзия">Поэзия</option>
              <option value="Детиктивы и триллеры">Детиктивы и триллеры</option>
              <option value="Мистика">Мистика</option>
              <option value="Манга">Манга</option>
              <option value="Биографии и истории успеха">Биографии и истории успеха</option>
              <option value="Менеджмент и управление">Менеджмент и управление</option>
              <option value="Экономика">Экономика</option>
              <option value="Маркетинг и продажи">Маркетинг и продажи</option>
              <option value="Экономика">Экономика</option>            
              <option value="Финансы и инвестиции">Финансы и инвестиции</option>            
              <option value="Переговоры и публичные выступления">Переговоры и публичные выступления</option>            
              </select>
          </div>

          <div className={s.main__form__item}>
            <label className={s.form__title}>Издательство:</label>
            <select
              className={s.form__select}
              name="publishing"
              value={formData.publishing}
              onChange={handleChange}
              required
            >
              <option value="">Выберите издательство</option>
              <option value="АСТ">АСТ</option>
              <option value="Эскимо">Эскимо</option>
              <option value="Комильфо">Комильфо</option>
              <option value="Махаон">Махаон</option>
              <option value="Азбука">Азбука</option>
              <option value="Бомбора">Бомбора</option>
              <option value="Монн">Монн</option>
              <option value="Иванов и Фербер">Иванов и Фербер</option>
            </select>
          </div>

          <div className={s.main__form__item}>
            <label className={s.form__title}>Тип обложки:</label>
            <select
              className={s.form__select}
              name="binding"
              value={formData.binding}
              onChange={handleChange}
              required
            >
              <option value="">Выберите тип обложки</option>
              <option value="Твердый переплет">Твердый переплет</option>
              <option value="Мягкий переплет">Мягкая обложка</option>
            </select>
          </div>

          <div className={s.main__form__item}>
            <label className={s.form__title}>Автор:</label>
            <select
              className={s.form__select}
              name="autor"
              value={formData.autor}
              onChange={handleChange}
              required
            >
              <option value="">Выберите автора</option>
              <option value="Джо Наверро">Джо Наверро</option>
              <option value="Джейн Остин">Джейн Остин</option>
              <option value="Кори Альтхофф">Кори Альтхофф</option>
              <option value="Брюс Тулгон">Брюс Тулгон</option>
              <option value="Аристотель">Аристотель</option>
              <option value="Дин Кунц">Дин Кунц</option>
              <option value="Дж. К. Роулинг">Дж. К. Роулинг</option>
              <option value="Мосян Тунсю">Мосян Тунсю</option>
              <option value="Колин Маккалоу">Колин Маккалоу</option>
              <option value="Дэшнур Джеймс">Дэшнур Джеймс</option>
              <option value="Санто Версаче">Санто Версаче</option>
              <option value="Ульям Шекспир">Ульям Шекспир</option>
            </select>
          </div>
          <div className={s.main__form__item}>
            <label className={s.form__title}>
              <input
                type="checkbox"
                name="presence"
                checked={formData.presence}
                onChange={handleChange}
                className={s.fomr__checkbox}
              />
              товар в наличии
            </label>
          </div>

          <div className={s.main__form__item}>
            <label className={s.form__title}>Изображение 1 (URL):</label>
            <input
              className={s.form__input}
              type="text"
              name="img1"
              value={formData.img1}
              onChange={handleChange}
              required
            />
          </div>
          <div className={s.main__form__item}>
            <label className={s.form__title}>Изображение 2 (URL):</label>
            <input
              className={s.form__input}
              type="text"
              name="img2"
              value={formData.img2}
              onChange={handleChange}
            />
          </div>
          <div className={s.main__form__item}>
            <label className={s.form__title}>Изображение 3 (URL):</label>
            <input
              className={s.form__input}
              type="text"
              name="img3"
              value={formData.img3}
              onChange={handleChange}
            />
          </div>

          <div className={s.form__block}>
            <textarea
              placeholder="Добавить описание"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className={s.form__button}>Опубликовать товар</button>
        </form>
      </main>
    </>
  );
};

export default AdminCreate;