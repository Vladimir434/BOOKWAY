import { useEffect } from 'react';
import { useStore } from "../../store/comments/comments";
import s from "./reviews.module.css";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Bgimage from '../../assets/image/main-image-1.svg';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const Reviews = () => {
  const comments = useStore((state) => state.comments);
  const loadComments = useStore((state) => state.loadComments);
  const navigate = useNavigate()
  const auth = getAuth()
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if(!user) {
        navigate('/login')
        return;
      }
    })
    loadComments();
  }, [loadComments]);

  return (
    <div style={{ backgroundImage: `url(${Bgimage})` }} className={s.reviews__wrapper}>
      <div className={s.blur}></div>
      <div className={s.reviews}>
        <h2 className={s.reviews__title}>Отзывы</h2>
        <div className={s.reviews__swiper}>
          {comments.length > 0 ? (
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-navigation-size": "20px",
                "--swiper-navigation-button-background": "rgba(0, 0, 0, 0.8)",
              }}
              navigation={true}
              modules={[Navigation]}
              className={s.mySwiper}
              loop={true}
            >
              {comments.map((comment, index) => (
                <SwiperSlide key={index}>
                  <div className={s.reviews_item}>
                    <p>{comment.text}</p>
                    <div className={s.reviews_item_info}>
                      <span>{comment.name} {comment.lastName}</span>
                      <span>{comment.date}</span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <p>Пока нет отзывов.</p>
          )}
        </div>
        <Link to={'/comments'}>
        <button className={s.reviews__button}>Читать все</button>
        </Link>
      </div>
    </div>
  );
};

export default Reviews;
