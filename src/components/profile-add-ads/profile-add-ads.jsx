import s from './profile-add-ads.module.css'
import CheckMark from '../../assets/icon/check-mark.svg'

const ProfileAddAds = () => {
  return (
    <main className={s.main}>
      <form className={s.form}>
        <div className={s.form__block_wrapper}>
          <div className={s.form__block}>
            <div className={s.form__block_title}></div>
            <div className={s.form__block_item}>
              <label htmlFor="name">Имя</label>
              <input type="text" />
            </div>
            <div className={s.form__block_item}>
              <label htmlFor="name">E-mail</label>
              <input type="text" />
            </div>
            <div className={s.form__block_item}>
              <label htmlFor="name">Страна</label>
              <input type="text" />
            </div>
            <div className={s.form__block_item}>
              <label htmlFor="name">Город</label>
              <input type="text" />
            </div>
            <div className={s.form__block_item}>
              <label htmlFor="name">Телефон</label>
              <input type="text" />
            </div>
          </div>
          <div className={s.form__block}>
            <div className={s.block__fail}>
              <label>
                Добавить файл
                <input className={s.display} type="file" />
              </label>
              <img src={CheckMark} alt="check mark" />
            </div>
            <textarea placeholder='Добавить описание' type="text" />
          </div>
        </div>
        <button className={s.form__button}>Опубликовать обьявление</button>
      </form>
    </main>
  )
}

export default ProfileAddAds