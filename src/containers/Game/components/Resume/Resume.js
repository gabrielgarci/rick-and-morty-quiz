import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import './Resume.scss'
import recordPic from '../../../../assets/images/record.png'
import resumePic from '../../../../assets/images/finish.png'

import Button from '../../../../shared/Button/Button'

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

    return (
        <div className="resume">
            {
                typeof props.record !== 'undefined' ? 
                <Fragment>
                    {resumeDisplay}
                    <Button text={"FINISH GAME"} clicked={props.send}/>
                </Fragment> : null
            }
        </div>
    )
}

Resume.propTypes = {
    score: PropTypes.number,
    record: PropTypes.number,
    send: PropTypes.func,
}

export default Resume