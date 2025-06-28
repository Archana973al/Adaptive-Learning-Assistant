import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import { AuthProvider } from '../context/AuthContext'

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
          <Header />
          <main className="container">{children}</main>
        </AuthProvider>
      </body>
    </html>
  )
}