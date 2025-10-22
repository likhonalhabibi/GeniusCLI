import { gemini } from '@/lib/gemini';
import { StreamingTextResponse, streamText } from 'ai';

export async function POST(req: Request) {
  const { prompt } = await req.json();

  const result = await streamText({
    model: gemini('gemini-1.5-flash'),
    prompt,
  });

  return new StreamingTextResponse(result.toAIStream());
}
