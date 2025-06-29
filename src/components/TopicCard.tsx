'use client'
import Link from 'next/link'
import { QUESTIONS } from '../data/quizData'

interface Topic {
  id: string
  title: string
  progress?: number
}

export default function TopicCard({ topic }: { topic: Topic }) {
  const hasQuiz = QUESTIONS[topic.id]?.length > 0

  return (
    <div className="topic-card">
      <div className="topic-content">
        <h3>{topic.title}</h3>
        {topic.progress !== undefined && (
          <div className="progress-container">
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${topic.progress}%` }}
              />
            </div>
            <span>{topic.progress}%</span>
          </div>
        )}
      </div>
      
      <div className="topic-actions">
        <Link href={`/learn/${topic.id}`} className="btn btn-primary">
          Learn
        </Link>
        
        {hasQuiz ? (
          <Link href={`/quiz/${topic.id}`} className="btn btn-secondary">
            Take Quiz
          </Link>
        ) : (
          <button 
            className="btn btn-secondary disabled"
            disabled
            title="Quiz coming soon"
          >
            Quiz Coming
          </button>
        )}
      </div>
    </div>
  )
}