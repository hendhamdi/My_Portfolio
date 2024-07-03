import React, { useState } from "react";
import styles from "./Experiences.module.css";
import { getImageUrl } from "../../utils";


export const Experiences = () => {
  return( 
     <section className={styles.container} id="exp">
     <div className={styles.content}></div>
        <h2 className={styles.title}>My Experiences</h2>
        <p className={styles.description}>
        Stage de Fin d’Études - Ooredoo Siège social ,Tunis <br/>Conception et développement d’une application mobile pour gérer les réservations des salles de
réunion au sein d’Ooredoo, avec un tableau de bord administrateur pour la gestion.
<br/><br/>Reach out if you'd like to learn more!
        </p>
     </section>
  );
};