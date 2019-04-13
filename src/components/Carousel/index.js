import React from 'react';
import ReactDOM from 'react-dom';
import Coverflow from 'react-coverflow';
import Topbutton from '../Topbutton';
// import api from './util/api';



const fn = function () {
  /* do your action */
}

function Carousel(props) {

  return (

    <div>
      <div ClassName="topbutton">
      <Topbutton>ttttt</Topbutton>
      <Topbutton></Topbutton>
      <Topbutton></Topbutton>
      
      </div>





      <Coverflow width="960" height="500"
        displayQuantityOfSide={2}
        navigation={false}
        enableScroll={true}
        clickable={true}
        active={0}
      >
        <div
          onClick={() => fn()}
          onKeyDown={() => fn()}
          role="menuitem"
          tabIndex="0"
        >
          <img
            src='https://techcrunch.com/wp-content/uploads/2011/12/tin-tin.jpg?w=446'
            alt='title or description'
            style={{
              display: 'block',
              width: '100%',

            }}
          />
        </div>
        <img height="200px" width="400px" src='https://target.scene7.com/is/image/Target/GUEST_ad190cb8-fa66-44bf-b72b-fb5c0da9554d?wid=488&hei=488&fmt=pjpeg' alt='title or description' data-action="http://andyyou.github.io/react-coverflow/" />
        <img height="200px" width="400px" src='https://is5-ssl.mzstatic.com/image/thumb/Video118/v4/6c/8e/5c/6c8e5cd4-9dfe-2e9c-2603-d16a5f92e6a3/pr_source.lsr/268x0w.png' alt='title or description' data-action="http://andyyou.github.io/react-coverflow/" />
      </Coverflow>
    </div>
  )


}

export default Carousel;
