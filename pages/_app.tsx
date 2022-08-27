import "../styles/globals.css";
import type { AppProps } from "next/app";
import Loading from "../components/pages/loading";
import { useLoadAsset } from "../utils/load_assets";
import { preloadImage, preloadPixiAssets } from "../data/preload_assets";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Transition from "../components/layout/transition";
import PortalWrapper from "../components/layout/portal";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  const [isDone, percentages] = useLoadAsset({
    imgAsset: preloadImage,
    pixiAsset: preloadPixiAssets,
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Loading percentages={percentages * 100} isDone={isDone} />
      {isDone && (
        <Transition>
          <Component {...pageProps} />
        </Transition>
      )}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}

export default MyApp;
