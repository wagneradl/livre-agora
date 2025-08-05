import Link from 'next/link'

export const metadata = {
  title: 'Modo Crise',
  description: 'Ações imediatas para momentos de crise e vontade intensa.'
}

export default function CrisePage() {
  return (
    <div className="max-w-2xl mx-auto py-8 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">🚨 Modo Crise</h1>
        <p className="text-gray-700">
          Você está passando por um momento difícil. Respire fundo. Você consegue superar isso.
        </p>
      </div>

      <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg">
        <h2 className="text-xl font-semibold text-red-800 mb-4">Ações Imediatas (próximos 5 minutos)</h2>
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">1</span>
            <p className="text-red-700">
              <strong>Respire:</strong> 4 segundos inspirando, 4 segundos segurando, 4 segundos expirando. Repita 5 vezes.
            </p>
          </div>
          <div className="flex items-start space-x-3">
            <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">2</span>
            <p className="text-red-700">
              <strong>Saia do ambiente:</strong> Vá para outro cômodo, saia de casa, tome um banho frio.
            </p>
          </div>
          <div className="flex items-start space-x-3">
            <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">3</span>
            <p className="text-red-700">
              <strong>Atividade física:</strong> 20 flexões, polichinelos, ou uma caminhada rápida.
            </p>
          </div>
          <div className="flex items-start space-x-3">
            <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">4</span>
            <p className="text-red-700">
              <strong>Ligue para alguém:</strong> Um amigo, familiar, ou linha de apoio.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
        <h2 className="text-xl font-semibold text-blue-800 mb-4">Lembre-se</h2>
        <ul className="space-y-2 text-blue-700">
          <li>• Esta sensação é temporária e vai passar</li>
          <li>• Você já superou momentos difíceis antes</li>
          <li>• Cada "não" é uma vitória e te fortalece</li>
          <li>• Você não está sozinho nesta jornada</li>
        </ul>
      </div>

      <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-lg">
        <h2 className="text-xl font-semibold text-green-800 mb-4">Após a Crise</h2>
        <p className="text-green-700 mb-4">
          Quando se sentir mais calmo, reflita sobre o que desencadeou esta crise e anote em seu plano pessoal.
        </p>
        <Link 
          href="/plano" 
          className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
        >
          Ir para Plano Pessoal
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