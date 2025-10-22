import { createGeminiProvider } from 'ai-sdk-provider-gemini-cli';
import { generateText } from 'ai';
import dotenv from 'dotenv';

dotenv.config();

const gemini = createGeminiProvider({
  authType: 'api-key',
  apiKey: process.env.GEMINI_API_KEY,
});

export async function generate(prompt) {
  const result = await generateText({
    model: gemini('gemini-1.5-flash'),
    prompt: prompt,
  });
  return result.content[0].text;
}
