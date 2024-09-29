export interface Profile {
  name: string;
  handle: string;
  title: string;
  avatar: string;
  bio: string;
}

export const profile: Profile = {
  name: 'Gonçalo Dias',
  handle: 'zalodias',
  title: 'Software Designer',
  avatar: '/headshot@640.jpg',
  bio: 'Full-stack designer crafting functional interfaces',
};
