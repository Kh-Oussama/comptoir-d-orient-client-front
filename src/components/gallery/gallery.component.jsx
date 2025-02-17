import React from 'react';
import G_1 from "../../assets/img/g1.jpg";
import G_6 from "../../assets/img/g6.jpg";
import G_7 from "../../assets/img/g7.jpg";
import G_8 from "../../assets/img/g8.jpg";
import G_9 from "../../assets/img/g9.jpg";
import G_10 from "../../assets/img/g10.jpg";
import G_12 from "../../assets/img/g12.jpg";
import G_16 from "../../assets/img/g15.jpg";
import G_17 from "../../assets/img/g17.jpg";
import VisibilitySensor from "react-visibility-sensor";
import {createStructuredSelector} from "reselect";
import {selectCurrentSection} from "../../redux/design-utilites/design-utilities.selectors";
import {setCurrentSection} from "../../redux/design-utilites/design-utilities.actions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Fade from "react-reveal/Fade";
import LazyLoad from "react-lazyload";


const Gallery = ({setCurrentSection, current_section}) => {
    return (

        <div className="gallery-block" id={"gallery"}>
            <VisibilitySensor
                active={!(current_section === "gallery")}
                onChange={isVisible => {
                    if (isVisible) {
                        setCurrentSection("gallery");
                    }
                }}
                delayedCall>
                <div className="partners-section-header">
                    <Fade bottom big>
                        <h1 className="title_2 title_2_download">Galerie</h1>
                    </Fade>
                    <Fade left>
                        <h1 className="title_1 title_1_download">
                            Nous vous présentons aussi notre large gamme de dattes d’Algérie et du moyen orient
                        </h1>
                    </Fade>
                    <div className="red-divider"/>
                    <Fade left>
                        <p className="paragraph paragraph_download">
                            Spécialiste de la dattes fraîches sous tout c’est formes <br/> deglaet nour , sukary , medjool etc…


                        </p>
                    </Fade>
                </div>
            </VisibilitySensor>
            <Fade bottom big>
                <LazyLoad once offset={100}>
                    <section className="gallery">
                        <figure className="gallery__item gallery__item--1"><img src={'/images/gallery/g1.jpg'} alt="Gallery img"
                                                                                className="gallery__img"/></figure>
                        <figure className="gallery__item gallery__item--2"><img src={'/images/gallery/g6.jpg'} alt="Gallery img"
                                                                                className="gallery__img"/></figure>
                        <figure className="gallery__item gallery__item--3"><img src={'/images/gallery/g9.jpg'} alt="Gallery img"
                                                                                className="gallery__img"/></figure>
                        <figure className="gallery__item gallery__item--4"><img src={'/images/gallery/g3.jpg'} alt="Gallery img"
                                                                                className="gallery__img"/></figure>
                        <figure className="gallery__item gallery__item--5"><img src={'/images/gallery/g5.jpg'} alt="Gallery img"
                                                                                className="gallery__img"/></figure>
                        <figure className="gallery__item gallery__item--6"><img src={'/images/gallery/g7.jpg'} alt="Gallery img"
                                                                                className="gallery__img"/></figure>
                        <figure className="gallery__item gallery__item--7"><img src={'/images/gallery/g8.jpg'} alt="Gallery img"
                                                                                className="gallery__img"/></figure>
                        <figure className="gallery__item gallery__item--8"><img src={'/images/gallery/g4.jpg'} alt="Gallery img"
                                                                                className="gallery__img"/></figure>
                        <figure className="gallery__item gallery__item--9"><img src={'/images/gallery/g2.jpg'} alt="Gallery img"
                                                                                className="gallery__img"/></figure>
                    </section>
                </LazyLoad>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Gallery));
