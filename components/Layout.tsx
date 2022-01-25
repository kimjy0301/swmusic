import Header from "./Header";

const Layout = (props: any) => {
  return (
    <>
      <div className="bg-slate-100 h-screen">
        <Header></Header>

        {props.children}

        <div>Footer</div>
      </div>
    </>
  );
};

export default Layout;
