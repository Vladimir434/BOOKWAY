import { Skeleton } from 'antd';
import s from './skeleton-comment.module.css'
const CardCommentSkeleton = () => {
  return (
    <div className={s.card__wrapper}>
      <div className={s.card__info}>
        <div className={s.user__icon}>
          <Skeleton.Image circle width={40} height={40} />
        </div>
        <div className={s.info}>
          <Skeleton width={100} />
          <Skeleton width={100} />
        </div>
      </div>
    </div>
  );
};

export default CardCommentSkeleton;
