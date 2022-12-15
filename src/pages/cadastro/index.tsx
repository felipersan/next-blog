import Link from 'next/link'
import { useRouter } from 'next/navigation'
import MetaHead from '../../components/global/MetaHead'
import Button from '../../components/UI/Button'
import Input from '../../components/UI/Input'

export default function SignUp() {
  const router = useRouter()
  return (
    <>
      <MetaHead title="Cadastro" description="Página de cadastro do site" />
      <main className="min-w-screen min-h-screen bg-bg-secondary flex flex-col md:flex-row gap-10 md:gap-0 pb-10 md:pb-o">
        <div className="h-60 md:min-h-screen bg-[url('/images/Side-Background.png')] w-auto md:w-96 bg-bg-primary bg-no-repeat bg-center bg-cover border-solid border-b-4 md:border-r-4 border-emphasis-primary flex align-middle justify-center">
          <span className=" flex justify-center align-middle min-h-full">
            <h1 className=" text-4xl sm:text-5xl text-white flex md:-rotate-90 top-0 m-auto font-bold	font-mono">
              CADASTRO
            </h1>
          </span>
        </div>
        <div className="w-full pl-10 pr-10 md:pl-20 md:pr-20 justify-center align-middle flex flex-col">
          <h2 className=" text-2xl sm:text-3xl text-text-primary font-bold font-mono">
            Bem Vindo
          </h2>
          <h3 className="text-lg sm:text-xl text-text-secondary mt-2 font-mono">
            Se inscreva e curta os posts do nosso site !!!
          </h3>
          <form className="flex w-full flex-col gap-6 mt-10">
            <Input placeholder="Nome" typeBtn={'text'} />
            <Input placeholder="Email" typeBtn={'email'} />
            <Input placeholder="Senha" typeBtn="password" />
            <Input placeholder="Confirmação de Senha" typeBtn="password" />
            <div className="flex justify-between align-middle flex-col sm:flex-row gap-5 sm:gap-0">
              <div className="w-auto sm:w-56" id={'divButtonHome'}>
                <Button
                onClick={()=>{
                  router.push('/')
                }}
                >
                  <p className="font-bold text-lg font-mono">INSCREVER-SE</p>
                </Button>
              </div>
              <div className="flex flex-col">
                <p className="text-white text-lg sm:text-lg font-semibold font-mono">
                  Já possui uma conta ?
                </p>
                <Link
                  href="/login"
                  className="text-emphasis-primary font-bold cursor-pointer font-mono text-base"
                >
                  FAZER LOGIN
                </Link>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}

SignUp.getInitialProps = async (ctx: any) => {
  return { stars: 0 }
}
