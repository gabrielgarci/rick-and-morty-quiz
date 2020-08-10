import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import './Resume.scss'
import recordPic from '../../../../assets/images/record.png'
import resumePic from '../../../../assets/images/finish.png'

import Button from '../../../../shared/Button/Button'
import Spinner from '../../../../shared/Spinner/Spinner'
import ApiError from '../../../../shared/ApiError/ApiError'

const Resume = props => {

    const resumeDisplay = props.score > props.record ? 
        <Fragment>
            <h2 className="resume__title">NEW RECORD</h2>
            <img className="resume__pic" src={recordPic} alt="record"/>
            <p>SCORE: {props.score}</p>
        </Fragment> : 
        <Fragment>
            <h2 className="resume__title">RESUME</h2>
            <img className="resume__pic" src={resumePic} alt="resume"/>
            <p>SCORE: {props.score}</p>
        </Fragment>

    const display = props.apiError ? 
        <ApiError /> :
        <Fragment>
            {resumeDisplay}
            <Button text={"FINISH GAME"} clicked={props.send}/>
        </Fragment> 

    return (
        <div className="resume">
            {typeof props.record !== 'undefined' ? display : <Spinner />}
        </div>
    )
}

Resume.propTypes = {
    score: PropTypes.number,
    record: PropTypes.number,
    send: PropTypes.func,
    apiError: PropTypes.bool
}

export default Resume