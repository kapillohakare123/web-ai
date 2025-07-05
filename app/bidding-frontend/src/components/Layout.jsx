import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div style={{ padding: "1rem" }}>{children}</div>
    </>
  );
};

export default Layout;
