import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import HomePage from "./pages/home-page/home-page.component";
import testPage from "./pages/test-page/test-page.component";
import ShopPage from "./pages/shop-page/shop-page.component";

function App() {
  return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/shop" component={ShopPage}/>
          <Route exact path="/test" component={testPage}/>
        </Switch>
      </React.Fragment>
  );
}

export default App;
