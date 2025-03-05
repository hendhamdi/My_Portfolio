import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>HARD-SKILLS</h2>
      <div className={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillCard}>
            <div className={styles.skillImage}>
              <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
            </div>
            <p className={styles.skillTitle}>{skill.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
