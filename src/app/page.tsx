import Link from 'next/link'
import Image from 'next/image'
import styles from './styles/main.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Personalized Learning Powered by AI</h1>
          <p className={styles.subtitle}>
            An adaptive learning platform that tailors educational content to your 
            unique learning style, pace, and preferences.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/login" className={`${styles.btn} ${styles.btnPrimary}`}>
              Get Started
            </Link>
            <Link href="/register" className={`${styles.btn} ${styles.btnSecondary}`}>
              Create Account
            </Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <Image 
            src="/image.png" 
            alt="Learning illustration" 
            width={600} 
            height={400}
            priority
          />
        </div>
      </div>

      <section className={styles.subjectSection}>
        <h2 className={styles.sectionTitle}>Choose a Subject to Learn</h2>
        <div className={styles.grid}>
          <Link href="/learn/english" className={styles.card}>
            <h3 className={styles.cardTitle}>English</h3>
            <p className={styles.cardDescription}>Master English language skills</p>
          </Link>
          <Link href="/learn/math" className={styles.card}>
            <h3 className={styles.cardTitle}>Mathematics</h3>
            <p className={styles.cardDescription}>From basics to advanced concepts</p>
          </Link>
          <Link href="/learn/science" className={styles.card}>
            <h3 className={styles.cardTitle}>Science</h3>
            <p className={styles.cardDescription}>Explore physics, chemistry, biology</p>
          </Link>
        </div>
      </section>
    </main>
  )
}