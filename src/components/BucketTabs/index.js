import React, { Component, useState, useContext } from "react";
import { Tab, Icon } from "semantic-ui-react";
import AddedProdCard from "../AddedProdCard";
import TabContext from "../../TabContext";
import "./style.css";

const createpanes = (createivunt = [], deleteProducts, tabs) => {
  const newTabs = tabs.map(tab => {
    return {
      menuItem: tab,
      render: () => (
        <Tab.Pane>
          <div className="ui link cards">
            {createivunt.filter(c => c.tabName === tab).map((product, i) => (
              <AddedProdCard
                key={`p-${product.productId}-${i}`}
                name={product.name}
                image={product.image}
                price={product.salePrice}
                deleteProducts={() => deleteProducts(product)}
              />
            ))}
          </div>
        </Tab.Pane>
      )
    }
  });

  return [
    ...newTabs,
    {
      menuItem: '+ Add New',
      render: () => (
        <Tab.Pane>
          <div className="ui link cards">
            New Tab
          </div>
        </Tab.Pane>
      )
    }
  ]
};

function BucketTabs(props) {
  // const [activeIndex, setActiveIndex ] = useState(0);
  const tabContext = useContext(TabContext);
  console.log(tabContext);
  const panes = createpanes(props.createivunt, props.deleteProducts, tabContext.tabs);
  return (
    <div>

      <Tab
        panes={panes}
        activeIndex={tabContext.tabIndex}
        onTabChange={(e, { activeIndex }) => tabContext.changeActiveTab(activeIndex)}
      />
    </div>
  );
}

export default BucketTabs;
