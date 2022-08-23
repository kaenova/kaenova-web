import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import MainLayout from "../components/layout/main_layout";
import IndexSection1 from "../components/pages/index/section_1";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <IndexSection1/>
    </MainLayout>
  );
};

export default Home;
