import { ReactNode } from 'react'

interface propsButton {
  children: ReactNode
}

export default function Button({ children }: propsButton) {
  return (
    <div className="w-full text-black cursor-pointer bg-emphasis-primary h-16  flex align-middle py-4 justify-center hover:opacity-80">
      {children}
    </div>
  )
}
