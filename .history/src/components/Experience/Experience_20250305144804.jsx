import React from "react";
import styles from "./Skills.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>HARD-SKILLS</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skillCard}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p className={styles.skillTitle}>{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
