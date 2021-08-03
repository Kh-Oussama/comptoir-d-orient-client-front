import React, {useState} from 'react';
import {Link, withRouter} from "react-router-dom";
import IcomoonReact, {iconList} from "icomoon-react";
import iconSet from "../../selection.json";
import Typical from "react-typical";
import SideBar from "../sidebar/sidebar.compoenent";
import VisibilitySensor from "react-visibility-sensor";
import {createStructuredSelector} from "reselect";
import {selectCurrentPage, selectCurrentSection} from "../../redux/design-utilites/design-utilities.selectors";
import {setCurrentSection} from "../../redux/design-utilites/design-utilities.actions";
import {connect} from "react-redux";
import NavBarPhone from "../phone-navigation-bar/phone-navigation-bar.component";
import Fade from "react-reveal/Fade";


const NavigationBar = ({setCurrentSection, current_section,current_page}) => {

    return (
        <React.Fragment>
            {/*<VisibilitySensor*/}
            {/*    active={!(current_section === "header")}*/}
            {/*    onChange={isVisible => {*/}
            {/*        if (isVisible) {*/}
            {/*            setCurrentSection("header");*/}
            {/*        }*/}
            {/*    }}*/}
            {/*    delayedCall>*/}
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
                    <div  className={`link-block ${current_page === '/' ? 'link-block-active': null}`}>
                        <Link to='/' >
                            <IcomoonReact iconSet={iconSet} size={33} icon="home"/>home
                        </Link>
                    </div>
                    <div className={`link-block ${current_page !== '/contact_us' && current_page !== '/' && current_page !== '/events' ? 'link-block-active': null}`}>
                        <Link to='/shop'>
                            <IcomoonReact iconSet={iconSet} size={33} icon="price-tag"/> Produits
                        </Link>
                    </div>
                      <div className="link-block">
                        <Link to='/'>
                            <IcomoonReact iconSet={iconSet} size={33} icon="shopping-cart"/> shop now
                        </Link>
                    </div>

                    {/*  <div className="link-block">*/}
                    {/*    <Link to='/'>*/}
                    {/*        <IcomoonReact iconSet={iconSet} size={33} icon="sweden"/> Blog*/}
                    {/*    </Link>*/}
                    {/*</div>*/}
                    <div className={`link-block ${current_page === '/contact_us' ? 'link-block-active': null}`}>
                        <Link to='/contact_us'>
                            <IcomoonReact iconSet={iconSet} size={33} icon="typing"/> Contact
                        </Link>
                    </div>
                    {
                        current_page === '/'
                        ?  <SideBar/>
                        :null
                    }

                </div>
                <div className="nav-right">

                    <NavBarPhone/>

                </div>
            </div>

            {/*</VisibilitySensor>*/}
        </React.Fragment>
    )
}

const mapStateToProps = createStructuredSelector({
    current_section: selectCurrentSection,
    current_page: selectCurrentPage,
});

const mapDispatchToProps = dispatch => ({
    setCurrentSection: current_section => dispatch(setCurrentSection(current_section)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavigationBar));
