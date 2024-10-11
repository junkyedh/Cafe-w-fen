import React, { ReactNode } from "react";
import "./ModalOverlay.scss";
interface OverlayProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const ModalOverlay: React.FC<OverlayProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">{children}</div>
    </div>
  );
};

export default ModalOverlay;
