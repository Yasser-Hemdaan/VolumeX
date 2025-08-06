import React from "react";
import styles from "./Home.module.css";
import intro from "/pages/home/videos/1.mp4";
import { NavLink } from "react-router-dom";
import ChooseUs from "../../Components/ChooseUs/ChooseUs";
import SolutionsComp from "../../Components/SolutionsComp/SolutionsComp";
import HowItWorksComp from "../../Components/HowItWorksComp/HowItWorksComp";
import Testimonials from "../../Components/Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <div className={styles.hero}>
        <video autoPlay muted loop>
          <source src={intro} type="video/mp4" />
        </video>
        <div className={`${styles.content}`}>
          <h1>Connect.Hire.Work - Made Easy</h1>
          <p>
            Whether you’re looking to hire top talent, or seeking a remote job,
            you’re in the right place.
          </p>
          <div className={`${styles.heroBtns}`}>
            <div className={`${styles.btnBlock}`}>
              <p>I’m Hiring for my business </p>
              <NavLink to={"/Client"}>Get started</NavLink>
            </div>
            <div className={`${styles.btnBlock}`}>
              <p>I’m looking for Remote work </p>
              <NavLink to={"/VA"}>Apply now</NavLink>
            </div>
          </div>
        </div>
      </div>
      {/* <Partners /> */}
      <ChooseUs />
      <SolutionsComp />
      <HowItWorksComp />
      <Testimonials />
    </>
  );
};

export default Home;
