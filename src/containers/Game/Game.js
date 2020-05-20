import React, { useState, useEffect } from 'react'
import { Switch, Route, useRouteMatch, useHistory } from 'react-router-dom'
import axios from 'axios'

import Settings from './components/Settings/Settings'
import Play from './components/Play/Play'

const Game = () => {

    const match = useRouteMatch()
    const history = useHistory()

    const [ name, setName ] = useState('')
    const [ rounds, setRounds ] = useState(10)
    const [ errorSetting, setErrorSetting ] = useState(false)
    const [ loading, setLoading ] = useState(true)
    const [ characters, setCharacters ] = useState([])
    const [ currentRound, setCurrentRound] = useState(0)


    /**
     * Settings
     */
    const changeNameHandler = (name) => {
        setName(name)
    }

    const addQtyHandler = () => {
        setRounds(prevState => prevState < 30 ? prevState += 5 : prevState )
    }

    const reduceQtyHandler = () => {
        setRounds(prevState => prevState > 5 ? prevState -= 5 : prevState )
    }

    const acceptSettingsHandler = () => {
        if (name.length > 2) {
            history.push('./play')
            requestCharacters()
        } else {
            setErrorSetting(true)
        }
    }

    /**
     * Play
     */
    useEffect(() => {
        if (history.location.pathname === '/game/play') {
            characters.length === rounds ? 
                setTimeout(() => setLoading(false), 500) : 
                requestCharacters()
        }
    }, [characters])

    // Ensure there are only status 'Alive' or 'Dead'
    const requestCharacters = () => {
        const remainCharacter = rounds - characters.length
        const randomNumbers = Array.from({length: remainCharacter}, () => Math.floor(Math.random() * 591))
        axios.get(`https://rickandmortyapi.com/api/character/${randomNumbers.join(',')}`)
            .then(resp => {
                if (randomNumbers.length > 1) {
                    const validCharacters = resp.data.filter(character => character.status === 'Alive' || character.status === 'Dead')
                    validCharacters ? setCharacters(prevState => [...prevState , ...validCharacters]) : requestCharacters()
                } else {
                    if ( resp.data.status === 'Alive' || resp.data.status === 'Dead') setCharacters(prevState => [...prevState, resp.data])
                    else requestCharacters()
                }
            })
    }


    return (
        <Switch>
            {<Route path={`${match.path}/play`} render={
                () => <Play
                        loading={loading}
                        character={characters[currentRound]}
                        round={[currentRound, rounds].join(' / ')}
                    />
            }/>}
            <Route path={`${match.path}/settings`} render={
                () => <Settings 
                        addQty={addQtyHandler} 
                        reduceQty={reduceQtyHandler} 
                        changeName={changeNameHandler}
                        accept={acceptSettingsHandler}
                        name={name} 
                        rounds={rounds}
                        inputError={errorSetting}
                    />
                }/>
        </Switch>
    )
}

export default Game