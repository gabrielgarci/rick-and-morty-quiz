import React from 'react'
import PropTypes from 'prop-types'

import './Play.scss'

import Spinner from '../../../../shared/Spinner/Spinner'
import Character from './Character/Character'

const Play = props => (
    <div className="play">
        {
            props.loading ?
            <Spinner /> : 
            <div className="round">
                <Character 
                    img={props.character.image}
                    name={props.character.name}
                    origin={props.character.origin.name}
                    species={props.character.species}
                />
            </div>
        }
    </div>
)

Play.propTypes = {
    loading: PropTypes.bool,
    character: PropTypes.object
}

export default Play