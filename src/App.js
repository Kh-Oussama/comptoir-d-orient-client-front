import React from 'react';
import {Route, Switch} from 'react-router-dom';

import HomePage from "./pages/home-page/home-page.component";
import ShopPage from "./pages/shop-page/shop-page.component";
import ContactUsPage from "./pages/contact-us/contact-us.component";


function App() {

    return (
        <React.Fragment>

            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/contact_us" component={ContactUsPage}/>                <Route path="/shop/" component={ShopPage}/>
            </Switch>
        </React.Fragment>
    );
}

export default App;
