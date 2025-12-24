"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import styles from "./Header.module.css"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/" onClick={() => setIsOpen(false)}>
            <img
              src="/images/logoWithname.png"
              alt="Logo"
              className={styles.logoImage}
            />
          </Link>
        </div>

        <div className={styles.navRight}>
          <button className={styles.navLink}>Work</button>
          <button className={styles.navLink}>
            <span>Resources</span>
            <span className={styles.badge}>new</span>
          </button>
          <button className={styles.xButton}>
            <img src="/images/Twitter.svg" alt="X" className={styles.xIcon} />
          </button>
          <button className={styles.primaryButton}>
            <span className={styles.buttonText}>Book call with Rush</span>
          </button>
        </div>

        <button
          className={styles.hamburger}
          onClick={() => setIsOpen(!isOpen)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isOpen ? "close" : "open"}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <X size={28} color="#4E0109" /> : <Menu size={28} color="#4E0109" />}
            </motion.div>
          </AnimatePresence>
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={styles.mobileMenu}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.2 }}
              className={styles.mobileContentWrapper}
            >
              <div className={styles.mobileLinks}>
                <button className={styles.mobileNavLink}>Work</button>
                <button className={styles.mobileNavLink}>
                  <span>Resources</span>
                  <span className={styles.badge}>new</span>
                </button>
              </div>

              <div className={styles.mobileActionButtons}>
                <button className={styles.mobileChatButton}>
                  Lets Chat <img src="/images/Twitter.svg" alt="X" className={styles.smallIcon} />
                </button>

                <button className={styles.mobileFounderButton}>
                  Talk to Founder
                  {/* <img src="/images/google-meet.png" alt="Meet" className={styles.meetIcon} /> */}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}