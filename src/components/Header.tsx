'use client'
import Link from 'next/link'
import { useAuth } from '../context/AuthContext'
import '../styles/header.css'  // Changed from '../../styles' to '../styles'

export default function Header() {
  const { user } = useAuth()

  return (
    <header className="header">
      <Link href="/" className="logo">
        Adaptive Learning
      </Link>
      <nav>
        {user ? (
          <Link href="/dashboard" className="nav-button dashboard-button">
            Dashboard
          </Link>
        ) : (
          <Link href="/login" className="nav-button login-button">
            Login
          </Link>
        )}
      </nav>
    </header>
  )
}