import React from 'react'

export default function PlayerCard(props) {
    return (
        <div className='playerCard'>
            <h3>{props.name}</h3>
            <p>Country: {props.country}</p>
            <p>id: {props.id}</p>
            <p>Searches: {props.searches}</p>
        </div>
    )
}
