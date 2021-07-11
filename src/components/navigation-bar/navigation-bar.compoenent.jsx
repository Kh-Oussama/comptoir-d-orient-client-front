import React from 'react';
import {Link} from "react-router-dom";
import IcomoonReact, {iconList} from "icomoon-react";
import iconSet from "../../selection.json";
import Typical from "react-typical";
import SideBar from "../sidebar/sidebar.compoenent";


const NavigationBar = () => {
    return (
        <React.Fragment>
            <div className="navigation-container" id='header'>
                <div className="nav-left">
                    <div className="name-block">
                        <Link to='/'>
                            <Typical
                                steps={['  Comptoir d\'orient', 1000]}
                                loop={1}
                                wrapper="span"
                            />

                        </Link>
                    </div>

                </div>
                <div className="nav-center">
                    <div className="link-block link-block-active">
                        <Link to='/'>
                            <IcomoonReact iconSet={iconSet} size={33} icon="home"/>home
                        </Link>
                    </div>
                      <div className="link-block">
                        <Link to='/'>
                            <IcomoonReact iconSet={iconSet} size={33} icon="users"/> About
                        </Link>
                    </div>
                      <div className="link-block">
                        <Link to='/'>
                            <IcomoonReact iconSet={iconSet} size={33} icon="tools"/> projects
                        </Link>
                    </div>
                      <div className="link-block">
                        <Link to='/'>
                            <IcomoonReact iconSet={iconSet} size={33} icon="sweden"/> Blog
                        </Link>
                    </div>
                    <div className="link-block">
                        <Link to='/'>
                            <IcomoonReact iconSet={iconSet} size={33} icon="typing"/> Contact
                        </Link>
                    </div>

                </div>
                <div className="nav-right">
                    <SideBar/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default NavigationBar;