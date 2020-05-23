import React, { useEffect, useState, Fragment } from 'react'
import axios from 'axios'

import './Records.scss'
import Button from '../../shared/Button/Button'
import { Link } from 'react-router-dom'

const Records = () => {

    const [ bestScores, setBestScores ] = useState([])

    useEffect( () => {
        axios.get('https://rick-and-morty-quiz-c69bc.firebaseio.com/records.json?orderBy="score"&limitToLast=10')
            .then(resp => {
                const scores = Object.keys(resp.data).map( key => {
                    const score = resp.data[key]
                    score.id = key
                    return score
                } )
                scores.sort( (a, b) =>{
                    if ( a.score > b.score ) return -1
                    if ( a.score < b.score ) return 1
                    return 0
                })
                setBestScores(scores)
            })
    }, [])  
    
    const display = bestScores ?
        <div className="records">
            <h2 className="records__title">BEST SCORES</h2>
            <div className="records__scores">
                <div className="header"><p>USER</p><p>SCORE</p></div>
                {bestScores.map( score => <div key={score.id} className="row"><p>{score.user}</p><p>{score.score}</p></div>)}
            </div>
            <Link to="/"><Button text="MENU" types={['secondary']} /></Link>
        </div> : null
    
    return(
        <Fragment>
            {display}
        </Fragment>
    )
}

export default Records