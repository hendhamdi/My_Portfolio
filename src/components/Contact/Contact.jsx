import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <div>
      <footer id="contact" className={styles.container}>
        <div className={styles.textContainer}>
          <div className={styles.text}>
            <h4>Get in Touch</h4>
            <h2>Contact me</h2>

            <p className={styles.paragraph}>
              If you would like to get in touch, feel free to contact <br/>me via
              email or connect with me on LinkedIn or GitHub.
            </p>

            <div className={styles.links}>
              <ul>
                <li className={styles.link}>
                  <img
                    src={getImageUrl("contact/linkedinIcon.png")}
                    alt="LinkedIn icon"
                    className={styles.icon}
                  />
                  <a
                    href="https://www.linkedin.com/in/hend-hamdi-6a9934243/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/hendhamdi
                  </a>
                </li>
                <li className={styles.link}>
                  <img
                    src={getImageUrl("contact/githubIcon.png")}
                    alt="Github icon"
                    className={styles.icon}
                  />
                  <a
                    href="https://github.com/hendhamdi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/hendhamdi
                  </a>
                </li>
                <li className={styles.link}>
                  <img
                    src={getImageUrl("contact/emailIcon.png")}
                    alt="Email icon"
                    className={styles.icon}
                  />
                  <a href="mailto:hamdi.hend@etudiant-isi.utm">
                    hamdi.hend@etudiant-isi.utm
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div className={styles.imagesRow}>
            <img
              src={getImageUrl("contact/email.png")}
              alt="Contact"
              className={styles.image}
            />
            <img
              src={getImageUrl("contact/email1.png")}
              alt="Contact"
              className={styles.image1}
            />
            <img
              src={getImageUrl("contact/hend4.png")}
              alt="Contact"
              className={styles.image2}
            />
          </div>
        </div>
      </footer>

      <div className={styles.copyright}>
        <p>&copy; 2025 Hend Hamdi. All rights reserved.</p>
      </div>
    </div>
  );
};