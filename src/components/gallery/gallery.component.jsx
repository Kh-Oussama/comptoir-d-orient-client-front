import React from 'react';
import G_1 from "../../assets/img/g1.jpg";
import G_2 from "../../assets/img/g2.jpg";
import G_3 from "../../assets/img/g3.jpg";
import G_4 from "../../assets/img/g4.jpg";
import G_5 from "../../assets/img/g5.jpg";
import G_6 from "../../assets/img/g6.jpg";
import G_7 from "../../assets/img/g7.jpg";
import G_8 from "../../assets/img/g8.jpg";
import G_9 from "../../assets/img/g9.jpg";
import G_10 from "../../assets/img/g10.jpg";
import G_11 from "../../assets/img/g11.jpg";
import G_12 from "../../assets/img/g12.jpg";
import G_13 from "../../assets/img/g13.jpg";
import G_14 from "../../assets/img/g14.jpg";
import G_15 from "../../assets/img/g16.jpg";
import G_16 from "../../assets/img/g15.jpg";
import G_17 from "../../assets/img/g17.jpg";


const Gallery = () => {
    return (
        <div className="gallery-block" id={"gallery"}>
                <div className="partners-section-header">
                        <h1 className="title_2 title_2_download">Galllery</h1>
                        <h1 className="title_1 title_1_download">
                                WE DESIGN DIGITAL PRODUCTS THAT HELP GROW BUSINESSES
                        </h1>
                        <div className="red-divider"/>
                        <p className="paragraph paragraph_download">
                                we are committed to providing our customers with exceptional
                                service <br/> while offering out employees the best training
                        </p>
                </div>
                <section className="gallery">
                        <figure className="gallery__item gallery__item--1"><img src={G_1} alt="Gallery img"
                                                                                className="gallery__img"/></figure>
                        <figure className="gallery__item gallery__item--2"><img src={G_9} alt="Gallery img"
                                                                                className="gallery__img"/></figure>
                        <figure className="gallery__item gallery__item--3"><img src={G_17} alt="Gallery img"
                                                                                className="gallery__img"/></figure>
                        <figure className="gallery__item gallery__item--4"><img src={G_8} alt="Gallery img"
                                                                                className="gallery__img"/></figure>
                        <figure className="gallery__item gallery__item--5"><img src={G_16} alt="Gallery img"
                                                                                className="gallery__img"/></figure>
                        <figure className="gallery__item gallery__item--6"><img src={G_6} alt="Gallery img"
                                                                                className="gallery__img"/></figure>
                        <figure className="gallery__item gallery__item--7"><img src={G_12} alt="Gallery img"
                                                                                className="gallery__img"/></figure>
                        <figure className="gallery__item gallery__item--8"><img src={G_7} alt="Gallery img"
                                                                                className="gallery__img"/></figure>
                        <figure className="gallery__item gallery__item--9"><img src={G_10} alt="Gallery img"
                                                                                className="gallery__img"/></figure>
                        {/*<figure className="gallery__item gallery__item--10"><img src={G_10} alt="Gallery img"*/}
                        {/*                                                         className="gallery__img"/></figure>*/}
                        {/*<figure className="gallery__item gallery__item--11"><img src={G_11} alt="Gallery img"*/}
                        {/*                                                         className="gallery__img"/></figure>*/}
                        {/*<figure className="gallery__item gallery__item--12"><img src={G_12} alt="Gallery img"*/}
                        {/*                                                         className="gallery__img"/></figure>*/}
                        {/*<figure className="gallery__item gallery__item--13"><img src={G_13} alt="Gallery img"*/}
                        {/*                                                         className="gallery__img"/></figure>*/}
                        {/*<figure className="gallery__item gallery__item--14"><img src={G_14} alt="Gallery img"*/}
                        {/*                                                         className="gallery__img"/></figure>*/}

                </section>
        </div>


    )
}

export default Gallery;