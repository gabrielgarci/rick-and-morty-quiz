import React from 'react'
import PropTypes from 'prop-types'

import './Scoreboard.scss'
import fire from '../../../../../assets/icon/fire.png'

const Scoreboard = props => (
    <div className="scoreboard">
        <div>
            <p className="scoreboard__item">ROUND</p>
            <p className="scoreboard__item">{props.round}</p>
        </div>
        <div className="scoreboard__streak">
            <p>0</p>
            <img className="streak-logo" src={fire} alt="fire" />
        </div>
        <div>
            <p className="scoreboard__item">SCORE</p>
            <p className="scoreboard__item">3000</p>
        </div>
    </div>
)

Scoreboard.prototype = {
    round: PropTypes.string
}

export default Scoreboard