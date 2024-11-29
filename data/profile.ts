export interface Profile {
  name: string;
  handle: string;
  title: string;
  avatar: string;
  bio: string;
  location: string;
  timezone: string;
}

export const profile: Profile = {
  name: 'Gonçalo Dias',
  handle: 'zalodias',
  title: 'Software Designer',
  avatar: '/headshot@640.jpg',
  bio: 'Making the world a better place, 1px at a time.',
  location: 'Coimbra',
  timezone: 'Europe/Lisbon',
};
