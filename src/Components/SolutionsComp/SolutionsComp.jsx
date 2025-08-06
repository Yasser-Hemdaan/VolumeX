import { NavLink } from "react-router-dom";
import styles from "./SolutionsComp.module.css";

const Solutions = [
  {
    icon: "/assets/sales.svg",
    title: "Role-Matched Talent",
    desc: "We match VAs based on your specific needs, tasks, and work style—not just resumes",
    active: false,
  },
  {
    icon: "/assets/contact.svg",
    title: "Personality-Based Filtering",
    desc: "Each VA freelancer takes a personality assessment to ensure alignment with your company",
    active: false,
  },
  {
    icon: "/assets/task.svg",
    title: "Pre-Vetted Candidates",
    desc: "Every candidate is tested, interviewed, and assessed before you see their profile",
    active: true,
  },
  {
    icon: "/assets/project.svg",
    title: "Clear Communication",
    desc: "We facilitate smooth onboarding and setup shared channels for direct communication",
    active: false,
  },
  {
    icon: "/assets/email.svg",
    title: "Flexible Pricing, Clear Results",
    desc: "You choose the budget, and we work around it. No hidden fees. Real ROI",
    active: false,
  },
  {
    icon: "/assets/visibility.svg",
    title: "Ongoing Support & Replacements",
    desc: "We stay involved after hiring to ensure your remote Freelancer performs as expected",
    active: false,
  },
];

const SolutionsComp = () => {
  return (
    <section className={styles.solutionsSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.sectionHeader}>
          <span className={styles.badge}>+ Our solutions +</span>
          <h2 className={styles.title}>Smart Hiring</h2>
          <p className={styles.subtitle}>
            Hire Smarter. Work Faster. Scale Confidently.
            <br />
            Get the right remote Freelancer, with the right skills, at the right
            time — minus the stress.
          </p>
        </div>

        <div className={styles.solutionsGrid}>
          {Solutions.map((solution, index) => (
            <div
              className={`${styles.solutionCard} ${
                solution.active ? styles.active : ""
              }`}
              key={index}
            >
              {/* <img
                src={solution.icon}
                alt={solution.title}
                className={styles.icon}
              /> */}
              <h3>{solution.title}</h3>
              <p>{solution.desc}</p>
              {/* <a href="#" className={styles.readMore}>
                READ MORE →
              </a> */}
            </div>
          ))}
        </div>
        <div className={`${styles.CTABtns} mt-4`}>
          <NavLink to="/SmartHiring">read more</NavLink>
        </div>
      </div>
    </section>
  );
};

export default SolutionsComp;
