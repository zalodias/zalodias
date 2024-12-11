import { Bookmark, Compass, Folders, Layers2, ScrollText } from 'lucide-react';

export interface NavigationItem {
  path: string;
  icon: React.ReactNode;
  label: string;
  new?: boolean;
}

export const navigation: NavigationItem[] = [
  { path: '/', label: 'Explore', icon: <Compass width={20} /> },
  { path: '/projects', label: 'Projects', icon: <Folders width={20} /> },
  { path: '/stack', label: 'Stack', icon: <Layers2 width={20} /> },
  // {
  //   path: '/notes',
  //   label: 'Notes',
  //   icon: <ScrollText width={20} />,
  // },
  { path: '/bookmarks', label: 'Bookmarks', icon: <Bookmark width={20} /> },
];
