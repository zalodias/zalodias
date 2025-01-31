import { ChevronRight } from 'lucide-react';

interface NotionBlock {
  id: string;
  type: string;
  children?: NotionBlock[];
  [key: string]: any;
}

interface NotionBlockProps {
  block: NotionBlock;
}

const renderRichText = (richText: any[]) => {
  return richText.map(({ annotations, text }: any) => {
    const { bold, italic, strikethrough, underline, code } = annotations;

    const annotationClassNames = [
      bold ? 'font-bold' : null,
      italic ? 'italic' : null,
      strikethrough ? 'line-through' : null,
      underline ? 'underline' : null,
      code
        ? 'font-mono text-body-medium-default text-foreground-brand-default bg-background-neutral-faded px-2 py-1 rounded-md'
        : null,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <>
        {text.link ? (
          <a
            key={text.link.url}
            href={text.link.url}
            className="text-body-large-subtle text-foreground-brand-default hover:underline hover:underline-offset-2"
            target="_blank"
          >
            {text.content}
          </a>
        ) : (
          <span className={annotationClassNames || undefined}>
            {text.content}
          </span>
        )}
      </>
    );
  });
};

export function NotionBlock({ block }: NotionBlockProps) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p
          key={block.id}
          className="text-body-large-default text-foreground-neutral-subtle"
        >
          {renderRichText(block.paragraph.rich_text)}
        </p>
      );
    case 'heading_1':
      return (
        <h1
          key={block.id}
          className="mb-4 mt-10 text-title-large-strong text-foreground-neutral-default"
        >
          {renderRichText(block.heading_1.rich_text)}
        </h1>
      );
    case 'heading_2':
      return (
        <h2
          key={block.id}
          className="mb-1 mt-8 text-title-medium-strong text-foreground-neutral-default"
        >
          {renderRichText(block.heading_2.rich_text)}
        </h2>
      );
    case 'heading_3':
      return (
        <h3
          key={block.id}
          className="mb-1 mt-8 text-title-small-strong text-foreground-neutral-default"
        >
          {renderRichText(block.heading_3.rich_text)}
        </h3>
      );
    case 'image':
      const src =
        block.image.type === 'external'
          ? block.image.external.url
          : block.image.file.url;
      return (
        <img
          key={block.id}
          src={src}
          loading="lazy"
          decoding="async"
          alt={
            block.image.caption ? block.image.caption[0]?.text.content : 'Image'
          }
          className="mt-6 rounded-xl"
        />
      );
    case 'video':
      const videoSrc =
        block.video.type === 'file'
          ? block.video.file.url
          : block.video.external.url;
      return (
        <video
          key={block.id}
          controls
          className="mt-6 rounded-xl"
          preload="none"
          autoPlay={true}
          loop={true}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      );
    case 'bulleted_list_item':
      return (
        <li
          key={block.id}
          className="ms-3 list-disc text-body-large-default text-foreground-neutral-subtle"
        >
          {renderRichText(block.bulleted_list_item.rich_text)}
        </li>
      );
    case 'numbered_list_item':
      return (
        <li
          key={block.id}
          className="ms-3 list-decimal text-body-large-default text-foreground-neutral-subtle"
        >
          {renderRichText(block.numbered_list_item.rich_text)}
        </li>
      );
    case 'callout':
      return (
        <div
          key={block.id}
          className="my-3 flex gap-2 rounded-lg bg-background-neutral-faded px-5 py-4"
        >
          {block.callout.icon && <span>{block.callout.icon.emoji}</span>}
          <div className="flex-grow">
            {renderRichText(block.callout.rich_text)}
          </div>
        </div>
      );
    case 'divider':
      return <hr key={block.id} className="my-2 border-border-neutral-faded" />;
    case 'quote':
      return (
        <blockquote
          key={block.id}
          className="my-3 border-l-2 border-l-foreground-neutral-default pl-4 font-serif italic text-foreground-neutral-default"
        >
          {renderRichText(block.quote.rich_text)}
        </blockquote>
      );
    case 'toggle':
      return (
        <details className="group mt-1 first-of-type:mt-2">
          <summary className="mb-1 flex cursor-pointer items-center gap-2 text-body-large-subtle">
            <div className="rounded-md p-0.5 transition group-open:rotate-90 group-hover:bg-background-neutral-subtle">
              <ChevronRight size={16} />
            </div>
            <span>{renderRichText(block.toggle.rich_text)}</span>
          </summary>
          <div className="ms-7">
            {block.children?.map((child: NotionBlock) => (
              <NotionBlock key={child.id} block={child} />
            ))}
          </div>
        </details>
      );
    default:
      if (process.env.NODE_ENV !== 'production') {
        console.log('Unsupported type ' + block?.value?.type);
      }
      return <div />;
  }
}
