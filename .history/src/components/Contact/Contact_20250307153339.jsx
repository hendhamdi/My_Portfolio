import React, { useState } from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    subject: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => alert(data.message))
      .catch((error) => alert("Erreur lors de l'envoi du message"));
  };

  return (
    <div>
      <footer id="contact" className={styles.container}>
        <div className={styles.text}>
          <h2>Contact me</h2>
          <p>Feel free to reach out!</p>
          <div className={styles.column}>
            <img
              src={getImageUrl("contact/email.png")}
              alt="Email Icon"
              className={styles.email}
            />
            <ul className={styles.links}>
              <li className={styles.link}>
                <img
                  src={getImageUrl("contact/linkedinIcon.png")}
                  alt="LinkedIn icon"
                  className={styles.icons}
                />
                <a href="https://www.linkedin.com/in/hend-hamdi-6a9934243/">
                  linkedin.com/hendhamdi
                </a>
              </li>
              <li className={styles.link}>
                <img
                  src={getImageUrl("contact/githubIcon.png")}
                  alt="GitHub icon"
                  className={styles.icons}
                />
                <a href="https://github.com/hendhamdi">github.com/hendhamdi</a>
              </li>
              <li className={styles.link}>
                <img
                  src={getImageUrl("contact/mailIcon.png")}
                  alt="Email icon"
                  className={styles.icons}
                />
                <a
                  href="mailto:hendhamdi@example.com?subject=Hello&body=Message"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Send me an Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.column}>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your first name.."
                value={formData.firstname}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
                value={formData.lastname}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="subject">Subject</label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
                style={{ height: "170px" }}
                value={formData.subject}
                onChange={handleChange}
              ></textarea>
            </div>
            <input type="submit" value="Submit" className={styles.submitBtn} />
          </form>
        </div>
      </footer>
      <div className={styles.copyright1}>
        <p className={styles.copyright}>
          copyright &copy; MyPortfolio.web.com 2024
        </p>
      </div>
    </div>
  );
};
