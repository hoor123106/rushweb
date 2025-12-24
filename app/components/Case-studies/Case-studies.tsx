import styles from "./CaseStudy.module.css";

const cases = [
  {
    id: 1,
    title: "Pulse",
    caseImage: "/images/case1.png",
    testimonialImage: "/images/testimonail1.png",
    brandLogo: "/images/junnie.png",
    quote: "We Roast roasted our old UI and built us an intelligently thought out user sign up process and user interface that converts. Extremely high quality!",
    author: "Ben Williams",
    role: "Co-Founder of Pulse"
  },
  {
    id: 2,
    title: "EcoSmart",
    caseImage: "/images/case2.png",
    testimonialImage: "/images/testimonail2.png",
    brandLogo: "/images/junnie.png",
    quote: "The design team understood our vision perfectly. The new interface is not only beautiful but has significantly improved our user retention.",
    author: "Sarah Jenkins",
    role: "Marketing Director"
  },
  {
    id: 3,
    title: "Vividly",
    caseImage: "/images/case3.png",
    testimonialImage: "/images/testimonail3.png",
    brandLogo: "/images/junnie.png",
    quote: "Professional, fast, and creative. They transformed our messy dashboard into a clean and intuitive workspace for our entire global team.",
    author: "Michael Chen",
    role: "Lead Developer"
  }
];

export default function CaseStudies() {
  return (
    <section className={styles.section}>
      <div className={styles.caseContainer}>
        <h2 className={styles.heading}>Our Case Studies</h2>
        <div className={styles.cardsContainer}>
          {cases.map((item) => (
            <div key={item.id} className={styles.outerCard}>
              <div className={styles.innerGrid}>
                <div className={styles.imageWrap}>
                  <img src={item.caseImage} alt={item.title} className={styles.image} />
                </div>
                <div className={styles.content}>
                  <h3 className={styles.Casetitle}>{item.title}</h3>
                  <div className={styles.tags}>
                    <span className={`${styles.tag} ${styles.product}`}>Product</span>
                    <span className={`${styles.tag} ${styles.branding}`}>Branding</span>
                    <span className={`${styles.tag} ${styles.web}`}>Web</span>
                  </div>
                  <div className={styles.textBox}>
                    <div className={styles.textPadding}>
                      <p>{item.quote}</p>
                    </div>
                    <div className={styles.authorRow}>
                      <div className={styles.authorInfo}>
                        <div className={styles.avatar}>
                          <img src={item.testimonialImage} alt="" />
                        </div>
                        <div className={styles.authorText}>
                          <strong>{item.author}</strong>
                          <span>{item.role}</span>
                        </div>
                      </div>
                      <div className={styles.brandLogo}>
                        <img src={item.brandLogo} className={styles.logoIcon} alt="Logo" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button className={styles.arrow} aria-label="View Case Study">
                <img src="/images/ArrowUp.png" alt="arrow" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}