import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./Layout.scss";
import { useSelector } from "react-redux";

function Layout() {
  const authen = useSelector((state) => state.authenReducer);
  
  return (
    <>
      <div className="layout">
        <Header />
        <main className="main">
          <div className="container">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
