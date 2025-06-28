'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useAuth } from '../../context/AuthContext'
import '../../styles/auth.css'

export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { register } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await register(email, password)
    } catch (err) {
      setError('Failed to register. Please try again.')
    }
  }

  return (
    <div className="auth-container">
      <h2>Register</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
      <p className="auth-switch">
        Already have an account? <Link href="/login">Login</Link>
      </p>
    </div>
  )
}