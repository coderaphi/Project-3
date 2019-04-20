import React, { useState, useContext } from "react";
// import ReactDOM from 'react-dom';
import Coverflow from "react-coverflow";
import { Button, Dropdown } from "semantic-ui-react";
import TabContext from "../../TabContext";
import "./style.css";

import Prodcard from "../Prodcard";

const fn = function() {};
function Carousel(props) {
  const tabContext = useContext(TabContext);
  return (
    <div>
      <Coverflow
        displayQuantityOfSide={2}
        enableScroll={false}
        enableHeading
        active={0}
        width={960}
        height={480}
        navigation={false}
      >
        {props.products
          .filter(p => p.image)
          .map((p, i) => {
            const t1 = (
              <div
                alt={p.name}
                style={{
                  backgroundColor: "#FFF",
                  padding: "20px 60px",
                  display: "grid",
                  justifyContent: "center",
                  alignItems: "center",
                  gridTemplateRows: "25px 250px"
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <Button.Group color="primary">
                    <Button size={"tiny"}>
                      Add
                    </Button>
                    <Dropdown
                      as={Button}
                      className="icon"
                      onChange={
                        (e, obj) => {
                          const { value } = obj;
                          props.addProducts({...p, tabName: value.name}, value.index)
                        }
                      }
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
                <div
                  style={{
                    backgroundImage: `url(${p.image})`,
                    width: "225px",
                    backgroundPosition: "center",
                    height: "100%",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat"
                  }}
                />
              </div>
            );

            return t1;
          })}
      </Coverflow>
    </div>
  );
}

export default Carousel;
