import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = ({ isBurgerChecked, handleBurgerClick }) => {
  return (
    <div className={`${styles.navbar} ${isBurgerChecked ? styles.active : ""}`}>
      <div className="container">
        <ul className={`${styles.navbarList}`}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
              onClick={handleBurgerClick}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About"
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
              onClick={handleBurgerClick}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/SmartHiring"
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
              onClick={handleBurgerClick}
            >
              Smart Hiring
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/HowItWorks"
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
              onClick={handleBurgerClick}
            >
              How It Works
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Client"
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
              onClick={handleBurgerClick}
            >
              Client
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/VA"
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
              onClick={handleBurgerClick}
            >
              VA
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact"
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
              onClick={handleBurgerClick}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
