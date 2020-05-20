import React from 'react'

import './Spinner.scss'
import mortySpinner from '../../assets/images/morty-face.png'

const Spinner = () => (
    <div className="spinner">
        <img className="spinner__pic" src={mortySpinner} alt="Loading" />
        <h2 className="spinner__text">LOADING...</h2>
    </div>
)

export default Spinner