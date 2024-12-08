import { cn } from "../lib/utils";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function LoadingSpinner({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2-0 z-50",
        className
      )}
    >
      <AiOutlineLoading3Quarters
        size={35}
        className="animate-spin transition-all ease-in-out duration-300"
      />
      <span className="sr-only">Loading</span>
    </div>
  );
}
