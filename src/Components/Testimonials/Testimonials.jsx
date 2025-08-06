// src/components/Testimonials/Testimonials.jsx
import styles from "./Testimonials.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import man from "/man.png";
import women from "/women.png";

const Testimonials = () => {
  return (
    <section className={styles.testimonialsSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.sectionHeader}>
          <span className={styles.badge}>+ Our Testimonials +</span>
          <h2 className={styles.title}>What Our Clients Say</h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={1}
          className={styles.swiper}
        >
          <SwiperSlide className={styles.slide}>
            <div className={styles.clientInfo}>
              <img src={man} alt="Mike" className={styles.avatar} />
              <div>
                <h4 className={styles.author}>Mike</h4>
                <p className={styles.role}>CEO</p>
                <div className={styles.stars}>★★★★★</div>
              </div>
            </div>
            <p className={styles.quote}>
              "The entire process was faster and smoother than expected — we had
              someone up and running in days."
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.clientInfo}>
              <img src={man} alt="Jacob" className={styles.avatar} />
              <div>
                <h4 className={styles.author}>Jacob</h4>
                <p className={styles.role}>CEO</p>
                <div className={styles.stars}>★★★★★</div>
              </div>
            </div>
            <p className={styles.quote}>
              "I ended up hiring a whole team of real estate acquisitions.
              Highly recommend 🔥"
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.clientInfo}>
              <img src={women} alt="Angela" className={styles.avatar} />
              <div>
                <h4 className={styles.author}>Angela</h4>
                <p className={styles.role}>Operations Manager</p>
                <div className={styles.stars}>★★★★★</div>
              </div>
            </div>
            <p className={styles.quote}>
              "We don’t usually send referrals, but this team truly earned it.
              Best hiring decision we’ve made in years."
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.clientInfo}>
              <img src={man} alt="Robert" className={styles.avatar} />
              <div>
                <h4 className={styles.author}>Robert</h4>
                <p className={styles.role}>Real Estate Investor</p>
                <div className={styles.stars}>★★★★★</div>
              </div>
            </div>
            <p className={styles.quote}>
              "They find you the best remote talent your budget has to offer.
              Thanks Daniel!"
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.clientInfo}>
              <img src={man} alt="Todd" className={styles.avatar} />
              <div>
                <h4 className={styles.author}>Todd</h4>
                <p className={styles.role}>CEO</p>
                <div className={styles.stars}>★★★★★</div>
              </div>
            </div>
            <p className={styles.quote}>
              "Their strongest skill is psychology and understanding people.
              They knew exactly the type of person I was looking for from day
              one 💪"
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.clientInfo}>
              <img src={women} alt="Jacquelyn" className={styles.avatar} />
              <div>
                <h4 className={styles.author}>Jacquelyn</h4>
                <p className={styles.role}>Small Business Owner</p>
                <div className={styles.stars}>★★★★★</div>
              </div>
            </div>
            <p className={styles.quote}>
              "Honestly, I wasn’t sure what to expect — but the process was
              simple, clear, and exceeded my expectations."
            </p>
          </SwiperSlide>
          <SwiperSlide className={styles.slide}>
            <div className={styles.clientInfo}>
              <img src={man} alt="Terrance" className={styles.avatar} />
              <div>
                <h4 className={styles.author}>Terrance</h4>
                <p className={styles.role}>Founder</p>
                <div className={styles.stars}>★★★★★</div>
              </div>
            </div>
            <p className={styles.quote}>
              "Very professional, highly recommend for any fast-growing
              company."
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
