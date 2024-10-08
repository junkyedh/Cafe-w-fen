import "@/components/layout/Layout.css";
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
          <Navbar />
          <Outlet />
        </div>
      </div>
    </div>
  );
}
