import Middleware from "../components/Middleware/Middleware";
import "../styles/globals.css";

/*
TODO:
  1. Semua yang bentuk svg belum diubah warnanya
*/

function MyApp({ Component, pageProps }) {
  return (
    <Middleware>
      <Component {...pageProps} />
    </Middleware>
  );
}

export default MyApp;
