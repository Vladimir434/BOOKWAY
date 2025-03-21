import s from './profile-info.module.css'

const ProfileInfo = () => {
  return (
    <main className={s.profile__info_wrapper}>
      <h2 className={s.title}>Информация обо мне</h2>
      <form className={s.form}>
        <div className={s.form__blocks_wrapper}>
          <div className={s.form__block}>
            <h3 className={s.form__title}>Данные покупателя</h3>
            <div className={s.form__block_inputs}>
              <div className={s.form__field}>
                <label className={s.form__label}>Имя</label>
                <input className={s.form__input} type="text" />
              </div>
              <div className={s.form__field}>
                <label className={s.form__label}>E-mail</label>
                <input className={s.form__input} type="email" />
              </div>
              <div className={s.form__field}>
                <label className={s.form__label}>Телефон</label>
                <input className={s.form__input} type="tel" />
              </div>
            </div>
          </div>
          <div className={s.form__block}>
            <h3 className={s.form__title}>Адрес получателя</h3>
            <div className={s.form__block_inputs}>
              <div className={s.form__field}>
                <label className={s.form__label}>Город</label>
                <input className={s.form__input} type="text" />
              </div>
              <div className={s.form__field}>
                <label className={s.form__label}>Улица</label>
                <input className={s.form__input} type="text" />
              </div>
              <div className={s.form__field}>
                <label className={s.form__label}>Дом/Квартира</label>
                <input className={s.form__input} type="text" />
              </div>
            </div>
          </div>
        </div>
        <button className={s.form__button}>Сохранить изменения</button>
      </form>
    </main>
  )
}

export default ProfileInfo
