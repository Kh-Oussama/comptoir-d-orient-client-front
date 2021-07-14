import React from 'react'
import {Menu, MenuItem, ProSidebar, SidebarContent, SidebarFooter, SidebarHeader, SubMenu} from "react-pro-sidebar";
import IcomoonReact from "icomoon-react";
import iconSet from "../../selection.json";
import {Link} from "react-router-dom";

const ShopSidebar = () => {
    return (
                <>
                    <ProSidebar collapsed={false} image={"https://picsum.photos/200"}>
                        <SidebarHeader>
                            <div className="sidebarHeader">
                                <IcomoonReact iconSet={iconSet} size={40} icon="shop"/>
                            </div>

                        </SidebarHeader>
                        <SidebarContent>
                            <Menu iconShape="square"  >
                                <MenuItem icon={<i className="fas fa-tachometer-alt"/>}>Dashboard</MenuItem>
                                <SubMenu title="Components" icon={ <i className="fas fa-tachometer-alt"/>}>
                                    <SubMenu title="Components" icon={ <i className="fas fa-tachometer-alt"/>}>
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

export default ShopSidebar;