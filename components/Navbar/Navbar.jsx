import React, { useState } from "react";
import styles from "./Navbar.module.css";

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
        My Portfolio
      </a>
      <div className={styles.menu}>
        
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
        >
          <li>
            <a
              href="#about"
              className={activeLink === "about" ? styles.active : ""}
              onClick={() => handleClick("about")}
            >
              About me
            </a>
          </li>
          <li>
            <a
              href="#experiences"
              className={activeLink === "experiences" ? styles.active : ""}
              onClick={() => handleClick("experiences")}
            >
              Experiences
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className={activeLink === "experience" ? styles.active : ""}
              onClick={() => handleClick("experience")}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={activeLink === "projects" ? styles.active : ""}
              onClick={() => handleClick("projects")}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeLink === "contact" ? styles.active : ""}
              onClick={() => handleClick("contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
