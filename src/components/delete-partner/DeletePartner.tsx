import React from "react";
import "./DeletePartner.scss";
import { DataWarehouse } from "../edit-partner/partner-list/DataTable";

interface DeletePartnerProps {
  item: DataWarehouse | null;
  onClose: () => void;
}

const DeletePartner: React.FC<DeletePartnerProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="d-flex flex-column gap-2">
      <p className="text-tilte">Delete Partner</p>
      <p className="text-center text-content">
        Xóa <span className="fw-bold">{item.name}</span> của{" "}
        <span className="fw-bold">{item.owner}</span>?
      </p>
      {/* Thêm logic xóa tại đây */}
      <div className="btn-group">
        <div>
          <button type="button" className="btn btn-second" onClick={onClose}>
            Cancel
          </button>
        </div>
        <div>
          <button type="submit" className="btn btn-pri">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletePartner;
