'use client';

import { useChat } from '@ai-sdk/react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { TaskLogViewer } from '@/components/task-log-viewer';

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit, reload } = useChat({
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
        <div className="flex gap-4">
          <Button type="submit">Generate</Button>
          <Button type="button" variant="outline" onClick={() => reload()}>
            New Chat
          </Button>
        </div>
      </form>
    </div>
  );
}
