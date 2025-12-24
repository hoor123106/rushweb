"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./PortfolioSection.module.css";

export default function PortfolioSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className={styles.portfolioOuterDiv}>
      <div className={styles.portfolioInnerDiv}>
        <div className={styles.portfolioHeaderRow}>
          <div className={styles.portfolioTextBlock}>
            <h2 className={styles.portfolioHeading}>Our Portfolio</h2>
            <p className={styles.portfolioSubtext}>
              Prepared our figmafolio for those
              <br />
              who love to see minor-detailings.
            </p>
          </div>

          <button
            className={styles.portfolioCaseButton}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className={styles.portfolioBtnContent}>
              <Image src="/images/figma.png" alt="Figma" width={18} height={28} />
              <span>See all Case Studies</span>
              <Image
                src="/images/ArrowUpWhite.png"
                alt="Arrow"
                width={18}
                height={18}
                className={`${styles.portfolioArrowIcon} ${isHovered ? styles.portfolioArrowHovered : ""
                  }`}
              />
            </div>
          </button>
        </div>

        <div className={styles.portfolioImageContainer}>
          <Image
            src="/images/Portfolio.png"
            alt="Portfolio"
            width={938}
            height={600}
            className={styles.portfolioMainImage}
            priority
          />
        </div>
      </div>
    </section>
  );
}