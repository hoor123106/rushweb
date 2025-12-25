"use client"
    import Image from "next/image"
import styles from "./ProductUx.module.css"

export default function ProductUXPage() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.card}>

          <div className={styles.Productsheader}>
          <Image
                      src="/images/Logo.svg"
                      width={50}
                      height={50}

                      alt="Logo" 
                    
                    className={styles.logoIcon} />
            <span className={styles.brandName}>rush web studio</span>
          </div>

          <h1 className={styles.heading}>
            <span className={styles.headingHighlight}>That Echoes</span> Excellence
          </h1>

          <p className={styles.description}>
            From stunning websites and high-converting stores to proven digital marketing strategies
            and attractive graphic designs, we don't just deliver projects, we're committed to
            crafting experiences. With a team of experienced professionals we thrive on creativity and precision.
          </p>

          <div className={styles.badgesContainer}>
            <div className={styles.badgeRow}>
              <div className={`${styles.badge} ${styles.badgeRed}`}>Custom Projects</div>
              <div className={`${styles.badge} ${styles.badgeBlue}`}>Full/Part Time Resources</div>
            </div>

            <div className={styles.badgeRow}>
              <div className={`${styles.badge} ${styles.badgeOrange}`}>
                Pods (Multiple Designers & Devs) - For Enterprises
              </div>
            </div>
          </div>

          <button className={styles.Productsbutton}>Book call with Rush</button>
        </div>
      </div>
    </div>
  )
}