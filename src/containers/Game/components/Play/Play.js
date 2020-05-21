import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import './Play.scss'

import Spinner from '../../../../shared/Spinner/Spinner'
import Button from '../../../../shared/Button/Button'
import Character from './Character/Character'
import Scoreboard from './Scoreboard/Scoreboard'

const Play = props => (
    <Fragment>
        {props.addedScore ? <div className="added-points"><p>+{props.addedScore}</p></div> : null}
        <div className="play">
            {
                props.loading ?
                <Spinner /> : 
                <div className="round">
                    <Scoreboard 
                        round={props.round}
                        score={props.score}
                        streak={props.streak}
                    />
                    <Character 
                        img={props.character.image}
                        name={props.character.name}
                        origin={props.character.origin.name}
                        species={props.character.species}
                    />
                    <div className="btn-group">
                        <Button text="DEAD" types={["dead", "collapse"]} clicked={() => props.answer('Dead')}/>
                        <Button text="ALIVE" types={["collapse"]} clicked={() => props.answer('Alive')}/>
                    </div>
                </div>
            }
        </div>
    </Fragment>
)

Play.propTypes = {
    loading: PropTypes.bool,
    character: PropTypes.object,
    accept: PropTypes.func,
    round: PropTypes.string,
    score: PropTypes.number,
    addedScore: PropTypes.number,
    streak: PropTypes.number,
    answer: PropTypes.func
}

export default Play