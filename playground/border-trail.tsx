export function BorderTrail() {
  return (
    <div
      className="relative overflow-clip rounded-(--radius) shadow-sm"
      style={{ '--radius': '20px' } as React.CSSProperties}
    >
      <div className="absolute inset-0 -z-10 rounded-(--radius)">
        <div className="from-foreground-brand-default absolute aspect-2/1 w-full animate-[trail_4s_linear_infinite] rounded-(--radius) bg-radial-[50%_50%_at_right] to-[transparent_50%] [offset-anchor:100%_50%] [offset-path:border-box]"></div>
      </div>
      <div className="from-background-neutral-subtle to-background-neutral-default rounded-(--radius) border border-transparent bg-linear-to-b bg-clip-padding px-4 py-2">
        Get in touch
      </div>
    </div>
  );
}
