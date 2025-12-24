import styles from "./Testimonials.module.css"
import Image from "next/image"

export default function Testimonials() {
  const TestimonialsList = [
    {
      id: 1,
      quote: "WeRoast roasted our old UI and built us an intelligently thought out user sign up process and user interface that converts. Extremely high quality!",
      authorName: "Ben Williams",
      authorTitle: "Co-Founder of Pulse",
      authorImg: "/images/testimonail2.png",
      brandImg: "/images/staeerEats.png"
    },
    {
      id: 2,
      quote: "They completely revamped our old UI and crafted an intelligently designed user sign-up process and interface that converts.",
      authorName: "Sam Hogan",
      authorTitle: "Founder @ Hirebird",
      authorImg: "/images/testimonail3.png",
      brandImg: "/images/carlon.png"
    }
  ];

  return (
    <section className={styles.TestimonialsSection}>
      <div className={styles.TestimonialsContainer}>
        {TestimonialsList.map((item) => (
          <div key={item.id} className={styles.TestimonialsCard}>
            <div className={styles.TestimonialsQuoteIcon}>“</div>

            <p className={styles.TestimonialsQuoteContent}>
              {item.quote}
            </p>

            <div className={styles.TestimonialsFooter}>
              <div className={styles.TestimonialsAuthorWrapper}>
                <Image
                  src={item.authorImg}
                  alt={item.authorName}
                  width={48}
                  height={48}
                  className={styles.TestimonialsAvatar}
                />
                <div className={styles.TestimonialsauthorText}>
                  <strong>{item.authorName}</strong>
                  <span>{item.authorTitle}</span>
                </div>
              </div>

              <div className={styles.TestimonialsBrandLogo}>
                <img src={item.brandImg} alt="logo" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}