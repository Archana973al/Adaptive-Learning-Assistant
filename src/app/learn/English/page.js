'use client'
import { useParams } from 'next/navigation'
import ChatInterface from '../../../components/ChatInterface'
import './styles/learn.css'

export default function LearnTopic() {
  const params = useParams()
  const topic = params.topic

  const topicData = {
    math: {
      title: 'Mathematics',
      description: 'Learn mathematical concepts from basic arithmetic to advanced calculus.',
    },
    science: {
      title: 'Science',
      description: 'Explore physics, chemistry, biology and more.',
    },
    history: {
      title: 'History',
      description: 'Discover world history and important historical events.',
    },
    programming: {
      title: 'Programming',
      description: 'Master coding skills in various programming languages.',
    }
  }

  return (
    <div className={styles.container}>
  <header className={styles.header}>
    <h1 className={styles.title}>English Learning</h1>
    <p className={styles.description}>Improve your English skills</p>
  </header>
  <div className={styles.content}>
    {/* Your content */}
  </div>
</div>

  )
}