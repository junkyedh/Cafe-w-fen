import "@/components/layout/Layout.scss";
import Sidebar from "@/components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";

export default function Layout() {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="sidebar">
          <Sidebar />
        </div>

        <div className="content">
          <div className="navbar">
            <Navbar />
          </div>

          <Outlet />
        </div>
      </div>
    </div>
  );
}
