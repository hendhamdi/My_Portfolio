import React, { useRef, useState } from "react";
import styles from "./Experience.module.css";
import { getImageUrl } from "../../utils";
import certifications from "../../data/certifications.json";

const skillCategories = [
  { title: "Languages", tags: ["Python", "Java", "JavaScript", "C", "C++"] },
  {
    title: "Web & Mobile",
    tags: ["React.js", "React Native", "FastAPI", "Node.js", "Angular", "JavaFX", "HTML/CSS"],
  },
  { title: "Databases", tags: ["MySQL", "MongoDB", "PostgreSQL", "Firebase"] },
  {
    title: "Tools & Environments",
    tags: ["Git", "Docker", "Kubernetes", "CI/CD", "Grafana", "Android Studio", "Figma", "Canva"],
  },
  {
    title: "AI & Data",
    tags: ["Spark NLP", "PySpark", "Machine Learning", "Deep Learning", "Transfer Learning"],
  },
];

export const Experience = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const scrollRef = useRef(null);

  const scrollByAmount = (amount) => {
    scrollRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className={styles.container} id="experience">
      <p className={styles.subtitle}>A blend of Knowledge & Skills</p>
      <h2 className={styles.title}>Skills & Certifications</h2>
      <div className={styles.line}></div>

      {/* ------------------ SKILLS ------------------ */}
      <div className={styles.skillArea}>
        {skillCategories.map((cat) => (
          <div key={cat.title} className={styles.skillRow}>
            <span className={styles.skillLabel}>{cat.title}</span>
            <div className={styles.tags}>
              {cat.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ------------------ CERTIFICATIONS ------------------ */}
      <div className={styles.certSection}>
        <div className={styles.certTopRow}>
          <h4 className={styles.certHeading}>Certifications</h4>
          <div className={styles.certNav}>
            <button
              className={styles.arrow}
              onClick={() => scrollByAmount(-260)}
              aria-label="Scroll left"
            >
              ‹
            </button>
            <button
              className={styles.arrow}
              onClick={() => scrollByAmount(260)}
              aria-label="Scroll right"
            >
              ›
            </button>
          </div>
        </div>

        <div className={styles.certTrack} ref={scrollRef}>
          {certifications.map((cert, index) => (
            <img
              key={index}
              src={getImageUrl(cert.image)}
              alt={cert.title}
              className={styles.certImg}
              onClick={() => setSelectedImage(getImageUrl(cert.image))}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className={styles.lightbox}
          onClick={() => setSelectedImage(null)}
        >
          <img src={selectedImage} alt="Certification" />
        </div>
      )}
    </section>
  );
};