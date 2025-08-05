import Link from 'next/link'

export const metadata = {
  title: 'Recursos',
  description: 'Ferramentas, técnicas e recursos para apoiar sua jornada de recuperação.'
}

export default function RecursosPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-primary-700 mb-4">🛠️ Recursos</h1>
        <p className="text-gray-700">
          Ferramentas e técnicas comprovadas para apoiar sua jornada de recuperação.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">🧠 Técnicas Mentais</h3>
          <ul className="space-y-3 text-gray-700">
            <li>
              <strong>Urge Surfing:</strong> Observe a vontade como uma onda que cresce e diminui naturalmente
            </li>
            <li>
              <strong>Técnica 5-4-3-2-1:</strong> 5 coisas que vê, 4 que toca, 3 que ouve, 2 que cheira, 1 que saboreia
            </li>
            <li>
              <strong>Respiração 4-7-8:</strong> Inspire 4s, segure 7s, expire 8s. Repita 4 vezes
            </li>
            <li>
              <strong>Reframe cognitivo:</strong> Questione pensamentos automáticos negativos
            </li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">🛡️ Bloqueadores Digitais</h3>
          <ul className="space-y-3 text-gray-700">
            <li>
              <strong>DNS:</strong> CleanBrowsing, OpenDNS, Cloudflare for Families
            </li>
            <li>
              <strong>Roteador:</strong> Circle Home Plus, Disney Circle
            </li>
            <li>
              <strong>Celular:</strong> Qustodio, Screen Time (iOS), Digital Wellbeing (Android)
            </li>
            <li>
              <strong>Computador:</strong> Cold Turkey, FocusMe, K9 Web Protection
            </li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">💪 Atividades Físicas</h3>
          <ul className="space-y-3 text-gray-700">
            <li>
              <strong>Exercícios rápidos:</strong> Flexões, polichinelos, burpees (2-5 min)
            </li>
            <li>
              <strong>Caminhada:</strong> 10-20 minutos ao ar livre
            </li>
            <li>
              <strong>Banho frio:</strong> 30 segundos a 2 minutos
            </li>
            <li>
              <strong>Yoga/alongamento:</strong> 5-15 minutos de movimento consciente
            </li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">📚 Educação</h3>
          <ul className="space-y-3 text-gray-700">
            <li>
              <strong>Livros:</strong> "Your Brain on Porn" (Gary Wilson)
            </li>
            <li>
              <strong>Podcasts:</strong> Porn Free Radio, Recovery Elevator
            </li>
            <li>
              <strong>Documentários:</strong> "The Great Porn Experiment" (TEDx)
            </li>
            <li>
              <strong>Apps:</strong> Insight Timer (meditação), Headspace
            </li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">🤝 Apoio Social</h3>
          <ul className="space-y-3 text-gray-700">
            <li>
              <strong>Accountability partner:</strong> Amigo ou familiar de confiança
            </li>
            <li>
              <strong>Grupos online:</strong> NoFap, PornFree (Reddit)
            </li>
            <li>
              <strong>Terapia:</strong> Psicólogo especializado em vícios
            </li>
            <li>
              <strong>Grupos presenciais:</strong> SLAA, SAA (quando disponíveis)
            </li>
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">⚡ Ações de Emergência</h3>
          <ul className="space-y-3 text-gray-700">
            <li>
              <strong>Sair de casa:</strong> Caminhada, café, biblioteca
            </li>
            <li>
              <strong>Ligar para alguém:</strong> Família, amigo, linha de apoio
            </li>
            <li>
              <strong>Atividade manual:</strong> Lavar louça, organizar, limpar
            </li>
            <li>
              <strong>Criar arte:</strong> Desenhar, escrever, tocar instrumento
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-800 mb-3">💡 Lembre-se</h3>
        <p className="text-blue-700">
          A recuperação é uma jornada, não um destino. Seja paciente consigo mesmo e celebre cada pequena vitória. 
          Você não precisa ser perfeito, apenas consistente.
        </p>
      </div>

      <div className="text-center space-x-6">
        <Link 
          href="/crise" 
          className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
        >
          🚨 Modo Crise
        </Link>
        <Link 
          href="/plano" 
          className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
        >
          📋 Meu Plano
        </Link>
      </div>

      <div className="text-center">
        <Link 
          href="/" 
          className="text-primary-600 hover:text-primary-700 underline"
        >
          ← Voltar ao início
        </Link>
      </div>
    </div>
  )
}