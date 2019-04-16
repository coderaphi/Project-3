import React from 'react'

function topbutton(props) {
    return (
        <div  className="buttonStrip" style={{display: 'flex', justifyContent: 'center'}}>
          <div className="large ui buttons">
            <button onClick={(l) => props.laptopData('abcat0502000')} className="ui button">Laptops</button>
            <button onClick={(l) => props.laptopData('abcat0204000')} className="ui button">Headphones</button>
            <button className="ui button">Apple Products</button>
            <button className="ui button">Laptops</button>
            <button className="ui button">Phones</button>
            <button className="ui button">Home Audio</button>
            <button className="ui button">Nintendo</button>
            <button className="ui button">Playstation</button>
            <button className="ui button">Wii</button>
            <button className="ui button">XBox</button>
            
            
          </div>

        </div>
    )
}

export default topbutton;
