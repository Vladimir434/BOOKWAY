import s from './card-announcement.module.css'

const CardAnnouncement = ({img, description}) => {
  return (
    <div className={s.container}>
      <div className={s.block__img}><img src={img} alt="book" /></div>
      <div className={s.description}><p>{description}</p></div>
      <button className={s.button}>подробнее</button>
    </div>
  )
}

export default CardAnnouncement