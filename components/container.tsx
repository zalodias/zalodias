export function Container({ children }: React.PropsWithChildren) {
  return <div className="mx-auto max-w-[960px]">{children}</div>;
}
