import { Bookmark, Compass, Folders, Microscope } from 'lucide-react';

export interface NavigationItem {
  path: string;
  icon: React.ReactNode;
  label: string;
}

export const navigation: NavigationItem[] = [
  { path: '/', label: 'Explore', icon: <Compass width={20} /> },
  { path: '/projects', label: 'Projects', icon: <Folders width={20} /> },
  {
    path: '/dissections',
    label: 'Dissections',
    icon: <Microscope width={20} />,
  },
  { path: '/bookmarks', label: 'Bookmarks', icon: <Bookmark width={20} /> },
];
