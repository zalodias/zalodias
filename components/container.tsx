export function Container({ children }: React.PropsWithChildren) {
  return <div className="mx-auto w-full max-w-[960px]">{children}</div>;
}
