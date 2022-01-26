import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";
const Header = () => {
  return (
    <div className="w-screen flex md:justify-between h-16 items-center bg-gray-100 fixed top-0 z-50 min-w-min ">
      <div className="relative md:w-56 w-28 flex items-center justify-center cursor-pointer ml-2 md:ml-10 ">
        <Link href="/">
          <a>
            <Image src={logo} alt={"swmusic logo"}></Image>
          </a>
        </Link>
      </div>

      <div className=" hidden md:flex ">
        <Link href="/">
          <a>
            <div className="font-bold text-2xl hover:underline cursor-pointer mx-10 select-none ">
              HOME
            </div>
          </a>
        </Link>
        <Link href="/catalog/3">
          <a>
            <div className="font-bold text-2xl hover:underline cursor-pointer mx-10 select-none ">
              CATALOG
            </div>
          </a>
        </Link>
        <Link href="/contact">
          <a>
            <div className="font-bold text-2xl hover:underline cursor-pointer mx-10 select-none ">
              CONTACT
            </div>
          </a>
        </Link>
      </div>

      <div className="flex md:hidden ">
        <Link href="/">
          <a>
            <div className="font-bold text-sm hover:underline cursor-pointer mx-2 select-none ">
              HOME
            </div>
          </a>
        </Link>
        <Link href="/catalog/3">
          <a>
            <div className="font-bold text-sm hover:underline cursor-pointer mx-2 select-none ">
              CATALOG
            </div>
          </a>
        </Link>
        <Link href="/contact">
          <a>
            <div className="font-bold text-sm hover:underline cursor-pointer mx-2 select-none ">
              CONTACT
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
