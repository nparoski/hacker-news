import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './sass/main.scss'
import Navbar from './components/navbar/Navbar'
import Best from './components/pages/Best'
import New from './components/pages/New'
import Top from './components/pages/Top'

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Best />
          </Route>
          <Route exact path="/stories/new">
            <New />
          </Route>
          <Route exact path="/stories/top">
            <Top />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  )
}

export default App
