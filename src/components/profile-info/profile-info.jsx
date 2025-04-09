import { useEffect, useState } from 'react';
import s from './profile-info.module.css';
import { useProfileStore } from '../../store/profile-unfo-store/profile-info-store';

const ProfileInfo = () => {
  const {
    userInfo,
    isFetch,
    getUserProfile,
    saveUserProfile
  } = useProfileStore();

  const [isEditing, setIsEditing] = useState(false);

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    street: '',
    home: ''
  });

  useEffect(() => {
    if (!userInfo) {
      getUserProfile();
    }
  }, [userInfo, getUserProfile]);

  useEffect(() => {
    if (userInfo) {
      setForm({
        name: userInfo.name || '',
        email: userInfo.email || '',
        phone: userInfo.phone || '',
        city: userInfo.city || '',
        street: userInfo.street || '',
        home: userInfo.home || ''
      });
    }
  }, [userInfo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await saveUserProfile(form); 
    await getUserProfile(); 
    setIsEditing(false);
  };

  if (isFetch) return <div className={s.loading}>Загрузка...</div>;

  const noData = !userInfo;

  return (
    <main className={s.profile__info_wrapper}>
      <h2 className={s.title}>Информация обо мне</h2>
      <form className={s.form} onSubmit={handleSubmit}>
        <div className={s.form__blocks_wrapper}>
          <div className={s.form__block}>
            <h3 className={s.form__title}>Данные покупателя</h3>
            <div className={s.form__block_inputs}>
              <Field label="Имя" name="name" value={form.name} onChange={handleChange} editable={isEditing || noData} />
              <Field label="E-mail" name="email" value={form.email} onChange={handleChange} editable={isEditing || noData} type="email" />
              <Field label="Телефон" name="phone" value={form.phone} onChange={handleChange} editable={isEditing || noData} type="tel" />
            </div>
          </div>

          <div className={s.form__block}>
            <h3 className={s.form__title}>Адрес получателя</h3>
            <div className={s.form__block_inputs}>
              <Field label="Город" name="city" value={form.city} onChange={handleChange} editable={isEditing || noData} />
              <Field label="Улица" name="street" value={form.street} onChange={handleChange} editable={isEditing || noData} />
              <Field label="Дом/Квартира" name="home" value={form.home} onChange={handleChange} editable={isEditing || noData} />
            </div>
          </div>
        </div>

        {(isEditing || noData) ? (
          <div className={s.buttons}>
            <button type="submit" className={s.form__button}>Сохранить изменения</button>
            {!noData && (
              <button
                type="button"
                className={s.form__button_cancel}
                onClick={() => setIsEditing(false)}
              >
                Отмена
              </button>
            )}
          </div>
        ) : (
          <button
            type="button"
            className={s.form__button}
            onClick={() => setIsEditing(true)}
          >
            Редактировать
          </button>
        )}
      </form>
    </main>
  );
};

const Field = ({ label, name, value, onChange, editable, type = 'text' }) => {
  return (
    <div className={s.form__field}>
      <label className={s.form__label}>{label}</label>
      {editable ? (
        <input
          className={s.form__input}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          required
        />
      ) : (
        <div className={s.form__text}>{value || '—'}</div>
      )}
    </div>
  );
};

export default ProfileInfo;
