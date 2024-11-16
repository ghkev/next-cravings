import { ReactNode } from "react";
import { cn } from "../lib/utils";

export default function Grid({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <div className={cn("grid", className)}>{children}</div>;
}
