import React from 'react'
import PropTypes from 'prop-types'

import './Play.scss'

import Spinner from '../../../../shared/Spinner/Spinner'
import Button from '../../../../shared/Button/Button'
import Character from './Character/Character'
import Scoreboard from './Scoreboard/Scoreboard'

const Play = props => (
    <div className="play">
        {
            props.loading ?
            <Spinner /> : 
            <div className="round">
                <Scoreboard round={props.round}/>
                <Character 
                    img={props.character.image}
                    name={props.character.name}
                    origin={props.character.origin.name}
                    species={props.character.species}
                />
                <div className="btn-group">
                    <Button text="DEAD" types={["dead", "collapse"]} />
                    <Button text="ALIVE" types={["collapse"]} clicked={props.accept}/>
                </div>
            </div>
        }
    </div>
)

Play.propTypes = {
    loading: PropTypes.bool,
    character: PropTypes.object,
    accept: PropTypes.func,
    round: PropTypes.string
}

export default Play