import React from 'react'
import './index.css'

const Shows = props => {
    const {showData} = props 
    const {cityName,date,distance,eventName,imageUrl,weather} = showData

    console.log({imageUrl})


    return (
        <div className='show-container' style={{backgroundImage: `url(${imageUrl})`}}>
            <img src={imageUrl} alt="ok"/>
            <p>{cityName}</p>
            <p>{date}</p>
        </div>
    )
}

export default Shows