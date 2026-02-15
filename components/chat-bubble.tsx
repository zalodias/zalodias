import { NotionBlock } from '@/components/notion-block';

export interface Message {
  variant: 'left' | 'right';
  block: NotionBlock;
}

interface ChatBubbleProps {
  message: Message;
}

export function ChatBubble({ message }: ChatBubbleProps) {
  const isLeft = message.variant === 'left';

  return (
    <div className={`flex ${isLeft ? 'justify-start' : 'justify-end'}`}>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
          isLeft
            ? 'bg-background-neutral-faded text-foreground-neutral-default'
            : 'bg-background-neutral-subtle text-foreground-neutral-default'
        } [&_blockquote]:m-0 [&_blockquote]:border-0 [&_blockquote]:p-0 [&_blockquote]:font-sans [&_blockquote]:not-italic`}
      >
        <NotionBlock block={message.block} />
      </div>
    </div>
  );
}
