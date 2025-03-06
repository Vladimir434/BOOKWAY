import s from "./product.module.css";
import Header from "../../header/header";
import Reviews from "../../Reviews/reviews";
import Footer from "../../footer/footer";
import { useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import Img1 from "../../../assets/image/Rectangle 9213.svg";
import Img2 from "../../../assets/image/main-image-1.svg";
import Img3 from "../../../assets/image/main-image-2.svg";
import Img4 from "../../../assets/image/main-image-3.svg";
import { Swiper, SwiperSlide } from "swiper/react";

const Product = () => {
  const images = [Img1, Img2, Img3, Img4];
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Header />
      <main className={s.main}>
        <div className={s.main__wrapper}>
          <div className={s.main__product}>
            <div className={s.main__product__info}>
              <div className={s.main__product__info__swiper}>
                <Swiper
                  style={{
                    "--swiper-navigation-color": "#000",
                    "--swiper-pagination-color": "#000",
                    marginBottom: "12px",
                  }}
                  className={s.swiper}
                  loop={true}
                  spaceBetween={10}
                  navigation={true}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs]}
                >
                  {images.map((img, index) => (
                    <SwiperSlide className={s.img__wrapper} key={index}>
                      <img className={s.img} src={img} alt="no img" />
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
                  {images.map((img, index) => (
                    <SwiperSlide key={index}>
                      <img src={img} className={s.img2} alt="no img" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
            <div className={s.main__product__description}></div>
          </div>
        </div>
      </main>
      <Reviews />
      <Footer />
    </>
  );
};

export default Product;
