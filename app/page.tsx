import Link from 'next/link'

export default function Home() {
  return (
    <section className="grid place-items-center gap-8 text-center py-12">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Livre Agora</h1>
      <p className="max-w-2xl text-gray-700">
        Um app anônimo para ações imediatas e um plano diário simples. Sem login. Sem coleta de dados.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-xl">
        <Link className="px-6 py-5 rounded-2xl bg-primary-600 text-white font-semibold focus-visible:outline-offset-4"
              href="/crise" aria-label="Entrar no modo crise agora">
          Em crise agora
        </Link>
        <Link className="px-6 py-5 rounded-2xl bg-white ring-2 ring-primary-200 text-primary-800 font-semibold focus-visible:outline-offset-4"
              href="/plano" aria-label="Criar ou ver plano pessoal">
          Plano pessoal
        </Link>
      </div>
    </section>
  )
}