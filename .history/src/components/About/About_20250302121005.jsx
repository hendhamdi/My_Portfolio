import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("hero/hend1.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <div className={styles.aboutDetails}>
          <div className={styles.aboutSection}>
            <h3>Experience</h3>
            <p>4+ years</p>
            <p>Self-taught Fullstack Developer</p>
          </div>
          <div className={styles.aboutSection}>
            <h3>Education</h3>
            <p>Software Engineering Graduate From ISTIC</p>
          </div>
          <div className={styles.aboutSection}>
            <h3>Internships</h3>
            <p>DevOps Intern @RFC (latest)</p>
            <p>Fullstack Intern @Aeros Advising</p>
          </div>
        </div>
      </div>
    </section>
  );
};