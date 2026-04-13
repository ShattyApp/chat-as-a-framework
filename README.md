# chat-as-a-framework

Framework comum para construir experiências de chat com **uma base única** e múltiplos "sabores" de entrega:
- app dedicado (Expo / React Native)
- embed em produtos terceiros (iFood, Uber, banking, etc.)
- integração com stack Web3/XMTP (caso do **Shatty**)
- distribuição via **NPM**, para onboarding painless de qualquer third-party

---

## Visão

A ideia é parar de reimplementar chat do zero em cada produto.

Esse repo vai ser o núcleo de UI + SDK + adapters para providers de mensageria, com foco em:
- velocidade de integração
- consistência visual/comportamental
- extensibilidade por plugins
- suporte first-class para React/Expo e Web (Next.js)

---

## Stack inicial (MVP)

### Frontend base
- **React 19** — base de componentes
- **TypeScript** — tipagem forte pra SDK pública e DX melhor
- **Expo (React Native)** — app cross-platform (iOS/Android)
- **React Native Web** — reaproveitar componentes no web quando fizer sentido
- **Next.js (App Router)** — host web/SSR e deploy fácil na Vercel

### Build, pacote e distribuição
- **pnpm** (workspace monorepo) — gerenciamento mais rápido e dedupe eficiente
- **Turborepo** — orquestração de build/test/lint entre pacotes
- **tsup** (ou **unbuild**) — build de libs para ESM/CJS + d.ts
- **Changesets** — versionamento e release para NPM

### Estado, dados e rede
- **TanStack Query** — cache/fetch robusto para mensagens e presença
- **Zustand** — estado local leve (UI/session/transient state)
- **Zod** — validação de schemas de eventos/payloads

### Chat realtime e protocolo
- **XMTP SDK** (adapter oficial para Shatty)
- Interface de adapters para outros providers (ex.: Firebase, Stream, Socket.IO, HTTP polling)
- **viem** (quando necessário para camadas EVM/Web3 auxiliares)

### UI/Design System
- **NativeWind + Tailwind** (tokens compartilhados RN/Web)
- **class-variance-authority (CVA)** — variantes previsíveis de componentes
- **Radix UI** (camada web específica quando necessário)

### Qualidade
- **Vitest** + **Testing Library** (web + native)
- **ESLint** + **Prettier**
- **Husky** + **lint-staged**

---

## Estrutura proposta do monorepo

```txt
apps/
  expo/                # app dedicado (Shatty e derivados)
  web/                 # shell Next.js para Vercel
packages/
  chat-core/           # domínio de chat (models, events, adapters, store)
  chat-ui/             # componentes headless + themed
  chat-xmtp/           # implementação de adapter XMTP
  chat-next/           # bindings/helpers para Next.js
  chat-react-native/   # bindings/helpers para Expo/RN
  config/              # presets de eslint, tsconfig, tailwind
```

---

## Princípios de arquitetura

1. **Headless first**: lógica separada de UI, permitindo customização total.
2. **Provider agnostic**: XMTP é o primeiro adapter, não o único.
3. **Offline-tolerant**: fila local e reconciliação de mensagens.
4. **Embeddable by default**: qualquer terceiro integra por NPM sem cirurgia no app.
5. **Secure by design**: envs e chaves fora do código-fonte (`.env.local` em apps).

---

## Roadmap (fase 0 → fase 1)

### Fase 0 — Foundation
- [ ] Setup monorepo (pnpm + turbo)
- [ ] Config base TypeScript/ESLint/Prettier
- [ ] Publicar pacote `@chat-fw/chat-core` em alpha interno

### Fase 1 — Chat funcional
- [ ] `chat-core` com modelos de mensagem/conversa/estado
- [ ] Adapter XMTP (`chat-xmtp`) com send/receive básico
- [ ] UI mínima (`chat-ui`) com lista de mensagens + input composer
- [ ] App Expo demo + Web Next demo deployável na Vercel

---

## Meta de DX para third-parties

A integração ideal deve parecer isso:

```ts
import { createChatClient } from '@chat-fw/chat-core'
import { createXmtpAdapter } from '@chat-fw/chat-xmtp'

const chat = createChatClient({
  adapter: createXmtpAdapter({ env: process.env.NEXT_PUBLIC_XMTP_ENV })
})
```

Se uma equipe precisa de 2 sprints só pra “plugar chat”, falhamos.

---

## Próximos passos imediatos

1. Inicializar monorepo com `apps/` e `packages/`
2. Criar `chat-core` com contratos/interfaces
3. Subir demo simples em Expo + Next na Vercel
4. Configurar pipeline de release para NPM

