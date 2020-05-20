import React from 'react'
import PropTypes from 'prop-types'

import './Character.scss'

const Character = props => (
    <div className="character">
        <img className="character__pic" src={props.img} alt="character"/>
        <div className="character__info">
            <div className="field">
                <p className="field__title">NAME: </p>
                <p className="field__data">{props.name.toUpperCase()}</p>
            </div>
            <div className="field">
                <p className="field__title">SPECIES: </p>
                <p className="field__data">{props.species.toUpperCase()}</p>
            </div>
            <div className="field">
                <p className="field__title">ORIGIN: </p>
                <p className="field__data">{props.origin.toUpperCase()}</p>
            </div>
        </div>
    </div>
)

Character.propTypes = {
    name: PropTypes.string,
    species: PropTypes.string,
    origin: PropTypes.string,
    img: PropTypes.string
}

export default Character