import Header from "./components/header";
import { Outlet } from "react-router-dom";
import "./index.css";

const Layout = () => {
  return (
    <div className="h-screen">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
