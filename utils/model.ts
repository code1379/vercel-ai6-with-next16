import { createOpenAI } from '@ai-sdk/openai';

export const codexTeam = createOpenAI({
    baseURL: "https://3px.zeabur.app/v1",
    apiKey: "sk-123"
})


export const codex5_3 = codexTeam.responses("gpt-5.3-codex")