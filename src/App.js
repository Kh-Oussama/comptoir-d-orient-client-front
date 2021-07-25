import React from 'react';
import {Route, Switch} from 'react-router-dom';

import HomePage from "./pages/home-page/home-page.component";
import ShopPage from "./pages/shop-page/shop-page.component";


function App() {

    return (
        <React.Fragment>

            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/shop/" component={ShopPage}/>
            </Switch>
        </React.Fragment>
    );
}

export default App;
