import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <div>
      <footer id="contact" className={styles.container}>
        <div className={styles.text}>
          <h4>Get in Touch</h4>
          <h2>Contact me</h2>

          <div className={styles.column}>
            <img
              src={getImageUrl("contact/email.png")}
              alt="Email"
              className={styles.email}
            />
            <ul className={styles.links}>
              <li className={styles.link}>
                <img
                  src={getImageUrl("contact/linkedinIcon.png")}
                  alt="LinkedIn icon"
                  className={styles.icons}
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
                  className={styles.icons}
                />
                <a
                  href="https://github.com/hendhamdi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/hendhamdi
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.column}>
          <form action="/action_page.php">
            
            <div className={styles.formGroup}>
              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="subject">Subject</label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
                className={styles.input}
                style={{ height: "170px" }}
              ></textarea>
            </div>
            <input type="submit" value="Submit" className={styles.submitBtn} />
          </form>
        </div>
      </footer>

      <div className={styles.copyright1}>
        <p className={styles.copyright}>
          Copyright &copy;2025 Hend Hamdi All rights reserved.
        </p>
      </div>
    </div>
  );
};
