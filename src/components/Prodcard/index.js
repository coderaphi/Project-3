import React from 'react';
import { Button, Dropdown } from 'semantic-ui-react'
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
                        
                    </div>
                    <div className="description">
                       
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
                            {/* <div className="ui disabled primary button">Add</div> */}
                            <Button.Group color='primary'>
                                <Button
                                onClick={props.addProducts}
                                >Add</Button>
                                
                                <Dropdown
                                as={Button}
                                className='icon'
                                
                                options={[

                                    { key: 'edit', text: 'Tech', value: 'edit' },
                                    { key: 'delete', text: 'Remove Post', value: 'delete' },
                                    { key: 'hide', text: 'Hide Post', value: 'hide' }
                                ]}
                                trigger={<React.Fragment />}
                                />
                            </Button.Group>
                            
                        </div>
                    </span>
                </div>
            </div>



        </div>
    )
}

export default prodcard;