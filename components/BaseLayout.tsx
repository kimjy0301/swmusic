import { RecoilRoot } from "recoil";

const BaseLayout = (props: any) => {
  return (
    <>
      <RecoilRoot>{props.children}</RecoilRoot>
    </>
  );
};

export default BaseLayout;
