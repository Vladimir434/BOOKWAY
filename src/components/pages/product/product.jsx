import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCartStore } from '../../../store/basket-store/basket-store';
import { productDetails } from '../../../store/product-details/product-details';
import Header from '../../header/header';
import Reviews from '../../Reviews/reviews';
import Footer from '../../footer/footer';
import Art from '../../../assets/image/art.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import s from './product.module.css';
import { getAuth } from 'firebase/auth';

const Product = () => {
  const { id } = useParams();
  const { product, getDefineProduct, setSelectedProduct } = productDetails();
  const { cart, fetchCart, addToCard } = useCartStore();

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    const auth = getAuth()
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if(user) {
        fetchCart();
      }
    })
    return () => unsubscribe()
  }, [fetchCart]);
  
  useEffect(() => {
    getDefineProduct(id)
  },[getDefineProduct,id])
  useEffect(() => {
    if (product) {
      localStorage.setItem('selectedProduct', JSON.stringify(product));
    }
  }, [product]);

  const isProductInCart = cart.some((item) => item.id === product?.id);

  const handleAddToCard = () => {
    if (!isProductInCart) {
      addToCard(product);
    }
  };

  return (
    <>
      <Header />
      <main className={s.main}>
        <div className={s.main__wrapper}>
          <div className={s.main__product}>
            <div className={s.main__product__info}>
              <div className={s.main__product__info__swiper}>
                {product?.images && product.images.length > 0 ? (
                  <>
                    <Swiper
                      style={{
                        "--swiper-navigation-color": "#000",
                        "--swiper-pagination-color": "#000",
                        marginBottom: "12px",
                      }}
                      spaceBetween={10}
                      navigation={true}
                      thumbs={{ swiper: thumbsSwiper }}
                      modules={[FreeMode, Navigation, Thumbs]}
                    >
                      {product?.images.map((img, index) => (
                        <SwiperSlide className={s.img__wrapper} key={index}>
                          <img className={s.img} src={img.img || img} alt="Product" />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <Swiper
                      onSwiper={setThumbsSwiper}
                      spaceBetween={10}
                      slidesPerView={8}
                      freeMode={true}
                      watchSlidesProgress={true}
                      modules={[FreeMode, Navigation, Thumbs]}
                    >
                      {product?.images.map((img, index) => (
                        <SwiperSlide className={s.img2__wrapper} key={index}>
                          <img src={img.img || img} className={s.img2} alt="Product" />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </>
                ) : (
                  <h4>Изображение не найдено</h4>
                )}
              </div>
            </div>
            <div className={s.main__product__description}>
              <h2 className={s.product__description__title}>{product?.name}</h2>
              <div className={s.product__description__art}>
                <label className={s.product__description__art__title}>
                  <img src={Art} alt="Stock" /> В наличии
                </label>
                <label>Артикул: {product?.article}</label>
              </div>
              <div className={s.product__description__characteristics}>
                <h2 className={s.product__description__characteristics__title}>Характеристики</h2>
                <div className={s.product__description__characteristics__item}>
                  <h3>Автор</h3>
                  <p>{product?.autor}</p>
                </div>
                <hr />
                <div className={s.product__description__characteristics__item}>
                  <h3>Издательство</h3>
                  <p>{product?.publishing}</p>
                </div>
                <hr />
                <div className={s.product__description__characteristics__item}>
                  <h3>Тип обложки</h3>
                  <p>{product?.binding}</p>
                </div>
                <hr />
                <div className={s.product__description__characteristics__item}>
                  <h3>Возраст</h3>
                  <p>{product?.age}</p>
                </div>
                <hr />
              </div>
            </div>
            <div className={s.main__product__price}>
              <h4 className={s.product__price__title}>{product?.price} сом</h4>
              <div className={s.product__price__btn}>
                <button
                  className={s.product__price__btn__section1}
                  onClick={handleAddToCard}
                  disabled={isProductInCart}
                >
                  {isProductInCart ? 'Уже в корзине' : 'В корзину'}
                </button>
                <Link
                  to="/straight"
                  onClick={() => setSelectedProduct(product)}
                  className={s.product__price__btn__section2}
                >
                  Купить в 1 клик
                </Link>
              </div>
            </div>
          </div>
          <div className={s.main__description}>
            <h2 className={s.main__description__title}>Описание</h2>
            <p className={s.main__description__text}>{product?.description}</p>
          </div>
        </div>
      </main>
      <Reviews />
      <Footer />
    </>
  );
};

export default Product;
