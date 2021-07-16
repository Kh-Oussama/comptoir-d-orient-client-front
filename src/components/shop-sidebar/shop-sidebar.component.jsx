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
                        <SubMenu title="Legumes sec" icon={<i className="far fa-dot-circle"/>}>
                                <MenuItem>Dari</MenuItem>
                                <MenuItem>Tersol</MenuItem>
                                <MenuItem>Riz</MenuItem>
                                <MenuItem>Cister</MenuItem>
                        </SubMenu>
                        <SubMenu title="Fruits Sec" icon={<i className="far fa-dot-circle"/>}>
                                <MenuItem>Noix de coco</MenuItem>
                                <MenuItem>Noix</MenuItem>
                                <MenuItem>Amande</MenuItem>
                                <MenuItem>Pistache</MenuItem>

                        </SubMenu>
                        {/*<SubMenu title="Poduits laitiers" icon={<i className="far fa-dot-circle"/>}>*/}
                        {/*    <SubMenu title="Components" icon={<i className="far fa-dot-circle"/>}>*/}
                        {/*        <MenuItem>Valmartin</MenuItem>*/}
                        {/*        <MenuItem>peynoos</MenuItem>*/}
                        {/*        <MenuItem>Tuba</MenuItem>*/}
                        {/*    </SubMenu>*/}
                        {/*    <MenuItem>Component 2</MenuItem>*/}
                        {/*</SubMenu>*/}
                        <SubMenu title="Poduits laitiers" icon={<i className="far fa-dot-circle"/>}>
                                <MenuItem>Valmartin</MenuItem>
                                <MenuItem>peynoos</MenuItem>
                                <MenuItem>Tuba</MenuItem>
                        </SubMenu>
                        <SubMenu title="Conserves" icon={<i className="far fa-dot-circle"/>}>
                            <MenuItem>Les Thon</MenuItem>
                            <MenuItem>Harissa</MenuItem>
                            <MenuItem>Oncu</MenuItem>
                            <MenuItem>Slalta</MenuItem>
                        </SubMenu>
                        <SubMenu title="Boissons" icon={<i className="far fa-dot-circle"/>}>
                            <MenuItem>Coca Cola</MenuItem>
                            <MenuItem>Fanta</MenuItem>
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
