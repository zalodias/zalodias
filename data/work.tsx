import { Concealed } from '@/assets/icons/Concealed';
import { Sword } from '@/assets/icons/Sword';

export interface Work {
  company: string;
  image: React.ReactNode;
  website: string;
  title: string;
  description: string;
  date: string;
}

export const work: Work[] = [
  {
    company: 'Sword Health',
    image: <Sword />,
    website: 'https://swordhealth.com',
    title: 'Product Designer',
    description: 'Shaping the future of AI digital healthcare.',
    date: '2025–',
  },
  {
    company: 'Concealed',
    image: <Concealed />,
    website: 'https://concealed.com',
    title: 'UX/UI Designer',
    description: 'Designing thoughtful digital experiences.',
    date: '2023–2025',
  },
];
