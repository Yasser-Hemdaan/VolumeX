import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

import styles from "./Partners.module.css";

const logos = [
  "/components/partners/1.jpg",
  "/components/partners/2.jpg",
  "/components/partners/3.jpg",
  "/components/partners/1.jpg",
  "/components/partners/2.jpg",
  "/components/partners/3.jpg",
  "/components/partners/1.jpg",
  "/components/partners/2.jpg",
  "/components/partners/3.jpg",
  "/components/partners/1.jpg",
  "/components/partners/2.jpg",
  "/components/partners/3.jpg",
  "/components/partners/1.jpg",
  "/components/partners/2.jpg",
  "/components/partners/3.jpg",
  "/components/partners/1.jpg",
  "/components/partners/2.jpg",
  "/components/partners/3.jpg",
  "/components/partners/1.jpg",
  "/components/partners/2.jpg",
  "/components/partners/3.jpg",
];

const Partners = () => {
  return (
    <section className={styles.partnersSection}>
      <div className="container">
        <div className={styles.headerRow}>
          <h3 className={styles.partnersTitle}>PARTNERS</h3>
          <div className={styles.verticalLine}></div>

          <Swiper
            modules={[Autoplay]}
            slidesPerView={10}
            spaceBetween={40}
            loop={logos.length > 5} // ✅ شرط تشغيل loop فقط عند توفر العدد
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: { slidesPerView: 3 },
              576: { slidesPerView: 4 },
              768: { slidesPerView: 6 },
              992: { slidesPerView: 10 },
            }}
          >
            {logos.map((logo, index) => (
              <SwiperSlide key={index}>
                <img
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className={styles.logoImg}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Partners;
