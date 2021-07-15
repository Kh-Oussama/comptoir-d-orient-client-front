import React, {useState} from 'react';
import NavigationBar from "../../components/navigation-bar/navigation-bar.compoenent";
import 'semantic-ui-css/components/sidebar.min.css';
import 'semantic-ui-css/components/button.min.css';
import {Header} from "../../components/shop-content/Header";
import {CardList} from "../../components/shop-content/CardList";
import 'react-pro-sidebar/dist/css/styles.css';
import ShopSidebar from "../../components/shop-sidebar/shop-sidebar.component";
import {createStructuredSelector} from "reselect";
import {selectShopSidebarHidden} from "../../redux/design-utilites/design-utilities.selectors";
import {togglesShopSidebar} from "../../redux/design-utilites/design-utilities.actions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";


const ShopPage = ({toggles_shop_sidebar,current_sidebar_state}) => {
    const [x, setX] = useState(false);

    console.log(x);
    return (
        <div className="sidebar-shop">
            <NavigationBar/>
            <div className="shop-page-content">
                <ShopSidebar/>
                <div className="container">
                    <input type="checkbox" checked={current_sidebar_state} onChange={toggles_shop_sidebar}/>
                    <Header title={'les catégories disponibles'}/>
                    <CardList/>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ShopPage));
