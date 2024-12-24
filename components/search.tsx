'use client';

import { SearchIcon } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export function Search({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(query: string) {
    const params = new URLSearchParams(searchParams);
    if (query) {
      params.set('q', query);
    } else {
      params.delete('q');
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="relative flex">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        type="search"
        placeholder={placeholder}
        className="block w-full rounded-lg border border-border-neutral-subtle bg-background-neutral-default py-3 pe-3 ps-10 text-body-medium-default placeholder:text-foreground-neutral-faded"
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={searchParams.get('q')?.toString()}
      />
      <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
        <SearchIcon width={16} className="text-foreground-neutral-faded" />
      </div>
    </div>
  );
}
