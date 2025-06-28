'use client'
import { useAuth } from '../../context/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import LearningPath from '../../components/LearningPath'
import TopicCard from '../../components/TopicCard'
import '../../styles/dashboard.css'

export default function Dashboard() {
  const { user, loading, logout } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login')
    }
  }, [user, loading, router])

  if (loading || !user) {
    return <div>Loading...</div>
  }

  const topics = [
    { id: 'math', title: 'Mathematics', progress: 65 },
    { id: 'science', title: 'Science', progress: 40 },
    { id: 'history', title: 'History', progress: 20 },
    { id: 'programming', title: 'Programming', progress: 85 },
  ]

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome back, {user.email}</h1>
        <button onClick={logout} className="btn btn-secondary">
          Logout
        </button>
      </div>
      
      <div className="learning-progress">
        <h2>Your Learning Progress</h2>
        <LearningPath progress={65} />
      </div>
      
      <div className="topics-section">
        <h2>Recommended Topics</h2>
        <div className="topics-grid">
          {topics.map(topic => (
            <TopicCard key={topic.id} topic={topic} />
          ))}
        </div>
      </div>
    </div>
  )
}