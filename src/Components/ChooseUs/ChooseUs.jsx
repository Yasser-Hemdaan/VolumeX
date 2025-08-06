import { NavLink } from "react-router-dom";
import styles from "./ChooseUs.module.css";

const ChooseUs = () => {
  return (
    <section className={styles.chooseUs}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <span className={styles.smallTitle}>Why choose Us </span>
          <h2 className={styles.mainTitle}>
            Hiring made simple we connect you with the
            <span> right talent, fast.</span>
          </h2>
          <p className={styles.description}>
            We bridge global clients with elite professionals, ensuring quality,
            trust, and flexibility every step of the way.
          </p>

          <ul className={`${styles.aboutList}`}>
            <li>
              <span>Fast Matching :</span> Top candidates delivered in 48–72
              hours.
            </li>
            <li>
              <span>Built on Trust :</span> Fair pay, full transparency, no
              surprises.
            </li>
            <li>
              <span>Accurate Fit :</span> Vetted Freelancers matched to your
              exact needs.
            </li>
            <li>
              <span>Flexible Terms :</span> You set the budget, we deliver the
              talent.
            </li>
          </ul>

          <div className={styles.icons}>
            <i className="fa-solid fa-forward-fast"></i>
            <i class="fa-solid fa-shapes"></i>
            <i class="fa-solid fa-medal"></i>
            <i class="fa-solid fa-shuffle"></i>
          </div>

          <NavLink to="/About" className={styles.btnPrimary}>
            Read more
          </NavLink>
        </div>

        <div className={styles.images}>
          <img src="/1.jpeg" alt="Office 1" className={styles.imgLeft} />
          <img src="/2.jpeg" alt="Office 2" className={styles.imgRight} />
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
