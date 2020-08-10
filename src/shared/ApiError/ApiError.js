import React from 'react'

import './ApiError.scss'
import rickError from '../../assets/images/rick-face.png'

const ApiError = () => (
    <div className="error">
        <div className="error__frame" >
            <img className="pic" src={rickError} alt="Loading" />
        </div>
        <p className="error__text">Connection problem!</p>
    </div>
)

export default ApiError