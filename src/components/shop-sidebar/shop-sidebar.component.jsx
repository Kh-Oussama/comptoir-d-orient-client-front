import React from 'react'
import {Icon, Menu, Sidebar,} from 'semantic-ui-react';
import SubMenu from "./submenu/submenu.component";
import {SidebarData} from './shopSidebarData';

const VerticalSidebar = ({ animation, direction, visible }) => (
    <Sidebar
        as={Menu}
        animation={animation}
        direction={direction}
        icon='labeled'
        inverted
        vertical
        visible={visible}
        width='thin'
        className="shop-sidebar-container"
    >
        {
            SidebarData.map((item,index) => {
                return <SubMenu item={item} key={index}/>
            })
        }
    </Sidebar>
)

export default VerticalSidebar;
