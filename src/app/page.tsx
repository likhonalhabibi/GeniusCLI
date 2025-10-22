'use client';

import { useChat } from 'ai/react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { TaskLogViewer } from '@/components/task-log-viewer';

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/generate',
  });

  return (
    <div className="flex flex-col gap-4">
      <TaskLogViewer messages={messages} />

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Textarea
          value={input}
          onChange={handleInputChange}
          placeholder="Enter your prompt here..."
          className="bg-gray-800 text-white"
        />
        <Button type="submit">Generate</Button>
      </form>
    </div>
  );
}
