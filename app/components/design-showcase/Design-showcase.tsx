import styles from "./design-showcase.module.css"
import Image from "next/image"

export default function DesignShowcase() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h2 className={styles.heading}>
              Design team trusted by Startups scaling from 0 → 8-figures ARR
            </h2>

            <p className={styles.description}>
              We've designed 40+ SaaS products & websites, roasted 100+ startups, and seen how most design fails. We
              solve that with designs that are:
            </p>

            <div className={styles.tags}>
              <span className={`${styles.tag} ${styles.tagPurple}`}>Intelligent UX</span>
              <span className={`${styles.tag} ${styles.tagOrange}`}>World Class</span>
              <span className={`${styles.tag} ${styles.tagBlue}`}>Conversion-Ready</span>
              <span className={`${styles.tag} ${styles.tagPeach}`}>Frictionless</span>
              <span className={`${styles.tag} ${styles.tagGreen}`}>Lightning-Fast Delivery</span>
            </div>
          </div>

          <div className={styles.card}>
            <h2 className={styles.heading}>Who we work with:</h2>

            <ul className={styles.list}>
              <li className={styles.listItem}>
                <Image src="/images/tick.png" alt="tick" width={18} height={18} className={styles.tickIcon} />
                <span><strong>Startups</strong> (seed → Series D and beyond)</span>
              </li>

              <li className={styles.listItem}>
                <Image src="/images/tick.png" alt="tick" width={18} height={18} className={styles.tickIcon} />
                <span><strong>Fractional CMOs</strong> (Managing multiple brands)</span>
              </li>

              <li className={styles.listItem}>
                <Image src="/images/tick.png" alt="tick" width={18} height={18} className={styles.tickIcon} />
                <span><strong>GTM / RevOps leaders</strong> fixing product/website flows</span>
              </li>

              <li className={styles.listItem}>
                <Image src="/images/tick.png" alt="tick" width={18} height={18} className={styles.tickIcon} />
                <span><strong>VCs / Accelerators</strong> scaling portcos</span>
              </li>
            </ul>

            <div className={styles.tags}>
              <span className={`${styles.tag} ${styles.tagPurple}`}>B2B SaaS</span>
              <span className={`${styles.tag} ${styles.tagOrange}`}>Fintech</span>
              <span className={`${styles.tag} ${styles.tagBlue}`}>Devtools</span>
              <span className={`${styles.tag} ${styles.tagPeach}`}>AI</span>
              <span className={`${styles.tag} ${styles.tagGreen}`}>Martech</span>
              <span className={`${styles.tag} ${styles.tagTeal}`}>Healthcare</span>
            </div>
          </div>
        </div>

        <div className={styles.ShowcasebuttonGroup}>
          <button className={styles.ShowcaseprimaryButton}>
            <Image
              src="/images/googleMeet.png"
              alt="Google Meet"
              width={30}
              height={30}
              className={styles.ShowcaseavatarSmall}
            />
            <span>Book a call with Rush</span>
          </button>
        </div>
      </div>
    </section>
  )
}
