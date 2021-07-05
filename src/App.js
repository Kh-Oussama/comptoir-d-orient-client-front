import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import HomePage from "./pages/home-page/home-page.component";

function App() {
  return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={HomePage}/>
        </Switch>
      </React.Fragment>
  );
}

export default App;
