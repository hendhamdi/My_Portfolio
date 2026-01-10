import React, { useState } from "react";
import styles from "./Experience.module.css";
import { getImageUrl } from "../../utils";
import certifications from "../../data/certifications.json";

export const Experience = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [page, setPage] = useState(0);

  const ITEMS_PER_PAGE = 6;

  const startIndex = page * ITEMS_PER_PAGE;
  const certImages = certifications.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const nextPage = () => {
    if ((page + 1) * ITEMS_PER_PAGE < certifications.length) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  return (
    <section className={styles.container} id="experience">
      <p className={styles.subtitle}>A blend of Knowledge & Skills</p>
      <h2 className={styles.title}>Skills & Certifications</h2>
      <div className={styles.line}></div>

      <div className={styles.board}>
        {/* ------------------ SKILLS ------------------ */}
        <div className={styles.skillArea}>

          <div className={styles.skillCategory}>
            <h4>Langages</h4>
            <div className={styles.tags}>
              <span>Python</span><span>Java</span><span>JavaScript</span>
              <span>C</span><span>C++</span>
            </div>
          </div>

          <div className={styles.skillCategory}>
            <h4>Développement Web & Mobile</h4>
            <div className={styles.tags}>
              <span>React.js</span><span>React Native</span>
              <span>Node.js</span><span>Angular</span>
              <span>JavaFX</span><span>HTML/CSS</span>
            </div>
          </div>

          <div className={styles.skillCategory}>
            <h4>Bases de données</h4>
            <div className={styles.tags}>
              <span>MySQL</span><span>MongoDB</span>
              <span>PostgreSQL</span><span>Firebase</span>
            </div>
          </div>

          <div className={styles.skillCategory}>
            <h4>Outils & Environnements</h4>
            <div className={styles.tags}>
              <span>Git</span><span>Docker</span>
              <span>VS Code</span><span>Android Studio</span>
              <span>Figma</span><span>Canva</span>
            </div>
          </div>

          <div className={styles.skillCategory}>
            <h4>IA & Données</h4>
            <div className={styles.tags}>
              <span>Spark NLP</span><span>PySpark</span>
              <span>Machine Learning</span><span>Deep Learning</span>
            </div>
          </div>
        </div>

        {/* ------------------ CERTIFICATIONS ------------------ */}
        <div className={styles.certArea}>
          <div className={styles.certWrapper}>

            {/* Flèche gauche */}
            <button
              className={styles.arrow}
              onClick={prevPage}
              disabled={page === 0}
            >
              ‹
            </button>

            {/* Images */}
            <div className={styles.certImages}>
              {certImages.map((cert, index) => (
                <img
                  key={index}
                  src={getImageUrl(cert.image)}
                  alt={cert.title}
                  className={styles.certImg}
                  onClick={() =>
                    setSelectedImage(getImageUrl(cert.image))
                  }
                />
              ))}
            </div>

            {/* Flèche droite */}
            <button
              className={styles.arrow}
              onClick={nextPage}
              disabled={(page + 1) * ITEMS_PER_PAGE >= certifications.length}
            >
              ›
            </button>

          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className={styles.lightbox}
          onClick={() => setSelectedImage(null)}
        >
          <img src={selectedImage} alt="Certification" />
        </div>
      )}
    </section>
  );
};
