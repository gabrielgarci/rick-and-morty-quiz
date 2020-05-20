import React from 'react'

import './Spinner.scss'
import mortySpinner from '../../assets/images/morty-face.png'

const Spinner = () => (
    <div className="spinner">
        <div className="spinner__frame" >
            <img className="pic" src={mortySpinner} alt="Loading" />
        </div>
        <p className="spinner__text"></p>
    </div>
)

export default Spinner