import React, {useState} from 'react';
import NavigationBar from "../../components/navigation-bar/navigation-bar.compoenent";
import 'semantic-ui-css/components/sidebar.min.css';
import 'semantic-ui-css/components/button.min.css';
import ShopContent from "../../components/shop-page-content/shop-content.component";

const ShopPage = () => {


    return (
        <div className="sidebar-shop">
            <NavigationBar/>
            <ShopContent/>
        </div>
    )
}

export default ShopPage;