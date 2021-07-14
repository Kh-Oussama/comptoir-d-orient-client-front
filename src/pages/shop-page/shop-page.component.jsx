import React, {useState} from 'react';
import NavigationBar from "../../components/navigation-bar/navigation-bar.compoenent";
import 'semantic-ui-css/components/sidebar.min.css';
import 'semantic-ui-css/components/button.min.css';
import {Header} from "../../components/shop-content/Header";
import {CardList} from "../../components/shop-content/CardList";
import { ProSidebar, Menu, MenuItem, SubMenu,SidebarHeader, SidebarFooter, SidebarContent  } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import ShopSidebar from "../../components/shop-sidebar/shop-sidebar.component";



const ShopPage = () => {
 const [x,setX] = useState(false);

    console.log(x);
    return (
        <div className="sidebar-shop">
            <NavigationBar/>
            <div className="shop-page-content">
                <ShopSidebar/>
                <div className="container">
                    <input type="checkbox" name="" onChange={() => setX(!x)}/>
                    <Header title={'les catégories disponibles'}/>
                    <CardList />
                </div>

            </div>

        </div>
    )
}

export default ShopPage;