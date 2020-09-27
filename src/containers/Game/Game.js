import React, { useState, useEffect } from 'react'
import { Switch, Route, useRouteMatch, useHistory } from 'react-router-dom'

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
    const [ apiError, setApiError ] = useState(false)
    const [ totalCharacters, setTotalCharacters ] = useState(0)
    const [ characters, setCharacters ] = useState([])
    const [ currentRound, setCurrentRound] = useState(0)
    const [ score, setScore ] = useState(0)
    const [ streak, setStreak ] = useState(0)
    const [ addedScore, setAddedScore ] = useState(0)
    const [ showScore, setShowScore ] = useState(false)
    const [ records, setRecords ] = useState([])

    // Guard
    useEffect( () => {
        if ( !name ) history.push('./settings')
    }, [])

    /**
     * Settings
     */
    useEffect( () => {
        const characterNumUrl = 'https://rickandmortyapi.com/api/character'
        fetch(characterNumUrl).then(resp => {
            if (resp.ok) {
                resp.json().then(data => setTotalCharacters(data.info.count))
            } else {
                setLoading(false)
                setApiError(true)
            }
        })
        .catch( err => {
            console.error(err.message)
            setLoading(false)
            setApiError(true)
        })
    }, [])

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
        const randomNumbers = Array.from({length: remainCharacter}, () => Math.floor(Math.random() * totalCharacters))
        const getCharactersUrl = `https://rickandmortyapi.com/api/character/${randomNumbers.join(',')}`
        fetch(getCharactersUrl).then( resp => {
            if (resp.ok) {
                resp.json().then(data => {
                    if (randomNumbers.length > 1) {
                        const validCharacters = data.filter(character => character.status === 'Alive' || character.status === 'Dead')
                        validCharacters ? setCharacters(prevState => [...prevState , ...validCharacters]) : requestCharacters()
                    } else {
                        (data.status === 'Alive' || data.status === 'Dead') ? setCharacters(prevState => [...prevState, data]) : requestCharacters()
                    }
                })
            } else {
                setLoading(false)
                setApiError(true)
            }
        }).catch( err => {
            console.error(err.message)
            setLoading(false)
            setApiError(true)
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
        if ( characters.length === rounds ) {
            // Get global record
            const recordsUrl = 'https://rick-and-morty-quiz-c69bc.firebaseio.com/records.json'
            fetch(recordsUrl).then(resp => {
                if (resp.ok) {
                    resp.json().then(data => {
                        const scores = Object.keys(data).map( key => {
                            const score = data[key]
                            score.id = key
                            return score
                        } )
                        scores.sort( (a, b) =>{
                            if ( a.score > b.score ) return -1
                            if ( a.score < b.score ) return 1
                            return 0
                        })
                        setRecords(scores)
                    })
                } else {
                    setApiError(true)
                }
            }).catch(err => {
                console.error(err.message)
                setApiError(true)
            })
        }
    }, [characters])

    const finishGame = () => {

        const previousScore = records.find(record => record.user === name)

        const sendNewScore = (user, newPlayer = true) => {
            const url = `https://rick-and-morty-quiz-c69bc.firebaseio.com/records${newPlayer ? '' : ('/'+previousScore.id) }.json`
            const gameResult = {
                user: user,
                score: score
            }
            fetch(url, {
                method: newPlayer ? 'POST' : 'PUT',
                body: JSON.stringify(gameResult),
                headers:{
                    'Content-Type': 'application/json'
                }
            }).then(resp => resp.json())
            .then(() => history.push(''))
            .catch(() => setApiError(true))
        }   

        if (typeof previousScore !== 'undefined' && score > previousScore.score) {
            sendNewScore(previousScore.user, false)
        } else if (typeof previousScore !== 'undefined') {
            return history.push('')
        } else {
            sendNewScore(name)
        }
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
                        apiError = { apiError }
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
                        send = { finishGame }
                        record = { records[0].score }
                        score = { score }
                        apiError = { apiError }
                />
            }
            />
        </Switch>
    )
}

export default Game