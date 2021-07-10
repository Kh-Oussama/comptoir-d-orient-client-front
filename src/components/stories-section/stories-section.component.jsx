import React from 'react';
import {Link} from "react-router-dom";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";

const StoriesSection = () => {
    return (
        <React.Fragment>

            <section className="section-stories">
                <div className="bg-video">
                    <video className="bg-video__content" autoPlay muted loop>
                        <source src="/images/v2.mp4" type="video/mp4"/>
                        <source src="/images/video.webm" type="video/webm"/>
                        Your browser is not supported!
                    </video>
                </div>

                <div className="section-header section-header-stories">
                    <p className="p-before-title">
                        How do we Work

                    </p>
                    <Zoom left >

                        <h2 className="title">
                            We make people genuinely happy
                        </h2>
                    </Zoom>


                    <p className="title-description">
                        21 Avenue Lefèvre, 69120 Vaulx-en-Velin
                    </p>
                    <div className="red-divider red-divider-stories"/>
                </div>

                <div className="row">
                    <div className="story">
                        <figure className="story__shape">
                            <img src="/images/nat-8.jpg" alt="Person on a tour" className="story__img"/>
                            <figcaption className="story__caption">Mary Smith</figcaption>
                        </figure>
                        <div className="story__text">
                            <h3 className="heading-tertiary u-margin-bottom-small">I had the best week ever with my
                                family</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur
                                libero repellat quis consequatur
                                ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero
                                repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="story">
                        <figure className="story__shape">
                            <img src="/images/nat-9.jpg" alt="Person on a tour" className="story__img"/>
                            <figcaption className="story__caption">Jack Wilson</figcaption>
                        </figure>
                        <div className="story__text">
                            <h3 className="heading-tertiary u-margin-bottom-small">WOW! My life is completely different
                                now</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur
                                libero repellat quis consequatur
                                ducimus quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente aspernatur libero
                                repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
                            </p>
                        </div>
                    </div>
                </div>



                <div className="content__text--btn content__text--btn-download">
                    <Link to=''>
                        <span><i className="fas fa-file-alt"></i> Explore Now</span>
                    </Link>
                </div>
            </section>
        </React.Fragment>

    )
}

export default StoriesSection;