import Image from "next/image";
import logo from "../public/logo.png";
import { useSpring, animated, useSpringRef, useChain } from "react-spring";
import Link from "next/link";

const Layout = (props: any) => {
  const springRef = useSpringRef();
  const sProps = useSpring({
    opacity: 1,
    from: { opacity: 1 },
    ref: springRef,
  });
  const springRef2 = useSpringRef();
  const sProps2 = useSpring({
    opacity: 1,
    from: { opacity: 1 },
    ref: springRef2,
  });
  useChain([springRef, springRef2]);
  return (
    <>
      <div className="bg-slate-100 h-screen">
        <div className="w-screen flex justify-between h-16 items-center bg-gray-100 fixed top-0 z-50 min-w-min ">
          <animated.div
            style={sProps}
            className="relative w-56 flex items-center justify-center cursor-pointer ml-10 "
          >
            <Link href="/" passHref>
              <Image src={logo} alt={"swmusic logo"}></Image>
            </Link>
          </animated.div>

          <animated.div style={sProps2} className="flex">
            <Link href="/" passHref>
              <div className="font-bold text-2xl hover:underline cursor-pointer mx-10 ">
                HOME
              </div>
            </Link>
            <Link href="/catalog/3" passHref>
              <div className="font-bold text-2xl hover:underline cursor-pointer mx-10 ">
                CATALOG
              </div>
            </Link>
            <Link href="/contact" passHref>
              <div className="font-bold text-2xl hover:underline cursor-pointer mx-10 ">
                CONTACT
              </div>
            </Link>
          </animated.div>
        </div>

        {props.children}

        <div>Footer</div>
      </div>
    </>
  );
};

export default Layout;
