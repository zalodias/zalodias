import '@/playground/border-trail/border-trail.css';

export function BorderTrail() {
  return (
    <div
      className="relative overflow-clip rounded-[var(--radius)]"
      style={{ '--radius': '20px' } as React.CSSProperties}
    >
      <div className="absolute inset-0 -z-10 rounded-[var(--radius)]">
        <div
          className="duration-4s absolute aspect-[2/1] w-[100px] rounded-[var(--radius)] bg-radial-[50%_50%_at_right] from-[hsl(160,96%,48%)] to-[transparent_50%]"
          style={{
            offsetPath: 'border-box',
            offsetAnchor: '100% 50%',
            animation: 'trail 4s infinite linear',
          }}
        ></div>
      </div>
      <div className="rounded-[20px] border-1 border-transparent bg-gradient-to-b from-[#222] to-[#000] bg-clip-padding px-4 py-1">
        Get in touch
      </div>
    </div>
  );
}
