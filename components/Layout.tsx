const Layout = (props: any) => {
  return (
    <>
      <div className="bg-slate-100 h-screen">
        <div className="w-screen flex justify-start h-16 items-center bg-slate-200 fixed top-0 z-50">
          <div className="font-bold text-2xl hover:underline cursor-pointer mx-10">
            HOME
          </div>
          <div className="font-bold text-2xl hover:underline cursor-pointer mx-10">
            CATALOG
          </div>
          <div className="font-bold text-2xl hover:underline cursor-pointer mx-10">
            CONTACT
          </div>
        </div>

        {props.children}

        <div>Footer</div>
      </div>
    </>
  );
};

export default Layout;
