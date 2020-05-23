import React from 'react'

import './HomePage.scss'
import title from '../../assets/images/title.png'
import logo from '../../assets/images/logo.png'
import Button from '../../shared/Button/Button'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div className="menu">
            <img className="menu__title" src={title} alt="title"></img>
            <img className="menu__logo" src={logo} alt="logo"></img>
            <div className="menu__controllers">
                <Link to="/records"><Button text="RECORDS" types={["menu", "secondary"]}/></Link>
                <Link to="/game/settings"><Button text="NEW GAME" types={["menu"]} /></Link>
            </div>
        </div>
    )
}

export default HomePage