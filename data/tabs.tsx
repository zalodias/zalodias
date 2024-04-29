import {
  Bookmark,
  Camera,
  Folders,
  Inbox,
  LayoutGrid,
  MessageCircle,
  PenLine,
  Rss,
  SquareMousePointer,
  UserRound,
} from 'lucide-react'

export interface Tab {
  name: string
  icon: React.ReactNode
}

export const tabs: Array<Tab> = [
  { name: 'Home', icon: <SquareMousePointer width={20} /> },
  { name: 'About', icon: <UserRound width={20} /> },
  { name: 'Projects', icon: <Folders width={20} /> },
  { name: 'Notes', icon: <PenLine width={20} /> },
  { name: 'Shots', icon: <Camera width={20} /> },
  { name: 'Tools', icon: <LayoutGrid width={20} /> },
  { name: 'Bookmarks', icon: <Bookmark width={20} /> },
  { name: 'Newsletters', icon: <Inbox width={20} /> },
  { name: 'Podcasts', icon: <Rss width={20} /> },
  { name: 'Contact', icon: <MessageCircle width={20} /> },
]
