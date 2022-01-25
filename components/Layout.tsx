import Header from "./Header";

const Layout = (props: any) => {
  return (
    <>
      <div className="">
        <div className="bg-slate-100 h-screen flex justify-center items-center">
          <Header></Header>
          {props.children}
        </div>

        <div>Footer</div>
      </div>
    </>
  );
};

export default Layout;
