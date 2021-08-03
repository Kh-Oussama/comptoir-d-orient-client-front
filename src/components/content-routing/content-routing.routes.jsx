import React, {lazy, Suspense} from 'react';
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";
import Loader from "../loader-content/loader.compoenent";




const Categories = lazy(() => import('../categories/categories.component'));
const Products = lazy(() => import('../products/products.component'));
const ViewProduct = lazy(() => import('../view-product/view-product.component'));

const ContentRoutes = ({currentUser, checkLoading}) => {
    return (
        <div className="detail">
            <Switch>
                <Suspense fallback={<Loader/>}>
                <Route exact path={`/shop/product/view/:id`} component={ViewProduct}/>
                <Route exact path={`/shop/products/:id/:sub?`} component={Products}/>
                <Route exact path={`/shop`} component={Categories}/>
                </Suspense>
                <Redirect to="/shop"/>
            </Switch>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ContentRoutes);
