import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("hero/hend1.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
          <img src={getImageUrl("about/education-cap.png")} alt="Student icon" className= {styles.icon} />
            <div className={styles.aboutItemText}>
              <h3>Education</h3>
              <p>
                I am currently pursuing a Master’s in Open Source Software Engineering at ISI Ariana.<br/> I also hold a Bachelor's degree in Computer Systems Engineering, specializing in IoT and Embedded Systems.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/code.png")} alt="Server icon" className= {styles.icon}  />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I am a junior full-stack developer with experience in frontend technologies, I focus on building responsive and user-friendly websites.
               
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/design-thinking.png")} alt="UI icon" className= {styles.icon}  />
            <div className={styles.aboutItemText}>
              <h3>UI/UX Designer</h3>
              <p>
                I have experience designing multiple user interfaces, including landing pages and dashboards. I aim to create intuitive and visually appealing designs that enhance user experience.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};