import s from "./product.module.css";
import Header from "../../header/header";
import Reviews from "../../Reviews/reviews";
import Footer from "../../footer/footer";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { productDetails } from "../../../store/product-details-store/product-details-store";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Product = () => {
  const [product, setProduct] = useState(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null);
  const { id } = useParams();
  const {
    defineProducts,
    getDefaneProducts,
    getSameProductByCategory,
    sameProduct,
    setCartNewItem,
  } = productDetails();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId(null);
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    getDefaneProducts(id);
  }, [id, getDefaneProducts]);

  useEffect(() => {
    if (defineProducts) {
      getSameProductByCategory(defineProducts?.category[0]);
    }
  }, [defineProducts, getSameProductByCategory]);

  const handleAddToCart = async () => {
    if (!userId) {
      toast.error("Вы не вошли в аккаунт");
      return;
    }

    if (!selectedSize) {
      toast.error("Выберите размер");
      return;
    }
    if (!defineProducts) {
      toast.error('Товат не найден')
      return;
    }

    try {
      await setCartNewItem({
        productID: id,
        chooseSize: selectedSize,
        userId,
      });
      toast.success("Товар добавлен в корзину");
    } catch (error) {
      toast.error("Что-то пошло не так", error);
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, "products2", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProduct(docSnap.data());
        } else {
          console.log("Товар не найден");
        }
      } catch (error) {
        console.error("Ошибка загрузки товара:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <p>Загрузка...</p>;
  if (!product) return <p>Товар не найден</p>;

  return (
    <>
      <Header />
      <main className={s.main}>
        <div className={s.main__wrapper}>
          <div className={s.main__product}>
            <div className={s.main__product__info}>
              <div className={s.main__product__info__swiper}>
                <Swiper
                  style={{ "--swiper-navigation-color": "#000" }}
                  loop={true}
                  spaceBetween={10}
                  navigation={true}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs]}
                >
                  {product.images.map((img, index) => (
                    <SwiperSlide className={s.img__wrapper} key={index}>
                      <img className={s.img} src={item?.img} alt="Изображение товара" />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  loop={true}
                  spaceBetween={10}
                  slidesPerView={8}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                >
                  {product.images.map((img, index) => (
                    <SwiperSlide className={s.img2__wrapper} key={index}>
                      <img src={item?.img} className={s.img2} alt="Миниатюра" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <div className={s.main__product__description}>
              <h2 className={s.product__description__title}>{product.title}</h2>
              <div className={s.product__description__characteristics}>
                <h3>Автор: {product.author}</h3>
                <h3>Издательство: {product.publisher}</h3>
                <h3>Жанр: {product.genre}</h3>
                <h3>Год издания: {product.year}</h3>
                <h3>Количество страниц: {product.pages}</h3>
              </div>
            </div>
            <div className={s.main__product__price}>
              <h4 className={s.product__price__title}>{product.price} сом</h4>
              <div className={s.product__price__btn}>
                <button className={s.product__price__btn__section1}>В корзину</button>
                <Link to="/straight" className={s.product__price__btn__section2}>Купить в 1 клик</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Reviews />
      <Footer />
    </>
  );
};

export default Product;
