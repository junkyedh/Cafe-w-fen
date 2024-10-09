import { useState } from "react";
import "./CreatePartner.scss";

export const CreatePartner = ({ onclose }: any) => {
  const [activeType, setActiveType] = useState<string | null>("supplier");
  const [name, setName] = useState<string>("");
  const [owner, setOwner] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const handleClick = (type: string) => {
    setActiveType(type);
  };

  const handleCreatePartner = () => {
    onclose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3 className="title-add">Add New Partner</h3>
        <div className="add-info-box">
          <div className="add-name">
            <p className="title-add-name">Name</p>
            <input
              className="input-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="add-owner">
            <p className="title-add-owner">Owner</p>
            <input
              className="input-owner"
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
            />
          </div>
          <div className="add-location">
            <p className="title-add-location">Location</p>
            <input
              className="input-location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>

        <div className="type-partner-box">
          <div>
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

        <div className="option">
          <div></div>
          <div className="option-main">
            <button className="button-cancel" onClick={onclose}>
              Cancel
            </button>
            <button className="button-create" onClick={handleCreatePartner}>
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
