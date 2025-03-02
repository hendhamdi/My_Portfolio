import React from "react";
import styles from "./About.module.css";
import { FaGraduationCap, FaLaptopCode } from "react-icons/fa";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.cards}>
        <div className={styles.card}>
          <FaGraduationCap className={styles.icon} />
          <h3>Education</h3>
          <p>Software Engineering Graduate<br />From ISTIC</p>
        </div>
        <div className={styles.card}>
          <FaLaptopCode className={styles.icon} />
          <h3>Experience & Internships</h3>
          <p>4+ years as a Fullstack Developer</p>
          <p>Intern at <a href="#">RFC</a> & <a href="#">Aeros Advising</a></p>
        </div>
      </div>
    </section>
  );
};
