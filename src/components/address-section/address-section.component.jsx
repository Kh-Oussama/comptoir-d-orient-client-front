import React, {useState} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Zoom from 'react-reveal/Zoom';
import VisibilitySensor from 'react-visibility-sensor';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {setCurrentSection} from "../../redux/design-utilites/design-utilities.actions";
import {createStructuredSelector} from "reselect";
import {selectCurrentSection} from "../../redux/design-utilites/design-utilities.selectors";


const AddressSection = ({setCurrentSection, current_section}) => {

    return (

        <div className="address-section" id="address">
            <VisibilitySensor
                active={!(current_section === "address")}
                onChange={isVisible => {
                    if (isVisible) {
                        setCurrentSection("address");
                    }
                }}
                delayedCall>
            <div className="section-header">
                <p className="p-before-title">
                    How do we Work

                </p>
                {/*<Zoom left >*/}

                <h2 className="title">
                    Address Social
                </h2>
                {/*</Zoom>*/}


                <p className="title-description">
                    21 Avenue Lefèvre, 69120 Vaulx-en-Velin
                </p>
                <div className="red-divider"/>
            </div>
            </VisibilitySensor>

            <div className="map-block">
                <div className="leaflet-container">

                    <MapContainer center={[45.77414, 4.91158]} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[45.77414, 4.91158]}>
                            <Popup>
                                <div className="markerBlock">
                                    <img src="/images/f4.jpg" alt="image" className="marker-image"/>
                                    <p>A21 Avenue Lefèvre, 69120 Vaulx-en-Velin</p>
                                </div>

                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>

            </div>



        </div>

    )
}
const mapStateToProps = createStructuredSelector({
    current_section: selectCurrentSection,
});

const mapDispatchToProps = dispatch => ({
    setCurrentSection: current_section => dispatch(setCurrentSection(current_section)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddressSection));
