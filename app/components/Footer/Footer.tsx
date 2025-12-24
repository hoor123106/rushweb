import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.contentSection}>
        <div className={styles.brandGroup}>
          <img src="/images/logo.svg" className={styles.logoImg} alt="Logo" />
          <div className={styles.brandTitle}>
            <span>rush.</span>
            <span>web studio</span>
          </div>
        </div>

        <div className={styles.ctaBox}>
          <h2 className={styles.ctaText}>
            Have an idea in<br />
            mind?{" "}
            <Link href="/contact" className={`${styles.whiteText} ${styles.underline} ${styles.ctaLink}`}>
              Let&apos;s talk.
            </Link>
          </h2>
        </div>
      </div>

      <hr className={styles.hr} />

      <div className={styles.bottomSection}>
        <div className={styles.links}>
          <span>ruhwebstudio</span>
          <span>/websites</span>
          <span>/motion</span>
        </div>

        <div className={styles.copyright}>
          Copyright 2026 © Weroast Design 2026. All Rights Reserved
        </div>

        <div className={styles.socials}>
          <div className={styles.circle}>
            <img src="/images/instagram.png" className={styles.socialIcon} alt="Instagram" />
          </div>
          <div className={styles.circle}>
            <img src="/images/likedin.png" className={styles.socialIcon} alt="LinkedIn" />
          </div>
        </div>
      </div>
    </div>
  );
}
