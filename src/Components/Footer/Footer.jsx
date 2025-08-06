import React from "react";
import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footerSection}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerBox}>
          <img
            src="/whiteLogo.jpeg"
            alt="volumex Logo"
            className={styles.footerLogo}
          />
          <p className={styles.footerDescription}>
            We match great people with great businesses, quickly and smoothly,
            reliable support, clear communication, and a focus on lasting
            success.
          </p>
          <div className={styles.footerSocial}>
            <a
              href="https://www.facebook.com/share/1ApaUpw7cV/?mibextid=wwXIfr"
              target="_blank"
            >
              <i class="fa-brands fa-square-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/volumexoutsourcing?igsh=MWQycnYxdGJwMHFmNg=="
              target="_blank"
            >
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/volumex-outsourcing/"
              target="_blank"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://www.tiktok.com/@volumexoutsourcing?_t=ZS-8yWHZtXi9zD&_r=1"
              target="_blank"
            >
              <i class="fa-brands fa-tiktok"></i>
            </a>
          </div>
        </div>

        <div className={styles.footerBox}>
          <h4 className={styles.footerTitle}>Quick Links</h4>
          <ul className={styles.footerLinks}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/About">About</NavLink>
            </li>
            <li>
              <NavLink to="/SmartHiring">Smart Hiring</NavLink>
            </li>
            <li>
              <NavLink to="/HowItWorks">How It Works</NavLink>
            </li>
            <li>
              <NavLink to="/Client">Client</NavLink>
            </li>
            <li>
              <NavLink to="/VA">VA</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">Contact</NavLink>
            </li>
          </ul>
        </div>

        <div className={styles.footerBox}>
          <h4 className={styles.footerTitle}>Contact Us</h4>
          <ul className={styles.footerContact}>
            <li>
              <a className={styles.phone} href="tel:+1 813 646 6115">
                +1 813 646 6115
              </a>
            </li>
            <li>
              <a
                className={styles.phone}
                href="https://wa.me/201014913503"
                target="_blank"
              >
                +20 101 4913 503
              </a>
            </li>
            <li>
              <a
                className={styles.mail}
                href="mailto:Info@Volumexoutsourcing.com"
              >
                Info@Volumexoutsourcing.com
              </a>
            </li>
            <li>
              <a
                className={styles.mail}
                href="mailto:danile@volumexoutsourcing.com"
              >
                danile@volumexoutsourcing.com
              </a>
            </li>
            <li>
              <a
                className={styles.mail}
                href="mailto:Volumexoutsourcing@gmail.com"
              >
                Volumexoutsourcing@gmail.com
              </a>
            </li>
            <li>
              1 Mourad al shriai, El-Nozha, Heliopolis, Cairo, Egypt 4470152
            </li>
          </ul>
        </div>

        <div className={styles.footerBox}>
          <h4 className={styles.footerTitle}>Get In Touch</h4>
          <form className={styles.footerForm}>
            <input type="text" placeholder="name" />
            <input type="email" placeholder="email" />
            <textarea placeholder="message"></textarea>
            <button type="submit">send message</button>
          </form>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>Copyright © 2025 Volumex outsourcing - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
