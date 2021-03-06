import Head from "next/head";
import Nav from "./Nav";
import Footy from "./Footy";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="container p-8 mx-auto max-w-lg sm:px-6 sm:py-24 selection:bg-[rgba(0,0,0,1)] selection:text-[#ffffff]">
        <div>
          <Nav />
          <main>{children}</main>
          <Footy />
        </div>
      </div>
    </div>
  );
};

export default Layout;
