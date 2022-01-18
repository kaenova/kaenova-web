import HomeDef from "../components/Home";
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>KMA</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HomeDef />
    </>
  );
}
