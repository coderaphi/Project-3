import React from "react";
import { Button, Dropdown } from "semantic-ui-react";
import Goal from "../Goal";
import "./style.css";

function AddedProdCard(props) {
  return (
    <div className="card">
      <div className="image">
        <img alt="#" height="150px" width="20px" src={props.image} />
      </div>
      <div className="content">
        <div className="header">{props.name}</div>
        <div className="meta" />
        <div className="description" />
      </div>
      <div className="extra content">
        <span className="right floated">{props.price}</span>
        <span>
          <i className="dollar icon" />
          Price
          <div className="extra content">
            {/* <div className="ui disabled primary button">Add</div> */}
            <Button.Group basic size="medium">
              <Button icon="money" />
              <Button icon="delete" onClick={props.deleteProducts} />
            </Button.Group>
            <Goal />
          </div>
        </span>
      </div>
    </div>
  );
}

export default AddedProdCard;
