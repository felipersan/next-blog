import Link from 'next/link'
import { AddIcon, SearchIcon, TrendIcon } from '../../../../public/assets'

export default function NavBar() {
  const menu = [
    { icon: <SearchIcon color={'#6EEB83'} size={30} />, title: 'Search' },
    { icon: <TrendIcon color={'#6EEB83'} size={30} />, title: 'Trending' }
  ]
  return (
    <>
      <main className="hidden md:flex fixed p-10 min-h-screen border-solid border-r-2 border-emphasis-primary items-center justify-center flex-col gap-y-10">
        <div className="bg-emphasis-primary h-16 w-16 rounded-full flex items-center justify-center">
          <Link href="/">
            <span className="text-4xl text-white">P</span>
          </Link>
        </div>
        <nav>
          <ul className="flex flex-col gap-y-10">
            {menu.map((row: any, key: number) => (
              <Link
                key={key}
                className="cursor-pointer flex flex-col items-center"
                href={`/${row?.title?.toLowerCase()}`}
              >
                {row?.icon}
                <p className="text-white">{row?.title}</p>
              </Link>
            ))}
          </ul>
        </nav>
        <nav className="mt-20">
          <ul className="flex flex-col gap-y-10">
            <Link
              className="cursor-pointer flex flex-col items-center"
              href={`/create`}
            >
              <AddIcon color={'#6EEB83'} size={30} />

              <p className="text-white">Create</p>
            </Link>
          </ul>
        </nav>
      </main>
      <main className="flex fixed bottom-0 mb-7 h-16 w-screen ">
        <div
          className="h-full bg-transparent border-solid border-2 border-emphasis-primary  w-full ml-7 flex  justify-around mr-7 sm:hidden align-middle backdrop-blur-xl"
          id={'menuMobile'}
        >
          <div className=" flex flex-col items-center align-middle justify-center">
            <div className="bg-emphasis-primary h-10 w-10 rounded-full flex items-center justify-center ">
              <Link href="/">
                <span className="text-2xl text-white">P</span>
              </Link>
            </div>
          </div>
          {menu.map((row: any, key: number) => (
            <Link
              key={key}
              className=" flex flex-col items-center align-middle justify-center"
              href={`/${row?.title?.toLowerCase()}`}
            >
              {row?.icon}
            </Link>
          ))}
          <Link
            className="cursor-pointer flex flex-col items-center align-middle justify-center"
            href={`/create`}
          >
            <AddIcon color={'#6EEB83'} size={30} />
          </Link>
        </div>
      </main>
    </>
  )
}
