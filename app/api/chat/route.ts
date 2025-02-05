import { streamText } from 'ai';
import { createOllama } from 'ollama-ai-provider';

export const maxDuration = 30;

const ollama = createOllama({
  // optional settings, e.g.
  baseURL: 'http://127.0.0.1:11434/api',
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    // model: openai('gpt-4o'),
    // model: ollama('deepseek-r1:latest'),
    model: ollama('llama3.2:latest'),
    messages,
  });

  return result.toDataStreamResponse();
}