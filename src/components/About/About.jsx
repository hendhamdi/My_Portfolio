import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h6 className={styles.title1}>Get To Know More</h6>
      <h2 className={styles.title}>About Me</h2>

      <div className={styles.content}>
        
        {/* IMAGE */}
        <div className={styles.left}>
          <img
            src={getImageUrl("hero/hend6.png")}
            alt="Hend"
            className={styles.aboutImage}
          />
        </div>

        {/* CARDS */}
        <div className={styles.right}>
          
          <div className={styles.card}>
            <img
              src={getImageUrl("about/education-cap.png")}
              className={styles.icon}
              alt=""
            />
            <h3>Education</h3>
            <p>
              Master’s in Open Source Software Engineering at ISI Ariana.  
              Bachelor's in Computer Systems Engineering from ISTIC.
            </p>
          </div>

          <div className={styles.card}>
            <img
              src={getImageUrl("about/image.png")}
              className={styles.icon}
              alt=""
            />
            <h3>Frontend & UI/UX</h3>
            <p>
              Passionate about designing responsive and user-friendly interfaces
              with a strong focus on modern UI/UX.
            </p>
          </div>

          <div className={styles.card}>
            <img
              src={getImageUrl("about/ia.png")}
              className={styles.icon}
              alt=""
            />
            <h3>AI & Machine Learning</h3>
            <p>
              Exploring AI and ML to build intelligent and data-driven solutions
              for real-world applications.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};