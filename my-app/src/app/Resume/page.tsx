"use client";

import React, { useEffect, useState } from "react";
import styles from "./resume.module.css";

export default function Resume() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div>
    <div className={isVisible ? `${styles.container} ${styles.fadeIn}` : styles.container}>
      <div className={styles.header}>
        <h1 className={styles.fullName}>Vinayak Kohlivins</h1>
        <div className={styles.contactInfo}>
          <span className={styles.contactItem}>Bangkok, Thailand</span>
          <span className={styles.contactItem}>Kohlivins@gmail.com</span>
          <span className={styles.contactItem}>https://github.com/vkohli244</span>
          <span className={styles.contactItem}>www.linkedin.com/in/vikohli244</span>
        </div>
      </div>
      
      <section className={styles.educationSection}>
        <div className={styles.educationLine}>
          <span className={styles.educationText}>Education</span>
        </div>
        <div className={styles.educationDetails}>
          <span className={styles.universityName}>California State Polytechnic- San Luis Obispo</span>
          <span className={styles.duration}>Sept 2024 - June 2028</span>
          <span className={styles.major}>Computer Science</span>
        </div>
      </section>
    </div>
    </div>
  );
}
