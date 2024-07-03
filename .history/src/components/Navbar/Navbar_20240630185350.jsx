import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
const handleClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false);
  };
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        My 
        Portfolio
      </a>
      <div className={styles.menu}>
        {/*<img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />*/}
         <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a
              href="#about"
              className={activeLink === "about" ? styles.active : ""}
              onClick={() => handleClick("about")}
            >About me</a>
          </li>
          <li>
            <a href="#experience"className={activeLink === "about" ? styles.active : ""}
              onClick={() => handleClick("about")}>Skills</a>
          </li>
          <li>
            <a href="#projects"className={activeLink === "about" ? styles.active : ""}
              onClick={() => handleClick("about")}>Projects</a>
          </li>
          <li>
            <a href="#contact"className={activeLink === "about" ? styles.active : ""}
              onClick={() => handleClick("about")}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};