import React, {useEffect} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import HomePage from "./pages/home-page/home-page.component";
import testPage from "./pages/test-page/test-page.component";
import ShopPage from "./pages/shop-page/shop-page.component";
import ProductsPage from "./pages/products-pages/products-pages.components";
import ViewProductPage from "./pages/view-product-page/view-product-page.component";
import Loader from "./components/loader/loader.compoenent";

function App() {

  return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={HomePage}/>
           <Route   path="/shop/" component={ShopPage}/>
        </Switch>
      </React.Fragment>
  );
}

export default App;
