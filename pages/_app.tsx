import "../styles/globals.css";
import type { AppProps } from "next/app";
import Loading from "../components/pages/loading";
import { useLoadAsset } from "../utils/load_assets";
import { preloadImage, preloadPixiAssets } from "../data/preload_assets";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  const [isDone, percentages] = useLoadAsset({
    imgAsset: preloadImage,
    pixiAsset: preloadPixiAssets,
  });

  return (
    <QueryClientProvider client={queryClient}>
      <span className="relative">
        <Loading percentages={percentages * 100} isDone={isDone} />
        {isDone && <Component {...pageProps} />}
      </span>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}

export default MyApp;
