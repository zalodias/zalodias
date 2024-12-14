export interface Resource {
  name: string;
  description: string;
  image: string;
  url: string;
}

export const stack: Resource[] = [
  {
    name: 'Figma',
    description: 'My design tool of choice for UI',
    image: `https://cdn.brandfetch.io/figma.com/w/400/h/400?c=${process.env.BRANDFETCH_CLIENT_ID}`,
    url: 'https://figma.com',
  },
  {
    name: 'Framer',
    description: 'The quickest way to build websites and landing pages',
    image: `https://cdn.brandfetch.io/framer.com/w/400/h/400/c=${process.env.BRANDFETCH_CLIENT_ID}`,
    url: 'https://framer.com',
  },
  {
    name: 'Notion',
    description: 'Taking notes and making databases – for work & life',
    image: `https://cdn.brandfetch.io/notion.so/w/400/h/400?c=${process.env.BRANDFETCH_CLIENT_ID}`,
    url: 'https://www.notion.so',
  },
  {
    name: 'Linear',
    description: 'Tracking my tasks & projects in fast mode',
    image: `https://cdn.brandfetch.io/linear.app/w/400/h/400?c=${process.env.BRANDFETCH_CLIENT_ID}`,
    url: 'https://linear.app',
  },
  {
    name: 'Arc',
    description: 'A joyful way to browse the web',
    image: `https://cdn.brandfetch.io/arc.net/w/400/h/400?c=${process.env.BRANDFETCH_CLIENT_ID}`,
    url: 'https://arc.net',
  },
  {
    name: 'Raycast',
    description: 'The cornerstone of how I use my Mac',
    image: `https://cdn.brandfetch.io/raycast.com/w/400/h/400?c=${process.env.BRANDFETCH_CLIENT_ID}`,
    url: 'https://raycast.com',
  },
  {
    name: 'Cursor',
    description: 'My code editor of choice – fast & AI-powered',
    image: `https://cdn.brandfetch.io/cursor.so/w/400/h/400?c=${process.env.BRANDFETCH_CLIENT_ID}`,
    url: 'https://cursor.so',
  },
  {
    name: 'Vercel',
    description: 'The platform where I ship – unbeatable DX',
    image: `https://cdn.brandfetch.io/vercel.com/w/400/h/400?c=${process.env.BRANDFETCH_CLIENT_ID}`,
    url: 'https://vercel.com',
  },
  {
    name: 'Perplexity',
    description:
      'The best way to interface with LLMs – great set of custom models',
    image: `https://cdn.brandfetch.io/perplexity.ai/w/400/h/400?c=${process.env.BRANDFETCH_CLIENT_ID}`,
    url: 'https://perplexity.ai',
  },
  {
    name: 'Mobbin',
    description: 'My source of inspiration for product design',
    image: `https://cdn.brandfetch.io/mobbin.com/w/400/h/400?c=${process.env.BRANDFETCH_CLIENT_ID}`,
    url: 'https://mobbin.com',
  },
  {
    name: 'Curated',
    description: 'My source of inspiration for web design',
    image: `https://cdn.brandfetch.io/curated.design/w/400/h/400?c=${process.env.BRANDFETCH_CLIENT_ID}`,
    url: 'https://curated.design',
  },
  {
    name: 'TailwindCSS',
    description: 'All the utilities I need for styling in CSS',
    image: `https://cdn.brandfetch.io/tailwindcss.com/w/400/h/400?c=${process.env.BRANDFETCH_CLIENT_ID}`,
    url: 'https://tailwindcss.com',
  },
];
