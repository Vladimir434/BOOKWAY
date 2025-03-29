import s from './skeleton.module.css';
import { Skeleton } from 'antd';

const SkeletonCard = () => {
  return (
    <div className={s.card__container}>
      <div className={s.card__img}>
        <Skeleton.Image className={s.skeletonImage} style={{width:'100%', height:'100%'}} />
      </div>
      <Skeleton className={s.skeletonText} active paragraph={{ rows: 2 }} />
      <div className={s.block__btn}>
        <Skeleton.Button style={{width:'100%', margin:'5px 0'}}/>
        <Skeleton.Button style={{width:'100%', margin:'5px 0'}}/>
      </div>
    </div>
  );
};

export default SkeletonCard;
