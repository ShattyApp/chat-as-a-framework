import type { ChatAdapter, ChatMessage } from '@chat-fw/chat-core'

export type XmtpAdapterConfig = {
  env?: string
}

export function createXmtpAdapter(config: XmtpAdapterConfig = {}): ChatAdapter {
  return {
    async sendMessage(input: {
      conversationId: string
      senderId: string
      body: string
    }): Promise<ChatMessage> {
      return {
        id: crypto.randomUUID(),
        conversationId: input.conversationId,
        senderId: input.senderId,
        body: `[xmtp:${config.env ?? 'dev'}] ${input.body}`,
        sentAt: new Date().toISOString()
      }
    }
  }
}
