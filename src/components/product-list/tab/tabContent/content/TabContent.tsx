import React, { useState } from "react";
import ActionButton from "../actionButton/ActionButton";
import "./TabContent.scss";
import AddProductDialog from "@/components/product-list/dialog/addProductDialog/AddProductDialog";

const TabContent = () => {

  const [isAddProductDialogOpen, setIsAddProductDialogOpen] = useState(false);

  return (
    <div className="tab-content-div">
      <ActionButton onNewClick={() => setIsAddProductDialogOpen(true)} onExportClick={() =>{}} onImportClick={() =>{}} />
      <AddProductDialog isOpen={isAddProductDialogOpen} onClose={() => setIsAddProductDialogOpen(false)} />
    </div>
  );
};

export default TabContent;
