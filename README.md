# Livre Agora

MVP anônimo para ajudar pessoas a romper com pornografia e vícios digitais.

## Stack
Next.js (App Router) + TypeScript + TailwindCSS + PWA (offline para /crise).

## Rodando localmente
```bash
npm i
npm run dev
```

## Deploy (Vercel)
1. Crie um repositório no GitHub e suba este projeto.
2. Conecte na Vercel e selecione o repositório.
3. Build command: `next build`. Output: `.next` (padrão).
4. Domínio provisório: vercel.app.

## Analytics
Hook preparado. Para ativar depois, injete o script do Plausible/Umami em `app/layout.tsx` sob ambiente controlado.

## PWA
- `public/manifest.webmanifest`
- `public/sw.js` (cache básico; garante offline de /crise e assets).

## A11y
Foco visível, aria em botões e links essenciais, navegação por teclado.

## Segurança
CSP restrita em `next.config.mjs`. Sem PII. Armazenamento local.

## Licença
MIT

### Offline do /crise
- O modo offline de **/crise** funciona **após a primeira visita online**, quando o service worker faz o precache.
- (Backlog) Migrar para Workbox/`next-pwa` para garantir **precache explícito dos bundles da rota** sem depender da primeira navegação.