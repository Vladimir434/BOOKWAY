import s from './profile-details.module.css'

const ProfileDetails = () => {
  return (
    <main className={s.main}>
      <div className={s.main__image}>
        <img src="#" alt="book" />
      </div>
      <div className={s.main__info}>
        <h3 className={s.info__title}>Данные </h3>
        <div className={s.info__blocks}>
          <div className={s.info__block}>
            <div className={s.info__blocks_item}><p className={s.info__text}>Ангелина</p></div>
            <div className={s.info__blocks_item}><p className={s.info__text}>linakalneva@gmail.com</p></div>
            <div className={s.info__blocks_item}><p className={s.info__text}>Кыргызстан</p></div>
          </div>
          <div className={s.info__block}>
            <div className={s.info__blocks_item}><p className={s.info__text}>Кара-Балта</p></div>
            <div className={s.info__blocks_item}><p className={s.info__text}>+996708107436</p></div>
          </div>
        </div>
        <h4 className={s.info__description}>
          Заказывала себе , но пока ехала подарили такую же . Книга можно сказать даже не вскрытая . Если живем в одном городе можем договориться встретиться , если нет могу отправить курьером или почтой . НО  ОПЛАЧИВАТЬ ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ БУДЕТЕ САМИ . С меня книга с вас все остальное . Лучше писать , не звонить . Если не собираетесь покупать не пешите , и мои и ваши нервы в безопасности.
        </h4>
      </div>
    </main>
  )
}

export default ProfileDetails