interface ThemeCardProps {
  name: string
}

export default function ThemeCard({ name }: ThemeCardProps) {
  return (
    <div className="h-8 border-solid border border-emphasis-primary rounded-full px-5 justify-center align-middle">
      <p className="w-full text-center inline-block align-midl text-emphasis-primary font-mono text-xs ">
        {name}
      </p>
    </div>
  )
}
