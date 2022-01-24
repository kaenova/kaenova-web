import HomeDef from "../components/Home";
import Head from 'next/head'
import { NextSeo } from 'next-seo';

export default function Home() {
  return (
    <>
      <Head>
        <title>KMA</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NextSeo
        title="KMA"
        description="Kaenova's portfolio and personal platform. Kaneova is a Software Engineer and Data Engineer studying in Telkom University. He likes to explore new technology."
        openGraph={
          {
            title: "KMA: Homepage",
            description: "Kaenova's portfolio and personal platform. Kaneova is a Software Engineer and Data Engineer studying in Telkom University. He likes to explore new technology.",
            url: "https://kaenova.my.id",
            images: [{url: "https://kaenova.my.id/SEO.png"}],
            site_name: "KMA"
          }
        }
      />
      <HomeDef />
    </>
  );
}
