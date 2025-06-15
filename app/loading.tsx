export default function Loading() {
  return (
    <div className="absolute inset-0 grid place-items-center lg:left-80">
      <div
        role="status"
        className="text-foreground-neutral-default size-8 animate-spin rounded-full border-2 border-solid border-e-transparent"
      >
        <span className="sr-only">Loading</span>
      </div>
    </div>
  );
}
