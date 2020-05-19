import React, { useState } from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import Settings from './components/Settings/Settings'

const Game = () => {

    let match = useRouteMatch()

    const [ nameState, setNameState ] = useState('')
    const [ roundsState, setRoundsState ] = useState(10)

    const changeNameHandler = (name) => {
        setNameState(name)
    }

    const addQtyHandler = () => {
        setRoundsState(prevState => prevState < 30 ? prevState += 5 : prevState )
    }

    const reduceQtyHandler = () => {
        setRoundsState(prevState => prevState > 5 ? prevState -= 5 : prevState )
    }

    return (
        <Switch>
            <Route path={`${match.path}/settings`} render={
                () => <Settings 
                        addQty={addQtyHandler} 
                        reduceQty={reduceQtyHandler} 
                        changeName={changeNameHandler} 
                        name={nameState} 
                        rounds={roundsState} 
                    />
                }/>
        </Switch>
    )
}

export default Game