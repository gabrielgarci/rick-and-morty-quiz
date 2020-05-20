import React, { useState, useEffect } from 'react'
import { Switch, Route, useRouteMatch, useHistory } from 'react-router-dom'
import axios from 'axios'

import Settings from './components/Settings/Settings'
import Play from './components/Play/Play'

const Game = () => {

    const match = useRouteMatch()
    const history = useHistory()

    const [ nameState, setNameState ] = useState('')
    const [ roundsState, setRoundsState ] = useState(10)
    const [ errorSettingState, setErrorSettingState ] = useState(false)
    const [ loadingState, setLoadingState ] = useState(true)
    const [ charactersState, setCharactersState ] = useState([])
    const [ currentRoundState, setCurrentRoundState] = useState(0)


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
        if (nameState.length > 2) {
            history.push('./play')
            requestCharacters()
        } else {
            setErrorSettingState(true)
        }
    }

    /**
     * Play
     */
    useEffect(() => {
        if (history.location.pathname === '/game/play') {
            charactersState.length === roundsState ? 
                setTimeout(() => setLoadingState(false), 500) : 
                requestCharacters()
        }
    }, [charactersState])

    const requestCharacters = () => {
        const remainCharacter = roundsState - charactersState.length
        const randomNumbers = Array.from({length: remainCharacter}, () => Math.floor(Math.random() * 591))
        axios.get(`https://rickandmortyapi.com/api/character/${randomNumbers.join(',')}`)
            .then(resp => {
                if (randomNumbers.length > 1) {
                    const validCharacters = resp.data.filter(character => character.status === 'Alive' || character.status === 'Dead')
                    setCharactersState(prevState => [...prevState , ...validCharacters])
                } else {
                    console.log(resp.data)
                    if ( resp.data.status === 'Alive' || resp.data.status === 'Dead') setCharactersState(prevState => [...prevState, resp.data])
                }
            })
    }


    return (
        <Switch>
            {<Route path={`${match.path}/play`} render={
                () => <Play
                        loading={loadingState}
                        character={charactersState[currentRoundState]}
                    />
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