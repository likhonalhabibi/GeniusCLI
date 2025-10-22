import { createGeminiProvider } from 'ai-sdk-provider-gemini-cli';
import { generateText } from 'ai';
import dotenv from 'dotenv';

dotenv.config();

const gemini = createGeminiProvider({
  authType: 'api-key',
  apiKey: process.env.GEMINI_API_KEY,
});

async function main() {
  const result = await generateText({
    model: gemini('gemini-1.5-flash'),
    prompt: 'Write a vegetarian lasagna recipe for 4 people.',
  });
  console.log(result.content[0].text);
}

main().catch(console.error);
