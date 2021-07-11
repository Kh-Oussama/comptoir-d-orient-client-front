import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Zoom from 'react-reveal/Zoom';

const AddressSection = () => {
    return (
        <div className="address-section" id="address">
            <div className="section-header">
                <p className="p-before-title">
                    How do we Work

                </p>
                <Zoom left >

                <h2 className="title">
                    Address Social
                </h2>
                </Zoom>


                <p className="title-description">
                    21 Avenue Lefèvre, 69120 Vaulx-en-Velin
                </p>
                <div className="red-divider"/>
            </div>
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

export default AddressSection;