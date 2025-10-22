import { createGeminiProvider } from 'ai-sdk-provider-gemini-cli';
import dotenv from 'dotenv';

dotenv.config();

export const gemini = createGeminiProvider({
  authType: 'api-key',
  apiKey: process.env.GEMINI_API_KEY,
});
