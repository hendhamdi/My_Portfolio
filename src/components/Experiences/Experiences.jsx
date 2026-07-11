import React, { useEffect, useRef, useState } from "react";
import styles from "./Experiences.module.css";
import { getImageUrl } from "../../utils";

const experiences = [
  {
    image: "experiences/web-app.png",
    title: "Advanced Internship",
    company: "STAR",
    period: "2023",
    description:
      "Participated in the design and development of client, expert, and administrator interfaces for a communication platform connecting experts with clients.",
    tech: ["HTML", "CSS", "JavaScript", "Firebase"],
  },
  {
    image: "experiences/mobile-app.png",
    title: "Final-Year Internship — Bachelor's",
    company: "Ooredoo Head Office",
    period: "2024",
    description:
      "Co-designed and developed, in pairs, a mobile application for managing meeting room reservations, including an administrative dashboard.",
    tech: ["React", "Redux", "API REST", "PostgreSQL", "Redis", "Docker", "Figma"],
  },
  {
    image: "experiences/accounting.png",
    title: "Accounting Internship",
    company: "Accounting Office",
    period: "2025",
    description:
      "Managed invoices, bank entries, and cash receipts to support accurate financial reporting.",
    tech: ["Internal Accounting Software"],
  },
  {
    image: "experiences/web-app.png",
    title: "Summer Internship — Front-End Developer",
    company: "Innov Alliance Tech",
    period: "2025",
    description:
      "Designed and developed the UI of an interactive analytics dashboard for real-time monitoring of R&D projects. Contributed to a mobile app for locating EV charging stations.",
    tech: ["Angular", "TypeScript", "React Native", "Expo", "Figma"],
  },
  {
    image: "experiences/mobile-app.png",
    title: "Final-Year Internship — Master's",
    company: "Ooredoo Head Office",
    period: "2026",
    description:
      "Designed and developed an intelligent employee turnover prediction platform, integrating automated pipelines for data collection, model training, and ML model deployment.",
    tech: ["Python", "Scikit-learn", "NLP", "SHAP", "FastAPI", "React.js", "PostgreSQL", "Docker", "CI/CD"],
  },
];

const TimelineItem = ({ exp, index }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const side = index % 2 === 0 ? styles.left : styles.right;

  return (
    <div
      ref={ref}
      className={`${styles.item} ${side} ${visible ? styles.visible : ""}`}
    >
      <div className={styles.node} />

      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.iconBadge}>
            <img
              src={getImageUrl(exp.image)}
              alt={exp.title}
              className={styles.expImg}
            />
          </div>

          <div className={styles.headerText}>
            <h3 className={styles.title3}>{exp.title}</h3>
            {exp.company && <p className={styles.company}>{exp.company}</p>}
          </div>

          <span className={styles.period}>{exp.period}</span>
        </div>

        <p className={styles.description}>{exp.description}</p>

        <div className={styles.techContainer}>
          <span className={styles.techLabel}>Tech</span>
          <div className={styles.techTags}>
            {exp.tech.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Experiences = () => {
  return (
    <section className={styles.global} id="experiences">
      <h6 className={styles.title1}>Explore</h6>
      <h2 className={styles.title}>My Experiences</h2>

      <div className={styles.timeline}>
        <div className={styles.line} />
        {experiences.map((exp, i) => (
          <TimelineItem key={exp.title + exp.period} exp={exp} index={i} />
        ))}
      </div>
    </section>
  );
};