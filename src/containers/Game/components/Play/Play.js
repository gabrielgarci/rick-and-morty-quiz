import React from 'react'
import PropTypes from 'prop-types'

import './Play.scss'

import Spinner from '../../../../shared/Spinner/Spinner'

const Play = props => (
    <div className="play">
        {
            props.loading ?
            <Spinner /> : 
            <h1 style={{color:"white"}}>Weeeee</h1>
        }
    </div>
)

Play.propTypes = {
    loading: PropTypes.bool,
}

export default Play