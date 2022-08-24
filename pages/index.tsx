import type { NextPage } from "next";
import LimitSizeLayout from "../components/layout/limit_size";
import MainLayout from "../components/layout/main_layout";
import NormalPadding from "../components/layout/normal_padding";
import Footer from "../components/pages/footer";
import PixiTry from "../components/pages/index/pixitry";
import IndexSection1 from "../components/pages/index/section_1";
import IndexSection2 from "../components/pages/index/section_2";
import IndexSection3 from "../components/pages/index/section_3";
import IndexSection4 from "../components/pages/index/section_4";
import IndexSection5 from "../components/pages/index/section_5";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <LimitSizeLayout>
        <NormalPadding>
          <IndexSection1 />
          <IndexSection2 />
          <IndexSection3 />
          <IndexSection4 />
          <IndexSection5 />
        </NormalPadding>
      </LimitSizeLayout>
      <PixiTry />
      <Footer />
    </MainLayout>
  );
};

export default Home;
