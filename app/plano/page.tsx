import Link from 'next/link'

export const metadata = {
  title: 'Plano Pessoal',
  description: 'Crie e acompanhe seu plano diário de recuperação.'
}

export default function PlanoPage() {
  return (
    <div className="max-w-3xl mx-auto py-8 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-primary-700 mb-4">📋 Plano Pessoal</h1>
        <p className="text-gray-700">
          Um plano diário simples para manter o foco e construir novos hábitos.
        </p>
      </div>

      <div className="bg-primary-50 border-l-4 border-primary-400 p-6 rounded-lg">
        <h2 className="text-xl font-semibold text-primary-800 mb-4">🎯 Seu Objetivo Diário</h2>
        <p className="text-primary-700 text-lg font-medium">
          Mais 1 dia limpo. Simples assim.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">🌅 Rotina Matinal</h3>
          <div className="space-y-3">
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="rounded border-gray-300" />
              <span className="text-gray-700">Acordar no horário planejado</span>
            </label>
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="rounded border-gray-300" />
              <span className="text-gray-700">5 minutos de respiração/meditação</span>
            </label>
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="rounded border-gray-300" />
              <span className="text-gray-700">Exercício físico (20+ min)</span>
            </label>
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="rounded border-gray-300" />
              <span className="text-gray-700">Banho frio/gelado</span>
            </label>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">🛡️ Proteções Diárias</h3>
          <div className="space-y-3">
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="rounded border-gray-300" />
              <span className="text-gray-700">Bloqueadores ativos</span>
            </label>
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="rounded border-gray-300" />
              <span className="text-gray-700">Celular fora do quarto</span>
            </label>
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="rounded border-gray-300" />
              <span className="text-gray-700">Evitar gatilhos conhecidos</span>
            </label>
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="rounded border-gray-300" />
              <span className="text-gray-700">Accountability check-in</span>
            </label>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">🎨 Atividades Positivas</h3>
          <div className="space-y-3">
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="rounded border-gray-300" />
              <span className="text-gray-700">Leitura (30+ min)</span>
            </label>
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="rounded border-gray-300" />
              <span className="text-gray-700">Hobby/projeto pessoal</span>
            </label>
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="rounded border-gray-300" />
              <span className="text-gray-700">Socializar (família/amigos)</span>
            </label>
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="rounded border-gray-300" />
              <span className="text-gray-700">Tempo na natureza</span>
            </label>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">🌙 Rotina Noturna</h3>
          <div className="space-y-3">
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="rounded border-gray-300" />
              <span className="text-gray-700">Telas off 1h antes de dormir</span>
            </label>
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="rounded border-gray-300" />
              <span className="text-gray-700">Reflexão do dia (3 gratidões)</span>
            </label>
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="rounded border-gray-300" />
              <span className="text-gray-700">Preparar o dia seguinte</span>
            </label>
            <label className="flex items-center space-x-3">
              <input type="checkbox" className="rounded border-gray-300" />
              <span className="text-gray-700">Dormir no horário planejado</span>
            </label>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-yellow-800 mb-3">💡 Dica</h3>
        <p className="text-yellow-700">
          Não tente fazer tudo de uma vez. Escolha 2-3 itens para focar esta semana. 
          Consistência é mais importante que perfeição.
        </p>
      </div>

      <div className="flex justify-between items-center">
        <Link 
          href="/recursos" 
          className="text-primary-600 hover:text-primary-700 underline"
        >
          Ver Recursos →
        </Link>
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