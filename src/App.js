import React, { Fragment } from 'react';
import { BrowserRouter as Router,  Switch,  Route} from "react-router-dom";
import "./sass/main.scss";
import Navbar from "./components/navbar/Navbar";
import Feed from "./components/feed/Feed";

function App() {
  return (
    <Fragment>
      <Router>
      <Navbar />
        <Switch>
          <Route exact path="/">
            <Feed taxonomy="beststories" />
          </Route>
          <Route exact path="/stories/new">
            <Feed taxonomy="newstories" />
          </Route>
          <Route exact path="/stories/top">
            <Feed taxonomy="topstories" />
          </Route>
          <Route exact path="/login">
            <div className="container text-center">
              <h1>Login screen</h1>
            </div>
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
