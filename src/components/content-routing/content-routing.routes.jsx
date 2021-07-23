import React from 'react';
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import Categories from "../categories/categories.component";
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";
import Products from "../products/products.component";
import ViewProduct from "../view-product/view-product.component";
import ShopPage from "../../pages/shop-page/shop-page.component";


const ContentRoutes = ({currentUser, checkLoading}) => {
    return (
        <div className="detail">
            <Switch>

                <Route exact path={`/shop/product/view/:id`} component={ViewProduct}/>
                <Route exact path={`/shop/products/:id`} component={props => <Products {...props}/>}/>
                <Route exact path={`/shop`} component={Categories}/>
                {/*<Redirect to="/shop"/>*/}
            </Switch>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ContentRoutes);
