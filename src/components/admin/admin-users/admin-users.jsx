import s from "./admin-users.module.css";
import Delete from "../../../assets/icon/close cross.svg";
import { getDataAllUsers } from "../../../store/admin-store/admin-store";
import { useEffect } from "react";
const AdminUsers = () => {
const {getAllUsers, users, deleteUser, isFetch} = getDataAllUsers()

useEffect(() => {
  getAllUsers()
},[getAllUsers])

  return (
    <>
      <main className={s.main}>
        <div className={s.main__content}>
          {isFetch ? (
            <h4>Загрузка...</h4>
          ) : users.length > 0 ? ( 
            users.map((item, index) => ( 
              <div key={index} className={s.main__content__item}>
              <button className={s.carts__item__delete} onClick={() => deleteUser(item.id || index)}>
                <img src={Delete} alt="удалить пользователя" />
              </button>
              <div className={s.item__info__text}>
                <label className={s.item__info__text__title}>
                  {item.name || 'имя не найдено'}
                </label>
                <label className={s.item__info__text__autor}>
                  {item.email || 'email не найден'}
                </label>
                <label className={s.item__info__text__presence}>
                  {item.userInfo?.phone || 'номер не найден'}
                </label>
              </div>
            </div>  
            ))
          ) : (
            <h3>Тут пока нет пользователей</h3>
          )}
        </div>
      </main>
    </>
  );
};

export default AdminUsers;
