import styles from './HowItWorks.module.css';

interface StepData {
  id: string;
  title: string;
  desc: string;
}

const steps: StepData[] = [
  {
    id: 'step 1',
    title: '20-40 min Discovery Call',
    desc: "Book a call to discuss your business, requirements, and what you actually need plus whether we're the right partner for your case."
  },
  {
    id: 'step 2',
    title: 'Project Planning (Call/Chat)',
    desc: "We'll create a detailed plan based on our initial discussion: scope, exact needs, pricing, timelines, and which weroast members will be involved."
  },
  {
    id: 'step 3',
    title: 'Project Initiation',
    desc: "We'll onboard you, set up Slack, assign the team, and immediately start building the next era of your brand."
  }
];

export default function HowItWorks() {
  return (
    <section className={styles.howWorkSection}>
      <h2 className={styles.howWorkMainTitle}>
        How does it <span className={styles.howWorkAccent}>work</span> ?
      </h2>

      <div className={styles.howWorkGrid}>
        {steps.map((step) => (
          <div key={step.id} className={styles.howWorkCard}>
            <div className={styles.howWorkContent}>
              <h3 className={styles.howWorkCardTitle}>{step.title}</h3>
              <p className={styles.howWorkCardDesc}>{step.desc}</p>
            </div>
            <div className={styles.howWorkStepWatermark}>{step.id}</div>
          </div>
        ))}
      </div>
    </section>
  );
}