import { ReactNode } from 'react'
import NavBar from '../global/NavBar'

interface props {
  children: ReactNode
}

export default function Layout({ children }: props) {
  return (
    <div className="min-h-screen bg-bg-primary flex min-w-screnn relative">
      <NavBar />
      <main>{children}</main>
    </div>
  )
}
