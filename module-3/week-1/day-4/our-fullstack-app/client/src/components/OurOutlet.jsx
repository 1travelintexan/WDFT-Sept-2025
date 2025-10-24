import { Children } from "react";
import Navbar from "./Navbar";
import { Footer } from "./Footer";

export const OurOutlet = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
