import { NextSeo } from "next-seo";
import React from "react";
import MainLayout from "../components/layout/main_layout";
import LiveLayout from "../components/pages/live/live_content";
import LiveHeader from "../components/pages/live/live_header";

function Live() {
  return (
    <>
      <NextSeo
        title="KMA - Live Stream"
        description="Live stream platform to share my interest to the world"
        openGraph={{
          title: "KMA: Live Stream",
          description:
            "Live stream platform to share my interest to the world",
          url: "https://kaenova.my.id/live",
          images: [{ url: "https://kaenova.my.id/SEO.png" }],
          site_name: "KMA",
        }}
      />
      <MainLayout>
        <div className="h-screen flex flex-col">
          {/* <LiveHeader /> */}
          <LiveLayout />
        </div>
      </MainLayout>
    </>
  );
}

export default Live;
