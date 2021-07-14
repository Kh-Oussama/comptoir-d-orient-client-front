import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import IcomoonReact from "icomoon-react";
import iconSet from "../../../selection.json";
import {SidebarData} from "../shopSidebarData";


const SidebarLink = styled(Link)`
    
`;

const SideBarLabel = styled.span`
`;
const DropdownLink = styled(Link)`
      
`

const SubMenu = ({item}) => {
    const [subnav, setSubnav] = useState(false);
    const [subnavTwo, setSubnavTwo] = useState(false);

    const showSubnav = () => {
        setSubnav(!subnav);
        setSubnavTwo(false);
    };
    const showSubnavtwo = () => setSubnavTwo(!subnavTwo);
    return (
        <>
            <SidebarLink to={'/shop'} className="sidebarLink" onClick= {item.subNav && showSubnav}>
                <div>
                    {item.icon}
                     <SideBarLabel className="sidebarLabel">{item.title}</SideBarLabel>
                </div>
                <div>
                    {item.subNav && subnav
                        ? item.iconOpened
                        : item.subNav
                        ? item.iconClosed
                        : null

                    }
                </div>
            </SidebarLink>
            {
                subnav && item.subNav.map((item, index) => {
                    return (
                        <>
                        <DropdownLink to={item.path} key={index} className="dropdownLink" onClick= {item.subNavTwo && showSubnavtwo}>
                            <div>
                            {item.icon}
                            <SideBarLabel>{item.title}</SideBarLabel>
                            </div>
                            <div>

                                {item.subNavTwo && subnavTwo
                                    ? item.iconOpened
                                    : item.subNavTwo
                                        ? item.iconClosed
                                        : null

                                }
                            </div>
                        </DropdownLink>

                            {
                                subnavTwo && item.subNavTwo && item.subNavTwo.map((item, index) => {
                                    return (
                                        <>
                                            <DropdownLink to={item.path} key={index} className="dropdownLink dropdownLinkTwo">
                                                {item.icon}
                                                <SideBarLabel>{item.title}</SideBarLabel>

                                            </DropdownLink>


                                        </>
                                    )
                                })
                            }
                        </>
                    )
                })
            }
            </>
    )
}

export default SubMenu;