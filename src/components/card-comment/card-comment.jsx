import s from './card-comment.module.css'
import User from '../../assets/icon/user.svg' 

const CardComment = ({name, date, description,lastName}) => {
  return (
    <div className={s.card__wrapper}>
      <div className={s.card__info}>
        <div className={s.user__icon}>
          <img src={User} alt="user" />
        </div>
        <div className={s.info}>
        <h4 className={s.card__info_name}>{name}</h4>
        <h4 className={s.card__info_name}>{lastName}</h4>
        </div>
        <h3 className={s.card__info__date}>{date}</h3>
      </div>
      <div className={s.card__description}>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default CardComment