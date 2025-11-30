export function Hotkey({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="bg-background-neutral-inverse/4 border-border-neutral-subtle text-body-small-subtle text-foreground-neutral-faded rounded-md border px-1.5 py-0.5">
      {children}
    </kbd>
  );
}
