import { ReactNode } from "react";
import { cn } from "../lib/utils";

export default function Card({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("bg-white rounded-lg p-4", className)}>{children}</div>
  );
}
