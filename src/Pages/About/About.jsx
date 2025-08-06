import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./About.module.css";
import intro from "/pages/home/videos/1.mp4";
import { FaChevronDown } from "react-icons/fa";

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Always one open

  const toggleAccordion = (index) => {
    if (activeIndex !== index) {
      setActiveIndex(index); // Always switch to another
    }
  };

  const faqItems = [
    {
      title: "Where do you usually source and screen applicants from?",
      content:
        "We focus primarily on top-tier remote talent from Egypt, a region known for its strong English proficiency, work ethic, and cultural alignment with global markets.",
    },
    {
      title:
        "Is VolumeX Outsourcing a staffing agency or a freelance platform?",
      content:
        "We like to think of ourselves as something in between, but smarter. VolumeX isn’t a traditional staffing agency with rigid contracts and high markups, and we’re not a hands-off freelance platform where you’re left to figure things out alone. Instead, we combine the structure and reliability of an agency with the speed, flexibility, and talent accessibility of a freelance model. Our process is human-centered, ensuring that both clients and freelancers get a personalized, smooth experience from start to finish.",
    },
    {
      title: "Who is VolumeX best suited for?",
      content:
        "VolumeX is ideal for startups, growing businesses, and busy founders who need reliable remote support without the time drain of sourcing, interviewing, and managing freelancers themselves. Whether you're scaling a sales team, delegating admin tasks, or building backend systems, we match you with skilled talent that fits your exact workflow and budget.",
    },
  ];

  return (
    <div>
      <div className={styles.hero}>
        <video autoPlay muted loop>
          <source src={intro} type="video/mp4" />
        </video>
        <div className={`${styles.content}`}>
          <h1>About</h1>
          <p>Remote. Reliable. Ready</p>
        </div>
      </div>

      <section className={styles.breadcrumbSection}>
        <div className={`container ${styles.footerContainer}`}>
          <nav className={styles.breadcrumb}>
            <NavLink to="/">Home</NavLink>
            <span className={styles.separator}>›</span>
            <span>About</span>
          </nav>
        </div>
      </section>

      <section className={styles.descriptionSection}>
        <div className={`container ${styles.footerContainer}`}>
          <h2 className={styles.heading}>about us</h2>
          <p className={styles.paragraph}>
            VolumeX outsourcing was founded with a mission to make hiring
            smarter, faster, and more accessible — for both growing businesses
            and talented professionals. As the world becomes more globally
            connected, new doors have opened for companies to access remote
            talent and for professionals to find meaningful, well-paying work,
            and the chance to connect with international clients. We’re here to
            make that process not just possible, but seamless.
          </p>
          <p className={styles.paragraph}>
            Unlike traditional platforms like Upwork, Fiverr, or Glassdoor,
            which leave you to sort through hundreds of profiles or wait for the
            right opportunity to appear, VolumeX takes a personalized, hands-on
            approach. For businesses, we eliminate the overwhelm of endless
            vetting and mismatches by providing role-ready, pre-vetted
            candidates aligned with your exact needs. For freelancers, we offer
            more than a job listing, we provide opportunity, coaching, and
            direct access to high-quality clients. We guide both sides every
            step of the way, from defining business needs to onboarding and
            beyond, ensuring trust, clarity, and a smooth working relationship
            from day one.
          </p>
        </div>
      </section>

      <section className={styles.benefitsSection}>
        <div className={`container ${styles.footerContainer}`}>
          <div className={styles.benefitsWrapper}>
            <div className={styles.leftContent}>
              <h2 className={styles.heading}>Benefits</h2>
              <p className={styles.paragraph}>
                Hiring through VolumeX means getting results without the
                guesswork. We help you reduce turnover, cut overhead, and fill
                roles faster, without compromising on quality. Every candidate
                is vetted, aligned with your goals, and ready to add value from
                day one. You stay focused on growth while we handle the
                sourcing, filtering, and follow-ups. And for freelancers, it’s a
                chance to gain access to real work opportunities, clear
                expectations, and fair pay
              </p>
              <p className={styles.paragraph}>
                From streamlining workflows to improving decision-making, we
                help HR teams achieve their goals with the power of intelligent
                automation.
              </p>
            </div>

            <div className={styles.rightList}>
              <div className={`${styles.benefitItem} ${styles.active}`}>
                <span className={styles.icon}>✔</span>
                <span className={styles.label}>Reduction in Hiring Cost</span>
              </div>
              <div className={styles.benefitItem}>
                <span className={styles.icon}>✔</span>
                <span className={styles.label}>Faster Onboarding</span>
              </div>
              <div className={styles.benefitItem}>
                <span className={styles.icon}>✔</span>
                <span className={styles.label}>
                  Pre-Vetted, Reliable Talent
                </span>
              </div>
              <div className={styles.benefitItem}>
                <span className={styles.icon}>✔</span>
                <span className={styles.label}>Flexible Scaling Options</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.achievementsSection}>
        <div className={`container ${styles.footerContainer}`}>
          <h2 className={styles.heading}>Info Area</h2>
          <div className={`mb-4 ${styles.achievementBoxes}`}>
            <div className={styles.box}>
              <strong>10+</strong>
              <span>Years Experience</span>
            </div>
            <div className={styles.box}>
              <strong>40+</strong>
              <span>Successful Matches</span>
            </div>
            <div className={styles.box}>
              <strong>92%</strong>
              <span>Retention Rate</span>
            </div>
            <div className={styles.box}>
              <strong>$35K+</strong>
              <span>2024 Revenue</span>
            </div>
          </div>
          <div className={`${styles.CTABtns}`}>
            <a href="https://forms.gle/HWDExvwddgiC43AP7" target="_blank">
              Hire now (Get started){" "}
            </a>
            <a href="https://forms.gle/EeRP28Y4ksMN8JGb8" target="_blank">
              Job (apply now)
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className={`container ${styles.footerContainer}`}>
          <h2 className={styles.heading}>FAQ</h2>
          <div className={styles.accordion}>
            {faqItems.map((item, index) => (
              <div
                key={index}
                className={`${styles.accordionItem} ${
                  activeIndex === index ? styles.active : ""
                }`}
              >
                <div
                  className={styles.accordionHeader}
                  onClick={() => toggleAccordion(index)}
                >
                  <span className={styles.title}>{item.title}</span>
                  <span
                    className={`${styles.icon} ${
                      activeIndex === index ? styles.rotate : ""
                    }`}
                  >
                    <FaChevronDown />
                  </span>
                </div>
                <div
                  className={styles.accordionContent}
                  style={{
                    maxHeight: activeIndex === index ? "500px" : "0px",
                    opacity: activeIndex === index ? 1 : 0,
                    padding:
                      activeIndex === index ? "16px 20px 20px" : "0 20px",
                    overflow: "hidden",
                  }}
                >
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
