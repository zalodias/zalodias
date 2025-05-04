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

export const explore: Metadata = {
  title: 'Gonçalo Dias',
  description: 'Welcome to my corner of the internet.',
};

export const notes: Metadata = {
  title: 'Notes',
  description:
    'Unplugged thoughts & ideas on design, technology, and everything in between.',
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
