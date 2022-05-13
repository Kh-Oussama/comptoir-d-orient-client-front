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
import {Link as LinkScroll} from 'react-scroll';
import LazyLoad from 'react-lazyload';
import Particles from "react-particles-js";

SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay]);
const Header = ({sliders}) => {

    return (
        <header className="header-container">

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
                {
                    sliders.map(slider => {
                        return (
                            <LazyLoad once offset={100}>
                                <SwiperSlide>

                                    <div className="header__item" style={{
                                        backgroundImage: `url(https://backend.agro-dz.com/${slider.image_path})`,
                                    }}>
                                        <div className="layer">
                                            <Particles height={"100vh"}
                                                params={{
                                                    "particles": {
                                                        "number": {
                                                            "value": 300,
                                                            "density": {
                                                                "enable": false
                                                            }
                                                        },
                                                        "size": {
                                                            "value": 3,
                                                            "random": true,
                                                            "anim": {
                                                                "speed": 4,
                                                                "size_min": 0.3
                                                            }
                                                        },
                                                        "line_linked": {
                                                            "enable": false
                                                        },
                                                        "move": {
                                                            "random": true,
                                                            "speed": 1,
                                                            "direction": "top",
                                                            "out_mode": "out"
                                                        }
                                                    },
                                                    "interactivity": {
                                                        "events": {
                                                            "onhover": {
                                                                "enable": true,
                                                                "mode": "bubble"
                                                            },
                                                            "onclick": {
                                                                "enable": true,
                                                                "mode": "repulse"
                                                            }
                                                        },
                                                        "modes": {
                                                            "bubble": {
                                                                "distance": 250,
                                                                "duration": 2,
                                                                "size": 0,
                                                                "opacity": 0
                                                            },
                                                            "repulse": {
                                                                "distance": 400,
                                                                "duration": 4
                                                            }
                                                        }
                                                    }
                                                }} />
                                        </div>

                                    </div>

                                </SwiperSlide>
                            </LazyLoad>

                        )
                    })
                }

            </Swiper>
            <Fade left>
                <div className="content__text">
                    <p className="paragraph">
                        bienvenu sur Agro Dz
                    </p>
                    <h1 className="title_1">
                        Produit  <span>Maghreb </span> <br/>et
                        de l'orient <br/>a votre porte

                    </h1>
                    <div className="text-div"/>
                    <p className="paragraph paragraph-2 ">
                        A votre disposition touts nos produits alimentaire originaire du Maghreb et d'orient tels que condiment , epices , boissons , fruits sec ainsi que notre specialité es dattes fraiche deglet nour sous toutes ces forme : regime , branché , bouquet , ravier etc
                    </p>

                    {/*<Fade bottom>*/}
                    {/*    <div className="content__text--btn">*/}
                    {/*        <Link to=''>*/}
                    {/*            <span><i className="fas fa-file-alt"></i> Explore Now</span>*/}
                    {/*        </Link>*/}
                    {/*        <Link to=''>*/}
                    {/*            <span><i className="fas fa-layer-group"/> More Service</span>*/}
                    {/*        </Link>*/}
                    {/*    </div>*/}
                    {/*</Fade>*/}

                </div>
            </Fade>
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
            <Fade top>

                <div className="pages-block">
                    <div className="numbers">
                        <div className="page-number"><span>01</span>/06</div>
                        <div className='leftRight'><i className="fas fa-chevron-left"/> <span>|</span> <i
                            className="fas fa-chevron-right"/></div>
                    </div>
                    <div className="white-div">
                        <div className="line"/>
                    </div>
                    <h1 className="page-name">Page d'accueil</h1>
                </div>
            </Fade>

            <div className="content__scrolling-indicators">

            </div>

            <div className="scroll-btn-container">
                <LinkScroll to={'footer'} smooth={true} duration={1000}>
                    <div className="icon-scroll"/>
                </LinkScroll>
            </div>
        </header>
    )
}

const mapStateToProps = createStructuredSelector({
    sliders: selectSliders,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
