import React from "react";
import styles from "./Experiences.module.css";
import { getImageUrl } from "../../utils";

export const Experiences = () => {
  return (
    <section className={styles.global} id="experiences">
      <h2 className={styles.title}>My Experiences</h2>

      <div className={styles.experiencesContainer}>
        {/* Cadre 1 : Ooredoo */}
        <div className={styles.experienceCard}>
          <img
            src={getImageUrl("experiences/ooredoo-project.png")}
            alt="Ooredoo Project"
            className={styles.expImg}
          />
          <div className={styles.experienceContent}>
            <h3 className={styles.experienceTitle}>End-of-Studies Internship - Ooredoo</h3>
            <p className={styles.experienceDescription}>
              Designed and developed a mobile application to manage meeting room reservations at Ooredoo, with an admin dashboard for management.
              <br /><br />
              <strong>Technologies used:</strong> React, Redux, JS, API Rest, PostgreSQL, Redis, Figma.
            </p>
          </div>
        </div>

        {/* Cadre 2 : STAR */}
        <div className={styles.experienceCard}>
          <img
            src={getImageUrl("experiences/star.png")}
            alt="STAR Project"
            className={styles.expImg}
          />
          <div className={styles.experienceContent}>
            <h3 className={styles.experienceTitle}>Advanced Internship - STAR</h3>
            <p className={styles.experienceDescription}>
              Designed and developed the frontend of an online platform to facilitate communication between experts and insured individuals, with an admin dashboard for management.
              <br /><br />
              <strong>Technologies used:</strong> HTML, CSS, JS, Firebase.
            </p>
          </div>
        </div>

        {/* Cadre 3 : Ajoute une troisième expérience ici si nécessaire */}
        <div className={styles.experienceCard}>
          <img
            src={getImageUrl("experiences/placeholder.png")} // Remplace par une image réelle
            alt="Third Experience"
            className={styles.expImg}
          />
          <div className={styles.experienceContent}>
            <h3 className={styles.experienceTitle}>Third Experience</h3>
            <p className={styles.experienceDescription}>
              Description of the third experience. Add details about the project and technologies used.
              <br /><br />
              <strong>Technologies used:</strong> List technologies here.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};