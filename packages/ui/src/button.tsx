"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
  variant?: "primary" | "secondary";
}

export const Button = ({
  children,
  className,
  appName,
  variant = "primary",
}: ButtonProps) => {
  return (
    <button
      className={className + " " + variant}
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </button>
  );
};
