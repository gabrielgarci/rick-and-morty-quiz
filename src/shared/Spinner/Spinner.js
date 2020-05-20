import React from 'react'

import './Spinner.scss'
import mortySpinner from '../../assets/images/morty-face.png'

const Spinner = () => (
    <div className="spinner">
        <div className="spinner__frame" >
            <img className="pic" src={mortySpinner} alt="Loading" />
        </div>
        <h2 className="spinner__text"></h2>
    </div>
)

export default Spinner