import React from "react";
import MainLayout from "../components/layout/main_layout";
import Brand from "../components/typography/brand";
import H3Fill from "../components/typography/h3_fill";
import StrikeThroughH1 from "../components/typography/strike_through_h1";
import Link from "next/link";
import NormalText from "../components/typography/normal_text";
import { NextSeo } from "next-seo";

function NotFound() {
  return (
    <>
      <NextSeo
        title="KMA - Page Not Found"
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
        <div className="h-screen flex flex-col justify-center items-center">
          <div className="text-center">
            <StrikeThroughH1 strike="40" normal="4" />
            <H3Fill>Page not found</H3Fill>
            <Link href="/">
              <a>
                <H3Fill className="decoration-accent underline">Home</H3Fill>
              </a>
            </Link>
          </div>
          <Link href="/">
            <a className="absolute bottom-2 scale-50">
              <Brand className="" />
              <div className="h-[3px] w-full bg-accent"></div>
            </a>
          </Link>
        </div>
      </MainLayout>
    </>
  );
}

export default NotFound;
