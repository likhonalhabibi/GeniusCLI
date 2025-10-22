import { google } from '@/lib/gemini';
import { streamText } from 'ai';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: google('models/gemini-1.5-flash-latest'),
    messages,
  });

  return result.toTextStreamResponse();
}
