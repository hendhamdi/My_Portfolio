import React from "react";
import styles from "./Experiences.module.css";
import { getImageUrl } from "../../utils";

export const Experiences = () => {
  return (
    <section className={styles.global} id="experiences">
      <h6 className={styles.title1}>Explore My</h6>
      <h2 className={styles.title}>My Experiences</h2>

      <div className={styles.experiencesContainer}>
        <div className={styles.experienceCard}>
          <img
            src={getImageUrl("experiences/mobile-app.png")}
            alt="Ooredoo Project"
            className={styles.expImg}
          />
          <div className={styles.experienceContent}>
            <h3 className={styles.experienceTitle}>End-of-Studies Internship - Ooredoo</h3>
            <p className={styles.experienceDescription}>
              Designed and developed a mobile application to manage meeting room reservations at Ooredoo, with an admin dashboard for management.
              <br /><br />
      <span className={styles.techLabel}>Technologies used:</span>{" "}
              <span className={styles.techStack}>React, Redux, JS, API Rest, PostgreSQL, Redis, Figma</span>.
            </p>
          </div>
        </div>

        <div className={styles.experienceCard}>
          <img
            src={getImageUrl("experiences/web-app.png")}
            alt="STAR Project"
            className={styles.expImg}
          />
          <div className={styles.experienceContent}>
            <h3 className={styles.experienceTitle}>Advanced Internship - STAR</h3>
            <p className={styles.experienceDescription}>
              Designed and developed the frontend of an online platform to facilitate communication between experts and insured individuals, with an admin dashboard for management.
              <br /><br />
              <div className={styles.techContainer}>
      <span className={styles.techLabel}>Technologies used:</span>{" "}
              <span className={styles.techStack}>HTML, CSS,
                Firebase</span>.</div>
            </p>
          </div>
        </div>

        <div className={styles.experienceCard}>
          <img
            src={getImageUrl("experiences/accounting.png")}
            alt="Third Experience"
            className={styles.expImg}
          />
          <div className={styles.experienceContent}>
            <h3 className={styles.experienceTitle}>Accounting Internship - Accounting Firm</h3>
            <p className={styles.experienceDescription}>
              Managed bank entries, purchase and sales invoices, and cash flow tracking.
              <br /><br />
              <div className={styles.techContainer}>
      <span className={styles.techLabel}>Technologies used:</span>{" "}
              <span className={styles.techStack}>In-house proprietary accounting software</span>.</div>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};