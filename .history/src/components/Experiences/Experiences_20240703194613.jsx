import React, { useState } from "react";
import styles from "./Experiences.module.css";
import { getImageUrl } from "../../utils";


export const Experiences = () => {
  return( 
   <section className="global">
      <h2 className={styles.title}>My Experiences</h2>

  
     <section className={styles.container} id="exp">
        <div className={styles.content}>
         
          <p className={styles.description}>
                <h1 className="stage-n-1"> Stage de Fin d’Études - Ooredoo Siège social ,Tunis </h1><br/>Conception et développement d’une application mobile pour gérer les réservations des salles de
                 réunion au sein d’Ooredoo, avec un tableau de bord administrateur pour la gestion.
                </p>
        </div>
      <img
        src={getImageUrl("experiences/ooredoo-project.png")}
        alt="Hero image of me"
        className={styles.expImg}
      />
    </section>
     </section>
  );
};

   