export type ChatMessage = {
  id: string
  conversationId: string
  senderId: string
  body: string
  sentAt: string
}

export interface ChatAdapter {
  sendMessage(input: {
    conversationId: string
    senderId: string
    body: string
  }): Promise<ChatMessage>
}

export interface ChatClient {
  sendMessage(input: {
    conversationId: string
    senderId: string
    body: string
  }): Promise<ChatMessage>
}

export function createChatClient(config: { adapter: ChatAdapter }): ChatClient {
  return {
    sendMessage(input) {
      return config.adapter.sendMessage(input)
    }
  }
}
