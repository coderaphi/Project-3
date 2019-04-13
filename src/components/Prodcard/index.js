import React from 'react';
import "./style.css";

function prodcard (props) {

    return(

    <div className="row">   
        <div class="ui link cards">
      

            <div class="card">
                <div class="image">
                     <img alt="#" src={props.image} />
            </div>
            <div class="content">
                <div class="header">{props.name}</div> 
                    <div class="meta">
                        <a>Friends</a>
                    </div>
                <div class="description">
                 Matthew is an interior designer living in New York.
                </div>
            </div>
            <div class="extra content">
              <span class="right floated">
                {props.price}
              </span>
              <span>
                <i class="dollar icon"></i>
                Price
                <div class="extra content">
                  <div class="ui disabled primary button">Add</div>
                    <div class="ui disabled button">Delete</div>
                </div>
              </span>
            </div>
          </div>
            


        </div>
    </div>     
    )
}

export default prodcard;