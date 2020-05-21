import React from 'react'
import PropTypes from 'prop-types'

import './Scoreboard.scss'
import fire from '../../../../../assets/icon/fire.png'

const Scoreboard = props => {

    let streakNumClass = 'streak-num'

    if( props.streak % 5 === 0 && props.streak !== 0) {
        if (props.streak > 5) streakNumClass += ' streak-num--upten'
        else streakNumClass += ' streak-num--upfive'
    }

    return (
    <div className="scoreboard">
        <div>
            <p className="scoreboard__item">ROUND</p>
            <p className="scoreboard__item">{props.round}</p>
        </div>
        <div className="scoreboard__streak">
            <p className={streakNumClass}>{props.streak}</p>
            <img className="streak-logo" src={fire} alt="fire" />
        </div>
        <div>
            <p className="scoreboard__item">SCORE</p>
            <p className="scoreboard__item">{props.score}</p>
        </div>
    </div>
    )
}

Scoreboard.propTypes = {
    round: PropTypes.string,
    score: PropTypes.number,
    streak: PropTypes.number
}

export default Scoreboard