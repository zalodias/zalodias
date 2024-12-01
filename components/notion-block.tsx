interface NotionBlock {
  id: string;
  type: string;
  [key: string]: any;
}

interface NotionBlockProps {
  block: NotionBlock;
}

export function NotionBlock({ block }: NotionBlockProps) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p
          key={block.id}
          className="text-body-large-default text-foreground-neutral-subtle"
        >
          {block.paragraph.rich_text.map((text: any) => text.text.content)}
        </p>
      );
    case 'heading_1':
      return (
        <h1
          key={block.id}
          className="mb-3 text-title-large-strong text-foreground-neutral-default"
        >
          {block.heading_1.rich_text.map((text: any) => text.text.content)}
        </h1>
      );
    case 'heading_2':
      return (
        <h2
          key={block.id}
          className="mb-2 text-title-medium-strong text-foreground-neutral-default"
        >
          {block.heading_2.rich_text.map((text: any) => text.text.content)}
        </h2>
      );
    case 'heading_3':
      return (
        <h3
          key={block.id}
          className="mb-1 text-title-small-strong text-foreground-neutral-default"
        >
          {block.heading_3.rich_text.map((text: any) => text.text.content)}
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
          {block.bulleted_list_item.rich_text.map(
            (text: any) => text.text.content,
          )}
        </li>
      );
    default:
      if (process.env.NODE_ENV !== 'production') {
        console.log('Unsupported type ' + block?.value?.type);
      }
      return <div />;
  }
}
