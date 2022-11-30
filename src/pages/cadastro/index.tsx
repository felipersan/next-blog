import MetaHead from "../../components/global/MetaHead";

export default function SignUp() {
  return (
    <>
      <MetaHead title="Cadastro" description="Página de cadastro do site" />
      <main className="min-w-screen bg-bg-secondary">
        <div className="sideBarLeft min-h-screen bg-[url('/images/Side-Background.png')] w-96 bg-bg-primary bg-no-repeat bg-center bg-cover border-solid border-r-4 border-emphasis-primary flex align-middle justify-center">
          <span className=" flex justify-center align-middle min-h-full">
            <h1 className="text-6xl text-white flex -rotate-90  top-0 m-auto font-bold	">Cadastro</h1>
          </span>
        </div>
      </main>
    </>
  );
}
