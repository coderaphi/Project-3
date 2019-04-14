import React from 'react';
// import ReactDOM from 'react-dom';
import Coverflow from 'react-coverflow';
import Topbutton from '../Topbutton';
import Prodcard from '../Prodcard';

const fn = function () {
}
function Carousel(props) {

  return (

    <div>
      <div className="topbutton">
        <Topbutton></Topbutton>
      </div>

      <Coverflow
        displayQuantityOfSide={2}
        enableScroll={false}
        enableHeading
        active={0}
        width={960}
        height={480}
        navigation={false}

      >

        {
          props.products.filter(p => p.image).map((p, i) => {
            const imgData = (<img
              key={`img-${p.productId}`}
              src={p.image}
              alt={p.name}
              data-action="https://facebook.github.io/react/"
            />);

            return imgData;

          })

        }

      </Coverflow>


    </div>
  )
}

export default Carousel;
