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
        <p key={block.id}>
          {block.paragraph.rich_text.map((text: any) => text.text.content)}
        </p>
      );
    case 'heading_1':
      return (
        <h1 key={block.id}>
          {block.heading_1.rich_text.map((text: any) => text.text.content)}
        </h1>
      );
    case 'heading_2':
      return (
        <h2 key={block.id}>
          {block.heading_2.rich_text.map((text: any) => text.text.content)}
        </h2>
      );
    case 'heading_3':
      return (
        <h3 key={block.id}>
          {block.heading_3.rich_text.map((text: any) => text.text.content)}
        </h3>
      );
    default:
      if (process.env.NODE_ENV !== 'production') {
        console.log('Unsupported type ' + block?.value?.type);
      }
      return <div />;
  }
}
