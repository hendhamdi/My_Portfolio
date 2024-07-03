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
          <img src={getImageUrl("https://th.bing.com/th/id/R.e999900e1a6fa48483c2d57816c1c8a8?rik=dZulUSiEdAlZCQ&riu=http%3a%2f%2ficon-library.com%2fimages%2fgraduate-icon-png%2fgraduate-icon-png-1.jpg&ehk=MuvResY12a70BqmqmUhd2wmAUZXWCZJ7utsSv0Uv2GY%3d&risl=&pid=ImgRaw&r=0")} alt="Student icon"  />
            <div className={styles.aboutItemText}>
              <h3>Student</h3>
              <p>
                I'm a Bachelor's degree in IOT and Embedded Systems Engineering.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" className={styles.aboutIcon} />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};