const Layout = (props: any) => {
  return (
    <>
      <div className="fixed top-0">헤더</div>
      <div className="flex w-screen h-screen justify-center items-center">
        {props.children}
      </div>
      <div className="fixed bottom-0">푸터</div>
    </>
  );
};

export default Layout;
