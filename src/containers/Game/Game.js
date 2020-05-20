import React, { useState } from 'react'
import { Switch, Route, useRouteMatch, useHistory } from 'react-router-dom'

import Settings from './components/Settings/Settings'
import Play from './components/Play/Play'

const Game = () => {

    const match = useRouteMatch()
    const history = useHistory()

    const [ nameState, setNameState ] = useState('')
    const [ roundsState, setRoundsState ] = useState(10)
    const [ errorSettingState, setErrorSettingState ] = useState(false)


    /**
     * Settings
     */
    const changeNameHandler = (name) => {
        setNameState(name)
    }

    const addQtyHandler = () => {
        setRoundsState(prevState => prevState < 30 ? prevState += 5 : prevState )
    }

    const reduceQtyHandler = () => {
        setRoundsState(prevState => prevState > 5 ? prevState -= 5 : prevState )
    }

    const acceptSettingsHandler = () => {
        nameState.length > 2 ? history.push('./play') : setErrorSettingState(true)
    }

    return (
        <Switch>
            {<Route path={`${match.path}/play`} render={
                () => <Play />
            }/>}
            <Route path={`${match.path}/settings`} render={
                () => <Settings 
                        addQty={addQtyHandler} 
                        reduceQty={reduceQtyHandler} 
                        changeName={changeNameHandler}
                        accept={acceptSettingsHandler}
                        name={nameState} 
                        rounds={roundsState}
                        inputError={errorSettingState}
                    />
                }/>
        </Switch>
    )
}

export default Game