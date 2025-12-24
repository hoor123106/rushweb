"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import styles from "./LogoMarquee.module.css"

export default function LogoMarquee() {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!trackRef.current) return

    const track = trackRef.current
    const totalWidth = track.scrollWidth / 2

    gsap.set(track, { x: 0 })

    gsap.to(track, {
      x: -totalWidth,
      duration: 6,
      ease: "none",
      repeat: -1,
    })
  }, [])

  const logos = [
    { src: "/images/junnie.png", alt: "Jullie" },
    { src: "/images/captainsWarehare.png", alt: "Captains" },
    { src: "/images/Comfycozy.png", alt: "Comfycozy" },
    { src: "/images/staeerEats.png", alt: "Staeer Eats" },
    { src: "/images/Pitchputch.png", alt: "Pitchputch" },
    { src: "/images/carlon.png", alt: "Carlon" },
  ]

  return (
    <div className={styles.logoCloudContainer}>
      <div className={styles.logoCloudTrack} ref={trackRef}>
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className={styles.logoWrapper}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={80}
              className={styles.scrollLogo}
              priority
            />
          </div>
        ))}
      </div>
    </div>
  )
}
