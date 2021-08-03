import React from 'react';
import {Link as LinkP, withRouter} from "react-router-dom";
import {createStructuredSelector} from "reselect";
import {selectCurrentPage} from "../../redux/design-utilites/design-utilities.selectors";
import {setCurrentPage, toggleSearchHidden} from "../../redux/design-utilites/design-utilities.actions";
import {connect} from "react-redux";

const NavBarPhone = ({history, toggleSearchHidden, setCurrentPage, current_page}) => {
    return (
        <div className="nav-phone">
            <input type="checkbox" className="nav-phone__checkbox" id="navi-toggle"/>

            <label htmlFor="navi-toggle" className="nav-phone__button">
                <span className="nav-phone__icon">&nbsp;</span>

            </label>

            <div className="nav-phone__background">&nbsp;</div>
            <nav className="nav-phone__nav">
                <ul className="nav-phone__list">
                    <li className="nav-phone__item">
                        <div className={`nav-phone__link ${current_page === '/' ? 'nav-phone__link-active' : null}`}>
                            <LinkP to={'/'} smooth={true} duration={1000}>
                                <i className="fas fa-home"/> Accueil
                            </LinkP>
                        </div>
                    </li>
                    <li className="nav-phone__item">
                        <div
                            className={`nav-phone__link ${current_page !== '/contact_us' && current_page !== '/' && current_page !== '/events' ? 'nav-phone__link-active' : null}`}>
                            <LinkP to={'/shop'} smooth={true} duration={1000}>
                                <i className="fas fa-tags"/> nos produits </LinkP>
                        </div>
                    </li>
                    <li className="nav-phone__item">
                        <div
                            className={`nav-phone__link ${current_page === '/events' ? 'nav-phone__link-active' : null}`}>
                            <LinkP to={'#'} smooth={true} duration={1000}>
                                <i className="fas fa-shopping-cart"/> Shop now
                            </LinkP>
                        </div>
                    </li>
                    <li className="nav-phone__item">
                        <div
                            className={`nav-phone__link ${current_page === '/contact_us' ? 'nav-phone__link-active' : null}`}>
                            <LinkP to={'/contact_us'} smooth={true} duration={1000}>
                                <i className="fas fa-envelope-open-text"/> contactez nous
                            </LinkP>
                        </div>
                    </li>

                    {/*<li className="nav-phone__item">*/}
                    {/*    <div className={`nav-phone__link ${current_page === '/contact_us' ? 'nav-phone__link-active': null}`}>*/}
                    {/*        <LinkP to={'/contact_us'} smooth={true} duration={1000}>*/}
                    {/*            <i className="fas fa-th-large"/> Blog*/}
                    {/*        </LinkP>*/}
                    {/*    </div>*/}
                    {/*</li>*/}

                </ul>
            </nav>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    current_page: selectCurrentPage,
});


const mapDispatchToProps = dispatch => ({
    toggleSearchHidden: () => dispatch(toggleSearchHidden()),
    setCurrentPage: current_page => dispatch(setCurrentPage(current_page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBarPhone));

