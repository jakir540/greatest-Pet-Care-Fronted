// LoadingSpinner.tsx
import React from "react";
import styles from "../LoadingSpinner.module.css";

const LoadingSpinner: React.FC = () => {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner}>
        <div className={styles.pawPrint}>🐾</div>
        <div className={styles.bone}>🦴</div>
      </div>
      <p className={styles.loadingText}>Fetching the latest pet stories...</p>
    </div>
  );
};

export default LoadingSpinner;
