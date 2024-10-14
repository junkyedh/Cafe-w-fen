import "./EditPartner.scss";
import React, { useState, useEffect } from "react";
import TabButton from "./tab-button/TabButton";
import DataTable, { DataWarehouse } from "./partner-list/DataTable";
import { Icon } from "@iconify/react";
import Button from "@/components/ui/Button";
import { CreatePartner } from "../form/createPartner/CreatePartner";

interface PartnerData {
  id: string;
  name: string;
  owner: string;
  location: string;
  type: string;
}

interface EditPartnerProps {
  data: PartnerData | null | undefined; // Allow undefined
  onClose: () => void; // Function to handle closing the edit form
}

const ActionButton = () => {
  const [clickNew, setClickNew] = useState(false);
  const handleClickNewButton = () => {
    setClickNew(!clickNew);
    console.log("New button is clicked");
  };

  return (
    <div className="my-action-button">
      <div
        className={`new-button-div ${clickNew ? "active" : "inactive"}`}
        onClick={handleClickNewButton}
      >
        <Button
          variant="primary"
          size="small"
          rounded="none"
          backgroundColor="transparent"
          textColor="white"
          padding="10px 16px"
          width="fit"
          type="button"
          disabled={false}
        >
          <Icon
            icon="ic:round-plus"
            width={20}
            height={20}
            style={{ color: "white" }}
            className="icon-custom"
          />
          New
        </Button>
      </div>
      {clickNew && <CreatePartner onclose={handleClickNewButton} />}
    </div>
  );
};

const EditPartner: React.FC<EditPartnerProps> = ({ data, onClose }) => {
  const [isClick, setClick] = useState("all");

  const [activeType, setActiveType] = useState<string | null>("supplier");
  const [name, setName] = useState<string | null | undefined>(data?.name);
  const [owner, setOwner] = useState<string | null | undefined>(data?.owner);
  const [location, setLocation] = useState<string | null | undefined>(
    data?.location
  );

  // Cập nhật giá trị ban đầu khi `data` thay đổi
  useEffect(() => {
    if (data) {
      setName(data.name);
      setOwner(data.owner);
      setLocation(data.location);
      setActiveType(data.type); // Thiết lập loại đối tác ban đầu nếu có
    }
  }, [data]); // Lắng nghe sự thay đổi của `data`

  const handleClick = (type: string) => {
    setActiveType(type);
  };

  const handleEditClick = (data: DataWarehouse) => {};

  return (
    <div className="container d-flex flex-row">
      <div className="leftside col-4">
        <p className="title-text">Partner List</p>
        <div className="tab-layout-div">
          <TabButton isClick={isClick} setClick={setClick} />
          <ActionButton />
          {isClick === "all" && <DataTable onEdit={handleEditClick} />}
        </div>
      </div>

      <div className="rightside col-8">
        <div className="header d-flex justify-content-between align-items-center">
          <h3 className="title-text">Infomation</h3>
          <div>
            <div className="btn-close">
              <button className="btn" onClick={onClose}></button>
            </div>
          </div>
        </div>
        <form>
          <div className="edit-container">
            <div className="modal-content">
              <div className="edit-info-box">
                <div className="edit-name">
                  <p className="title-edit-name">Name</p>
                  <input
                    className="input-name"
                    value={name || ""} // Kiểm tra giá trị để tránh lỗi undefined
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="edit-owner">
                  <p className="title-edit-owner">Owner</p>
                  <input
                    className="input-owner"
                    value={owner || ""} // Kiểm tra giá trị để tránh lỗi undefined
                    onChange={(e) => setOwner(e.target.value)}
                  />
                </div>
                <div className="edit-location">
                  <p className="title-edit-location">Location</p>
                  <input
                    className="input-location"
                    value={location || ""} // Kiểm tra giá trị để tránh lỗi undefined
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>

              <div className="type-partner-box">
                <div className="type-partner-container">
                  <p className="type-title">Type</p>
                  <div className="select-box">
                    <div
                      className={`type-option ${
                        activeType === "supplier" ? "active" : ""
                      }`}
                      onClick={() => handleClick("supplier")}
                    >
                      Supplier
                    </div>
                    <div
                      className={`type-option ${
                        activeType === "warehouse" ? "active" : ""
                      }`}
                      onClick={() => handleClick("warehouse")}
                    >
                      Warehouse
                    </div>
                    <div
                      className={`type-option ${
                        activeType === "transport" ? "active" : ""
                      }`}
                      onClick={() => handleClick("transport")}
                    >
                      Transport Provider
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="btn-group">
            <div>
              <button
                type="button"
                className="btn btn-second"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
            <div>
              <button type="submit" className="btn btn-pri">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPartner;
