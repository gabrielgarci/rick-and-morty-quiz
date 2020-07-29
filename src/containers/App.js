import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import './App.scss'
import HomePage from './HomePage/HomePage'
import Game from './Game/Game'
import Records from './Records/Records'

const App = () => {

  return (
    <HashRouter basename='/'>
      <div className="app">
        <Switch>
          <Route path="/game" component={ Game } />
          <Route path="/records" component={ Records } />
          <Route path="/" component={ HomePage } />
        </Switch>
      </div>
    </HashRouter>
  )
}

export default App
