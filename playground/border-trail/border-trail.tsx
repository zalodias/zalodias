import '@/playground/border-trail/border-trail.css';

export function BorderTrail() {
  return (
    <div
      className="relative overflow-clip rounded-[var(--radius)] shadow-sm"
      style={{ '--radius': '20px' } as React.CSSProperties}
    >
      <div className="absolute inset-0 -z-10 rounded-[var(--radius)]">
        <div
          className="from-foreground-brand-default absolute aspect-[2/1] w-full rounded-[var(--radius)] bg-radial-[50%_50%_at_right] to-[transparent_50%]"
          style={{
            offsetPath: 'border-box',
            offsetAnchor: '100% 50%',
            animation: 'trail 4s infinite linear',
          }}
        ></div>
      </div>
      <div className="from-background-neutral-subtle to-background-neutral-default rounded-[var(--radius)] border-1 border-transparent bg-linear-to-b bg-clip-padding px-4 py-2">
        Get in touch
      </div>
    </div>
  );
}
