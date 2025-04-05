import { useNavigate, useParams } from "react-router-dom";
import s from "./profile-details.module.css";
import { useProfileAdsStore } from "../../store/profile-ads-store/profile-ads-stote";
import { useEffect, useState } from "react";
import Footer from "../footer/footer";
import Header from "../header/header";

const ProfileDetails = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const { allCards, fetchCards, isFetch } = useProfileAdsStore();
  const [ads, setAds] = useState(null);

  useEffect(() => {
    if (allCards.length === 0) {
      fetchCards();
    }
  }, [fetchCards, allCards]);

  useEffect(() => {
    const selected = allCards.find((card) => card.id === id);
    setAds(selected || null);
  }, [id, allCards]);

  if (isFetch) return <p>Загрузка...</p>;
  if (!ads) return <p>Объявление не найдено</p>;

  return (
    <>
    <Header/>
    <button onClick={() => navigate(`/profile`, { state: { from: "exchange", exchangeTab: "otherAds" } })}>назат</button>
    <main className={s.main}>
      <div className={s.main__image}>
        <img src={ads.imageUrl} alt={ads.title} />
      </div>
      <div className={s.main__info}>
        <h3 className={s.info__title}>Данные</h3>
        <div className={s.info__blocks}>
          <div className={s.info__block}>
            <div className={s.info__blocks_item}><p className={s.info__text}>{ads.name}</p></div>
            <div className={s.info__blocks_item}><p className={s.info__text}>{ads.email}</p></div>
            <div className={s.info__blocks_item}><p className={s.info__text}>{ads.country}</p></div>
          </div>
          <div className={s.info__block}>
            <div className={s.info__blocks_item}><p className={s.info__text}>{ads.city}</p></div>
            <div className={s.info__blocks_item}><p className={s.info__text}>{ads.phone}</p></div>
          </div>
        </div>
        <h4 className={s.info__description}>{ads.description}</h4>
      </div>
    </main>
    <Footer/>
    </>
  );
};

export default ProfileDetails;
