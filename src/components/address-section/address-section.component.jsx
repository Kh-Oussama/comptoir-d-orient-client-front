import React from 'react';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import Fade from 'react-reveal/Fade';
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
                    {/*<p className="p-before-title">*/}
                    {/*    <Zoom left cascade>*/}
                    {/*    How do we Work*/}
                    {/*    </Zoom>*/}

                    {/*</p>*/}
                    <Fade left>

                        <h2 className="title">

                            Adresse social

                        </h2>

                    </Fade>

                    <Fade left>
                        <p className="title-description">

                            35 Bis, Rue Joliot CURIE 69780, Mions, France

                        </p>
                    </Fade>
                    <Fade bottom>
                        <div className="red-divider"/>
                    </Fade>
                </div>
            </VisibilitySensor>
            <Fade bottom big>
                <div className="map-block">
                    <div className="leaflet-container">

                        <MapContainer center={[45.68, 4.93]} zoom={12} scrollWheelZoom={false}>
                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[45.68195404690148, 4.939116957527735]}>
                                <Popup>
                                    <div className="markerBlock">
                                        <img src="/images/agro-dz.png" alt="image" className="marker-image"/>
                                        <p>35 Bis, Rue Joliot CURIE 69780, Mions, France</p>
                                    </div>

                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>

                </div>
            </Fade>


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
