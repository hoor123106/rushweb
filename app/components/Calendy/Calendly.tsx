"use client";

import { useState, useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import styles from "./CalendarSection.module.css";

export default function CalendarSection() {
  const [activeTab, setActiveTab] = useState("calendar");

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "call-with-founder" });
      cal("ui", {
        hideEventTypeDetails: true,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <section className={styles.calOuterDiv}>
      <div className={styles.calInnerDiv}>
        <h2 className={styles.mainHeading}>
          Book a <span className={styles.redText}>call</span> or Fill the <span className={styles.goldText}>form</span>
        </h2>

        <div className={styles.toggleWrapper}>
          <div className={styles.toggleContainer}>
            <button
              className={`${styles.toggleBtn} ${activeTab === "calendar" ? styles.active : ""}`}
              onClick={() => setActiveTab("calendar")}
            >
              Calendar
            </button>
            <button
              className={`${styles.toggleBtn} ${activeTab === "form" ? styles.active : ""}`}
              onClick={() => setActiveTab("form")}
            >
              Form
            </button>
          </div>
        </div>

        <div className={styles.contentArea}>
          {activeTab === "calendar" ? (
            <Cal
              namespace="call-with-founder"
              calLink="warda-dev-r96vlw/call-with-founder"
              className={styles.calEmbedElement}
              config={{ layout: "month_view" }}
            />
          ) : (
            <div className={styles.formPlaceholder}>
              {/* Aap apna Form component yahan daal sakte hain */}
              <p>Form coming soon...</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}