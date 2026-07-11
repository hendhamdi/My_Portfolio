import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

const tags = ["Full-Stack", "UI/UX Design", "AI & Machine Learning", "DevOps"];

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <span className={styles.eyebrow}>Welcome to my portfolio</span>

        <h1 className={`${styles.title} ${styles.typing}`}>Hi, I'm Hend!</h1>

        <p className={styles.description}>
          Master's graduate in Open Source Software Engineering with
          hands-on experience in Full-Stack Development, UI/UX Design,
          Artificial Intelligence, Machine Learning, NLP, and DevOps.
        </p>

        <p className={styles.subtext}>
          Feel free to reach out if you'd like to learn more!
        </p>

        <div className={styles.tags}>
          {tags.map((t) => (
            <span key={t} className={styles.tag}>
              {t}
            </span>
          ))}
        </div>

        <div className={styles.actions}>
          <a
            href="/CV_Hend_Hamdi.pdf"
            className={styles.contactBtn}
            download="Hend_Hamdi_CV.pdf"
          >
            <svg
              className={styles.btnIcon}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 3v12" />
              <path d="M7 10l5 5 5-5" />
              <path d="M5 21h14" />
            </svg>
            Download My CV
          </a>

          <a href="#contact" className={styles.secondaryBtn}>
            Contact Me
          </a>
        </div>
      </div>

      <img
        src={getImageUrl("hero/hend2.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};