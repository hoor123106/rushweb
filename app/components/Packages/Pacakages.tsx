"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import styles from "./Pacakages.module.css"



type ServicePlan = {
  name: string
  badge: string
  price: string
  originalPrice: string
  title: string
  features: string[]
  icon: string
}

const servicePlans: Record<string, ServicePlan> = {
  websites: {
    name: "Websites",
    badge: "Startup Websites",
    price: "$200",
    originalPrice: "$400",
    title: "High-converting SaaS websites in weeks, not months.",
    icon: "/images/Logo.svg",
    features: [
      "Clear prices, No surprises",
      "Responsive design for all devices",
      "SEO optimized structure",
      "Fast loading performance",
      "Modern UI/UX design",
      "Free hosting for 1 month",
    ],
  },
  branding: {
    name: "Branding",
    badge: "Brand Identity",
    price: "$350",
    originalPrice: "$700",
    title: "Complete brand identity that makes you stand out.",
    icon: "/Logo.svg",
    features: [
      "Brand strategy & guidelines",
      "Color palette & typography",
      "Brand voice & messaging",
      "Social media templates",
      "Business card designs",
      "Email signature templates",
    ],
  },
  logo: {
    name: "Logo Designing",
    badge: "Professional Logo",
    price: "$150",
    originalPrice: "$300",
    title: "Memorable logos that represent your brand perfectly.",
    icon: "/Logo.svg",
    features: [
      "Multiple design concepts",
      "Unlimited revisions",
      "Vector files (AI, EPS, SVG)",
      "High-resolution PNG & JPG",
      "Social media versions",
      "Favicon included",
    ],
  },
  marketing: {
    name: "Marketing",
    badge: "Digital Marketing",
    price: "$500",
    originalPrice: "$1000",
    title: "Complete marketing strategy to grow your business.",
    icon: "/logo.svg",
    features: [
      "Social media management",
      "Content creation & strategy",
      "Email marketing campaigns",
      "Analytics & reporting",
      "Ad campaign management",
      "Monthly performance reviews",
    ],
  },
}

export default function PackagesSection() {
  const [currentPlan, setCurrentPlan] = useState<ServicePlan>(servicePlans.websites)
  const [selectedService, setSelectedService] = useState("websites")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setCurrentPlan(servicePlans[selectedService])
  }, [selectedService])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isDropdownOpen])

  const handleServiceChange = (service: string) => {
    setSelectedService(service)
    setIsDropdownOpen(false)
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.header}>
          Rush Web Studio <span className={styles.headerAccent}>fixed packages.</span>
        </h1>

        <div className={styles.dropdownWrapper}>
          <div className={styles.dropdownContainer} ref={dropdownRef}>
            <button className={styles.dropdownButton} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <span>{servicePlans[selectedService].name}</span>
              <svg
                className={`${styles.arrow} ${isDropdownOpen ? styles.arrowOpen : ""}`}
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className={styles.dropdownMenu}>
                {Object.keys(servicePlans).map((key) => (
                  <button
                    key={key}
                    className={`${styles.dropdownItem} ${selectedService === key ? styles.dropdownItemActive : ""}`}
                    onClick={() => handleServiceChange(key)}
                  >
                    {servicePlans[key].name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className={styles.cardsGrid}>
          {[1, 2].map((i) => (
            <div key={i} className={styles.card}>
              <div>
                <div className={styles.badge}>
                  <div className={styles.badgeHeader}>
                    <Image
                      src="/images/Logo.svg"
                      width={50}
                      height={50}

                      alt="Logo" className={styles.logoIcon}
                      priority
                    />
                    <span className={styles.badgeText}>{currentPlan.badge}</span>
                  </div>

                </div>

                <div className={styles.priceContainer}>
                  <span className={styles.price}>{currentPlan.price}</span>
                  <span className={styles.originalPrice}>{currentPlan.originalPrice}</span>
                </div>

                <h2 className={styles.packagesTitle}>{currentPlan.title}</h2>

                <ul className={styles.featuresList}>
                  {currentPlan.features.map((feature, index) => (
                    <li key={index} className={styles.featureItem}>
                      <svg className={styles.checkIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.buttonContainer}>
                <button className={i === 1 ? styles.buttonDark : styles.buttonOutline}>Activate Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}