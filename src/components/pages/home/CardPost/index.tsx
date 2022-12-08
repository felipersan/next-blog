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
    <div className="w-full flex flex-col gap-5">
      <h2 className=" text-emphasis-primary font-normal text-2xl font-mono">
        {data?.title}
      </h2>
      <p className="text-white text-1xl font-normal font-mono text-justify">
        {data?.decription?.substring(0, 350)}
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
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
        {data?.interests?.map((row: string, key: number) => (
          <ThemeCard name={row} key={key} />
        ))}
      </div>
    </div>
  )
}
