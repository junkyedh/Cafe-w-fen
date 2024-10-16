import { useState } from "react";
import "./CreateWarehouse.scss";

export const CreateWarehouse = ({ onclose }: any) => {
  const [warehouse_name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [activeType, setActiveType] = useState<string | null>("self");
  const [partner, setPartner] = useState<string>("");
  const [manager, setManager] = useState<string>("");

  const handleClick = (type: string) => {
    setActiveType(type);
  };

  const handleCreatePartner = () => {
    onclose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3 className="title-add">Add New Warehouse</h3>
        <div className="add-info-box">
          <div className="add-warehouse-name">
            <p className="title-add-name">Warehouse Name</p>
            <input
              className="input-warehouse-name"
              value={warehouse_name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="add-address">
            <p className="title-add-address">Address</p>
            <input
              className="input-address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="add-price">
            <p className="title-add-price">Price</p>
            <input
              className="input-price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="type-warehouse-box">
            <div>
              <p className="type-title">Type</p>
              <div className="select-box">
                <div
                  className={`type-option ${
                    activeType === "self" ? "active" : ""
                  }`}
                  onClick={() => handleClick("self")}
                >
                  Self
                </div>
                <div
                  className={`type-option ${
                    activeType === "rent" ? "active" : ""
                  }`}
                  onClick={() => handleClick("rent")}
                >
                  Rent
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="type-warehouse-box">
          <div className="add-info-box">
            <div className="add-partner">
              <p className="title-add-partner">Partner</p>
              <input
                className="input-partner"
                value={partner}
                onChange={(e) => setPartner(e.target.value)}
              />
            </div>
            <div className="add-manager">
              <p className="title-add-manager">Manager</p>
              <input
                className="input-manager"
                value={manager}
                onChange={(e) => setManager(e.target.value)}
              />
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
