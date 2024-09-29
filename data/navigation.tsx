import { Compass, Folders, MousePointer2 } from 'lucide-react';

export interface NavigationItem {
  path: string;
  icon: React.ReactNode;
  label: string;
}

export const navigation: NavigationItem[] = [
  { path: '/', label: 'Explore', icon: <Compass width={20} /> },
  { path: '/projects', label: 'Projects', icon: <Folders width={20} /> },
  { path: '/contact', label: 'Contact', icon: <MousePointer2 width={20} /> },
];
