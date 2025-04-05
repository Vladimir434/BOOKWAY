// components/profile-add-ads/ProfileAddAds.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAdsStore } from "../../store/ads-slice/ads-slice";
import s from "./profile-add-ads.module.css";
import CheckMark from "../../assets/icon/check-mark.svg";

const ProfileAddAds = () => {
  const nav = useNavigate();
  const { addUserCard, isFetch } = useAdsStore();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState('');

  const onHandleSubmit = (e) => {
    e.preventDefault();

    if (name && email && country && city && phone && description && imageUrl) {
      addUserCard(name, email, country, city, phone, description, imageUrl, nav);
      clearForm();
    } else {
      alert("Заполните все поля!");
    }
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setCountry("");
    setCity("");
    setPhone("");
    setDescription("");
    setImageUrl('');
  };

  return (
    <main className={s.main}>
      <form className={s.form} onSubmit={onHandleSubmit}>
        <div className={s.form__block_wrapper}>
          <div className={s.form__block}>
            <div className={s.form__block_item}>
              <label htmlFor="name">Имя</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className={s.form__block_item}>
              <label htmlFor="email">E-mail</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={s.form__block_item}>
              <label htmlFor="country">Страна</label>
              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              />
            </div>
            <div className={s.form__block_item}>
              <label htmlFor="city">Город</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>
            <div className={s.form__block_item}>
              <label htmlFor="phone">Телефон</label>
              <input
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
          </div>

          <div className={s.form__block}>
            <div className={s.block__fail}>
              <label>                
                <input
                  className={s.display}
                  placeholder="Добавить ссылку"
                  type="text"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value) }
                  accept="image/*"
                  required
                />
              </label>
              <img src={CheckMark} alt="check mark" />
            </div>
            <textarea
              className={s.textarea}
              placeholder="Добавить описание"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
        </div>
        <button className={s.form__button} type="submit" disabled={isFetch}>
          {isFetch ? "Сохраняем..." : "Опубликовать объявление"}
        </button>
      </form>
    </main>
  );
};

export default ProfileAddAds;
