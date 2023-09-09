import { Outlet } from "react-router-dom";
import { Footer, Header } from "./components";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./context";

function Root() {
  return (
    <>
      <HelmetProvider>
        <UserProvider>
          <Header />
          <Outlet />
          <Footer />
        </UserProvider>
      </HelmetProvider>
      <ToastContainer position="bottom-right" />
    </>
  );
}

export default Root;
