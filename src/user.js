import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";

function Layout() {
  return (
    <>
      <div className="layout-container ">
        <Header />
        <div className="body-container d-flex">
          <Sidebar />
          <div className="content-container">
            <Outlet />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export { Layout };
