import { routePath } from "@/routes/routePath";
import { comparePathname } from "@/utils/uri";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.scss";

type SubRoutesState = {
  [key: string]: boolean;
};

export default function Sidebar() {
  const [currentPath, setCurrentPath] = useState("");
  const [openSubRoutes, setOpenSubRoutes] = useState<SubRoutesState>({});

  const location = useLocation();

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  const toggleSubRoutes = (path: string) => {
    setOpenSubRoutes((prev) => ({
      ...prev,
      [path]: !prev[path],
    }));
  };

  const renderNavigationList = () => {
    return routePath.map((route, index) => {
      if (route.path === "*") {
        return null;
      }

      const hasChildren = route.children && route.children.length > 0;
      const isActive = comparePathname(route.path, currentPath);
      const isOpen = openSubRoutes[route.path];

      return (
        <li key={index} className={`nav-item ${hasChildren ? "dropdown" : ""}`}>
          <Link
            to={hasChildren ? "#" : route.path}
            className={`nav-link ${isActive ? "nav-link-active" : "text-dark"}`}
            onClick={
              hasChildren
                ? (e) => {
                    e.preventDefault();
                    toggleSubRoutes(route.path);
                  }
                : undefined
            }
          >
            <span className="icon-circle">
              <i className={route.icon}></i>
            </span>
            <span
              className={`title ${isActive ? "title-active" : "text-dark"}`}
            >
              {route.title}
            </span>
            {hasChildren && (
              <span className={`arrow ${isOpen ? "up" : "down"}`}>
                <i className={`fas fa-chevron-${isOpen ? "up" : "down"}`}></i>
              </span>
            )}
          </Link>

          {hasChildren && isOpen && (
            <ul className="nav-children nav nav-pills">
              {route.children.map((subRoute, subIndex) => (
                <li key={subIndex} className="nav-item">
                  <Link
                    to={`${route.path}/${subRoute.path}`} // Kết hợp với route cha
                    className={`nav-link ${
                      comparePathname(
                        `${route.path}/${subRoute.path}`,
                        currentPath
                      )
                        ? "nav-link-active"
                        : "text-dark"
                    }`}
                  >
                    <span
                      className={`title ${
                        comparePathname(
                          `${route.path}/${subRoute.path}`,
                          currentPath
                        )
                          ? "title-active"
                          : "text-dark"
                      }`}
                    >
                      {subRoute.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      );
    });
  };

  return (
    <div className="d-flex flex-column align-items-center align-items-sm-start min-vh-100 sidebar">
      <h1 className="logo">LOGO</h1>
      <h5 className="systems">Systems</h5>
      <ul className="nav nav-pills">{renderNavigationList()}</ul>
    </div>
  );
}
