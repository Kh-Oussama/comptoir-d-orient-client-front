import React, {useEffect} from 'react';
import NavigationBar from "../../components/navigation-bar/navigation-bar.compoenent";
import AddressSection from "../../components/address-section/address-section.component";
import Header from "../../components/header/header.component";
import Download from "../../components/dwnload-section/dwnload-section-for-phone.component";
import StoriesSection from "../../components/stories-section/stories-section.component";
import SubscribeFooterSection from "../../components/subscribe-footer-section/subscribe-footer-section.component";
import Gallery from "../../components/gallery/gallery.component";
import ProductRelated from "../../components/products-related/products-related.component";
import {createStructuredSelector} from "reselect";
import {setCurrentPage} from "../../redux/design-utilites/design-utilities.actions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";


const HomePage = ({setCurrentPage}) => {

    useEffect(() => {
        setCurrentPage(window.location.pathname)
    }, [setCurrentPage]);

    return (
        <div className="home-page">
            <NavigationBar/>
            <Header/>
            <ProductRelated/>
            <AddressSection/>
            <Download/>
            <StoriesSection/>
            <Gallery/>
            <SubscribeFooterSection/>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = dispatch => ({
    setCurrentPage: current_page => dispatch(setCurrentPage(current_page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HomePage));
