interface NotionBlock {
  id: string;
  type: string;
  [key: string]: any;
}

interface NotionBlockProps {
  block: NotionBlock;
}

const renderRichText = (richText: any[]) => {
  return richText.map(({ text }: any) => {
    if (text.link) {
      return (
        <a
          key={text.link.url}
          href={text.link.url}
          className="text-foreground-brand-default hover:underline hover:underline-offset-2"
          target="_blank"
        >
          {text.content}
        </a>
      );
    }
    return text.content;
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
          className="mb-3 text-title-large-strong text-foreground-neutral-default"
        >
          {renderRichText(block.heading_1.rich_text)}
        </h1>
      );
    case 'heading_2':
      return (
        <h2
          key={block.id}
          className="mb-2 text-title-medium-strong text-foreground-neutral-default"
        >
          {renderRichText(block.heading_2.rich_text)}
        </h2>
      );
    case 'heading_3':
      return (
        <h3
          key={block.id}
          className="mb-1 text-title-small-strong text-foreground-neutral-default"
        >
          {renderRichText(block.heading_3.rich_text)}
        </h3>
      );
    case 'image':
      return (
        <img
          key={block.id}
          src={block.image.file.url}
          alt={
            block.image.caption ? block.image.caption[0]?.text.content : 'Image'
          }
          className="mt-6 rounded-xl"
        />
      );
    case 'bulleted_list_item':
      return (
        <li
          key={block.id}
          className="ms-3 text-body-large-default text-foreground-neutral-subtle"
        >
          {renderRichText(block.bulleted_list_item.rich_text)}
        </li>
      );
    default:
      if (process.env.NODE_ENV !== 'production') {
        console.log('Unsupported type ' + block?.value?.type);
      }
      return <div />;
  }
}
