import React from "react";
import styles from "./Experiences.module.css";
import { getImageUrl } from "../../utils";

export const Experiences = () => {
  return (
    <section className={styles.global} id="experiences">
      <h6 className={styles.title1}>Explore</h6>
      <h2 className={styles.title}>My Experiences</h2>

      <div className={styles.experiencesContainer}>
        <div className={styles.experienceCard}>
          <img
            src={getImageUrl("experiences/mobile-app.png")}
            alt="Ooredoo Project"
            className={styles.expImg}
          />
          <div className={styles.experienceContent}>
            <h3 className={styles.experienceTitle}>
              End-of-Studies Internship – Ooredoo
            </h3>

            <p className={styles.experienceDescription}>
              Built a mobile app to book meeting rooms and designed an admin
              dashboard for easy management.
            </p>

            <div className={styles.techContainer}>
              <span className={styles.techLabel}>Tech:</span>{" "}
              <span className={styles.techStack}>
                React, Redux, PostgreSQL, Redis, Figma
              </span>
            </div>
          </div>
        </div>

        <div className={styles.experienceCard}>
          <img
            src={getImageUrl("experiences/web-app.png")}
            alt="STAR Project"
            className={styles.expImg}
          />
          <div className={styles.experienceContent}>
            <h3 className={styles.experienceTitle}>
              Advanced Internship – STAR
            </h3>

            <p className={styles.experienceDescription}>
              Developed the frontend of a web platform to connect experts with
              clients and added an admin dashboard.
            </p>

            <div className={styles.techContainer}>
              <span className={styles.techLabel}>Tech:</span>{" "}
              <span className={styles.techStack}>HTML, CSS, Firebase</span>
            </div>
          </div>
        </div>

        <div className={styles.experienceCard}>
          <img
            src={getImageUrl("experiences/accounting.png")}
            alt="Accounting Internship"
            className={styles.expImg}
          />
          <div className={styles.experienceContent}>
            <h3 className={styles.experienceTitle}>Accounting Internship</h3>

            <p className={styles.experienceDescription}>
              Managed invoices, bank entries, and cash receipts to support
              accurate financial reporting.
            </p>

            <div className={styles.techContainer}>
              <span className={styles.techLabel}>Tech:</span>{" "}
              <span className={styles.techStack}>
                Internal Accounting Software
              </span>
            </div>
          </div>
        </div>

        <div className={styles.experienceCard}>
          <img
            src={getImageUrl("experiences/web-app.png")}
            alt="IAST Innov Alliance Tech"
            className={styles.expImg}
          />
          <div className={styles.experienceContent}>
            <h3 className={styles.experienceTitle}>
              Summer Internship –Innov Alliance Tech
            </h3>

            <p className={styles.experienceDescription}>
              Designed an interactive dashboard for R&amp;D projects and
              contributed to a mobile app for EV charging stations.
            </p>

            <div className={styles.techContainer}>
              <span className={styles.techLabel}>Tech:</span>{" "}
              <span className={styles.techStack}>
                Angular, TypeScript, React Native, Expo, Figma
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
