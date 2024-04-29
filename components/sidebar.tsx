import { Button } from '@/components/ui/button'
import { Tab } from '@/data/tabs'
import { tabs } from '@/data/tabs'
import Image from 'next/image'

export function Sidebar() {
  return (
    <nav className="flex h-full w-60 flex-col px-2 py-4">
      <div className="flex items-center gap-2 p-2">
        <div className="relative">
          <Image
            className="rounded-full"
            src="/20221231-headshot-001-@640.jpg"
            alt="Profile picture"
            width={32}
            height={32}
          />
        </div>
        <div className="flex flex-col text-sm">
          <p className="font-medium">Gonçalo Dias</p>
          <p className="opacity-80">Software Designer</p>
        </div>
      </div>
      <div>
        {tabs?.map((tab) => (
          <Button
            key={tab.name}
            variant="ghost"
            className="w-full justify-start gap-2"
          >
            {tab.icon}
            {tab.name}
          </Button>
        ))}
      </div>
    </nav>
  )
}
