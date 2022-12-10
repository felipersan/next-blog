import moment from 'moment'
import Link from 'next/link'
import ThemeCard from '../../../UI/ThemeCard'

export interface CardPostProps {
  title: string
  decription: string
  createdAt: Date
  id: string
  interests: Array<string>
  owner: string
}

interface IProps {
  data: CardPostProps
}

export default function CardPost({ data }: IProps) {
  console.log(data)
  return (
    <>
      <div className="flex sm:hidden w-full  flex-col gap-5">
        <h2 className=" text-emphasis-primary font-normal text-xl font-mono">
          {data?.title}
        </h2>
        <p className="text-white text-xs font-normal font-mono text-justify">
          {data?.decription?.substring(0, 250)}
          <Link href={'/post/1'} className="text-emphasis-primary">
            {' '}
            ...ler mais
          </Link>
        </p>
        <div className="flex flex-row justify-between">
          <h3 className="text-white font-bold text-lg">
            {moment(data?.createdAt).format('DD MMM yyyy').toUpperCase()}
          </h3>
          <h3 className="text-white text-base font-normal">{data?.owner}</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {data?.interests?.map((row: string, key: number) => (
            <ThemeCard name={row} key={key} />
          ))}
        </div>
      </div>

      <div className="hidden sm:flex">
        <div className="flex flex-col gap-10">
          <p className="text-white text-3xl font-bold font-mono flex text-right ">
            {moment(data?.createdAt).format('DD').toUpperCase()}
            <br />
            {moment(data?.createdAt).format('MMM').toUpperCase()}
          </p>
          <h3 className="text-white font-mono font-normal text-base -rotate-90">
            {data?.owner}
          </h3>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-4xl font-bold text-emphasis-primary font-mono">
            {data?.title}
          </h2>
          <p className="text-white text-xl font-medium ">
            {data?.decription.substring(0, 450)}{' '}
            <Link href={`/post/${data?.id}`} className="text-emphasis-primary">
              ...ler mais
            </Link>
          </p>
          <div className="flex gap-5">
            {data?.interests?.map((row: string, key: number) => (
              <ThemeCard name={row} key={key} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
