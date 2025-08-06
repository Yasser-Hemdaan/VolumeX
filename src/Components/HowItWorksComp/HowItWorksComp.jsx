// src/components/Fashion/Fashion.jsx
import { Link } from "react-router-dom";
import styles from "./HowItWorksComp.module.css";

const HowItWorksComp = () => {
  return (
    <section className={styles.howItWorksSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.sectionHeader}>
          <span className={styles.badge}>+ How It Works +</span>
          <h2 className={styles.title}>For Businesses & Freelancers</h2>
          <p>A simple, guided process built for speed, clarity, and results.</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <img src="/3.jpeg" alt="VA" className={styles.img} />
            <div className={styles.overlay}>
              <h3>Business</h3>
              <p>For Businesses Looking to Hire</p>
              <Link to="/client" className={styles.btnWhite}>
                View Process
              </Link>
            </div>
          </div>
          <div className={styles.card}>
            <img src="/4.jpeg" alt="VA" className={styles.img} />
            <div className={styles.overlay}>
              <h3>Freelancer</h3>
              <p>For Freelancers Seeking Work</p>
              <Link to="/VA" className={styles.btnWhite}>
                View steps
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksComp;
