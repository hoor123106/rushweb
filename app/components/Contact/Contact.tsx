"use client";
import { useState } from "react";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    startupName: "",
    startupStage: "",
    designPriority: "",
    budget: "",
    message: "",
  });

  async function handleSubmit(e: any) {
    e.preventDefault();
    await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    alert("Form submitted successfully!");
    setForm({
      name: "",
      email: "",
      startupName: "",
      startupStage: "",
      designPriority: "",
      budget: "",
      message: "",
    });
  }

  const budgetOptions = ["<$10k", "$10k - $30k", "$30k - $100k", "$300k - $1M", "$1M<"];

  return (
    <div className={styles.formCard}>
      <h2 className={styles.formTitle}>Book a Call</h2>
      <form onSubmit={handleSubmit} className={styles.formGrid}>
        <div className={styles.inputGroup}>
          <label>Your name*</label>
          <input
            required
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Business email*</label>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Startup name*</label>
          <input
            required
            type="text"
            value={form.startupName}
            onChange={(e) => setForm({ ...form, startupName: e.target.value })}
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Startup stage?*</label>
          <select
            required
            value={form.startupStage}
            onChange={(e) => setForm({ ...form, startupStage: e.target.value })}
          >
            <option value="">Select stage</option>
            <option value="idea">Idea Stage</option>
            <option value="mvp">MVP</option>
            <option value="growth">Growth</option>
          </select>
        </div>

        <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
          <label>Design priority Now?*</label>
          <select
            required
            value={form.designPriority}
            onChange={(e) => setForm({ ...form, designPriority: e.target.value })}
          >
            <option value="">Select priority</option>
            <option value="ui-ux">UI/UX Design</option>
            <option value="branding">Branding</option>
            <option value="web-dev">Web Development</option>
          </select>
        </div>

        <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
          <label>Budget range?*</label>
          <div className={styles.budgetGrid}>
            {budgetOptions.map((opt) => (
              <button
                key={opt}
                type="button"
                className={`${styles.budgetBtn} ${form.budget === opt ? styles.activeBudget : ""}`}
                onClick={() => setForm({ ...form, budget: opt })}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <div className={`${styles.inputGroup} ${styles.fullWidth}`}>
          <label>Would you like to add something?</label>
          <textarea
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
        </div>

        <div className={styles.formFooter}>
          <button type="button" className={styles.backBtn}>Back</button>
          <button type="submit" className={styles.submitBtn}>Submit</button>
        </div>
      </form>
    </div>
  );
}