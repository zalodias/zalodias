import {
  Aperture,
  Bookmark,
  Compass,
  Folders,
  Layers2,
  PenLine,
} from 'lucide-react';

export interface NavigationItem {
  path: string;
  icon: React.ReactNode;
  label: string;
  shortcut?: string;
}

export const navigation: NavigationItem[] = [
  { path: '/', label: 'Explore', icon: <Compass width={20} />, shortcut: '1' },
  {
    path: '/projects',
    label: 'Projects',
    icon: <Folders width={20} />,
    shortcut: '2',
  },
  {
    path: '/stack',
    label: 'Stack',
    icon: <Layers2 width={20} />,
    shortcut: '3',
  },
  {
    path: '/bookmarks',
    label: 'Bookmarks',
    icon: <Bookmark width={20} />,
    shortcut: '4',
  },
  {
    path: '/notes',
    label: 'Notes',
    icon: <PenLine width={20} />,
    shortcut: '5',
  },
  {
    path: '/shots',
    label: 'Shots',
    icon: <Aperture width={20} />,
    shortcut: '6',
  },
];
