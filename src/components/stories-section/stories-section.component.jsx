import React from 'react';
import {withRouter} from "react-router-dom";
import VisibilitySensor from "react-visibility-sensor";
import {createStructuredSelector} from "reselect";
import {selectCurrentSection} from "../../redux/design-utilites/design-utilities.selectors";
import {setCurrentSection} from "../../redux/design-utilites/design-utilities.actions";
import {connect} from "react-redux";
import Fade from "react-reveal/Fade";

const StoriesSection = ({setCurrentSection, current_section}) => {
    return (


        <section className="section-stories" id={"stories"}>

            <div className="bg-video">
                <video className="bg-video__content" autoPlay muted loop poster="/images/v.jpg">
                    <source src="/images/v2.mp4" type="video/mp4"/>
                    <source src="/images/video.webm" type="video/webm"/>
                    Your browser is not supported!
                </video>
            </div>

            <VisibilitySensor
                onChange={isVisible => {
                    if (isVisible) {
                        setCurrentSection("stories");
                    }
                }}
                delayedCall>
                <div className="section-header section-header-stories">
                    {/*<p className="p-before-title">*/}
                    {/*    How do we Work*/}

                    {/*</p>*/}
                    <Fade left>

                        <h2 className="title stories-title">
                            We make people genuinely happy
                        </h2>
                    </Fade>
                    <div className="red-divider red-divider-stories"/>
                </div>
            </VisibilitySensor>
            <Fade bottom big>
                <div className="row">
                    <div className="story">
                        <figure className="story__shape">
                            <img src="/images/nat-8.jpg" alt="Person on a tour" className="story__img"/>
                            <figcaption className="story__caption">Mary Smith</figcaption>
                        </figure>
                        <div className="story__text">
                            <h3 className="story-title">I had the best week ever with my
                                family</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente
                                aspernatur
                                libero repellat quis consequatur
                                ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur
                                libero
                                repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
                            </p>
                        </div>
                    </div>
                </div>
            </Fade>
            <Fade bottom big>
                <div className="row">
                    <div className="story">
                        <figure className="story__shape">
                            <img src="/images/nat-9.jpg" alt="Person on a tour" className="story__img"/>
                            <figcaption className="story__caption">Jack Wilson</figcaption>
                        </figure>
                        <div className="story__text">
                            <h3 className="story-title">WOW! My life is completely different
                                now</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente
                                aspernatur
                                libero repellat quis consequatur
                                ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur
                                libero
                                repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
                            </p>
                        </div>
                    </div>
                </div>
            </Fade>


            {/*<div className="content__text--btn content__text--btn-download">*/}
            {/*    <Link to=''>*/}
            {/*        <span><i className="fas fa-file-alt"></i> Explore Now</span>*/}
            {/*    </Link>*/}
            {/*</div>*/}
        </section>


    )
}

const mapStateToProps = createStructuredSelector({
    current_section: selectCurrentSection,
});

const mapDispatchToProps = dispatch => ({
    setCurrentSection: current_section => dispatch(setCurrentSection(current_section)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(StoriesSection));
