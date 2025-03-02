import React from "react";
import styles from "./About.module.css";
import { FaMedal, FaUniversity, FaBriefcase } from "react-icons/fa";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.cards}>
        <div className={styles.card}>
          <FaMedal className={styles.icon} />
          <h3>Experience</h3>
          <p>4+ years<br />Self-taught Fullstack Developer</p>
        </div>
        <div className={styles.card}>
          <FaUniversity className={styles.icon} />
          <h3>Education</h3>
          <p>Software Engineering Graduate<br />From ISTIC</p>
        </div>
        <div className={styles.card}>
          <FaBriefcase className={styles.icon} />
          <h3>Internships</h3>
          <p>
            DevOps Intern <a href="#">@RFC</a> (latest)<br />
            Fullstack Intern <a href="#">@Aeros Advising</a>
          </p>
        </div>
      </div>
    </section>
  );
};
