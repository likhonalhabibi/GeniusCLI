'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Message } from 'ai';

export function TaskLogViewer({ messages }: { messages: Message[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Task & Log Viewer</CardTitle>
        <CardDescription>
          View the conversation history and task logs.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {messages.map((m, i) => (
          <div key={i} className="flex flex-col gap-1">
            <span className="font-bold">{m.role === 'user' ? 'You' : 'AI'}</span>
            <pre className="whitespace-pre-wrap break-words font-sans">
              {m.content}
            </pre>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
