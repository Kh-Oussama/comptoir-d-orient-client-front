import React from 'react';
import {Link, withRouter} from "react-router-dom";
import VisibilitySensor from "react-visibility-sensor";
import {createStructuredSelector} from "reselect";
import {selectCurrentSection} from "../../redux/design-utilites/design-utilities.selectors";
import {setCurrentSection} from "../../redux/design-utilites/design-utilities.actions";
import {connect} from "react-redux";
import Fade from "react-reveal/Fade";


const Download = ({setCurrentSection, current_section}) => {
    return (
        <VisibilitySensor
            active={!(current_section === "catalogue")}
            onChange={isVisible => {
                if (isVisible) {
                    setCurrentSection("catalogue");
                }
            }}
            delayedCall>
            <section className="partners-section download-section" id="offre">

                <div className="partners-section-header">
                    <Fade bottom big>
                        <h1 className="title_2 title_2_download">Catalogue</h1>
                    </Fade>
                    <Fade left>
                        <h1 className="title_1 title_1_download">

                            WE DESIGN DIGITAL PRODUCTS THAT HELP GROW BUSINESSES

                        </h1>
                    </Fade>
                    <div className="red-divider"/>
                    <Fade left>
                        <p className="paragraph paragraph_download">

                            we are committed to providing our customers with exceptional
                            service <br/> while offering out employees the best training

                        </p>
                    </Fade>
                </div>

                <div className="content__text--btn content__text--btn-download">
                    <Link target="_blank"
                          to={{pathname: ``}}
                    >
                        <i className="fas fa-download"/> télécharger
                    </Link>
                </div>
            </section>
        </VisibilitySensor>
    );
}

const mapStateToProps = createStructuredSelector({
    current_section: selectCurrentSection,
});

const mapDispatchToProps = dispatch => ({
    setCurrentSection: current_section => dispatch(setCurrentSection(current_section)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Download));
