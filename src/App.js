import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './sass/main.scss'
import Best from './pages/Best'
import New from './pages/New'
import Top from './pages/Top'

function App() {
  return (
    <Fragment>
      <Router>
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
