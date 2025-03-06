import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({ project: { title, imageSrc, description, skills, source } }) => {
  return (
    <div className={styles.card}>
      <img src={getImageUrl(imageSrc)} alt={title} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.skills}>
        {skills.map((skill, id) => (
          <span key={id} className={styles.skill}>{skill}</span>
        ))}
      </div>
      <a href={source} className={styles.link}>Source</a>
    </div>
  );
};
