import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <div>
      <footer id="contact" className={styles.container}>
        <div className={styles.text}>
          <h4 className={styles.subTitle}>Get in Touch</h4>
          <h2 className={styles.title}>Contact Me</h2>
          <p className={styles.description}>Feel free to reach out!</p>

          <div className={styles.contactInfo}>
            <img
              src={getImageUrl("contact/email.png")}
              alt="Email"
              className={styles.emailIcon}
            />
            <p className={styles.emailText}>
              Email:{" "}
              <a href="mailto:hendhamdi@example.com" className={styles.emailLink}>
                hendhamdi@example.com
              </a>
            </p>
          </div>

          <ul className={styles.socialLinks}>
            <li className={styles.socialLink}>
              <img
                src={getImageUrl("contact/linkedinIcon.png")}
                alt="LinkedIn"
                className={styles.socialIcon}
              />
              <a
                href="https://www.linkedin.com/in/hend-hamdi-6a9934243/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li className={styles.socialLink}>
              <img
                src={getImageUrl("contact/githubIcon.png")}
                alt="GitHub"
                className={styles.socialIcon}
              />
              <a
                href="https://github.com/hendhamdi"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.formContainer}>
          <form className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.formLabel}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                className={styles.formInput}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.formLabel}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email"
                className={styles.formInput}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.formLabel}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message"
                className={styles.formTextarea}
              ></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
      </footer>

      <div className={styles.footer}>
        <p className={styles.copyright}>
          &copy; 2024 Hend Hamdi. All rights reserved.
        </p>
      </div>
    </div>
  );
};