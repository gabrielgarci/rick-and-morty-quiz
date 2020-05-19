import React from 'react'
import { Route, Switch } from 'react-router-dom'

import './App.scss'
import HomePage from './HomePage/HomePage'
import Game from './Game/Game'

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/game" component={Game} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  )
}

export default App
