'use client'
import { notFound } from 'next/navigation'
import { useParams } from 'next/navigation'
import Quiz from '../../../components/Quiz'
import { QUESTIONS } from '../../../data/quizData'
import './styles/learn.css';  // Relative to page.tsx

export default function QuizPage() {
  const params = useParams()
  const topic = params.topic as string
  
  // Normalize topic ID (case-insensitive)
  const normalizedTopic = topic.toLowerCase()
  const topicQuestions = QUESTIONS[normalizedTopic]

  // Return 404 if no questions exist
  if (!topicQuestions || topicQuestions.length === 0) {
    notFound()
  }

  return (
    <div className="quiz-page">
      <div className="quiz-header">
        <h1>{normalizedTopic.charAt(0).toUpperCase() + normalizedTopic.slice(1)} Quiz</h1>
        <p>{topicQuestions.length} questions to test your knowledge</p>
      </div>
      <Quiz questions={topicQuestions} topic={normalizedTopic} />
    </div>
  )
}