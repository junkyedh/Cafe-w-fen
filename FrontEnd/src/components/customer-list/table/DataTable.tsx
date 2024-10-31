import React, { useState } from "react";
import "./DataTable.scss";
import PaginationContent from "@/components/pagination/PaginationContent";
import { EditCustomer } from "@/components/form/Edit/Customer/edit-customer";
import ActionButton from "../actionButton/ActionButton";

export interface DataCustomer {
  id: string;
  name: string;
  phone: string;
  sex: string;
  registrationDate: string;
}

export const initialDataCustomer: DataCustomer[] = [
  {
    id: "1",
    name: "Dương Hân",
    phone: "0336126905",
    sex: "Female",
    registrationDate: "Tuesday, 1/13/15 1:30 PM"
  },
  {
    id: "2",
    name: "Nguyễn Anh",
    phone: "0345678901",
    sex: "Male",
    registrationDate: "Wednesday, 2/14/15 10:15 AM"
  },
  {
    id: "3",
    name: "Trần Thị Bích",
    phone: "0356789012",
    sex: "Female",
    registrationDate: "Thursday, 3/15/15 2:45 PM"
  },
  {
    id: "4",
    name: "Lê Hồng Sơn",
    phone: "0367890123",
    sex: "Male",
    registrationDate: "Friday, 4/16/15 4:00 PM"
  },
  {
    id: "5",
    name: "Phạm Minh Kha",
    phone: "0378901234",
    sex: "Male",
    registrationDate: "Saturday, 5/17/15 6:30 PM"
  },
  {
    id: "6",
    name: "Đặng Thảo Linh",
    phone: "0389012345",
    sex: "Female",
    registrationDate: "Sunday, 6/18/15 9:15 AM"
  },
  {
    id: "7",
    name: "Ngô Vũ Long",
    phone: "0390123456",
    sex: "Male",
    registrationDate: "Monday, 7/19/15 11:45 AM"
  },
  {
    id: "8",
    name: "Bùi Gia Hân",
    phone: "0312345678",
    sex: "Female",
    registrationDate: "Tuesday, 8/20/15 8:00 AM"
  },
  {
    id: "9",
    name: "Hoàng Hải Nam",
    phone: "0323456789",
    sex: "Male",
    registrationDate: "Wednesday, 9/21/15 5:30 PM"
  },
  {
    id: "10",
    name: "Lý Thanh Nga",
    phone: "0334567890",
    sex: "Female",
    registrationDate: "Thursday, 10/22/15 7:15 PM"
  },
  {
    id: "11",
    name: "Võ Thị Mai",
    phone: "0345678901",
    sex: "Female",
    registrationDate: "Friday, 11/23/15 3:30 PM"
  },
  {
    id: "12",
    name: "Phan Văn Bảo",
    phone: "0356789012",
    sex: "Male",
    registrationDate: "Saturday, 12/24/15 12:45 PM"
  },
  {
    id: "13",
    name: "Nguyễn Thị Lan",
    phone: "0367890123",
    sex: "Female",
    registrationDate: "Sunday, 1/25/16 6:10 AM"
  },
  {
    id: "14",
    name: "Lê Minh Quang",
    phone: "0378901234",
    sex: "Male",
    registrationDate: "Monday, 2/26/16 8:40 AM"
  },
  {
    id: "15",
    name: "Trần Thanh Hương",
    phone: "0389012345",
    sex: "Female",
    registrationDate: "Tuesday, 3/27/16 3:25 PM"
  },
  {
    id: "16",
    name: "Đỗ Đức Thắng",
    phone: "0390123456",
    sex: "Male",
    registrationDate: "Wednesday, 4/28/16 9:00 AM"
  },
  {
    id: "17",
    name: "Vũ Thị Bảo Ngọc",
    phone: "0312345678",
    sex: "Female",
    registrationDate: "Thursday, 5/29/16 4:45 PM"
  },
  {
    id: "18",
    name: "Trịnh Công Tuấn",
    phone: "0323456789",
    sex: "Male",
    registrationDate: "Friday, 6/30/16 7:20 AM"
  },
  {
    id: "19",
    name: "Hà Phương Linh",
    phone: "0334567890",
    sex: "Female",
    registrationDate: "Saturday, 7/31/16 10:05 AM"
  },
  {
    id: "20",
    name: "Ngô Thị Cẩm Vân",
    phone: "0345678901",
    sex: "Female",
    registrationDate: "Sunday, 8/1/16 1:50 PM"
  }
];

interface DataTableProps {
  onSelectCustomer: (customer: DataCustomer) => void;
}

const DataTable: React.FC<DataTableProps> = ({ onSelectCustomer }) => {
  const [data, setData] = useState<DataCustomer[]>(initialDataCustomer);
  const [selectedRowId, setSelectedRowId] = useState<string | null>(null); // Trạng thái lưu ID của hàng được chọn

  // Khi chọn hàng, chỉ lưu đối tượng, chưa hiển thị hộp thoại
  const handleRowClick = (customer: DataCustomer) => {
    setSelectedRowId(customer.id); // Cập nhật ID của hàng được chọn
    onSelectCustomer(customer); // Gọi hàm callback để gửi đối tượng khách hàng
  };

  // const handleSave = (updatedCustomer: DataCustomer) => {
  //   setData((prevData) =>
  //     prevData.map((customer) =>
  //       customer.id === updatedCustomer.id ? updatedCustomer : customer
  //     )
  //   );
  //   onSelectCustomer(null);
  // };

  //Pagination
  const [quantity, setQuantity] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(initialDataCustomer.length / quantity);
  const startIndex = (currentPage - 1) * quantity;
  const endIndex = startIndex + quantity;
  const currentData = initialDataCustomer.slice(startIndex, endIndex);
  const items = {
    currentPage,
    setCurrentPage,
    totalPages,
    setQuantity,
    quantity
  };

  return (
    <div className="table-div">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>PHONE NUMBER</th>
            <th>SEX</th>
            <th>REGISTRATION DATE</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item) => (
            <tr
              key={item.id}
              className={selectedRowId === item.id ? "selected" : ""}
              onClick={() => handleRowClick(item)}
            >
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>{item.sex}</td>
              <td>{item.registrationDate}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <PaginationContent items={items} />

  
    </div>
  );
};

export default DataTable;
