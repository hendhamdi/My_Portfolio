import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (<div><div>
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      
      <div className={styles.column}>
             <img
              src={getImageUrl("contact/email.png")} alt="Map" className={styles.email}
            />

            
          </div></div>


          <div className={styles.column}>
            <form action="/action_page.php">
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
              /></form></div>
      
     
      
    </footer></div>
    
     <div className={styles.copyright1}><p className={styles.copyright}>copyright &copy; MyPortfolio.web.com 2024</p></div></div>
    
   
  );
};