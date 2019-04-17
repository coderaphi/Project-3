import React from 'react'

function topbutton(props) {
    return (
        <div  className="buttonStrip" style={{display: 'flex', justifyContent: 'center'}}>
          <div className="large ui buttons">
            <button onClick={(l) => props.laptopData('abcat0502000')} className="ui button">Laptops</button>
            <button onClick={(l) => props.cameraData('abcat0401000')} className="ui button">Cameras</button>
            <button onClick={(l) => props.moviesData('abcat0600000')}className="ui button">Movies</button>
            <button onClick={(l) => props.phonesData('pcmcat209400050001')}className="ui button">Phones</button>
            <button onClick={(l) => props.homeAudioData('pcmcat241600050001')}className="ui button">Home Audio</button>
            <button onClick={(l) => props.tvData('abcat0101000')}className="ui button">TV</button>
            <button onClick={(l) => props.fitnessWearables('pcmcat242800050021')}className="ui button">Fitness Wearables</button>
            <button onClick={(l) => props.playstationData('pcmcat295700050012')}className="ui button">Playstation</button>
            <button onClick={(l) => props.fridgeData('abcat0901000')}className="ui button">Refrigerators</button>
            
            
            
          </div>

        </div>
    )
}

export default topbutton;
