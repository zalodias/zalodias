import { ArrowUpRight } from 'lucide-react';

export function MovingArrow() {
  return (
    <div className="group grid overflow-hidden">
      <div className="-translate-x-4 translate-y-4 duration-300 [grid-area:1/1] group-hover:translate-x-0 group-hover:translate-y-0">
        <ArrowUpRight width={16} />
      </div>
      <div className="transition duration-300 [grid-area:1/1] group-hover:-translate-y-4 group-hover:translate-x-4 group-hover:blur-lg">
        <ArrowUpRight width={16} />
      </div>
    </div>
  );
}
