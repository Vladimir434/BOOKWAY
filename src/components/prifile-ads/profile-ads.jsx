// components/profile-ads/ProfileAds.js
import React, { useEffect } from "react";
import { useProfileAdsStore } from "../../store/profile-ads-store/profile-ads-stote";
import s from "./profile-ads.module.css";
import CardAnnouncement from "../card-announcement/card-announcement";
import { Link } from "react-router-dom";

const ProfileAds = () => {
  const { allCards, isFetch, fetchCards } = useProfileAdsStore();

  useEffect(() => {
    fetchCards();
  }, [fetchCards]);

  if (isFetch) {
    return <p>Загрузка...</p>;
  }

  return (
    <div className={s.main}>
      {allCards.length === 0 ? (
        <p>Объявлений пока нет</p>
      ) : (
        <div className={s.cards}>
          {allCards.map((card,index) => (
            <Link key={index} to={`/ads/${card.id}`}>
              <CardAnnouncement description={card.description} img={card.imageUrl} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfileAds;
