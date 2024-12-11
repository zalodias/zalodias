export interface Resource {
  name: string;
  description: string;
  image: string;
  url: string;
}

export const stack: Resource[] = [
  {
    name: 'Figma',
    description: 'My design tool of choice, for everything.',
    image:
      'https://cdn.brandfetch.io/figma.com/w/400/h/400?c=1idbRpfljR6dcIdldSb',
    url: 'https://figma.com',
  },
  {
    name: 'Framer',
    description: 'My go-to for landing pages and marketing websites',
    image:
      'https://cdn.brandfetch.io/framer.com/w/400/h/400/c=1idbRpfljR6dcIdldSb',
    url: 'https://framer.com',
  },
  {
    name: 'Notion',
    description: 'Taking notes and making databases – for work & life',
    image:
      'https://cdn.brandfetch.io/notion.so/w/400/h/400?c=1idbRpfljR6dcIdldSb',
    url: 'https://www.notion.so',
  },
  {
    name: 'Linear',
    description: 'Tracking my tasks & projects in fast mode',
    image:
      'https://cdn.brandfetch.io/linear.app/w/400/h/400?c=1idbRpfljR6dcIdldSb',
    url: 'https://linear.app',
  },
  {
    name: 'Cursor',
    description: 'My code editor of choice – simple, fast, AI-powered',
    image:
      'https://cdn.brandfetch.io/cursor.so/w/400/h/400?c=1idbRpfljR6dcIdldSb',
    url: 'https://cursor.so',
  },
  {
    name: 'Vercel',
    description: 'The platform where I ship – unbeatable DX',
    image:
      'https://cdn.brandfetch.io/vercel.com/w/400/h/400?c=1idbRpfljR6dcIdldSb',
    url: 'https://vercel.com',
  },
  {
    name: 'Perplexity',
    description:
      'My choice for LLM – great set of custom models from OpenAI, Anthropic, and more',
    image:
      'https://cdn.brandfetch.io/perplexity.ai/w/400/h/400?c=1idbRpfljR6dcIdldSb',
    url: 'https://perplexity.ai',
  },
  {
    name: 'Mobbin',
    description: 'My source of inspiration for product design',
    image:
      'https://cdn.brandfetch.io/mobbin.com/w/400/h/400?c=1idbRpfljR6dcIdldSb',
    url: 'https://mobbin.com',
  },
  {
    name: 'Curated',
    description: 'My source of inspiration for web design',
    image:
      'https://cdn.brandfetch.io/curated.design/w/400/h/400?c=1idbRpfljR6dcIdldSb',
    url: 'https://curated.design',
  },
];
