"use client";

import React, { useEffect, useState } from "react";
import styles from "./resume.module.css";

export default function Resume() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={isVisible ? `${styles.container} ${styles.fadeIn}` : styles.container}>
      <div className={styles.header}>
        <h1 className={styles.fullName}>Vinayak Kohlivins</h1>
        <div className={styles.contactInfo}>
          <span className={styles.contactItem}>Location</span>
          <span className={styles.contactItem}>Email</span>
          <span className={styles.contactItem}>GitHub</span>
          <span className={styles.contactItem}>LinkedIn</span>
        </div>
      </div>
      
      <section className={styles.educationSection}>
        <div className={styles.educationLine}>
          <span className={styles.educationText}>Education</span>
        </div>
        <div className={styles.educationDetails}>
          <span className={styles.universityName}>University XYZ</span>
          <span className={styles.duration}>Month Year - Month Year</span>
          <span className={styles.major}>Computer Science</span>
        </div>
      </section>
    </div>
  );
}
