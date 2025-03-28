import { Select } from "antd";
import s from "./admin-craete.module.css";

const AdminCraete = () => {
  return (
    <>
      <main className={s.main}>
        <form className={s.main__form}>
          <div className={s.main__form__item}>
            <label className={s.form__title}>Артикул:</label>
            <input
              className={s.form__input}
              type="text"
              name="article"
              // value={formData.article}
            />
          </div>
          <div className={s.main__form__item}>
            <label className={s.form__title}>Название:</label>
            <input
              className={s.form__input}
              type="text"
              name="title"
              // value={formData.name}
            />
          </div>
          <div className={s.main__form__item}>
            <label className={s.form__title}>Количество страниц:</label>
            <input
              className={s.form__input}
              type="number"
              name="pages"
              // value={formData.pages}
            />
          </div>
          <div className={s.main__form__item}>
            <label className={s.form__title}>Год издания:</label>
            <input
              className={s.form__input}
              type="number"
              name="year"
              // value={formData.year}
            />
          </div>
          <div className={s.main__form__item}>
            <label className={s.form__title}>Возраст:</label>
            <input
              className={s.form__input}
              type="number"
              name="age"
              // value={formData.age}
            />
          </div>
          <div className={s.main__form__item}>
            <label className={s.form__title}>Жанр :</label>
            <select className={s.form__select}>
              <option value="#">Выберите жанр</option>
              <option value="Нон - фикшен">Нон - фикшен</option>
              <option value="Детям и родителям">Детям и родителям</option>
              <option value="Художесвенная литература">
                Художесвенная литература
              </option>
              <option value="Бизнес литература">Бизнес литература</option>
            </select>
          </div>

          <div className={s.main__form__item}>
            <label className={s.form__title}>Тематика :</label>

            <select className={s.form__select}>
              <option value="#">Выберите жанр</option>
              <option value="#">Выберите тематику</option>
              <option value="Психология  и саморазвитие ">
                Психология и саморазвитие{" "}
              </option>
              <option value="Нунчпон">Нунчпон</option>
              <option value="Красота и здоровье">Красота и здоровье</option>
              <option value="Публицистика">Публицистика</option>
              <option value="Философия">Философия</option>
              <option value="IT">IT</option>
              <option value="Биография и мемуры">Биография и мемуры</option>
              <option value="Искуссство и культура">
                Искуссство и культура
              </option>
              <option value="Позновательная литература">
                Позновательная литература
              </option>
              <option value="Художественная литература">
                Художественная литература
              </option>
              <option value="Воспитание детей">Воспитание детей</option>
              <option value="Здоровье детей">Здоровье детей</option>
              <option value="Проза">Проза</option>
              <option value="Комиксы и манга">Комиксы и манга</option>
              <option value="Фонтастика">Фонтастика</option>
              <option value="Поэзия">Поэзия</option>
              <option value="Детиктивы и триллеры">Детиктивы и триллеры</option>
              <option value="Мистика">Мистика</option>
              <option value="Биографии и истории успеха">
                Биографии и истории успеха
              </option>
              <option value="Менеджмент и управление">
                Менеджмент и управление
              </option>
              <option value="Маркетинг  и продажи">Маркетинг и продажи</option>
              <option value="Экономика">Экономика</option>
              <option value="Финансы и инвестиция">Финансы и инвестиция</option>
              <option value="Переговоры и публичные выступления">
                Переговоры и публичные выступления
              </option>
            </select>
          </div>

          <div className={s.main__form__item}>
            <label className={s.form__title}>Издательство :</label>
            <select className={s.form__select}>
              <option value="#">Выберите издательство</option>
              <option value="АСТ">АСТ</option>
              <option value="Эскимо">Эскимо</option>
              <option value="Комильфо">Комильфо</option>
              <option value="#Мохаон">Мохаон</option>
              <option value="Азбука">Азбука</option>
              <option value="Бомбора">Бомбора</option>
              <option value="Комильфо">Комильфо</option>
              <option value="Монн , Иванов и Фербер">
                Монн , Иванов и Фербер
              </option>
            </select>
          </div>

          <div className={s.main__form__item}>
            <label className={s.form__title}>Тип обложки :</label>
            <select className={s.form__select}>
              <option value="#">Выберите тип обложки</option>
              <option value="Твердый переплет">Твердый переплет</option>
              <option value="Мягкий переплет">Мягкий переплет</option>
              <option value="Интегрированый переплет">
                Интегрированый переплет
              </option>
            </select>
          </div>

          <div className={s.main__form__item}>
            <label className={s.form__title}>Автор :</label>
            <select className={s.form__select}>
              <option value="#">Выберите автора</option>
              <option value="Джо Наверро">Джо Наверро</option>
              <option value="Джейн Остин">Джейн Остин</option>
              <option value="Кори Альтхофф">Кори Альтхофф</option>
              <option value="Брюс Тулгон">Брюс Тулгон</option>
              <option value="Аристотель">Аристотель</option>
              <option value="Дин Кунц">Дин Кунц</option>
              <option value="Дж. К. Роулинг">Дж. К. Роулинг</option>
              <option value="Мосян Тунсю">Мосян Тунсю</option>
              <option value="Колин  Маккалоу">Колин Маккалоу</option>
              <option value="Дэшнур Джеймс">Дэшнур Джеймс</option>
              <option value="Санто  Версаче">Санто Версаче</option>
              <option value="Ульям Шекспир">Ульям Шекспир</option>
            </select>
          </div>
        </form>

        <div className={s.form__block}>
          <div className={s.block__fail}>
            <label>
              Добавить файл
              <input className={s.display} type="file" />
            </label>
          </div>
          <textarea placeholder="Добавить описание" type="text" />
        </div>
        
        <button className={s.form__button}>Опубликовать товар</button>
      </main>
    </>
  );
};

export default AdminCraete;
