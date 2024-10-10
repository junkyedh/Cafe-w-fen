import TabContent from "../tabContent/content/TabContent";


const ProductListLayout = () => {
    return(
        <div className="partner-list-layout">
        <p className="title-text">Product List</p>
        <div className="tab-layout-div">
          <TabContent />
        </div>
      </div>
    )
};

export default ProductListLayout;