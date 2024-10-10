import React, { useState } from "react";
import TabButton from "../tabButton/TabButton";
import EditPartner from "@/components/edit-partner/EditPartner";
import DataTable from "../tabContent/table/DataTable";
import { DataWarehouse } from "../tabContent/table/DataTable"; // Import DataWarehouse type
import "./PartnerListLayout.scss";
import ActionButton from "../tabContent/actionButton/ActionButton";

const PartnerListLayout = () => {
  const [isClick, setClick] = useState("all");
  const [isEditing, setIsEditing] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState<DataWarehouse | null>(
    null
  ); // State for the selected partner

  const handleEditClick = (data: DataWarehouse) => {
    setSelectedPartner(data); // Set the selected partner data
    setIsEditing(true); // Open the edit modal
  };

  const handleCloseEdit = () => {
    setIsEditing(false); // Close the edit modal
    setSelectedPartner(null); // Clear the selected partner data
  };

  return (
    <div>
      {isEditing ? ( // Use a ternary operator to render one or the other
        <EditPartner onClose={handleCloseEdit} data={selectedPartner} />
      ) : (
        <div className="partner-list-layout">
          <p className="title-text">Partner List</p>
          <div className="tab-layout-div">
            <TabButton isClick={isClick} setClick={setClick} />
            <ActionButton />

            {isClick === "all" && <DataTable onEdit={handleEditClick} />}
          </div>
        </div>
      )}
    </div>
  );
};

export default PartnerListLayout;
