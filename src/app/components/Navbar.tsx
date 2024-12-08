import { IoIosMenu } from "react-icons/io";
import Link from "next/link";
import { cn } from "../lib/utils";
import { navHeight } from "../lib/const";

export default function Navbar() {
  return (
    <div
      className={cn(
        "isolate fixed top-0 left-0 right-0 z-40 bg-white",
        "flex md:justify-center md:items-center items-center justify-end",
        "p-4"
      )}
      style={{
        height: navHeight,
      }}
    >
      <nav className="md:flex hidden md:gap-x-4">
        <Link href="/">Home</Link>
        <Link href="/meals">Meals</Link>
        <Link href="/drinks">Drinks</Link>
      </nav>
      <IoIosMenu size={30} className="md:hidden" />
      <div className="sr-only">Menu</div>
    </div>
  );
}
