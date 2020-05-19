import React from 'react'
import PropTypes from 'prop-types'

import './Settings.scss'
import arrow from '../../../../assets/icon/arrow.svg'
import Button from '../../../../shared/Button/Button'


const Settings = props => {

    return (
        <div className="settings">
            <div className="form">
                <div className="field">
                    <p className="field__name" >NAME</p>
                    <input 
                        className={props.inputError ? 'field__input field__input--error' : 'field__input'} 
                        type="text" 
                        defaultValue={props.name} 
                        placeholder="User name" 
                        onBlur={(event) => props.changeName(event.target.value)}
                    />
                    <p className={props.inputError ? 'field__error field__error--show' : 'field__error'} >
                        *Invalid name! Name must have at least 3 character.
                    </p>
                </div>
                <div className="field">
                    <p className="field__name" >ROUNDS</p>
                    <div className="field__count">
                        <img className="arrow arrow--decrease" src={arrow} alt="decresae quantity" onClick={props.reduceQty}/>
                        <p className="number">{props.rounds}</p>
                        <img className="arrow arrow--increase" src={arrow} alt="incresae quantity" onClick={props.addQty}/>
                    </div>
                </div>
            </div>
            <div className="btn-group">
                <Button text="CANCEL" types={["secondary", "collapse"]} />
                <Button text="ACCEPT" types={["collapse"]} clicked={props.accept}/>
            </div>
        </div>
    )
}

Settings.propTypes = {
    name: PropTypes.string,
    rounds: PropTypes.number,
    inputError: PropTypes.bool,
    changeName: PropTypes.func,
    addQty: PropTypes.func,
    reduceQty: PropTypes.func,
    accept: PropTypes.func,
}

export default Settings