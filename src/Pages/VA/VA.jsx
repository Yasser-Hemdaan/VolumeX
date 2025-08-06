import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./VA.module.css";
import intro from "/pages/home/videos/1.mp4";
import { FaChevronDown } from "react-icons/fa";

const VA = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const steps = [
    {
      title: "Submit Your Application",
      content:
        "Once you click Apply now below, You’ll Start by filling out our application form. You'll upload your CV, take a typing test, record a short voice introduction, and share your experience",
      step: 1,
    },
    {
      title: "Take a Personality assessment",
      content:
        "next, you’ll complete a short personality assessment. This helps us understand how you work best so we can match you with clients that align with your strengths, pace, and communication style.",
      step: 2,
    },
    {
      title: "Interview With Our Team",
      content:
        "If your profile is a good fit, we’ll schedule a quick interview to verify your experience, learn more about your preferences, and evaluate your spoken English. It’s also a chance for you to ask questions.",
      step: 3,
    },
    {
      title: "Get Matched & Hired",
      content:
        "Once you're verified, we add you to our internal talent pipeline. We actively match you with clients based on your skills, personality, and availability. You'll interview directly with the client, and if selected, you start working.",
      step: 4,
    },
  ];

  return (
    <>
      <div className={styles.hero}>
        <video autoPlay muted loop>
          <source src={intro} type="video/mp4" />
        </video>
        <div className={`${styles.content}`}>
          <h1>Freelancers</h1>
          <p> Looking for remote Work </p>
        </div>
      </div>
      <section className={styles.breadcrumbSection}>
        <div className={styles.container}>
          <nav className={styles.breadcrumb}>
            <NavLink to="/">Home</NavLink>
            <span className={styles.separator}>›</span>
            <span>Client</span>
          </nav>
        </div>
      </section>

      <section className={styles.vaDescriptionSection}>
        <div className={`container ${styles.footerContainer}`}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.title}>Freelancers</h2>
          </div>
          <h1 className={styles.heading}>
            From Application to Placement—Made Simple
          </h1>
          <p className={styles.description}>
            A clear, guided process to help you get matched with the right
            client
          </p>
        </div>
      </section>

      <section className={styles.roadmapSection}>
        <div className={styles.roadmapContainer}>
          {steps.map((step, index) => (
            <div className={styles.roadmapStep} key={index}>
              <h3>{step.title}</h3>
              <div className={styles.iconBox}>
                <span className={styles.icon}>{step.step}</span>
              </div>
              <p>{step.content}</p>
            </div>
          ))}
        </div>

        <div className={styles.ctaWrapper}>
          <a
            href="https://forms.gle/EeRP28Y4ksMN8JGb8"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Apply now
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className={`container ${styles.footerContainer}`}>
          <h2 className={styles.heading}>FAQ</h2>
          <div className={styles.accordion}>
            {/* Question 1 */}
            <div
              className={`${styles.accordionItem} ${
                activeIndex === 0 ? styles.active : ""
              }`}
            >
              <div
                className={styles.accordionHeader}
                onClick={() => toggleAccordion(0)}
              >
                <span className={styles.title}>
                  How do I apply to work as a freelancer with VolumeX
                  outsourcing?
                </span>
                <span
                  className={`${styles.icon} ${
                    activeIndex === 0 ? styles.rotate : ""
                  }`}
                >
                  <FaChevronDown />
                </span>
              </div>
              <div
                className={styles.accordionContent}
                style={{
                  maxHeight: activeIndex === 0 ? "500px" : "0px",
                  opacity: activeIndex === 0 ? 1 : 0,
                  padding: activeIndex === 0 ? "16px 20px 20px" : "0 20px",
                  overflow: "hidden",
                  transition: "all 0.4s ease",
                }}
              >
                <p>
                  You can apply through our website intake forms, or through
                  social media platforms. Our team will review your application
                  as part of our 3-layer screening process.
                </p>
              </div>
            </div>

            {/* Question 2 */}
            <div
              className={`${styles.accordionItem} ${
                activeIndex === 1 ? styles.active : ""
              }`}
            >
              <div
                className={styles.accordionHeader}
                onClick={() => toggleAccordion(1)}
              >
                <span className={styles.title}>
                  - What makes me stand out to clients?
                </span>
                <span
                  className={`${styles.icon} ${
                    activeIndex === 1 ? styles.rotate : ""
                  }`}
                >
                  <FaChevronDown />
                </span>
              </div>
              <div
                className={styles.accordionContent}
                style={{
                  maxHeight: activeIndex === 1 ? "500px" : "0px",
                  opacity: activeIndex === 1 ? 1 : 0,
                  padding: activeIndex === 1 ? "16px 20px 20px" : "0 20px",
                  overflow: "hidden",
                  transition: "all 0.4s ease",
                }}
              >
                <p>
                  Your skills, reliability, experience, and attitude! We also
                  assess your personality to match you with clients who suit
                  your style.
                </p>
              </div>
            </div>

            {/* Question 3 */}
            <div
              className={`${styles.accordionItem} ${
                activeIndex === 2 ? styles.active : ""
              }`}
            >
              <div
                className={styles.accordionHeader}
                onClick={() => toggleAccordion(2)}
              >
                <span className={styles.title}>
                  - Do I have a say in which clients I work with?
                </span>
                <span
                  className={`${styles.icon} ${
                    activeIndex === 2 ? styles.rotate : ""
                  }`}
                >
                  <FaChevronDown />
                </span>
              </div>
              <div
                className={styles.accordionContent}
                style={{
                  maxHeight: activeIndex === 2 ? "500px" : "0px",
                  opacity: activeIndex === 2 ? 1 : 0,
                  padding: activeIndex === 2 ? "16px 20px 20px" : "0 20px",
                  overflow: "hidden",
                  transition: "all 0.4s ease",
                }}
              >
                <p>
                  Yes — we only match you with clients that align with your
                  skills and preferences. You’ll have interviews and can choose
                  whether to proceed
                </p>
              </div>
            </div>

            {/* Question 4 */}
            <div
              className={`${styles.accordionItem} ${
                activeIndex === 3 ? styles.active : ""
              }`}
            >
              <div
                className={styles.accordionHeader}
                onClick={() => toggleAccordion(3)}
              >
                <span className={styles.title}>- Will I get training?</span>
                <span
                  className={`${styles.icon} ${
                    activeIndex === 3 ? styles.rotate : ""
                  }`}
                >
                  <FaChevronDown />
                </span>
              </div>
              <div
                className={styles.accordionContent}
                style={{
                  maxHeight: activeIndex === 3 ? "500px" : "0px",
                  opacity: activeIndex === 3 ? 1 : 0,
                  padding: activeIndex === 3 ? "16px 20px 20px" : "0 20px",
                  overflow: "hidden",
                  transition: "all 0.4s ease",
                }}
              >
                <p>
                  While we don’t provide full training programs, we guide you on
                  client expectations and help with onboarding. Some clients may
                  also offer specific training.
                </p>
              </div>
            </div>

            {/* Question 5 */}
            <div
              className={`${styles.accordionItem} ${
                activeIndex === 4 ? styles.active : ""
              }`}
            >
              <div
                className={styles.accordionHeader}
                onClick={() => toggleAccordion(4)}
              >
                <span className={styles.title}>
                  What if I don’t pass the first client interview?
                </span>
                <span
                  className={`${styles.icon} ${
                    activeIndex === 4 ? styles.rotate : ""
                  }`}
                >
                  <FaChevronDown />
                </span>
              </div>
              <div
                className={styles.accordionContent}
                style={{
                  maxHeight: activeIndex === 4 ? "500px" : "0px",
                  opacity: activeIndex === 4 ? 1 : 0,
                  padding: activeIndex === 4 ? "16px 20px 20px" : "0 20px",
                  overflow: "hidden",
                  transition: "all 0.4s ease",
                }}
              >
                <p>
                  We keep you in our system and continue matching you with other
                  clients. Your profile stays active, and you’ll have more
                  opportunities.
                </p>
              </div>
            </div>

            {/* Question 6 */}
            <div
              className={`${styles.accordionItem} ${
                activeIndex === 5 ? styles.active : ""
              }`}
            >
              <div
                className={styles.accordionHeader}
                onClick={() => toggleAccordion(5)}
              >
                <span className={styles.title}>How do I get paid?</span>
                <span
                  className={`${styles.icon} ${
                    activeIndex === 5 ? styles.rotate : ""
                  }`}
                >
                  <FaChevronDown />
                </span>
              </div>
              <div
                className={styles.accordionContent}
                style={{
                  maxHeight: activeIndex === 5 ? "500px" : "0px",
                  opacity: activeIndex === 5 ? 1 : 0,
                  padding: activeIndex === 5 ? "16px 20px 20px" : "0 20px",
                  overflow: "hidden",
                  transition: "all 0.4s ease",
                }}
              >
                <p>
                  Payments are managed securely through the agreements we help
                  set up. You’ll always know your pay terms in advance.
                </p>
              </div>
            </div>

            {/* Question 7 */}
            <div
              className={`${styles.accordionItem} ${
                activeIndex === 6 ? styles.active : ""
              }`}
            >
              <div
                className={styles.accordionHeader}
                onClick={() => toggleAccordion(6)}
              >
                <span className={styles.title}>
                  Is there a minimum number of hours I have to commit?
                </span>
                <span
                  className={`${styles.icon} ${
                    activeIndex === 6 ? styles.rotate : ""
                  }`}
                >
                  <FaChevronDown />
                </span>
              </div>
              <div
                className={styles.accordionContent}
                style={{
                  maxHeight: activeIndex === 6 ? "500px" : "0px",
                  opacity: activeIndex === 6 ? 1 : 0,
                  padding: activeIndex === 6 ? "16px 20px 20px" : "0 20px",
                  overflow: "hidden",
                  transition: "all 0.4s ease",
                }}
              >
                <p>
                  No — we have both part-time and full-time roles. We match you
                  based on what you’re looking for.
                </p>
              </div>
            </div>

            {/* Question 8 */}
            <div
              className={`${styles.accordionItem} ${
                activeIndex === 7 ? styles.active : ""
              }`}
            >
              <div
                className={styles.accordionHeader}
                onClick={() => toggleAccordion(7)}
              >
                <span className={styles.title}>
                  Can I work with multiple clients through VolumeX?
                </span>
                <span
                  className={`${styles.icon} ${
                    activeIndex === 7 ? styles.rotate : ""
                  }`}
                >
                  <FaChevronDown />
                </span>
              </div>
              <div
                className={styles.accordionContent}
                style={{
                  maxHeight: activeIndex === 7 ? "500px" : "0px",
                  opacity: activeIndex === 7 ? 1 : 0,
                  padding: activeIndex === 7 ? "16px 20px 20px" : "0 20px",
                  overflow: "hidden",
                  transition: "all 0.4s ease",
                }}
              >
                <p>
                  Yes, as long as you can manage the workload and there’s no
                  conflict of interest between 2 clients.
                </p>
              </div>
            </div>

            {/* Question 9 */}
            <div
              className={`${styles.accordionItem} ${
                activeIndex === 8 ? styles.active : ""
              }`}
            >
              <div
                className={styles.accordionHeader}
                onClick={() => toggleAccordion(8)}
              >
                <span className={styles.title}>
                  What support do I get after I’m hired?
                </span>
                <span
                  className={`${styles.icon} ${
                    activeIndex === 8 ? styles.rotate : ""
                  }`}
                >
                  <FaChevronDown />
                </span>
              </div>
              <div
                className={styles.accordionContent}
                style={{
                  maxHeight: activeIndex === 8 ? "500px" : "0px",
                  opacity: activeIndex === 8 ? 1 : 0,
                  padding: activeIndex === 8 ? "16px 20px 20px" : "0 20px",
                  overflow: "hidden",
                  transition: "all 0.4s ease",
                }}
              >
                <p>
                  We’re here to help, from communication assistance, to
                  resolving issues if they arise during your work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VA;
