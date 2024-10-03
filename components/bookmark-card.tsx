export function BookmarkCard() {
  return (
    <a
      href="https://twitter.com/DanHollick/status/1603370500306018304"
      className="flex gap-3 rounded-md border border-border-neutral-faded bg-background-neutral-faded px-5 py-2 hover:bg-background-neutral-subtle"
    >
      <img
        className="mt-1 size-4 rounded-sm"
        src="https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://ambitiousdesigner.substack.com/p/from-overwhelming-to-intuitive-effective&size=64"
        alt="url favicon"
      />
      <div className="flex flex-col gap-1">
        <p className="line-clamp-2 text-body-large-subtle">
          From Overwhelming to Intuitive: Effective Data Table Design
        </p>
        <p className="text-body-medium-default text-foreground-neutral-faded">
          Design
        </p>
      </div>
    </a>
  );
}
