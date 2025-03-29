import s from "./admin-products.module.css";
import Delete from "../../../assets/icon/close cross.svg";

const AdminProducts = () => {
  return (
    <>
      <main className={s.main}>
        <div className={s.main__content}>
          <div className={s.main__content__item}>
            <button className={s.carts__item__delete}>
              <img src={Delete} alt="удалить товар" />
            </button>
            <div className={s.item__info__text}>
              <label className={s.item__info__text__title}>Гордость и предубеждения</label>
              <label className={s.item__info__text__autor}>
                Автор : Джейн Остин
              </label>
              <label className={s.item__info__text__presence}>
                 Артикуль : 1GE25HH
              </label>
            </div>
            <div className={s.presence}>
              <label className={s.presence__blok}>В наличии: 
              <div>
                  <label>Да</label>
                  <input type="radio" value="eys" name="question"/>
                </div> <div >
                  <label>Нет</label>
                  <input type="radio" value="now" name="question"/>
                </div>
              </label>
            </div>
          </div>
          <div className={s.main__content__item}>
            <button className={s.carts__item__delete}>
              <img src={Delete} alt="удалить товар" />
            </button>
            <div className={s.item__info__text}>
              <label className={s.item__info__text__title}>Гордость и предубеждения</label>
              <label className={s.item__info__text__autor}>
                Автор : Джейн Остин
              </label>
              <label className={s.item__info__text__presence}>
                 Артикуль : 1GE25HH
              </label>
            </div>
            <div className={s.presence}>
              <label >В наличии: 
              <div >
                  <label>Да</label>
                  <input type="radio" value="eys" name="question"/>
                </div> <div >
                  <label>Нет</label>
                  <input type="radio" value="now" name="question"/>
                </div>
              </label>
            </div>
          </div>
          <div className={s.main__content__item}>
            <button className={s.carts__item__delete}>
              <img src={Delete} alt="удалить товар" />
            </button>
            <div className={s.item__info__text}>
              <label className={s.item__info__text__title}>Гордость и предубеждения</label>
              <label className={s.item__info__text__autor}>
                Автор : Джейн Остин
              </label>
              <label className={s.item__info__text__presence}>
                 Артикуль : 1GE25HH
              </label>
            </div>
            <div className={s.presence}>
              <label >В наличии: 
              <div >
                  <label>Да</label>
                  <input type="radio" value="eys" name="question"/>
                </div> <div >
                  <label>Нет</label>
                  <input type="radio" value="now" name="question"/>
                </div>
              </label>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AdminProducts;
