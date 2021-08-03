import React, {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Pagination} from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import ProductItem from "../product-item/product-item.component";
import Fade from 'react-reveal/Fade';
import VisibilitySensor from "react-visibility-sensor";
import {createStructuredSelector} from "reselect";
import {selectCurrentSection} from "../../redux/design-utilites/design-utilities.selectors";
import {setCurrentSection} from "../../redux/design-utilites/design-utilities.actions";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {selectAllProducts} from "../../redux/products/product.selectors";

SwiperCore.use([Pagination]);
const ProductRelated = ({setCurrentSection, current_section, allProducts}) => {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    });
    return (

        <div className="product-related" id={'rProducts'}>
            <VisibilitySensor
                active={!(current_section === "rProducts")}
                onChange={isVisible => {
                    if (isVisible) {
                        setCurrentSection("rProducts");
                    }
                }}
                delayedCall>
                <div className="partners-section-header">
                    <Fade bottom>
                        <h1 className="title_2 title_2_download">pour vous</h1>
                    </Fade>
                    <Fade left>
                        <h1 className="title_1 ">
                            Nos RECOMMANDATIONS pour vous
                        </h1>
                    </Fade>
                    <div className="red-divider"/>

                    <Fade left>
                        <p className="paragraph ">

                            we are committed to providing our customers with exceptional
                            service <br/> while offering out employees the best training

                        </p>
                    </Fade>
                </div>
            </VisibilitySensor>
            <Fade bottom big cascade>
                <div className="product-related--swiper">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={Math.floor(width * 3 / 1325) + 1.5}
                        pagination={{clickable: true}}
                        // onSlideChange={() => console.log('slide change')}
                        // onSwiper={(swiper) => console.log(swiper)}

                    >


                        {
                            allProducts.map(pro => {
                                if (pro.is_recommended === 1)
                                    return (
                                        <SwiperSlide>
                                            <div className="product-container">
                                                <ProductItem key={pro.id} productRef={pro.id}
                                                             imageUrl1={pro.first_image_path}
                                                             imageUrl2={pro.second_image_path} title={pro.title}/>
                                            </div>
                                        </SwiperSlide>
                                    )
                                else return null;
                            })
                        }

                    </Swiper>
                </div>
            </Fade>

        </div>

    )
}

const mapStateToProps = createStructuredSelector({
    current_section: selectCurrentSection,
    allProducts: selectAllProducts,
});

const mapDispatchToProps = dispatch => ({
    setCurrentSection: current_section => dispatch(setCurrentSection(current_section)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductRelated));
