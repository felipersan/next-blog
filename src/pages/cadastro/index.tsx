import MetaHead from "../../components/global/MetaHead";
import Input from "../../components/UI/Input";

export default function SignUp() {
  return (
    <>
      <MetaHead title="Cadastro" description="Página de cadastro do site" />
      <main className="min-w-screen bg-bg-secondary flex">
        <div className="sideBarLeft min-h-screen bg-[url('/images/Side-Background.png')] w-96 bg-bg-primary bg-no-repeat bg-center bg-cover border-solid border-r-4 border-emphasis-primary flex align-middle justify-center">
          <span className=" flex justify-center align-middle min-h-full">
            <h1 className="text-6xl text-white flex -rotate-90  top-0 m-auto font-bold	">
              Cadastro
            </h1>
          </span>
        </div>
        <div className="w-full pl-20 pr-20 justify-center align-middle flex flex-col">
          <h2 className="text-5xl text-text-primary font-bold">Bem Vindo</h2>
          <h3 className="text-3xl text-text-secondary mt-2">Se inscreva e curta os posts do nosso site !!!</h3>
          <form className="flex w-full flex-col gap-6 mt-10">
            <Input placeholder="Nome" typeBtn={"text"} />
            <Input placeholder="Email" typeBtn={"email"} />
            <Input placeholder="Senha" typeBtn="password" />
            <Input placeholder="Confirmação de Senha" typeBtn="password" />
          </form>
        </div>
      </main>
    </>
  );
}
