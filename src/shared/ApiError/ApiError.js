import React from 'react'
import { Link } from 'react-router-dom'

import './ApiError.scss'
import rickError from '../../assets/images/rick-face.png'
import Button from '../../shared/Button/Button'

const ApiError = () => (
    <div className="error">
        <div className="error__frame" >
            <img className="pic" src={rickError} alt="Loading" />
        </div>
        <p className="error__text">Connection problem!</p>
        <Link className="error_btn" to="/"><Button text="MENU" types={['secondary']} /></Link>
    </div>
)

export default ApiError