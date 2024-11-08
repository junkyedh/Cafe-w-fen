
import CustomerListLayout from "@/components/layout/customer-list-layout/CustomerListLayout";
import { Link, Route } from "react-router-dom";
import StaffListLayout from "@/components/layout/staff-list-layout/StaffListLayout";

// Định nghĩa các route trong ứng dụng
export const routePath = [
  {
    index: false,
    path: "my-items",
    icon: "fa-solid fa-house",
    title: "ITEMS",
    children: [
      {
        index: false,
        path: "menu",
        title: "MENU",
        icon: "fa-solid fa-bars",
        component: <Menu />,
      },
      {
        index: false,
        path: "material",
        title: "MATERIAL",
        icon: "fa-solid fa-box",
        component: <Material />,
      },
      {
        index: false,
        path: "product",
        title: "PRODUCT",
        icon: "fa-solid fa-martini-glass",
        component: <Product />,
      },
    ],
  },

  {
    index: false,
    path: "my-order",
    icon: "fa-solid fa-cart-plus",
    title: "ORDER",
    children: [
      {
        index: false,
        path: "list-orders",
        title: "MY ORDER",
        icon: "fa-solid fa-receipt",
        component: <MyOrders />,
      },
      {
        index: false,
        path: "booking-table",
        title: "BOOKING TABLE",
        icon: "fa-solid fa-mug-saucer",
        component: <BookingTable />,
      },
    ],
  },

  {
    index: false,
    path: "my-customers",
    icon: "fa-solid fa-users",
    title: "CUSTOMERS",
    component: <MyCustomers />,
  },

  {
    index: false,
    path: "my-staffs",
    icon: "fa-solid fa-user",
    title: "STAFF",
    children: [
      {
        index: false,
        path: "list-staff",
        title: "LIST STAFF",
        icon: "fa-regular fa-rectangle-list",
        component: <ListStaff />,
      },
      {
        index: false,
        path: "shift-staff",
        title: "SHIFT STAFF",
        icon: "fa-regular fa-calendar",
        component: <ShiftStaff />,
      }
    ]
  },

  {
    index: false,
    path: "report",
    icon: "fa-solid fa-chart-line",
    title: "REPORT",
    component: <Report />,
  },
  
  {
    index: false,
    path: "*",
    component: <NoMatch />,
  },
];

// Các component sử dụng trong routePath

function Menu() {
  return (
    <div>
     
    </div>
  );
}

function Material() {
  return (
    <div>
      
  </div>
  );
}

function Product() {
  return (
    <div>
  
    </div>
  );
}

function MyOrders() {
  return (
    <div>
    
    </div>
  );
}

function BookingTable() {
  return (
    <div>
     
    </div>
  );
}

function MyCustomers() {
  return (
    <CustomerListLayout/>
  );
}

function ListStaff() {
  return (
      <StaffListLayout/>
  );
}

function ShiftStaff() {
  return (
    <div>
     
    </div>
  );
}
function Report() {
  return (
    <div>
     
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Không tìm thấy trang!</h2>
      <p>
        <Link to="/">Quay lại trang chủ</Link>
      </p>
    </div>
  );
}
