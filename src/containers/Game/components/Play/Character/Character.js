import React from 'react'

import './Character.scss'

const Character = props => (
    <div className="character">
        <img className="character__pic" src={props.img} alt="character"/>
        <div className="character__info">
            <p className="field"><span className="field__title">NAME: </span>{props.name.toUpperCase()}</p>
            <p className="field"><span className="field__title">SPECIES: </span>{props.species.toUpperCase()}</p>
            <p className="field"><span className="field__title">ORIGIN: </span>{props.origin.toUpperCase()}</p>
        </div>
    </div>
)

export default Character