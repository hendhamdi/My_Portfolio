import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, source, demo },
}) => {
  return (
    <div className={styles.card}> {/* Assurez-vous que vous utilisez un wrapper pour chaque carte */}
      <img
        src={getImageUrl(imageSrc)} // Vérifiez si getImageUrl est bien utilisé
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>

      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>

      <div className={styles.links}>
        <a href={source} className={styles.link} target="_blank" rel="noopener noreferrer">
          Source
        </a>

        {/* Ajoutez un lien vers la démo si disponible */}
        {demo && (
          <a href={demo} className={styles.link} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
        )}
      </div>
    </div>
  );
};
