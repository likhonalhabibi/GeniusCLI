import { createHuggingFace } from '@ai-sdk/huggingface';
import { streamText } from 'ai';

const huggingface = createHuggingFace({
  apiKey: process.env.HUGGINGFACE_API_KEY,
});

const model = huggingface('deepseek-ai/DeepSeek-V3-0324');

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model,
    messages,
  });

  return result.toAIStreamResponse();
}
