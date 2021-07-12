import React from 'react';
import {Link, withRouter} from "react-router-dom";
import IcomoonReact, {iconList} from "icomoon-react";
import iconSet from "../../selection.json";
import Typical from "react-typical";
import SideBar from "../sidebar/sidebar.compoenent";
import VisibilitySensor from "react-visibility-sensor";
import {createStructuredSelector} from "reselect";
import {selectCurrentSection} from "../../redux/design-utilites/design-utilities.selectors";
import {setCurrentSection} from "../../redux/design-utilites/design-utilities.actions";
import {connect} from "react-redux";


const NavigationBar = ({setCurrentSection, current_section}) => {

    return (
        <React.Fragment>
            <VisibilitySensor
                active={!(current_section === "header")}
                onChange={isVisible => {
                    if (isVisible) {
                        setCurrentSection("header");
                    }
                }}
                delayedCall>
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
            </VisibilitySensor>
        </React.Fragment>
    )
}

const mapStateToProps = createStructuredSelector({
    current_section: selectCurrentSection,
});

const mapDispatchToProps = dispatch => ({
    setCurrentSection: current_section => dispatch(setCurrentSection(current_section)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavigationBar));
