import { useState } from "react";
import TabContent from "../tabContent/content/TabContent";
import TabEditProduct from "../tabEdit/tabEditProduct";
import "./ProductListLayout.scss"


const ProductListLayout = () => {

  const [isEditing, setIsEditing] = useState(false);

    return(

        <div className="container-1">
          <div className="partner-list-layout">
              <p className="title-text">Product List</p>
              <div className="tab-layout-div">
              <TabContent />
              </div>          
          </div>

            <TabEditProduct/>
        </div>
      
       

       
    )
};

export default ProductListLayout;