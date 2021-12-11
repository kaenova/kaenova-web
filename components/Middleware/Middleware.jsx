import React from "react";
import { Provider } from "react-redux";
import { GlobalStore } from "../../redux/globalStore";
import Footer from "../Footer/Footer";
function Middleware({ children }) {
  return (
    <Provider store={GlobalStore}>
      {children}
      <Footer />
    </Provider>
  );
}

export default Middleware;
