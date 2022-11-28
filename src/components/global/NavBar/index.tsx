import { SearchIcon, TrendIcon } from "../../../../public/assets";

export default function NavBar() {
  const menu = [
    { icon: <SearchIcon color={"#6EEB83"} size={40} />, title: "Search" },{ icon: <TrendIcon color={"#6EEB83"} size={40} />, title: "Trending" }
  ];
  return (
    <main className="min-h-screen w-40 border-solid border-r-2 border-emphasis-primary flex items-center justify-center flex-col gap-y-10">
      <div className="bg-emphasis-primary h-20 w-20 rounded-full flex items-center justify-center">
        <span className="text-4xl text-white">P</span>
      </div>
      <nav>
        <ul className="flex flex-col gap-y-10">
          {menu.map((row: any, key: number) => (
            <li key={key}>
              <a className="cursor-pointer flex flex-col items-center" href={`/${row.title}`}>
                {row.icon}
                <p className="text-white">{row.title}</p>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
