import React from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";  // Assurez-vous que le chemin est correct
import { ProjectCard } from "./ProjectCard";    // Assurez-vous que ce composant est bien configuré pour afficher un projet

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>My Projects</h2>

      {/* Section pour les projets de développement */}
      <section className={styles.devProjects}>
        <h3 className={styles.subTitle}>Development Projects</h3>
        <div className={styles.projects}>
          {projects.devProjects.map((project, id) => (
            <ProjectCard key={id} project={project} />
          ))}
        </div>
      </section>

      {/* Section pour les projets de design (UI/UX) */}
      <section className={styles.designProjects}>
        <h3 className={styles.subTitle}>Design Projects (UI/UX)</h3>
        <div className={styles.projects}>
          {projects.designProjects.map((project, id) => (
            <ProjectCard key={id} project={project} />
          ))}
        </div>
      </section>
    </section>
  );
};
