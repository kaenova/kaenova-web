import Middleware from "../components/Middleware/Middleware";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Middleware>
      <Component {...pageProps} />
    </Middleware>
  );
}

export default MyApp;
