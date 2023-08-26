import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components";
import { HelmetProvider } from "react-helmet-async";

function Root() {
  return (
    <>
      <HelmetProvider>
        <Header />
        <Outlet />
        <Footer />
      </HelmetProvider>
    </>
  );
}

export default Root;
