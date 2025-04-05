import { useState, useEffect } from 'react';
import s from './profile-info.module.css';
import useUserStore from '../../store/profile-unfo-store/profile-info-store';
import { getAuth } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../utils/firebase/firebase-config';

const ProfileInfo = () => {
  const { userInfo, saveUserInfo, isFetch, setUserInfo, setIsFetch } = useUserStore();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [street, setStreet] = useState('');
  const [home, setHome] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const clearForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setCity('');
    setStreet('');
    setHome('');
    localStorage.removeItem('userInfo');
    setIsButtonDisabled(false);
  };

  useEffect(() => {
    const user = getAuth().currentUser;

    if (!user) {
      clearForm();
      return;
    }

    const userId = user.uid;
    const savedUserInfo = localStorage.getItem(`userInfo-${userId}`);

    if (savedUserInfo) {
      try {
        const parsedUserInfo = JSON.parse(savedUserInfo);
        setName(parsedUserInfo.name || '');
        setEmail(parsedUserInfo.email || '');
        setPhone(parsedUserInfo.phone || '');
        setCity(parsedUserInfo.city || '');
        setStreet(parsedUserInfo.street || '');
        setHome(parsedUserInfo.home || '');
        setIsButtonDisabled(true); 
      } catch (error) {
        console.error('Ошибка при парсинге данных из localStorage:', error);
      }
    } else {
      setIsFetch(true);
      const userDocRef = doc(db, 'users', user.uid);
      getDoc(userDocRef).then((docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data();
          setUserInfo(data.userInfo); 
          localStorage.setItem(`userInfo-${userId}`, JSON.stringify(data.userInfo)); 
          setName(data.userInfo.name || '');
          setEmail(data.userInfo.email || '');
          setPhone(data.userInfo.phone || '');
          setCity(data.userInfo.city || '');
          setStreet(data.userInfo.street || '');
          setHome(data.userInfo.home || '');
          setIsButtonDisabled(true); 
        }
        setIsFetch(false);
      });
    }
  }, [setUserInfo, setIsFetch]);

  useEffect(() => {
    if (userInfo) {
      setName(userInfo.name || '');
      setEmail(userInfo.email || '');
      setPhone(userInfo.phone || '');
      setCity(userInfo.city || '');
      setStreet(userInfo.street || '');
      setHome(userInfo.home || '');
      setIsButtonDisabled(true); 
    }
  }, [userInfo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { name, email, phone, city, street, home };

    await saveUserInfo(formData);

    const userId = getAuth().currentUser.uid;
    localStorage.setItem(`userInfo-${userId}`, JSON.stringify(formData));

    setIsButtonDisabled(true);
  };

  if (isFetch) {
    return <p>Загрузка...</p>;
  }

  return (
    <main className={s.profile__info_wrapper}>
      <h2 className={s.title}>Информация обо мне</h2>
      <form className={s.form} onSubmit={handleSubmit}>
        <div className={s.form__blocks_wrapper}>
          <div className={s.form__block}>
            <h3 className={s.form__title}>Данные покупателя</h3>
            <div className={s.form__block_inputs}>
              <div className={s.form__field}>
                <label className={s.form__label}>Имя</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className={s.form__input}
                  type="text"
                />
              </div>
              <div className={s.form__field}>
                <label className={s.form__label}>E-mail</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={s.form__input}
                  type="email"
                />
              </div>
              <div className={s.form__field}>
                <label className={s.form__label}>Телефон</label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className={s.form__input}
                  type="tel"
                />
              </div>
            </div>
          </div>
          <div className={s.form__block}>
            <h3 className={s.form__title}>Адрес получателя</h3>
            <div className={s.form__block_inputs}>
              <div className={s.form__field}>
                <label className={s.form__label}>Город</label>
                <input
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                  className={s.form__input}
                  type="text"
                />
              </div>
              <div className={s.form__field}>
                <label className={s.form__label}>Улица</label>
                <input
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  required
                  className={s.form__input}
                  type="text"
                />
              </div>
              <div className={s.form__field}>
                <label className={s.form__label}>Дом/Квартира</label>
                <input
                  value={home}
                  onChange={(e) => setHome(e.target.value)}
                  required
                  className={s.form__input}
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
        <button type="submit" className={s.form__button} disabled={isButtonDisabled}>
          Сохранить изменения
        </button>
      </form>
    </main>
  );
};

export default ProfileInfo;
