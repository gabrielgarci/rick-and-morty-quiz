import React from 'react'
import PropTypes from 'prop-types'

import './Play.scss'

import Spinner from '../../../../shared/Spinner/Spinner'

const Play = props => (
    <div className="play">
        {
            props.loading ?
            <Spinner /> : 
            <div className="round">
                <div className="character">
                    <img src={props.character.image}/>
                </div>
            </div>
        }
    </div>
)

Play.propTypes = {
    loading: PropTypes.bool,
    character: PropTypes.object
}

export default Play