import React, { useState } from "react";
import "./style.css";
import { Button, Form } from "semantic-ui-react";
import api from "../../util/api";

function create(props) {
  const [itemName, setItemName] = useState("");
  const [url, setUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [occasion, setOccasion] = useState("");
  const [price, setPrice] = useState("");

  const onSubmit = async () => {
    console.log('here');
    const product = {
      name: itemName,
      image: imageUrl,
      productId: new Date().getTime(),
      tabName: "My iVunt",
      salePrice: price
    };
    try {
      console.log(product);
      const prod = await api.createProduct(product);
      console.log(prod);
      props.addProduct(product);
      props.onClose();
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <Form>
        <Form.Field widths="equal">
          <Form.Input
            fluid
            label="Item Name"
            placeholder="Item Name"
            type="text"
            value={itemName}
            onChange={e => setItemName(e.target.value)}
          />
          <Form.Input
            fluid
            label="Product Link"
            placeholder="URL"
            type="text"
            value={url}
            onChange={e => setUrl(e.target.value)}
          />
          <Form.Input
            fluid
            label="Image URL "
            placeholder="Image URL"
            type="text"
            value={imageUrl}
            onChange={e => setImageUrl(e.target.value)}
          />
           <Form.Input
            fluid
            label="Price"
            placeholder="Price"
            type="text"
            value={price}
            onChange={e => setPrice(e.target.value)}
          />

          <select
            name="cars"
            value={occasion}
            onChange={e => setOccasion(e.target.value)}
          >
            <label>Select occasion</label>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Graduation">Graduation</option>
            <option value="Wedding Shower">Wedding Shower</option>
            <option value="College Stuff">College Stuff</option>
            <option value="Charity">Charity</option>
            <option value="Bar Mitzvah">Bar Mitzvah</option>
            <option value="sweet sixteen">sweet sixteen</option>
            <option value="Baby Shower">Baby Shower</option>
            <option value="Baby Shower">Baby Shower</option>
            <option value="Baby Shower">Baby Shower</option>
            <option value="Other">Other</option>
          </select>
        </Form.Field>
        <Button type="submit" onClick={onSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default create;
