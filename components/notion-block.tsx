import React from 'react';

import { HeadingAnchor } from '@/components/heading-anchor';
import { VideoPlayer } from '@/components/video-player';
import { generateSlug } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';

export interface NotionBlock {
  id: string;
  type: string;
  children?: NotionBlock[];
  [key: string]: any;
}

interface NotionBlockProps {
  block: NotionBlock;
}

const renderRichText = (richText: any[]) => {
  return richText.map(({ annotations, text }: any, index: number) => {
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
      <React.Fragment key={`${text.content}-${index}`}>
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
      </React.Fragment>
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
      const heading1Id = generateSlug(block.heading_1.rich_text[0].plain_text);
      return (
        <h1
          id={heading1Id}
          key={block.id}
          className="group text-title-large-strong text-foreground-neutral-default relative mt-10 mb-4 scroll-mt-32 md:scroll-mt-8"
        >
          <HeadingAnchor id={heading1Id} />
          {renderRichText(block.heading_1.rich_text)}
        </h1>
      );
    case 'heading_2':
      const heading2Id = generateSlug(block.heading_2.rich_text[0].plain_text);
      return (
        <h2
          id={heading2Id}
          key={block.id}
          className="group text-title-medium-strong text-foreground-neutral-default relative mt-8 mb-1 scroll-mt-32 md:scroll-mt-8"
        >
          <HeadingAnchor id={heading2Id} />
          {renderRichText(block.heading_2.rich_text)}
        </h2>
      );
    case 'heading_3':
      const heading3Id = generateSlug(block.heading_3.rich_text[0].plain_text);
      return (
        <h3
          id={heading3Id}
          key={block.id}
          className="group text-title-small-strong text-foreground-neutral-default relative mt-8 mb-1 scroll-mt-32 md:scroll-mt-8"
        >
          <HeadingAnchor id={heading3Id} />
          {renderRichText(block.heading_3.rich_text)}
        </h3>
      );
    case 'image':
      const src =
        block.image.type === 'external'
          ? block.image.external.url
          : block.image.file.url;
      return (
        <figure key={block.id} className="mt-6 mb-6 grid items-center gap-3">
          <img
            src={src}
            loading="lazy"
            decoding="async"
            alt={
              block.image.caption
                ? block.image.caption[0]?.text.content
                : 'Image'
            }
            className="rounded-xl"
          />
          {block.image.caption && block.image.caption[0]?.text.content && (
            <figcaption className="text-body-small-default text-foreground-neutral-subtle text-center">
              {block.image.caption[0].text.content}
            </figcaption>
          )}
        </figure>
      );
    case 'video':
      const video =
        block.video.type === 'file'
          ? block.video.file.url
          : block.video.external.url;
      return <VideoPlayer key={block.id} src={video} className="mt-6 mb-6" />;
    case 'bulleted_list_item':
      return (
        <li
          key={block.id}
          className="text-body-large-default text-foreground-neutral-subtle ms-6 list-disc ps-1"
        >
          {renderRichText(block.bulleted_list_item.rich_text)}
        </li>
      );
    case 'numbered_list_item':
      return (
        <li
          key={block.id}
          className="text-body-large-default text-foreground-neutral-subtle ms-6 list-decimal ps-1"
        >
          {renderRichText(block.numbered_list_item.rich_text)}
        </li>
      );
    case 'callout':
      return (
        <div
          key={block.id}
          className="bg-background-neutral-faded my-3 flex gap-2 rounded-lg px-5 py-4"
        >
          {block.callout.icon && <span>{block.callout.icon.emoji}</span>}
          <div className="grow">{renderRichText(block.callout.rich_text)}</div>
        </div>
      );
    case 'divider':
      return <hr key={block.id} className="border-border-neutral-faded my-2" />;
    case 'quote':
      return (
        <blockquote
          key={block.id}
          className="border-l-foreground-neutral-default text-foreground-neutral-default my-3 border-l-2 pl-4 font-serif italic"
        >
          {renderRichText(block.quote.rich_text)}
        </blockquote>
      );
    case 'toggle':
      return (
        <details className="group mt-1 first-of-type:mt-2">
          <summary className="text-body-large-subtle mb-1 flex cursor-pointer items-center gap-2">
            <div className="group-hover:bg-background-neutral-subtle rounded-md p-0.5 transition group-open:rotate-90">
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
