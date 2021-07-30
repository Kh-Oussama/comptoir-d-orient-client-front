import React, {useState} from 'react';
import {Link, withRouter} from "react-router-dom";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import RubberBand from 'react-reveal/RubberBand';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectAddError, selectAddLoading, selectAddStatus} from "../../redux/clients/clients.selectors";
import {addClientStart} from "../../redux/clients/cleints.actions";
import Loader from "../loader-content/loader.compoenent";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

toast.configure();
const SubscribeFooterSection = ({addClientStart, addLoading, addErrors, addStatus}) => {
    const [email, setEmail] = useState('');
    const [notifState, setNotifState] = useState(false);


    const addClientHandler = async () => {
        const formData = new FormData();
        formData.append('email', email);
        addClientStart({formData});
        setNotifState(true);
        setEmail('');

    }


    if (addErrors && notifState) {
        if (addErrors.client) {
            toast.error(
                <div><i className="fas fa-exclamation-circle"/> you are already subscribed!!</div>,
                {
                    position: toast.POSITION.BOTTOM_CENTER,
                    autoClose: 5000,
                    draggable: true,
                    toastId: 'first_toast',
                })
            setNotifState(false)
        }
        if (addErrors.email) {
            toast.error(
                <div><i className="fas fa-exclamation-circle"/> Please enter valid email address.</div>,
                {
                    position: toast.POSITION.BOTTOM_CENTER,
                    autoClose: 5000,
                    draggable: true,
                    toastId: 'first_toast',
                })
            setNotifState(false)
        }
    }


    if (addStatus && notifState) {
        toast.dark(
            <div><i className="fas fa-check-circle"/> thank you for subscribing !</div>,
            {
                position: toast.POSITION.TOP_LEFT,
                autoClose: 5000,
                draggable: true,
                toastId: 'second_toast',
            })
        setNotifState(false)
    }

    return (
        <div className="Sub-footer-container">
            <div className="subscribe-section">
                <h1>
                    <Zoom left cascade>
                        Stay in touch
                    </Zoom>
                </h1>
                <p><Fade left big cascade>Be the first to find out new products. <br/> upcoming stories, and our
                    community</Fade></p>

            </div>
            <div className="formSub">
                <input
                    type="email"
                    className="formSub__input"
                    placeholder="ENTER YOUR EMAIL"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    required
                />
                {
                    addLoading
                        ? <div className='btn-loading'><Loader/></div>
                        : <button className="formSub__button" onClick={addClientHandler}>
                            envoyer
                        </button>
                }
                {/*{*/}
                {/*    addLoading*/}
                {/*        ? <div className='btn-loading'><Loader/></div>*/}
                {/*        : <button className="formSub__button" onClick={addClientHandler}>*/}
                {/*            Subscribe Now*/}
                {/*        </button>*/}
                {/*}*/}

            </div>
            <img src="/images/h3.jpg" alt="image" className="image"/>
            <div className="footer-section" id={"footer"}></div>
            <div className="footer-links">
                <div className="links-left">
                    <div className="link">
                        <Link to=''>
                            <span><i className="fas fa-phone-volume"/> +213 54-06-37-874</span>
                        </Link>
                    </div>

                    <div className="link">
                        <Link to=''>
                            <span><i className="fas fa-fax"/>+1 323 555 1234  </span>
                        </Link>
                    </div>
                    <div className="link link-email">
                        <Link to=''>
                            <span><i className="far fa-envelope-open"/> comptoir-dorient@gmail.com</span>
                        </Link>
                    </div>
                </div>
                <div className="links-center">
                    <div className="link">
                        <Link to=''>
                            <span>Delivery</span>
                        </Link>
                    </div>
                    <div className="link">
                        <Link to=''>
                            <span>About Us</span>
                        </Link>
                    </div>
                    <div className="link">
                        <Link to=''>
                            <span>Returns</span>
                        </Link>
                    </div>
                </div>
                <div className="links-Right">
                    <div className="link">
                        <Link to=''>
                            <span>Careers</span>
                        </Link>
                    </div>
                    <div className="link">
                        <Link to=''>
                            <span>Payment</span>
                        </Link>
                    </div>
                    <div className="link">
                        <Link to=''>
                            <span>Gift Card</span>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">

                <div className="left">
                    &copy; Copyright 2021 by <span className="dev-name"><RubberBand>Khirat Oussama.</RubberBand></span>
                </div>
                <div className="right">
                    <div className="link">
                        <Link to=''>
                            <span> privacy policy</span>
                        </Link>
                    </div>
                    <div className="link">
                        <Link to=''>
                            <span>Terms & Condition</span>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
};
const mapStateToProps = createStructuredSelector({
    addLoading: selectAddLoading,
    addStatus: selectAddStatus,
    addErrors: selectAddError,
});

const mapDispatchToProps = dispatch => ({
    addClientStart: clientData => dispatch(addClientStart(clientData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SubscribeFooterSection));


