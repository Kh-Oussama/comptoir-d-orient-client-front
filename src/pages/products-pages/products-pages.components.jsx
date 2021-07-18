import React, {useEffect} from 'react';
import NavigationBar from "../../components/navigation-bar/navigation-bar.compoenent";
import ShopSidebar from "../../components/shop-sidebar/shop-sidebar.component";
import {Header} from "../../components/shop-header/Header";
import {createStructuredSelector} from "reselect";
import {selectShopSidebarHidden} from "../../redux/design-utilites/design-utilities.selectors";
import {setCurrentPage, togglesShopSidebar} from "../../redux/design-utilites/design-utilities.actions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Products from "../../components/products/products.component";

const ProductsPage = ({toggles_shop_sidebar, current_sidebar_state, setCurrentPage}) => {
    useEffect(() => {
        setCurrentPage(window.location.pathname)
    }, [setCurrentPage]);

    return (
        <div className="products-page">
            <NavigationBar/>
            <div className="shop-page-content">
                <ShopSidebar/>
                <div className="container">
                    <input type="checkbox" checked={current_sidebar_state} onChange={toggles_shop_sidebar}/>
                    <Header title={'legumes sec'}/>
                    <Products/>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    current_sidebar_state: selectShopSidebarHidden,
});

const mapDispatchToProps = dispatch => ({
    toggles_shop_sidebar: current_section => dispatch(togglesShopSidebar(current_section)),
    setCurrentPage: current_page => dispatch(setCurrentPage(current_page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductsPage));
