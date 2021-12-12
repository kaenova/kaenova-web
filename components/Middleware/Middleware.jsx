import React from "react";
import { Provider } from "react-redux";
import { GlobalStore } from "../../redux/globalStore";
import Footer from "../Footer/Footer";
import Head from "next/head";
import Navbar from "../NavBar/Navbar";
function Middleware({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      </Head>
      <Provider store={GlobalStore}>
        <Navbar />
          {children}
        <Footer/>
      </Provider>
    </>
  );
}

export default Middleware;
