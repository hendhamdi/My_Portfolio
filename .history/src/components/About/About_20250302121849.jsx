import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
     <section className="about-container">
      <h2 className="about-title">About Me</h2>
      <div className="about-cards">
        <div className="about-card">
          <h3>Education</h3>
          <p>Software Engineering Graduate<br />From ISTIC</p>
        </div>
        <div className="about-card">
          <h3>Experience & Internships</h3>
          <p>4+ years as a Fullstack Developer</p>
          <p>Intern at <a href="#">RFC</a> & <a href="#">Aeros Advising</a></p>
        </div>
      </div>
    </section>
  );
};