import React, { useContext } from "react";
import { Button, Dropdown } from "semantic-ui-react";
import TabContext from "../../TabContext";
import "./style.css";

function prodcard(props) {
  const tabContext = useContext(TabContext);
  return (
    <div className="card">
      <div className="image">
        <img alt="#" height="150px" width="20px" src={props.image} />
      </div>
      <div className="content">
        <div className="header">{props.name}</div>
      </div>
      <div className="extra content">
        <span className="right floated">{props.price}</span>
        <span>
          <i className="dollar icon" />
          Price
          <div className="extra content">
            {/* <div className="ui disabled primary button">Add</div> */}
            <Button.Group color="primary">
              <Button size={"tiny"}>Add</Button>
              <Dropdown
                as={Button}
                className="icon"
                onChange={(e, obj) => {
                  const { value } = obj;
                  props.addProducts(value.name, value.index);
                }}
                options={tabContext.tabs.map((t, i) => ({
                  key: i,
                  text: t,
                  value: {
                    name: t,
                    index: i
                  }
                }))}
                trigger={<React.Fragment />}
              />
            </Button.Group>
          </div>
        </span>
      </div>
    </div>
  );
}

export default prodcard;
