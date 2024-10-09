import "./EditPartner.scss";
import React, { useState, useEffect } from "react";
import TabButton from "./tab-button/TabButton";
import DataTable, { DataWarehouse } from "./partner-list/DataTable";

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

const EditPartner: React.FC<EditPartnerProps> = ({ data, onClose }) => {
  const [formData, setFormData] = useState<PartnerData | null>(null);
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
  // Populate the form with existing data when the component mounts
  useEffect(() => {
    if (data) {
      setFormData(data);
    }
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (formData) {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement form submission logic here (e.g., update partner info)
    console.log("Updated Partner Data:", formData);
    onClose(); // Close the edit form after submission
  };

  if (!formData) return null; // Render nothing if no data is available

  return (
    <div className="container d-flex flex-row">
      <div className="leftside col-4">
        <p className="title-text">Partner List</p>
        <div className="tab-layout-div">
          <TabButton isClick={isClick} setClick={setClick} />
          {isClick === "all" && <DataTable onEdit={handleEditClick} />}
        </div>
      </div>

      <div className="rightside col-8 ">
        <h3 className="title-text">Infomation</h3>
        <form onSubmit={handleSubmit}>
          <div className="first-card ">
            <div className="fisrt-group">
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label className="label">Owner</label>
              <input
                type="text"
                name="owner"
                value={formData.owner}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group item-1">
              <label className="label">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="form-control"
              />
            </div>
          </div>
          <div className="second-card">
            <div className="form-group item-2">
              <label className="label">Type</label>
              <input
                type="text"
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="form-control"
              />
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
