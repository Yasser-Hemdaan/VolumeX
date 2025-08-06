import React from "react";
import styles from "./Contact.module.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import intro from "/pages/home/videos/1.mp4";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <div className={styles.hero}>
        <video autoPlay muted loop>
          <source src={intro} type="video/mp4" />
        </video>
        <div className={`${styles.content}`}>
          <h1>Contact us</h1>
          <p>Let's make it happen</p>
        </div>
      </div>
      <section className={styles.breadcrumbSection}>
        <div className={`container ${styles.footerContainer}`}>
          <nav className={styles.breadcrumb}>
            <NavLink to="/">Home</NavLink>
            <span className={styles.separator}>›</span>
            <span>Contact us</span>
          </nav>
        </div>
      </section>
      <section className={styles.contactInfoSection}>
        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <FaMapMarkerAlt className={styles.icon} />
          </div>
          <h3>Address</h3>
          <p>1 Mourad al shriai, El-Nozha, Heliopolis, Cairo, Egypt 4470152</p>
        </div>

        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <FaEnvelope className={styles.icon} />
          </div>
          <h3>Email Us</h3>
          <p>
            <a
              className={styles.mail}
              href="mailto:Info@Volumexoutsourcing.com"
            >
              Info@Volumexoutsourcing.com
            </a>
          </p>
          <p>
            <a
              className={styles.mail}
              href="mailto:danile@volumexoutsourcing.com"
            >
              danile@volumexoutsourcing.com
            </a>
          </p>
          <p>
            <a
              className={styles.mail}
              href="mailto:Volumexoutsourcing@gmail.com"
            >
              Volumexoutsourcing@gmail.com
            </a>
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <FaPhoneAlt className={styles.icon} />
          </div>
          <h3>Call Now</h3>
          <a className={styles.phone} href="tel:+1 813 646 6115">
            +1 813 646 6115
          </a>
          <br />
          <a
            className={styles.phone}
            href="https://wa.me/201014913503"
            target="_blank"
          >
            +20 101 4913 503
          </a>
        </div>
      </section>
      <section className={styles.contactSection}>
        <div className={`container ${styles.contactContainer}`}>
          <div className={styles.contactInfo}>
            <h2>WE’D LOVE TO TALK</h2>
            <p>
              Have a question? We’d love to hear from you. Send us a message to
              get the conversation started, especially if you're curious about
              our services or how we can support your business.
            </p>
          </div>

          {/* Right Form Section */}
          <form className={styles.contactForm}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label>
                  NAME <span>*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name Here"
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label>
                  PHONE <span>*</span>
                </label>
                <input
                  type="tel"
                  placeholder="Enter Your Phone Here"
                  required
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={`${styles.formGroup}`}>
                <label>
                  EMAIL <span>*</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email Here"
                  required
                />
              </div>
            </div>

            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
              <label>
                MESSAGE <span>*</span>
              </label>
              <textarea placeholder="Enter Your Name Here" required></textarea>
            </div>

            <button type="submit" className={styles.submitBtn}>
              SEND NOW
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
