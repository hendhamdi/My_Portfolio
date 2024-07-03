import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (<div><div>
    <footer id="contact" className={styles.container}>
      <div>
      <div className={styles.container}>
        <div className={styles.text}>
          <h2>Contact Us</h2>
          <p>Swing by for a cup of coffee, or leave us a message:</p>
        </div>
        <div className={styles.row}>
          <div className={styles.column}>
            <img
              src={getImageUrl("map.jpg")}
              alt="Map"
              style={{ width: "100%" }}
            />
          </div>
          <div className={styles.column}>
            <form action="/action_page.php">
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
              />
              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Your last name.."
              />
              <label htmlFor="country">Country</label>
              <select id="country" name="country">
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
              </select>
              <label htmlFor="subject">Subject</label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
                style={{ height: "170px" }}
              ></textarea>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>copyright &copy; MyPortfolio.web.com 2024</p>
      </div>
    </div>
     
      
    </footer></div>
    
     <div className={styles.copyright1}><p className={styles.copyright}>copyright &copy; MyPortfolio.web.com 2024</p></div></div>
    
   
  );
};