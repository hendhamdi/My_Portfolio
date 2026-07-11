import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

const cards = [
  {
    icon: "about/education-cap.png",
    title: "Education",
    text: "Master's degree in Open Source Software Engineering, ISI Ariana, following a Bachelor's degree in Computer Systems Engineering — IoT & Embedded Systems, ISTIC Borj Cedria.",
  },
  {
    icon: "about/image.png",
    title: "Full-Stack Development & UI/UX Design",
    text: "Designing and building complete web and mobile applications end-to-end — from clean, user-centered interfaces in Figma to robust front-end and back-end implementation.",
  },
  {
    icon: "about/ia.png",
    title: "Artificial Intelligence",
    text: "Applying Machine Learning, Deep Learning, NLP and Computer Vision using TensorFlow, PyTorch and YOLOv8 to deliver intelligent, data-driven solutions.",
  },
];

const stats = [
  { k: "04+", v: "Internships" },
  { k: "20+", v: "Projects" },
  { k: "2026", v: "MSc Graduate" },
];

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.content}>
        {/* LEFT */}
        <div className={styles.left}>
          <h6 className={styles.title1}>Get to know more</h6>

          <h2 className={styles.title}>
            About <span className={styles.accent}>Me</span>
          </h2>

          <div className={styles.divider}></div>

          <img
            src={getImageUrl("hero/hend6.png")}
            alt="Hend Hamdi"
            className={styles.aboutImage}
          />
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          {cards.map((c, i) => (
            <article
              key={c.title}
              className={styles.card}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className={styles.iconWrap}>
                <img
                  src={getImageUrl(c.icon)}
                  alt=""
                  className={styles.icon}
                />
              </div>

              <div className={styles.cardText}>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            </article>
          ))}

          {/* Stats */}
          <div className={styles.stats}>
            {stats.map((s) => (
              <div key={s.v} className={styles.stat}>
                <div className={styles.statK}>{s.k}</div>
                <div className={styles.statV}>{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};