export const DEFAULT_CHAT_MODEL: string = "chat-model";

export type ChatModel = {
  id: string;
  name: string;
  description: string;
};

export const chatModels: ChatModel[] = [
  {
    id: "chat-model",
    name: "LongCat Flash Chat",
    description: "LongCat-Flash-Chat is a high-throughput MoE chat model (128k context) optimized for agentic tasks.",
  },
];
