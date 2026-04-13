# chat-as-a-framework

A common framework for building chat experiences with **one shared base** and multiple delivery flavors:
- dedicated app (Expo / React Native)
- embed in third-party products
- integration with Web3/XMTP stack
- distribution through NPM

## What has already been implemented (core/base)

This repository already has the initial **foundation** in place:

- Monorepo with `pnpm workspace` + `turborepo`
- `apps/` and `packages/` structure
- Shared base TypeScript configuration
- Initial functional core in `@chat-fw/chat-core`
- Initial XMTP adapter in `@chat-fw/chat-xmtp`
- Placeholders for UI packages and bindings (`chat-ui`, `chat-next`, `chat-react-native`)

## Monorepo structure

```txt
apps/
  expo/                # dedicated app (foundation-phase placeholder)
  web/                 # Next.js shell (foundation-phase placeholder)
packages/
  chat-core/           # chat domain (models + contracts + client)
  chat-ui/             # components (placeholder)
  chat-xmtp/           # initial XMTP adapter
  chat-next/           # Next.js bindings (placeholder)
  chat-react-native/   # Expo/RN bindings (placeholder)
  config/              # shared presets (placeholder)
```

## Current base usage example

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

## Workspace scripts

At the project root:

- `pnpm build` — runs build for all packages with Turbo
- `pnpm dev` — runs `dev` in parallel
- `pnpm typecheck` — validates package typing

## Tasks and next steps

Task items were moved to [`to-do.md`](./to-do.md).
