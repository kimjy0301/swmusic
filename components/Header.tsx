import Image from "next/image";
import Link from "next/link";
import { animated } from "react-spring";

import logo from "../public/logo.png";
const Header = () => {
  return (
    <div className="w-screen flex justify-between h-16 items-center bg-gray-100 fixed top-0 z-50 min-w-min ">
      <animated.div className="relative w-56 flex items-center justify-center cursor-pointer ml-10 ">
        <Link href="/" passHref>
          <Image src={logo} alt={"swmusic logo"}></Image>
        </Link>
      </animated.div>

      <animated.div className="flex">
        <Link href="/" passHref>
          <div className="font-bold text-2xl hover:underline cursor-pointer mx-10 select-none ">
            HOME
          </div>
        </Link>
        <Link href="/catalog/3" passHref>
          <div className="font-bold text-2xl hover:underline cursor-pointer mx-10 select-none ">
            CATALOG
          </div>
        </Link>
        <Link href="/contact" passHref>
          <div className="font-bold text-2xl hover:underline cursor-pointer mx-10 select-none ">
            CONTACT
          </div>
        </Link>
      </animated.div>
    </div>
  );
};

export default Header;
