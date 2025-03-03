import React from "react";
import styles from "./Experiences.module.css";
import { getImageUrl } from "../../utils";

export const Experiences = () => {
  return (
    <section className="global" id="experiences">
      <h2 className={styles.title}>My Experiences</h2>

      <section className={styles.container} id="exp">
        {/* Premier cadre */}
        <div className={styles.content}>
          <h1 className={styles.stage1}>End-of-Studies Internship - Ooredoo Headquarters, Tunis</h1>
          <p className={styles.description}>
            Designed and developed a mobile application to manage meeting room reservations at Ooredoo, with an admin dashboard for management.
            <br />
            <h1 className={styles.stage1}>Technologies used:</h1> React, Redux, JS, API Rest, PostgreSQL, Redis, Figma.
          </p>
        </div>
        <img
          src={getImageUrl("experiences/ooredoo-project.png")}
          alt="Ooredoo Project"
          className={styles.expImg}
        />
      </section>

      <section className={styles.container} id="exp">
        {/* Deuxième cadre */}
        <img
          src={getImageUrl("experiences/star.png")}
          alt="STAR Project"
          className={styles.expImg1}
        />
        <div className={styles.content1}>
          <h1 className={styles.stage2}>Advanced Internship - STAR Headquarters, Tunis</h1>
          <p className={styles.description1}>
            Designed and developed the frontend of an online platform to facilitate communication between experts and insured individuals, with an admin dashboard for management.
            <br />
            <h1 className={styles.stage2}>Technologies utilisées :</h1> HTML, CSS, JS, Firebase.
          </p>
        </div>
      </section>

      <section className={styles.container} id="exp">
        {/* Troisième cadre */}
        <div className={styles.content}>
          <h1 className={styles.stage1}>Another Experience - Company XYZ</h1>
          <p className={styles.description}>
            Description of the project and technologies used.
          </p>
        </div>
        <img
          src={getImageUrl("experiences/xyz-project.png")}
          alt="XYZ Project"
          className={styles.expImg}
        />
      </section>
    </section>
  );
};
