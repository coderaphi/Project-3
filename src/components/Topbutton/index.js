import React from 'react'

function topbutton(props) {
    return (
        <div  className="buttonStrip" style={{display: 'flex', justifyContent: 'center'}}>
          <div className="large ui buttons">
            <button onClick={(l) => props.loadProducts('abcat0502000')} className="ui button">Laptops</button>
            <button onClick={(l) => props.loadProducts('abcat0401000')} className="ui button">Cameras</button>
            <button onClick={(l) => props.loadProducts('abcat0600000')}className="ui button">Movies</button>
            <button onClick={(l) => props.loadProducts('pcmcat209400050001')}className="ui button">Phones</button>
            <button onClick={(l) => props.loadProducts('pcmcat241600050001')}className="ui button">Home Audio</button>
            <button onClick={(l) => props.loadProducts('abcat0101000')}className="ui button">TV</button>
            <button onClick={(l) => props.loadProducts('pcmcat1496951152300')}className="ui button">Fitness Wearables</button>
            <button onClick={(l) => props.loadProducts('pcmcat295700050012')}className="ui button">Playstation</button>
            <button onClick={(l) => props.loadProducts('abcat0901000')}className="ui button">Refrigerators</button>
            
            
            
          </div>

        </div>
    )
}

export default topbutton;
