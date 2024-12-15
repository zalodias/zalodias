export function Hotkey({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="bg-background-neutral-inverse/[4%] rounded-md border border-border-neutral-subtle px-1.5 py-0.5 text-body-small-subtle text-foreground-neutral-faded">
      {children}
    </kbd>
  );
}
