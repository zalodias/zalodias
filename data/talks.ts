export interface Talk {
  title: string;
  date: string;
  event: string;
  link?: string;
}

export const talks: Talk[] = [
  {
    title: 'Practical Color Systems in Figma',
    date: '2025-10-09',
    event: 'Layers',
    link: 'https://youtu.be/b2Hzic3RxjA',
  },
  {
    title: 'Bridging the Gap Between Design and Code',
    date: '2025-07-09',
    event: 'Friends of Figma World Tour',
    link: 'https://youtu.be/2kW6-X6zmtc',
  },
  {
    title: 'Using Notion as a Headless CMS',
    date: '2025-06-12',
    event: 'Coimbra.js',
  },
];
