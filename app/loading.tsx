export default function Loading() {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <div
        role="status"
        className="size-8 animate-spin rounded-full border-2 border-solid border-e-transparent text-foreground-neutral-default"
      >
        <span className="sr-only">Loading</span>
      </div>
    </div>
  );
}
