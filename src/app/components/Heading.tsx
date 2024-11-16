import { ElementType, ReactNode } from "react";

type Heading = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

export default function Heading({
  as: Tag = "h1",
  className,
  children,
}: Heading) {
  return <Tag className={className}>{children}</Tag>;
}
