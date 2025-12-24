"use client"

import { useState } from "react"
import styles from "./Delivery.module.css"

type ServiceTab = "Web Apps" | "Websites" | "Motion" | "Branding"

export default function Delivery() {
  const [activeTab, setActiveTab] = useState<ServiceTab>("Web Apps")

  const tabs: ServiceTab[] = ["Web Apps", "Websites", "Motion", "Branding"]

  const servicesData: Record<
    ServiceTab,
    { service: string; timeframe: string }[]
  > = {
    "Web Apps": [
      { service: "MVP web app", timeframe: "2-10 weeks" },
      { service: "MVP mobile app", timeframe: "2-8 weeks" },
      { service: "New feature sprint", timeframe: "min. 1 week" },
      { service: "Design system", timeframe: "min 10 days" },
    ],
    Websites: [
      { service: "Landing page", timeframe: "1-2 weeks" },
      { service: "Marketing website", timeframe: "3-6 weeks" },
      { service: "E-commerce site", timeframe: "4-8 weeks" },
      { service: "Website redesign", timeframe: "2-4 weeks" },
    ],
    Motion: [
      { service: "Explainer video", timeframe: "2-3 weeks" },
      { service: "Product demo", timeframe: "1-2 weeks" },
      { service: "Animation set", timeframe: "1-2 weeks" },
      { service: "Micro-interactions", timeframe: "3-5 days" },
    ],
    Branding: [
      { service: "Brand identity", timeframe: "4-6 weeks" },
      { service: "Logo design", timeframe: "1-2 weeks" },
      { service: "Brand guidelines", timeframe: "2-3 weeks" },
      { service: "Visual system", timeframe: "3-4 weeks" },
    ],
  }

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>
          How quick can we do the <span className={styles.highlight}>job</span>?
        </h1>

        <div className={styles.tabsOuter}>
          <div className={styles.tabList}>
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`${styles.tabButton} ${activeTab === tab ? styles.activeTab : ""}`}
              >
                {tab}
                {activeTab === tab && <div className={styles.activeUnderline} />}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.tableCard}>
          <div className={styles.tableHeader}>
            <div className={styles.headerCell}>Service</div>
            <div className={styles.headerCell}>Timeframe</div>
          </div>

          {servicesData[activeTab].map((item, index) => (
            <div
              key={index}
              className={`${styles.row} ${index % 2 === 0 ? styles.rowGray : styles.rowWhite}`}
            >
              <div className={styles.cell}>{item.service}</div>
              <div className={styles.cell}>{item.timeframe}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}