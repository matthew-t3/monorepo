import { type JSX } from "react";

export function Text({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  return <p className={className}>{children}</p>;
}
