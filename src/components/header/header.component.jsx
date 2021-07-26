import React, {useState} from 'react';
import {Link, withRouter} from "react-router-dom";
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Autoplay, EffectFade, Navigation, Pagination} from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";
import {selectSliders} from "../../redux/slliders/slider.selectors";

SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay]);
const Header = ({sliders}) => {

    return (
        <header className="header-container">
            {/*<div className="contact-button">*/}
            {/*    <IcomoonReact iconSet={iconSet} size={55} icon="typing"/>*/}
            {/*</div>*/}

            <div className="content">
                <Swiper
                    slidesPerView={1}
                    navigation={false}
                    speed={1000}
                    // loop
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false
                    }}
                    effect="fade"
                    pagination={{
                        clickable: true,
                    }}
                    onSlideChange={() => {

                    }}

                >
                    {/*{*/}
                    {/*    sliders.map(slider => {*/}
                    {/*        return (*/}
                    {/*            <SwiperSlide>*/}
                    {/*                <div className="header__item" style={{*/}
                    {/*                    backgroundImage: `url(http://comptoir-d-orient.com/${slider.image_path})`,*/}
                    {/*                }}>*/}
                    {/*                    <div className="layer"/>*/}

                    {/*                </div>*/}
                    {/*            </SwiperSlide>*/}
                    {/*        )*/}
                    {/*    })*/}
                    {/*}*/}

                    <SwiperSlide>
                        <div className="header__item" style={{
                            backgroundImage: `url(/images/h1.jpg)` ,
                        }}>
                            <div className="layer"/>

                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="header__item" style={{
                            backgroundImage: `url(/images/h4.jpg)` ,
                        }}>
                            <div className="layer"/>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="header__item" style={{
                            backgroundImage: `url(/images/h5.jpg)` ,
                        }}>
                            <div className="layer"/>

                        </div>
                    </SwiperSlide>

                </Swiper>
                <div className="content__text">
                    <p className="paragraph">
                        <Bounce top cascade>
                            welcome to smart web agency
                        </Bounce>
                    </p>
                    <Fade left>
                        <h1 className="title_1">

                            We <span>Are</span> the best <br/>
                            website agency in <br/>
                            the world

                        </h1>
                    </Fade>
                    <Bounce cascade>
                        <div className="text-div"/>
                    </Bounce>

                    <p className="paragraph paragraph-2 ">
                        {/*<Zoom right cascade>*/}
                        {/*<Fade top cascade>*/}
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Alias atque eius magnam non quidem quod rem sapiente soluta suscipit ullam! Animi
                            consectetur ea
                            illo laboriosam pariatur quae repudiandae sint veritatis!
                        {/*</Fade>*/}
                    </p>

                    <Bounce bottom cascade>
                        <div className="content__text--btn">
                            <Link to=''>
                                <span><i className="fas fa-file-alt"></i> Explore Now</span>
                            </Link>
                            <Link to=''>
                                <span><i className="fas fa-layer-group"/> More Service</span>
                            </Link>
                        </div>
                    </Bounce>

                </div>
                <div className="content__social-media">
                    <div className="social-mediaBigBlock">
                        <div className="social-block">
                            <i className="fab fa-instagram"/> instagram
                        </div>
                        <div className="social-block">
                            <i className="fab fa-facebook-f"/> facebook
                        </div>
                        <div className="social-block">
                            <i className="fab fa-twitter"/> twitter
                        </div>
                    </div>
                </div>
                <Zoom cascade>

                    <div className="pages-block" >
                        <div className="numbers">
                            <div className="page-number"><span>01</span>/06</div>
                            <div className='leftRight'><i className="fas fa-chevron-left"/> <span>|</span> <i
                                className="fas fa-chevron-right"/></div>
                        </div>
                        <div className="white-div">
                            <div className="line"/>
                        </div>
                        <h1 className="page-name">view profile</h1>
                    </div>
                </Zoom>

                <div className="content__scrolling-indicators">

                </div>
            </div>
            <div className="scroll-btn-container">
                <div className="icon-scroll"></div>
            </div>
        </header>
    )
}

const mapStateToProps = createStructuredSelector({
    sliders: selectSliders,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
