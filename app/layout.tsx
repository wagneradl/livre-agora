import './globals.css'
import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import Link from 'next/link'
import SWRegister from './sw-register'

const inter = Inter({ subsets: ['latin'], weight: ['400','500','700'], variable: '--font-inter' })
const manrope = Manrope({ subsets: ['latin'], weight: ['400','600','800'], variable: '--font-manrope' })

export const metadata: Metadata = {
  metadataBase: new URL('https://livre-agora.vercel.app'),
  title: { default: 'Livre Agora', template: '%s · Livre Agora' },
  description: 'Ações imediatas e plano diário simples para romper com pornografia e vícios digitais. 100% anônimo.',
  icons: { icon: '/icons/icon-192x192.png', apple: '/icons/icon-180x180.png' },
  manifest: '/manifest.webmanifest',
  openGraph: {
    title: 'Livre Agora',
    description: '24h limpo: comece agora.',
    type: 'website',
    url: 'https://livre-agora.vercel.app',
    images: [{ url: '/api/og?streak=24h', width: 1200, height: 630 }]
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${manrope.variable}`}>
      <body className="min-h-screen flex flex-col bg-gradient-to-b from-teal-100 to-ocean-900/5">
        <a href="#conteudo" className="sr-only focus:not-sr-only focus:absolute left-2 top-2 bg-white px-3 py-1 rounded">
          Pular para o conteúdo
        </a>
        <header className="w-full border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50">
          <nav className="max-w-5xl mx-auto flex items-center justify-between p-4">
            <Link href="/" className="font-extrabold text-primary-700 tracking-tight">Livre Agora</Link>
            <div className="flex gap-4 text-sm">
              <Link href="/crise" aria-label="Ir para modo crise">Crise</Link>
              <Link href="/plano" aria-label="Ir para plano pessoal">Plano</Link>
              <Link href="/recursos" aria-label="Ver recursos">Recursos</Link>
            </div>
          </nav>
        </header>
        <main id="conteudo" className="flex-1 max-w-5xl mx-auto w-full p-4">{children}</main>
        <footer className="p-4 text-center text-xs text-gray-500">
          Privado e anônimo • <Link className="underline" href="/privacidade">Privacidade</Link> • <Link className="underline" href="/sobre">Sobre</Link>
        </footer>
        <SWRegister />
      </body>
    </html>
  )
}