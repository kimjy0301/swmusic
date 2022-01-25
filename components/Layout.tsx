import { RecoilRoot } from "recoil";
import Header from "./Header";

const Layout = (props: any) => {
  return (
    <>
      <RecoilRoot>
        <div className="">
          <div className="bg-slate-100 h-screen flex justify-center items-center">
            <Header></Header>
            {props.children}
          </div>

          <div>Footer</div>
        </div>
      </RecoilRoot>
    </>
  );
};

export default Layout;
