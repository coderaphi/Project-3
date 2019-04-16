import React from 'react';
// import ReactDOM from 'react-dom';
import Coverflow from 'react-coverflow';

import Prodcard from '../Prodcard';

const fn = function () {
}
function Carousel(props) {

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

        {
          props.products.filter(p => p.image).map((p, i) => {
            const imgData = (<img
              key={`img-${p.productId}`}
              src={p.image}
              // width={'285px'}
              height={'250px'}
              alt={p.name}
              style={{width: 'auto'}}
              data-action="https://facebook.github.io/react/"
            />);

            const t1 = (
              <div alt={p.name} style={{backgroundColor: '#FFF',padding: '60px', height:'285px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                {/* <img
                  key={`img-${p.productId}`}
                  src={p.image}
                  // width={'250px'}
                  // height={'250px'}
                  alt={p.name}
                  style={{width: '250px'}}
                  data-action="https://facebook.github.io/react/"
                /> */}
                <div style={{backgroundImage: `url(${p.image})`,  width:' 100%', backgroundPosition: 'center', height: '100%', backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}} />
              </div>
            )

            // const t = <div style={{background: `url(${p.image})`, backgroundSize: 'length', width: '285px', height: '285px', backgroundRepeat: 'no-repeat'}} />

            return t1;

          })

        }

      </Coverflow>


    </div>
  )
}

export default Carousel;
