import CardPost, { CardPostProps } from '../../components/pages/home/CardPost'

const post: Array<CardPostProps> = [
  {
    createdAt: new Date(),
    decription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis condimentum auctor. Vivamus scelerisque risus lacus, eget condimentum mauris pellentesque aliquet. Quisque euismod, felis at consectetur hendrerit, magna augue congue arcu, ut sagittis diam dolor vitae libero. Nam egestas vel erat eu imperdiet. Nunc dapibus viverra enim, vel lobortis nisl rutrum in. Curabitur efficitur, tortor in iaculis consequat, ipsum ipsum varius enim, ut placerat odio tortor eget lorem. Aenean tempor nulla eget volutpat pellentesque. Donec nec nunc lacinia, interdum nisl at, vehicu',
    id: '1',
    interests: ['programação', 'nextJs', 'RectJs'],
    title: 'As vantagens de utilizar o next aliado ao tailwind css',
    owner: '@felipersan'
  },
  {
    createdAt: new Date(),
    decription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis condimentum auctor. Vivamus scelerisque risus lacus, eget condimentum mauris pellentesque aliquet. Quisque euismod, felis at consectetur hendrerit, magna augue congue arcu, ut sagittis diam dolor vitae libero. Nam egestas vel erat eu imperdiet. Nunc dapibus viverra enim, vel lobortis nisl rutrum in. Curabitur efficitur, tortor in iaculis consequat, ipsum ipsum varius enim, ut placerat odio tortor eget lorem. Aenean tempor nulla eget volutpat pellentesque. Donec nec nunc lacinia, interdum nisl at, vehicu',
    id: '1',
    interests: ['programação', 'nextJs', 'RectJs'],
    title: 'As vantagens de utilizar o next aliado ao tailwind css',
    owner: '@felipersan'
  },
  {
    createdAt: new Date(),
    decription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis condimentum auctor. Vivamus scelerisque risus lacus, eget condimentum mauris pellentesque aliquet. Quisque euismod, felis at consectetur hendrerit, magna augue congue arcu, ut sagittis diam dolor vitae libero. Nam egestas vel erat eu imperdiet. Nunc dapibus viverra enim, vel lobortis nisl rutrum in. Curabitur efficitur, tortor in iaculis consequat, ipsum ipsum varius enim, ut placerat odio tortor eget lorem. Aenean tempor nulla eget volutpat pellentesque. Donec nec nunc lacinia, interdum nisl at, vehicu',
    id: '1',
    interests: ['programação', 'nextJs', 'RectJs'],
    title: 'As vantagens de utilizar o next aliado ao tailwind css',
    owner: '@felipersan'
  }
]

export default function Home() {
  return (
    <div className="w-full pl-7 pr-7 pb-32 pt-16 min-h-screen sm:p-28">
      <div className="w-full flex justify-center">
        <p className="text-white text-2xl font-bold flex flex-col gap-2 align-middle justify-center font-mono">
          Mais Vistos <div className="w-20 h-1 bg-emphasis-primary"></div>
        </p>
      </div>
      <div className="mt-10 sm:flex sm:flex-col sm:gap-28">
        {post.map((row: CardPostProps, index: number) => (
          <>
            <CardPost data={row} key={row.id} />
            {index < post.length - 1 && (
              <div className="sm:hidden w-full h-px bg-emphasis-primary mt-10 mb-10" />
            )}
          </>
        ))}
      </div>
    </div>
  )
}
