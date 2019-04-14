import React from 'react';
import "./style.css";

function prodcard(props) {

    return (

        <div className="ui link cards">


            <div className="card">
                <div className="image">
                    <img alt="#" height="150px" width="20px" src={props.image} />
                </div>
                <div className="content">
                    <div className="header">{props.name}</div>
                    <div className="meta">
                        <a>Friends</a>
                    </div>
                    <div className="description">
                        Matthew is an interior designer living in New York.
            </div>
                </div>
                <div className="extra content">
                    <span className="right floated">
                        {props.price}
                    </span>
                    <span>
                        <i className="dollar icon"></i>
                        Price
            <div className="extra content">
                            <div className="ui disabled primary button">Add</div>
                            <div className="ui disabled button">Delete</div>
                        </div>
                    </span>
                </div>
            </div>



        </div>
    )
}

export default prodcard;