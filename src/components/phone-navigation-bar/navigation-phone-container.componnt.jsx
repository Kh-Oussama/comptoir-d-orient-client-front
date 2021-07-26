import React, {useState} from 'react';
import {Link} from 'react-scroll';
import {withRouter} from "react-router-dom";
import {createStructuredSelector} from "reselect";
import {connect} from 'react-redux';
import {selectCurrentPage} from "../../redux/design-utilites/design-utilities.selectors";
import {setCurrentPage, toggleSearchHidden} from "../../redux/design-utilites/design-utilities.actions";
import NavBarPhone from "../phone-navigation-bar/phone-navigation-bar.component";
import Typical from "react-typical";


const NavigationBarPhone = ({history, toggleSearchHidden, setCurrentPage, current_page}) => {
    const [show, setShow] = useState(true);
    const [scrollPos, setScrollPos] = useState(0);

    const handleScroll = () => {
        setScrollPos(document.body.getBoundingClientRect().top);
        setShow(document.body.getBoundingClientRect().top > scrollPos || document.body.getBoundingClientRect().top === 0)

    }
    useState(() => {
        setShow(true);
    })


    return (
        <div className={`navigation`} id="navigation">
            <div className="navigation__left ">
                <div className="name-block">
                    <Link to='/'>
                        <Typical
                            steps={['  Comptoir d\'orient', 1000]}
                            loop={1}
                            wrapper="span"
                        />

                    </Link>
                </div>
            </div>
            <div className="navigation__center">
            </div>
            <div className="navigation__right">

            </div>
            <div className="navigation__right-phone">
                <NavBarPhone/>
            </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavigationBarPhone));

