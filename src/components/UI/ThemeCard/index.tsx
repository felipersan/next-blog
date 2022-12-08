interface ThemeCardProps {
  name: string
}

export default function ThemeCard({ name }: ThemeCardProps) {
  return (
    <div className="h-8 border-solid border border-emphasis-primary rounded-full px-5 flex justify-center align-middle">
      <p className="text-emphasis-primary font-mono">{name}</p>
    </div>
  )
}
