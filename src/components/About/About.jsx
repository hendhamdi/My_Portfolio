import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h6 className={styles.title1}>Get To Know More</h6>
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("hero/hend6.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/education-cap.png")}
              alt="Student icon"
              className={styles.icon1}
            />
            <div className={styles.aboutItemText}>
              <h3>Education</h3>
              <p>
                I am currently pursuing a Master’s in Open Source Software Engineering at ISI Ariana.
                <br /> I also hold a Bachelor's degree in Computer Systems Engineering from ISTIC, Borj Cedria.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/image.png")}
              alt="Code icon"
              className={styles.icon2}
            />
            <div className={styles.aboutItemText}>
              <h3>Full-stack Developer & UI/UX Designer</h3>
              <p>
                I specialize in interface design and frontend development, creating responsive, user-friendly
                 websites and crafting visually appealing interfaces to enhance the user experience.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};