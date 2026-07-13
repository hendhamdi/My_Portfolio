import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

const contactLinks = [
  {
    icon: "contact/linkedinIcon.png",
    label: "linkedin.com/hendhamdi",
    href: "https://www.linkedin.com/in/hend-hamdi-6a9934243/",
  },
  {
    icon: "contact/githubIcon.png",
    label: "github.com/hendhamdi",
    href: "https://github.com/hendhamdi",
  },
  {
    icon: "contact/emailIcon.png",
    label: "hamdi.hend@etudiant-isi.utm",
    href: "mailto:hamdi.hend@etudiant-isi.utm",
  },
];

export const Contact = () => {
  return (
    <div>
      <footer id="contact" className={styles.container}>
        <div className={styles.textContainer}>
          <div className={styles.text}>
            <h6 className={styles.eyebrow}>Get in touch</h6>
            <h2 className={styles.heading}>Contact me</h2>

            <p className={styles.paragraph}>
              I am currently open to new opportunities, collaborations, and freelance projects. Please feel free to reach out via email, LinkedIn, or GitHub.
            </p>

            <ul className={styles.links}>
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkItem}
                  >
                    <span className={styles.iconWrap}>
                      <img
                        src={getImageUrl(link.icon)}
                        alt=""
                        className={styles.icon}
                      />
                    </span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.imageContainer}>
          <div className={styles.imagesRow}>
            <img
              src={getImageUrl("contact/email.png")}
              alt=""
              className={styles.image}
            />
            <img
              src={getImageUrl("contact/email1.png")}
              alt=""
              className={styles.image1}
            />
            <img
              src={getImageUrl("contact/hend4.png")}
              alt="Hend Hamdi"
              className={styles.image2}
            />
          </div>
        </div>
      </footer>

      <div className={styles.copyright}>
        <p>Hend Hamdi &copy; 2025-2026</p>
      </div>
    </div>
  );
};