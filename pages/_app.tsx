import "../styles/globals.css";
import type { AppProps } from "next/app";
import Loading from "../components/pages/loading";
import { useLoadAsset } from "../utils/load_assets";
import { preloadImage } from "../data/preload_image";

function MyApp({ Component, pageProps }: AppProps) {
  const [isDone, percentages] = useLoadAsset({ imgAsset: preloadImage });

  return (
    <span className="relative">
      <Loading percentages={percentages * 100} isDone={isDone} />
      <Component {...pageProps} />
    </span>
  );
}

export default MyApp;
