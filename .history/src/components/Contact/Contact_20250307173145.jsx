import React, { useState } from "react";
import styles from "./Contact.module.css";
import axios from "axios"; // Importer axios

export const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/send-email", {
        email: email,
        subject: subject,
      });
      alert("Message successfully sent");
    } catch (error) {
      console.error("Error when sending email", error);
      alert("Error when sending message");
    }
  };

  return (
    <div>
      <footer id="contact" className={styles.container}>
        <div className={styles.text}>
          <h4>Get in Touch</h4>
          <h2>Contact me</h2>
          <div className={styles.column}>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Email.."
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <textarea
                  id="subject"
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Write something.."
                  className={styles.input}
                  style={{ height: "170px" }}
                ></textarea>
              </div>
              <input type="submit" value="Submit" className={styles.submitBtn} />
            </form>
          </div>
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
