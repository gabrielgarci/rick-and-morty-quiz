import React from 'react'

import './Resume.scss'
import Button from '../../../../shared/Button/Button'

const Resume = props => (
    <div className="resume">
        {
            typeof props.record !== 'undefined' ? 
            <Button text={"FINISH GAME"} clicked={props.send}/> : null
        }
    </div>
)

export default Resume