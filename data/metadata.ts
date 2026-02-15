export interface Metadata {
  title: string;
  description: string;
  keywords?: string;
  author?: string;
}

export const bookmarks: Metadata = {
  title: 'Bookmarks',
  description: 'A curated list of my favorite resources on the web.',
};

export const home: Metadata = {
  title: 'Gonçalo Dias',
  description:
    'Software designer crafting intuitive & polished digital experiences — from concept to code.',
};

export const notes: Metadata = {
  title: 'Notes',
  description: 'In-depth practical essays on design, interfaces & systems.',
};

export const playground: Metadata = {
  title: 'Playground',
  description: 'A laboratory of UI experiments, crafted with code.',
};

export const projects: Metadata = {
  title: 'Projects',
  description: 'A showcase of my latest design work.',
};

export const stack: Metadata = {
  title: 'Stack',
  description: 'The essential tools powering my daily workflow.',
};

export const shots: Metadata = {
  title: 'Shots',
  description: 'A visual journal of places, moments & memories.',
};

export const streams: Metadata = {
  title: 'Streams',
  description: 'Internal dialogues on half-formed design thoughts.',
};
