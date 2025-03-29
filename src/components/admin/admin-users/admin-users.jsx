import s from "./admin-users.module.css";
import Delete from "../../../assets/icon/close cross.svg";

const AdminUsers = () => {
  return (
    <>
      <main className={s.main}>
        <div className={s.main__content}>
          <div className={s.main__content__item}>
            <button className={s.carts__item__delete}>
              <img src={Delete} alt="удалить товар" />
            </button>
            <div className={s.item__info__text}>
              <label className={s.item__info__text__title}>
                Кальнева Ангелина
              </label>
              <label className={s.item__info__text__autor}>
                linakalneva@gmail.com
              </label>
              <label className={s.item__info__text__presence}>
                +996708107436
              </label>
            </div>
          </div>
          <div className={s.main__content__item}>
            <button className={s.carts__item__delete}>
              <img src={Delete} alt="удалить товар" />
            </button>
            <div className={s.item__info__text}>
              <label className={s.item__info__text__title}>
                Кальнева Ангелина
              </label>
              <label className={s.item__info__text__autor}>
                linakalneva@gmail.com
              </label>
              <label className={s.item__info__text__presence}>
                +996708107436
              </label>
            </div>
          </div>
          <div className={s.main__content__item}>
            <button className={s.carts__item__delete}>
              <img src={Delete} alt="удалить товар" />
            </button>
            <div className={s.item__info__text}>
              <label className={s.item__info__text__title}>
                Кальнева Ангелина
              </label>
              <label className={s.item__info__text__autor}>
                linakalneva@gmail.com
              </label>
              <label className={s.item__info__text__presence}>
                +996708107436
              </label>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AdminUsers;
