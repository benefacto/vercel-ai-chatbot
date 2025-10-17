import { gateway } from "@ai-sdk/gateway";
import { customProvider } from "ai";
import { isTestEnvironment } from "../constants";

export const myProvider = isTestEnvironment
  ? (() => {
      const {
        artifactModel,
        chatModel,
        reasoningModel,
        titleModel,
      } = require("./models.mock");
      return customProvider({
        languageModels: {
          "chat-model": chatModel,
          "chat-model-reasoning": reasoningModel,
          "title-model": titleModel,
          "artifact-model": artifactModel,
        },
      });
    })()
  : customProvider({
      languageModels: {
        "chat-model": gateway.languageModel("meituan/longcat-flash-chat"),
        "chat-model-reasoning": gateway.languageModel(
          "meituan/longcat-flash-chat"
        ),
        "title-model": gateway.languageModel("meituan/longcat-flash-chat"),
        "artifact-model": gateway.languageModel("meituan/longcat-flash-chat"),
      },
    });
