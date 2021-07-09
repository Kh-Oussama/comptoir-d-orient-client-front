import React from 'react';
import NavigationBar from "../../components/navigation-bar/navigation-bar.compoenent";
import AddressSection from "../../components/address-section/address-section.component";
import Header from "../../components/header/header.component";

const HomePage = () => {
    return (
        <div className="home-page">
           <NavigationBar/>
           <Header/>
           <AddressSection/>
        </div>
    )
}

export default HomePage;