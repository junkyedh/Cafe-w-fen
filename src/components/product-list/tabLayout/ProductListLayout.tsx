"use client";
import React, { useState } from "react";

import "./ProductListLayout.scss";

import DataTable from "../tabContent/table/DataTable";
import ActionButton from "../tabContent/actionButton/ActionButton";
const ProductListLayout = () => {

  return (
    <div className="product-list-layout">
      <p className="title-text">Product List</p>
      <div className="tab-layout-div">
        <ActionButton/>
        <DataTable/>
      </div>
    </div>
  );
};
export default ProductListLayout;