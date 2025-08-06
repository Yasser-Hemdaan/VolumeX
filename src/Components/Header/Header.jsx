import styles from "./Header.module.css";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isBurgerChecked, setIsBurgerChecked] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  function handleCheck() {
    setIsBurgerChecked(!isBurgerChecked);
    console.log(isBurgerChecked);
  }

  useEffect(() => {
    if (isBurgerChecked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup لما يخرج من الصفحة مثلاً
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isBurgerChecked]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 1); // غير الرقم حسب متى تبدأ التغيير
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className="container py-3 d-flex justify-content-between align-items-center">
          <NavLink to="/">
            <picture>
              <img
                src="/blackLogo.jpeg"
                alt="volumex Logo"
                className={`${styles.headerLogo}`}
              />
            </picture>
          </NavLink>
          <span
            className={`${styles.menuToggle} d-flex justify-content-center align-items-center text-uppercase gap-2`}
            onClick={handleCheck}
          >
            <span className={styles.iconWrapper}>
              {isBurgerChecked ? (
                <i className={`fa-solid fa-xmark ${styles.iconScrolled}`} />
              ) : (
                <i
                  className={`fa-solid fa-bars-staggered ${
                    scrolled ? styles.iconScrolled : styles.icon
                  }`}
                />
              )}
            </span>
          </span>
        </div>
      </div>
      <Navbar
        isBurgerChecked={isBurgerChecked}
        handleBurgerClick={handleCheck}
      />
    </>
  );
};
export default Header;
