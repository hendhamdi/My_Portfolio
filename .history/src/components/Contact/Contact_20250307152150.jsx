import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  const emailAddress = "hendhamdi@example.com"; // Remplace par ton adresse email

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <div>
      <footer id="contact" className={styles.container}>
        <div className={styles.text}>
          <h2>Contact Me</h2>
          <p>Feel free to reach out!</p>
          <div className={styles.contactOptions}>
            <div className={styles.option}>
              <img
                src={getImageUrl("contact/email.png")}
                alt="Email"
                className={styles.emailIcon}
              />
              <p>
                Email:{" "}
                <a href={`mailto:${emailAddress}`} className={styles.emailLink}>
                  {emailAddress}
                </a>
              </p>
              <button onClick={handleEmailClick} className={styles.emailButton}>
                Send an Email
              </button>
            </div>
            <div className={styles.option}>
              <ul className={styles.links}>
                <li className={styles.link}>
                  <img
                    src={getImageUrl("contact/linkedinIcon.png")}
                    alt="LinkedIn icon"
                    className={styles.icon}
                  />
                  <a href="https://www.linkedin.com/in/hend-hamdi-6a9934243/">
                    linkedin.com/hendhamdi
                  </a>
                </li>
                <li className={styles.link}>
                  <img
                    src={getImageUrl("contact/githubIcon.png")}
                    alt="Github icon"
                    className={styles.icon}
                  />
                  <a href="https://github.com/hendhamdi">github.com/hendhamdi</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className={styles.copyright}>
        <p>copyright &copy; MyPortfolio.web.com 2024</p>
      </div>
    </div>
  );
};