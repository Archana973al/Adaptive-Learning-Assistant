import { Inter } from 'next/font/google'
// src/app/layout.tsx
import './globals/globals.css'
import Header from '../components/Header'
import { AuthProvider } from '../context/AuthContext'
import { QuizProvider } from '../context/QuizContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Adaptive Learning Assistant',
  description: 'AI-powered personalized education platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <QuizProvider>
            <Header />
            <main>{children}</main>
          </QuizProvider>
        </AuthProvider>
      </body>
    </html>
  )
}