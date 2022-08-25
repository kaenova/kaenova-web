import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Head from "next/head";
import LimitSizeLayout from "../components/layout/limit_size";
import MainLayout from "../components/layout/main_layout";
import NormalPadding from "../components/layout/normal_padding";
import Footer from "../components/pages/footer";
import BackgroundAudio from "../components/pages/index/background_audio";
import Navigator from "../components/pages/index/navigator";
import PixiTry from "../components/pages/index/pixitry";
import IndexSection1 from "../components/pages/index/section_1";
import IndexSection2 from "../components/pages/index/section_2";
import IndexSection3 from "../components/pages/index/section_3";
import IndexSection4 from "../components/pages/index/section_4";
import IndexSection5 from "../components/pages/index/section_5";
import ThreeTry from "../components/pages/index/threetry";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>KMA - Welcome</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NextSeo
        title="KMA"
        description="Kaenova's portfolio and personal platform. Kaneova is a Software Engineer and Data Engineer studying in Telkom University. He likes to explore new technology."
        openGraph={{
          title: "KMA: Homepage",
          description:
            "Kaenova's portfolio and personal platform. Kaneova is a Software Engineer and Data Engineer studying in Telkom University. He likes to explore new technology.",
          url: "https://kaenova.my.id",
          images: [{ url: "https://kaenova.my.id/SEO.png" }],
          site_name: "KMA",
        }}
      />
      <MainLayout>
        <BackgroundAudio />
        {/* <Navigator /> */}
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
        <ThreeTry />
        <Footer />
      </MainLayout>
    </>
  );
};

export default Home;
