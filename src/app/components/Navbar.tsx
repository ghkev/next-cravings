import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <div className="flex bg-white items-center p-2">
        <nav className="grow">
          <ul className="md:flex md:flex-row flex-col md:justify-center items-center hidden gap-2">
            <li>Home</li>
            <li>Meals</li>
            <li>Drinks</li>
          </ul>
        </nav>
        <Image
          src="images/bars-3.svg"
          alt="hamburger"
          width={50}
          height={50}
          className="cursor-pointer md:hidden"
          priority
        />
      </div>
    </>
  );
}
