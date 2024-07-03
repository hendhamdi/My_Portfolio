import React, { useEffect, useRef } from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const clonedNodes = Array.from(scrollContainer.children).map(child => child.cloneNode(true));
    clonedNodes.forEach(node => scrollContainer.appendChild(node));

    const scroll = () => {
      scrollContainer.scrollLeft += 1;
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      }
    };

    const intervalId = setInterval(scroll, 20);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="slider">
      <div className="slide-track" ref={scrollRef}>
        {skills.map((skill, id) => (
          <div key={id} className="slide">
            <img src={getImageUrl(skill.imageSrc)} height="100" width="250" alt={skill.title} />
          </div>
        ))}
      </div>
    </div>
  );
};
