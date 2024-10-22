import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Lấy location hiện tại
import "./Header.scss";
import { routePath } from "@/routes/routePath"; // Import routePath

// Định nghĩa kiểu route
interface Route {
    path: string;
    title?: string;
    index?: boolean;
    icon?: string;
    component?: JSX.Element;
    children?: Route[];
  }

const Header: React.FC = () => {
    const location = useLocation();
    const [currentTitle, setCurrentTitle] = useState<string>("Home");
    const [currentDate, setCurrentDate] = useState<string>("");

  // Hàm format ngày thành dạng "Thursday, 18 Oct 2024"
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  // Cập nhật ngày hiện tại
  useEffect(() => {
    const today = new Date();
    setCurrentDate(formatDate(today));
  }, []);


// Hàm tìm title dựa trên đường dẫn đầy đủ
const findTitleByPath = (routes: Route[], fullPath: string): string | undefined => {
    for (const route of routes) {
      const routePath = `/${route.path}`; // Ghép path đầy đủ của route cha

      if (routePath === fullPath) return route.title; // Nếu khớp, trả về title

      // Nếu có children, tìm trong children với path đầy đủ
      if (route.children) {
        const childRoute = route.children.find(child => `${routePath}/${child.path}` === fullPath);
        if (childRoute) return childRoute.title; // Nếu tìm thấy child khớp
      }
    }
    return undefined; // Không tìm thấy title
  };

  // Cập nhật title khi path thay đổi
  useEffect(() => {
    const fullPath = location.pathname; // Lấy path đầy đủ từ location
    const title = findTitleByPath(routePath, fullPath) || "Home"; // Tìm title theo path đầy đủ
    setCurrentTitle(title);
  }, [location]);

  return (
    <div className="header-custom">
      <h1>{currentTitle}</h1>
      <p>{currentDate}</p>
    </div>
  );
};

export default Header;
