import React from 'react'
import {Menu, MenuItem, ProSidebar, SidebarContent, SidebarFooter, SidebarHeader, SubMenu} from "react-pro-sidebar";
import IcomoonReact from "icomoon-react";
import iconSet from "../../selection.json";
import {withRouter} from "react-router-dom";
import {createStructuredSelector} from "reselect";
import {selectShopSidebarHidden} from "../../redux/design-utilites/design-utilities.selectors";
import {connect} from "react-redux";

const ShopSidebar = ({current_sidebar_state}) => {
    return (
        <>
            <ProSidebar collapsed={!current_sidebar_state} image={"/images/side2.jpg"}>
                <SidebarHeader>
                    <div className="sidebarHeader">
                        <IcomoonReact iconSet={iconSet} size={40} icon="shop"/>
                    </div>

                </SidebarHeader>
                <SidebarContent>
                    <Menu iconShape="square">
                        <MenuItem icon={<i className="far fa-dot-circle"/>}>Dashboard</MenuItem>
                        <SubMenu title="Components" icon={<i className="far fa-dot-circle"/>}>
                            <SubMenu title="Components" icon={<i className="far fa-dot-circle"/>}>
                                <MenuItem>Component 1</MenuItem>
                                <MenuItem>Component 2</MenuItem>
                            </SubMenu>
                            <MenuItem>Component 2</MenuItem>
                        </SubMenu>
                    </Menu>
                </SidebarContent>
                <SidebarFooter>
                    <div className="sidebarFooter">
                        &copy; Copyright 2021 by <span className="dev-name">Khirat Oussama.</span>

                    </div>
                </SidebarFooter>

            </ProSidebar>

        </>
    )
}

const mapStateToProps = createStructuredSelector({
    current_sidebar_state: selectShopSidebarHidden,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ShopSidebar));
