import Link from "next/link";
import React, { useState } from "react";
import {
  AddIcon,
  LeaveIcon,
  SearchIcon,
  TrendIcon,
} from "../../../../public/assets";
import Input from "../../UI/Input";

export default function NavBar() {
  const [search, setSearch] = useState<string>("");
  const [showInputSearch, setShowImportSearch] = useState<boolean>(false);

  const menu = [
    { icon: <SearchIcon color={"#6EEB83"} size={30} />, title: "Search" },
    { icon: <TrendIcon color={"#6EEB83"} size={30} />, title: "Populares" },
  ];

  const menuMobile = [
    { icon: <SearchIcon color={"#6EEB83"} size={20} />, title: "Search" },
    { icon: <TrendIcon color={"#6EEB83"} size={20} />, title: "Populares" },
  ];
  return (
    <>
      <main className="hidden sm:flex fixed p-10 min-h-screen border-solid border-r-2 border-emphasis-primary items-center justify-center flex-col gap-y-10 ">
        <div
          className={`${
            showInputSearch ? "flex" : "hidden"
          } fixed mb-20 w-full pl-3 pr-3 bottom-3 backdrop-blur-xl`}
        >
          <Input
            placeholder="Ex: Next Js"
            typeBtn="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setSearch(e?.target?.value);
            }}
          />
        </div>
        <div className="bg-emphasis-primary h-16 w-16 rounded-full flex items-center justify-center">
          <Link href="/">
            <span className="text-4xl text-white">P</span>
          </Link>
        </div>
        <Link
          className="cursor-pointer flex flex-col items-center"
          href={`/login`}
        >
          <LeaveIcon color={"#6EEB83"} size={30} />
          <p className="text-white">Sair</p>
        </Link>
        <nav>
          <ul className="flex flex-col gap-y-10">
            {menu.map((row: any, key: number) => {
              if (row?.title !== "Search") {
                return (
                  <Link
                    key={key}
                    className="cursor-pointer flex flex-col items-center"
                    href={`/${row?.title?.toLowerCase()}`}
                  >
                    {row?.icon}
                    <p className="text-white">{row?.title}</p>
                  </Link>
                );
              } else {
                return (
                  <button
                    onClick={() => {
                      setShowImportSearch(!showInputSearch);
                    }}
                    className="cursor-pointer flex flex-col items-center"
                  >
                    {row?.icon}
                  </button>
                );
              }
            })}
          </ul>
        </nav>
        <nav className="mt-20">
          <ul className="flex flex-col gap-y-10">
            <Link
              className="cursor-pointer flex flex-col items-center"
              href={`/create`}
            >
              <AddIcon color={"#6EEB83"} size={30} />

              <p className="text-white">Create</p>
            </Link>
          </ul>
        </nav>
      </main>

      <main className="flex fixed bottom-0 mb-3 h-16 w-screen sm:hidden">
        <div
          className={`${
            showInputSearch
              ? "bottom-3 opacity-1 ease-in duration-300"
              : "bottom-0 opacity-0 ease-in duration-300"
          } fixed mb-20 px-3 flex w-full backdrop-blur-xl gap-3`}
        >
          <Input
            placeholder="Ex: Next Js"
            typeBtn="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setSearch(e?.target?.value);
            }}
          />
          <div className="bg-emphasis-primary flex-auto w-20 h-14 flex flex-col items-center align-middle justify-center">
            <SearchIcon color={"#000"} size={20} />
          </div>
        </div>
        <div
          className="h-full bg-transparent border-solid border-2 border-emphasis-primary  w-full ml-3 flex  justify-around mr-3 sm:hidden align-middle backdrop-blur-xl"
          id={"menuMobile"}
        >
          <div className=" flex flex-col items-center align-middle justify-center">
            <div className="bg-emphasis-primary h-8 w-8 rounded-full flex items-center justify-center ">
              <Link href="/">
                <span className="text-1xl text-white">P</span>
              </Link>
            </div>
          </div>
          <div className=" flex flex-col items-center align-middle justify-center">
            <Link
              className="cursor-pointer flex flex-col items-center"
              href={`/login`}
            >
              <LeaveIcon color={"#6EEB83"} size={20} />
            </Link>
          </div>
          {menuMobile.map((row: any, key: number) => {
            if (row.title !== "Search") {
              return (
                <Link
                  key={key}
                  className=" flex flex-col items-center align-middle justify-center"
                  href={`/${row?.title?.toLowerCase()}`}
                >
                  {row?.icon}
                </Link>
              );
            } else {
              return (
                <button
                  onClick={() => {
                    setShowImportSearch(!showInputSearch);
                  }}
                  className=" flex flex-col items-center align-middle justify-center"
                >
                  {row?.icon}
                </button>
              );
            }
          })}
          <Link
            className="cursor-pointer flex flex-col items-center align-middle justify-center"
            href={`/create`}
          >
            <AddIcon color={"#6EEB83"} size={20} />
          </Link>
        </div>
      </main>
    </>
  );
}
