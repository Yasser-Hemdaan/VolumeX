import { NavLink } from "react-router-dom";
import styles from "./HowItWorks.module.css";
import intro from "/pages/home/videos/1.mp4";
import HowItWorksComp from "../../Components/HowItWorksComp/HowItWorksComp";

const HowItWorks = () => {
  return (
    <div>
      <div className={styles.hero}>
        <video autoPlay muted loop>
          <source src={intro} type="video/mp4" />
        </video>
        <div className={`${styles.content}`}>
          <h1>How It Works</h1>
          <p>
            Built for Businesses & Freelancers, A fast, guided process that
            delivers clarity and results
          </p>
        </div>
      </div>
      <section className={styles.breadcrumbSection}>
        <div className={styles.container}>
          <nav className={styles.breadcrumb}>
            <NavLink to="/">Home</NavLink>
            <span className={styles.separator}>›</span>
            <span>How It Works</span>
          </nav>
        </div>
      </section>
      <HowItWorksComp />
    </div>
  );
};

export default HowItWorks;
