import React, {useEffect, useState} from 'react';
import NavigationBar from "../../components/navigation-bar/navigation-bar.compoenent";
import 'semantic-ui-css/components/sidebar.min.css';
import 'semantic-ui-css/components/button.min.css';
import 'react-pro-sidebar/dist/css/styles.css';
import ShopSidebar from "../../components/shop-sidebar/shop-sidebar.component";
import {createStructuredSelector} from "reselect";
import {selectShopSidebarHidden} from "../../redux/design-utilites/design-utilities.selectors";
import {setCurrentPage, togglesShopSidebar} from "../../redux/design-utilites/design-utilities.actions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import ContentRoutes from "../../components/content-routing/content-routing.routes";
import NavigationBarPhone from "../../components/phone-navigation-bar/navigation-phone-container.componnt";


const ShopPage = ({toggles_shop_sidebar, current_sidebar_state, setCurrentPage}) => {
    const [isPhone, setIsPhone] = useState(window.innerWidth <= 600);

    let resizeWindow = () => {
        setIsPhone(window.innerWidth <= 600);
    };

    useEffect(() => {
        resizeWindow();
        window.addEventListener("resize", resizeWindow);
        return () => window.removeEventListener("resize", resizeWindow);
    }, []);

    useEffect(() => {
        setCurrentPage(window.location.pathname)
    }, [setCurrentPage]);

    return (
        <>
            {
                isPhone
                    ? <NavigationBarPhone/>
                    : <NavigationBar/>
            }
        <div className="sidebar-shop">

            <div className="shop-page-content">
                <ShopSidebar/>
                <div className="container">
                    <input type="checkbox" checked={current_sidebar_state} onChange={() => toggles_shop_sidebar(!current_sidebar_state)}/>
                    <ContentRoutes/>
                </div>
            </div>

        </div>

            </>
    )
}

const mapStateToProps = createStructuredSelector({
    current_sidebar_state: selectShopSidebarHidden,
});

const mapDispatchToProps = dispatch => ({
    toggles_shop_sidebar: x => dispatch(togglesShopSidebar(x)),
    setCurrentPage: current_page => dispatch(setCurrentPage(current_page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ShopPage));
