import Link from 'next/link'
import { AddIcon, SearchIcon, TrendIcon } from '../../../../public/assets'

export default function NavBar() {
  const menu = [
    { icon: <SearchIcon color={'#6EEB83'} size={30} />, title: 'Search' },
    { icon: <TrendIcon color={'#6EEB83'} size={30} />, title: 'Trending' }
  ]
  return (
    <main className="min-h-screen w-24 border-solid border-r-2 border-emphasis-primary flex items-center justify-center flex-col gap-y-10">
      <div className="bg-emphasis-primary h-16 w-16 rounded-full flex items-center justify-center">
        <Link href="/">
          <span className="text-4xl text-white">P</span>
        </Link>
      </div>
      <nav>
        <ul className="flex flex-col gap-y-10">
          {menu.map((row: any, key: number) => (
            <li key={key}>
              <Link
                className="cursor-pointer flex flex-col items-center"
                href={`/${row?.title?.toLowerCase()}`}
              >
                {row?.icon}
                <p className="text-white">{row?.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav className="mt-20">
        <ul className="flex flex-col gap-y-10">
          <li key={'create component'}>
            <Link
              className="cursor-pointer flex flex-col items-center"
              href={`/create`}
            >
              <AddIcon color={'#6EEB83'} size={30} />

              <p className="text-white">Create</p>
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  )
}
