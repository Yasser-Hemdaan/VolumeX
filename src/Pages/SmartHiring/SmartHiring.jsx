import React from "react";
import styles from "./SmartHiring.module.css";
import intro from "/pages/home/videos/1.mp4";
import { NavLink } from "react-router-dom";

const servicesData = [
  {
    title: "Role-Matched Talent",
    description:
      "We start by understanding your business needs, tasks, and tools. Then we handpick VA candidates with the right experience whether it’s( admin, customer support, cold calling, acquisition specialist, disposition specialist, coordination VA…etc). Every match is made based on both skill and suitability for your role.",
  },
  {
    title: "Personality-Based Filtering",
    description:
      "Beyond skill, we assess each VA’s personality through a custom-built assessment. This helps us match you with someone who aligns with your work style, whether you need someone analytical, flexible, reliable, or highly communicative.",
  },
  {
    title: "Pre-Vetted Candidates",
    description:
      "All VAs go through a structured screening process that includes English fluency, typing and tool assessments, technical knowledge evaluation, and a personal interview with our team. You’ll only see applicants who have successfully passed all stages and are ready for you to interview.",
  },
  {
    title: "Clear Communication Setup",
    description:
      "We guide you through onboarding, set expectations for both sides, and create a shared Group (WhatsApp, Discord, or Slack) for direct communication. You’re not left alone we ensure both client and VA are aligned.",
  },
  {
    title: "Flexible Pricing, Clear Results",
    description:
      "You set your own budget range. We only send profiles within your limits, and we focus on ROI not upselling. You get the right value based on what you're hiring for.",
  },
  {
    title: "Ongoing Support & Fast Replacements",
    description:
      "Even after hiring, our team checks in regularly. We follow up every week to ensure everything is going as expected. Need changes? Replace or adjust your setup quickly, with no long delays or hidden costs.",
  },
];

const SmartHiring = () => {
  return (
    <>
      <div className={styles.hero}>
        <video autoPlay muted loop>
          <source src={intro} type="video/mp4" />
        </video>
        <div className={`${styles.content}`}>
          <h1>Smart Hiring</h1>
          <p>The Smart Way to Build Your Remote Team</p>
        </div>
      </div>
      <section className={styles.breadcrumbSection}>
        <div className={`container ${styles.footerContainer}`}>
          <nav className={styles.breadcrumb}>
            <NavLink to="/">Home</NavLink>
            <span className={styles.separator}>›</span>
            <span>Smart Hiring</span>
          </nav>
        </div>
      </section>
      <section className={`container ${styles.servicesSection}`}>
        <h2 className={styles.heading}>Smart Hiring</h2>
        <p className={styles.subheading}>
          We help businesses find the right virtual assistant, not just any
          assistant. Whether you're hiring one person or building a remote team,
          we simplify the process, screen for quality, and offer full hiring
          support.
        </p>
        <div className={`mb-4 ${styles.grid}`}>
          {servicesData.map((service, index) => (
            <div className={styles.gridItem} key={index}>
              <div className={styles.content}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfXrVgG0Jxlz-w7-djhpoFXuxJ65QNkJC12c6ONGyJt62holQ/viewform"
          target="_blank"
        >
          Hire Now (Get started)
        </a>
      </section>
    </>
  );
};

export default SmartHiring;
