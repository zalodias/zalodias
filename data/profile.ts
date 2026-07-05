export interface Profile {
  name: string;
  handle: string;
  title: string;
  description: string;
  tagline: string;
  avatar: string;
  location: string;
  timezone: string;
}

export const profile: Profile = {
  name: 'Gonçalo Dias',
  handle: 'zalodias',
  title: 'Software Designer',
  description:
    'Software designer crafting intuitive & polished digital experiences — from concept to code.',
  tagline: 'Making the world a better place, 1px at a time.',
  avatar: 'https://media.zalodias.com/profile/avatar.jpg',
  location: 'Coimbra',
  timezone: 'Europe/Lisbon',
};
