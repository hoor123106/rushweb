"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import styles from "./Hero.module.css"
import LogoMarquee from "@/app/components/Logo-scrolling/LogoMarquee"

export default function Hero() {
  const projectScrollRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!projectScrollRef.current) return

    const ctx = gsap.context(() => {
      gsap.to(projectScrollRef.current, {
        xPercent: -50,
        repeat: -1,
        duration: 20,
        ease: "linear",
      })
    })

    return () => ctx.revert()
  }, [])


  const projectSlides = [
    { id: 1, src: "/images/project1.png", color: "#FF9E67" },
    { id: 2, src: "/images/project2.png", color: "#FFF27A" },
    { id: 3, src: "/images/project3.avif", color: "#C7CAE6" },
  ]

  return (
    <div className={styles.heroContainer}>
      <div className={styles.leftColumn}>
        <div className={styles.brandHeader}>
          <div className={styles.brandlogo}>
            <img src="/images/logo.svg" alt="Logo" />
          </div>
          <div className={styles.brandTextGroup}>
            <span className={styles.brandNameLine}>rush.</span>
            <span className={styles.brandNameLine}>web studio</span>
          </div>
        </div>

        <h1 className={styles.mainTitle}>Design partner for fast growing SaaS & tech startups</h1>

        <p className={styles.mainDescription}>
          We've designed 40+ products, websites, and brands for startups from early-stage to Enterprises.
        </p>

        <div className={styles.buttonGroup}>
          <button className={styles.primaryButton}>
            <Image
              src="/images/headerBoyImage.avif"
              alt="Ziyan"
              width={24}
              height={24}
              className={styles.avatarSmall}
            />
            <span>Book a call with Rush</span>
          </button>
          <button className={styles.secondaryButton}>
            <Image src="/images/mail.png" alt="Mail" width={20} height={20} />
            <span>Quick Mail</span>
          </button>
        </div>

        <LogoMarquee />

        <div className={styles.testimonialCard}>
          <p className={styles.testimonialText}>
            "Working with them has been effortless. They're sharp, proactive, and genuinely invested in our success.
            From UX ideas to technical implementation, they've nailed every detail."
          </p>
          <div className={styles.authorArea}>
            <Image
              src="/images/headerBoyImage.avif"
              alt="Anton"
              width={48}
              height={48}
              className={styles.authorAvatar}
            />
            <div>
              <div className={styles.authorName}>Anton</div>
              <div className={styles.authorTitle}>Founder sonora, ex-PM of salesforce</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.projectTrack} ref={projectScrollRef}>
          {[...projectSlides, ...projectSlides].map((project, index) => (
            <div
              key={index}
              className={styles.projectCard}
              style={{ backgroundColor: project.color }}
            >
              <div className={styles.projectImageWrapper}>
                <Image
                  src={project.src}
                  alt={`Project ${project.id}`}
                  width={500}
                  height={700}
                  className={styles.projectImage}
                  priority
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}