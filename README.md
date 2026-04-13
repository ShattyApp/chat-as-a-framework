# chat-as-a-framework

Framework comum para construir experiências de chat com **uma base única** e múltiplos sabores de entrega:
- app dedicado (Expo / React Native)
- embed em produtos terceiros
- integração com stack Web3/XMTP
- distribuição por NPM

## O que já foi implementado (essência/base)

Este repositório já está com a **foundation inicial** pronta:

- Monorepo com `pnpm workspace` + `turborepo`
- Estrutura de `apps/` e `packages/`
- Configuração TypeScript base compartilhada
- Núcleo funcional inicial em `@chat-fw/chat-core`
- Adapter XMTP inicial em `@chat-fw/chat-xmtp`
- Placeholders para pacotes de UI e bindings (`chat-ui`, `chat-next`, `chat-react-native`)

## Estrutura do monorepo

```txt
apps/
  expo/                # app dedicado (placeholder da fase foundation)
  web/                 # shell Next.js (placeholder da fase foundation)
packages/
  chat-core/           # domínio de chat (models + contratos + client)
  chat-ui/             # componentes (placeholder)
  chat-xmtp/           # adapter XMTP inicial
  chat-next/           # bindings Next.js (placeholder)
  chat-react-native/   # bindings Expo/RN (placeholder)
  config/              # presets compartilhados (placeholder)
```

## Exemplo de uso da base atual

```ts
import { createChatClient } from '@chat-fw/chat-core'
import { createXmtpAdapter } from '@chat-fw/chat-xmtp'

const chat = createChatClient({
  adapter: createXmtpAdapter({ env: process.env.NEXT_PUBLIC_XMTP_ENV })
})

await chat.sendMessage({
  conversationId: 'conv-1',
  senderId: 'user-1',
  body: 'hello from base setup'
})
```

## Scripts de workspace

Na raiz do projeto:

- `pnpm build` — roda build em todos os pacotes com Turbo
- `pnpm dev` — roda `dev` em paralelo
- `pnpm typecheck` — valida tipagem nos pacotes

## Roadmap curto (próxima etapa)

1. Trocar placeholders de `apps/expo` e `apps/web` por apps reais (Expo + Next.js)
2. Evoluir `chat-core` para suportar conversas, sincronização e eventos
3. Conectar `chat-ui` ao `chat-core` com componentes mínimos de lista + composer
4. Publicar `@chat-fw/chat-core` e `@chat-fw/chat-xmtp` como alpha interno no NPM
