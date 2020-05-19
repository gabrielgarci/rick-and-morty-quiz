import React from 'react'

import './Button.scss'
import PropTypes from 'prop-types'

const Button = (props) => {
    const btnClasses = ["custom-btn", ...props.types.map(type => "custom-btn--" + type)].join(' ')
    // if (props.types) btnClasses.push(...props.types.map(type => "custom-btn--" + type))

    return (
    <button className={btnClasses} onClick={props.clicked} > {props.text} </button>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    clicked: PropTypes.func,
    types: PropTypes.arrayOf(PropTypes.string)
}

export default Button