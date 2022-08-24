import type { NextPage } from "next";
import LimitSizeLayout from "../components/layout/limit_size";
import MainLayout from "../components/layout/main_layout";
import NormalPadding from "../components/layout/normal_padding";
import PixiTry from "../components/pages/index/pixitry";
import IndexSection1 from "../components/pages/index/section_1";
import IndexSection2 from "../components/pages/index/section_2";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <LimitSizeLayout>
        <NormalPadding>
          <IndexSection1 />
          <IndexSection2 />
        </NormalPadding>
      </LimitSizeLayout>
      {/* <PixiTry /> */}
    </MainLayout>
  );
};

export default Home;
