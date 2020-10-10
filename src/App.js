import React, { Fragment } from 'react';
import "./sass/main.scss";

import Navbar from "./components/navbar/Navbar";
import Feed from "./components/feed/Feed";

function App() {
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <Feed />
      </div>
    </Fragment>
  );
}

export default App;
