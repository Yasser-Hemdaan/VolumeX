import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Client.module.css";
import intro from "/pages/home/videos/1.mp4";
import { FaChevronDown } from "react-icons/fa";

const Client = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const steps = [
    {
      title: "Tell Us What You Need",
      content:
        "Once you click Get Started below, you'll fill out our quick intake form. Right after, we’ll schedule a short discovery call to understand your goals, budget, working style, and role requirements.",
      step: 1,
    },
    {
      title: "We Handpick Your Matches",
      content:
        "Our internal system filters for skills needed, personality, experience, and English level. You’ll get 2–3 Pre-screened candidates tailored to your criteria lined up.",
      step: 2,
    },
    {
      title: "You Interview & Choose",
      content:
        "You pick your interview times. Once you choose the right VA(s), we finalize scope, invoice, and set up smooth communication channels.",
      step: 3,
    },
    {
      title: "Start Fast, Stay Supported",
      content:
        "We help onboard your VA and follow up regularly to ensure everything stays on track. You get support, alignment, and peace of mind.",
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
          <h1>Clients</h1>
          <p>Looking to hire</p>
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

      <section className={styles.clientDescriptionSection}>
        <div className={`container ${styles.footerContainer}`}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.title}>Clients</h2>
          </div>
          <h1 className={styles.heading}>
            From Discovery to Delivery — What to Expect”
          </h1>
          <p className={styles.description}>
            We keep things fast, personalized, and results-focused so you get
            the right virtual assistant without wasting time or losing control.
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
            href="https://forms.gle/HWDExvwddgiC43AP7"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Get started
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
                  How long does it take to hire a VA through VolumeX outsourcing
                  ?
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
                  We typically provide 2–3 shortlisted candidates within 48
                  hours after your discovery call. Many clients complete hiring
                  within 3–5 days, depending on interview availability.
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
                  How does the payment structure work?
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
                  VolumeX outsourcing operates on a prepaid model to ensure
                  fairness and accountability for both clients and freelancers.
                  Once you select a virtual assistant, you’ll be invoiced based
                  on the agreed-upon payment cycle (weekly or monthly This
                  system protects your investment, guarantees delivery, and
                  gives the freelancer confidence that they’ll be paid on time.
                  It’s part of how we maintain quality, reliability, and
                  long-term success on both sides.
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
                  Can VolumeX help with more than just hiring a single VA?
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
                <p>Absolutely. VolumeX outsourcing can support you with:</p>
                <ul>
                  <li>
                    Lead Generation Campaigns – VAs dedicated to building and
                    nurturing your pipeline
                  </li>
                  <li>
                    Team Building – Scale fast with structured onboarding and
                    hiring support
                  </li>
                  <li>
                    Team Management & QA – We can help manage performance and
                    quality on your behalf
                  </li>
                  <li>
                    Project-Based Roles – Hire flexible, specialized talent for
                    short-term or one-off needs
                  </li>
                </ul>
                <p>
                  If it can be done remotely, we’ll find the right expert,
                  handle the setup, and make sure the results meet your
                  expectations
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
                <span className={styles.title}>
                  What happens if I’m not satisfied with the shortlisted
                  candidates?
                </span>
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
                  We will provide additional matched candidates at no extra
                  cost. Our goal is for you to find the right fit, and we’re
                  committed to supporting that.
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
                  How do you ensure the quality of the VAs?
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
                  All applicants pass through our 3-layer screening process:
                </p>
                <ul>
                  <li>CV and background check</li>
                  <li>Skills and experience validation</li>
                  <li>
                    Personality and commitment assessment — to ensure you get
                    hard-working, reliable individuals
                  </li>
                </ul>
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
                <span className={styles.title}>
                  Do I have to manage the hiring process myself?
                </span>
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
                  No. We handle sourcing, screening, shortlisting, interview
                  coordination, agreements, and even communication setup. You
                  just provide the criteria, interview, and choose.
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
                  Can I request VAs with specific tools experience or language
                  skills?
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
                  Absolutely, we tailor the search to your exact needs,
                  including language proficiency, time zone compatibility, and
                  tool knowledge (e.g. CRM, Excel, social platforms).
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
                  What if I want to replace a VA later?
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
                  We offer ongoing support. If your business needs change, or a
                  replacement is necessary, we will help you find a new VA
                  smoothly.
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
                  Do you handle payments and contracts?
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
                  Yes. We help structure the agreement and payment terms,
                  ensuring clarity and protection for both sides.
                </p>
              </div>
            </div>

            {/* Question 10 */}
            <div
              className={`${styles.accordionItem} ${
                activeIndex === 9 ? styles.active : ""
              }`}
            >
              <div
                className={styles.accordionHeader}
                onClick={() => toggleAccordion(9)}
              >
                <span className={styles.title}>
                  Is Smart Hiring suitable for urgent hiring needs?
                </span>
                <span
                  className={`${styles.icon} ${
                    activeIndex === 9 ? styles.rotate : ""
                  }`}
                >
                  <FaChevronDown />
                </span>
              </div>
              <div
                className={styles.accordionContent}
                style={{
                  maxHeight: activeIndex === 9 ? "500px" : "0px",
                  opacity: activeIndex === 9 ? 1 : 0,
                  padding: activeIndex === 9 ? "16px 20px 20px" : "0 20px",
                  overflow: "hidden",
                  transition: "all 0.4s ease",
                }}
              >
                <p>
                  Yes. Our process is designed for speed without compromising on
                  quality. We can help you onboard VAs quickly while ensuring
                  they meet your standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Client;
