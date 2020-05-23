import React, { useState, useEffect } from 'react'
import { Switch, Route, useRouteMatch, useHistory } from 'react-router-dom'
import axios from 'axios'

import Settings from './components/Settings/Settings'
import Play from './components/Play/Play'
import Resume from './components/Resume/Resume'

const Game = () => {

    const match = useRouteMatch()
    const history = useHistory()

    const [ name, setName ] = useState('')
    const [ rounds, setRounds ] = useState(10)
    const [ errorSetting, setErrorSetting ] = useState(false)
    const [ loading, setLoading ] = useState(true)
    const [ characters, setCharacters ] = useState([])
    const [ currentRound, setCurrentRound] = useState(0)
    const [ score, setScore ] = useState(0)
    const [ streak, setStreak ] = useState(0)
    const [ addedScore, setAddedScore ] = useState(0)
    const [ showScore, setShowScore ] = useState(false)
    const [ record, setRecord ] = useState(undefined)


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

    const onAction = type => {
        if ( type === 'accept' ) {
            if (name.length > 2) {
                history.push('./play')
                requestCharacters()
            } else {
                setErrorSetting(true)
            }
        } else {
            history.push('')
        }
    }

    /**
     * Play
     */
    useEffect(() => {
        if (history.location.pathname === '/game/play') {
            characters.length === rounds ? setTimeout(() => setLoading(false), 500) : requestCharacters()
        }
    }, [characters])

    useEffect(() => {
        if (showScore) {
            setTimeout(() => {
                setShowScore(false)
                currentRound + 1 !== rounds ? setCurrentRound(prevState => prevState + 1) : history.push('./resume')
            }, 1100)
        }
    }, [showScore])

    // Ensure there are only status 'Alive' or 'Dead'
    const requestCharacters = () => {
        const remainCharacter = rounds - characters.length
        const totalCharacters = 591
        const randomNumbers = Array.from({length: remainCharacter}, () => Math.floor(Math.random() * totalCharacters))
        axios.get(`https://rickandmortyapi.com/api/character/${randomNumbers.join(',')}`)
            .then(resp => {
                if (randomNumbers.length > 1) {
                    const validCharacters = resp.data.filter(character => character.status === 'Alive' || character.status === 'Dead')
                    validCharacters ? setCharacters(prevState => [...prevState , ...validCharacters]) : requestCharacters()
                } else {
                    (resp.data.status === 'Alive' || resp.data.status === 'Dead') ? setCharacters(prevState => [...prevState, resp.data]) : requestCharacters()
                }
            })
    }

    const answer = resp => {
        if ( resp === characters[currentRound].status ) {
            const points = (Math.floor(streak/5) + 1) * 100
            setStreak(prevState => prevState + 1)
            setScore(prevState => prevState + points)
            setAddedScore(points)
        } else {
            setStreak(0)
            setAddedScore(0)
        }
        setShowScore(true)
    }

    /**
     * Resume
     */
    useEffect(() => {
        if ( history.location.pathname === '/game/resume' ) {
            axios.get('https://rick-and-morty-quiz-c69bc.firebaseio.com/records.json?orderBy=%22score%22&limitToLast=1')
                .then(resp => {
                    resp.data ? setRecord(resp.data[Object.keys(resp.data)[0]].score) : setRecord(0)
                })
        }
    }, [history.location.pathname])

    const sendGameResult = () => {
        const gameResult = {
            user: name,
            score: score
        }
        axios.post('https://rick-and-morty-quiz-c69bc.firebaseio.com/records.json', gameResult)
            .then( () => history.push(''))
    }


    return (
        <Switch>
            <Route path = { `${match.path}/settings` } render = {
                ()  => <Settings 
                        addQty = { addQtyHandler } 
                        reduceQty = { reduceQtyHandler } 
                        changeName = { changeNameHandler }
                        action = { onAction }
                        name = { name } 
                        rounds = { rounds }
                        inputError = { errorSetting }
                    />
            }/>
            <Route path={ `${match.path}/play` } render={
                () => <Play
                        loading = { loading }
                        character = { characters[currentRound] }
                        round = { [ currentRound + 1 , rounds ].join(' / ')}
                        score = { score }
                        showScore = { showScore }
                        addedScore = { addedScore }
                        streak = { streak }
                        answer = { answer }
                    />
            }/>
            <Route path={ `${match.path}/resume` } render={
                () => <Resume 
                        send = {sendGameResult}
                        record = {record}
                />
            }
            />
        </Switch>
    )
}

export default Game