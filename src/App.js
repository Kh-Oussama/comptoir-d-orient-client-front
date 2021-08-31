import React, {lazy, Suspense} from 'react';
import  {Redirect, Route, Switch} from 'react-router-dom';
import Loader from "./components/loader-content/loader.compoenent";
import HomePage from "./pages/home-page/home-page.component";
import ShopPage from "./pages/shop-page/shop-page.component";
import ContactUsPage from "./pages/contact-us/contact-us.component";


// const HomePage = lazy(() => import('./pages/home-page/home-page.component'));
// const ShopPage = lazy(() => import('./pages/shop-page/shop-page.component'));
// const ContactUsPage = lazy(() => import('./pages/contact-us/contact-us.component'));
const App = () => {

    return (
        <React.Fragment>

            <Switch>
                {/*<Suspense fallback={<div className="loaderSuspense"><Loader/></div>}>*/}
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/shop/" component={ShopPage}/>
                    <Route exact path="/contact_us" component={ContactUsPage}/>
                        <Redirect to="/"/>
                {/*</Suspense>*/}
            </Switch>
        </React.Fragment>
    );
}

export default App;
