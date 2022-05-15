import React, {useEffect, useState} from 'react';
import {Link, useLocation, withRouter} from "react-router-dom";
import {setCurrentPage} from "../../redux/design-utilites/design-utilities.actions";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectSendMsgError, selectSendMsgLoading, selectSendMsgStatus} from "../../redux/clients/clients.selectors";
import {sendMessageStart} from "../../redux/clients/cleints.actions";
import {toast} from "react-toastify";
import Loader from "../../components/loader-content/loader.compoenent";
import NavigationBar from "../../components/navigation-bar/navigation-bar.compoenent";
import SubscribeFooterSection from "../../components/subscribe-footer-section/subscribe-footer-section.component";
import NavigationBarPhone from "../../components/phone-navigation-bar/navigation-phone-container.componnt";
import Helmet from "react-helmet";


const ContactUsPage = ({setCurrentPage, sendMsgStart, sendLoading, sendStatus, sendErrors, history}) => {
    const [isPhone, setIsPhone] = useState(window.innerWidth <= 600);

    let resizeWindow = () => {
        setIsPhone(window.innerWidth <= 600);
    };

    useEffect(() => {
        resizeWindow();
        window.addEventListener("resize", resizeWindow);
        return () => window.removeEventListener("resize", resizeWindow);
    }, []);

    const [messageCredentials, setCredentials] = useState({
        firstName: '',
        lastName: '',
        subject: '',
        email: '',
        phoneNumber: '',
        description: ''
    });
    const {firstName, lastName, subject, email, phoneNumber, description} = messageCredentials;
    const [notifState, setNotifState] = useState(false);



    const handleChange = event => {
        const {value, name} = event.target;
        setCredentials({...messageCredentials, [name]: value});
    };

    useEffect(() => {
        setCurrentPage(window.location.pathname)
    }, [setCurrentPage]);

    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    const sendMsgHandler = async () => {
        const formData = new FormData();
        formData.append('firstName', firstName);
        formData.append('lastName', lastName);
        formData.append('email', email);
        formData.append('phoneNumber', phoneNumber);
        formData.append('subject', subject);
        formData.append('description', description);
        sendMsgStart({formData});
        setNotifState(true);
        setCredentials({
            ...messageCredentials,
            email: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            subject: '',
            description: ''
        });
    }

    const afterSubmitting = async () => {
    if (sendStatus && notifState) {
        toast.dark(
            <div><i className="fas fa-check-circle"/> your message has been sent !</div>,
            {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 3000,
                draggable: true,
                toastId: 'third_toast',
            })
        await sleep(4000).then( () => {

            setNotifState(false);
            history.push('/');
        });

         }
    }
    afterSubmitting();
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

        if (sendErrors && notifState) {
            toast.error(
                <div><i className="fas fa-exclamation-circle"/> Message could not be sent ! check your information and and
                    try again !</div>,
                {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    autoClose: 5000,
                    draggable: true,
                })
            setNotifState(false)

        }



    return (
        <React.Fragment>
            <Helmet>
                <title>Comptoir d'orient - Contactez nous</title>
            </Helmet>
            {
                isPhone
                    ? <NavigationBarPhone/>
                    : <NavigationBar/>
            }
            <div className="contactUs">
                <div className="content">
                    <div className="home">
                        <Link to="/">
                            <i className="fas fa-home"/>
                        </Link>
                    </div>
                    <div className="content-contactInfo">
                        <h1>Coordonnées</h1>
                        <div className="info">
                            <i className="fas fa-map-marked-alt"/>
                            <span>35 Bis, Rue Joliot CURIE 69780, Mions, France</span>
                        </div>
                        <div className="info">
                            <i className="far fa-envelope"/>
                            <span>comercial@agro-dz.com</span>
                        </div>
                        <div className="info">
                            <i className="fas fa-phone"/>
                            <span>+33 07-66-88-82-38  </span>
                        </div>
                        <div className="info">
                            <i className="fas fa-phone"/>
                            <span>+33 04 74 71 63 74</span>
                        </div>
                        <div className="social-Media">
                            <Link to="/">
                                <span><i className="fab fa-instagram-square"/></span>
                            </Link>
                            <Link to="/">
                                <span><i className="fab fa-facebook-square"/></span>
                            </Link>
                            <Link to="/">
                                <span><i className="fab fa-twitter-square"/></span>
                            </Link>
                        </div>
                    </div>
                    <div className="content-contactForm">

                        <h1>Contactez Nous</h1>
                        <div className="formBlock">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="firstName"
                                    value={firstName}
                                    onChange={handleChange}
                                    required
                                />
                                <div className="in-label">Nom <span className="etoile">*</span>:</div>
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="lastName"
                                    value={lastName}
                                    onChange={handleChange}
                                    required/>
                                <div className="in-label">Prénom <span className="etoile">*</span>:</div>
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="email"
                                    value={email}
                                    onChange={handleChange}
                                    required/>
                                <div className="in-label">Email<span className="etoile">*</span>:</div>
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="phoneNumber"
                                    value={phoneNumber}
                                    onChange={handleChange}
                                    required
                                />
                                <div className="in-label">Numero de telephone <span className="etoile">*</span>:</div>
                            </div>
                            <div className="form-group textarea">
                                <input
                                    name="subject"
                                    value={subject}
                                    onChange={handleChange}
                                    required
                                />
                                <div className="in-label">Sujet <span className="etoile">*</span>:</div>
                            </div>
                            <div className="form-group textarea">
                                <textarea
                                    name="description"
                                    value={description}
                                    onChange={handleChange}
                                    required
                                    rows={3}
                                />
                                <div className="in-label">Message <span className="etoile">*</span>:
                                </div>
                            </div>
                            {
                                sendLoading
                                    ? <div style={{width: '10rem'}}><Loader/></div>
                                    : <button onClick={sendMsgHandler}><i className="fas fa-paper-plane"/> Envoyer</button>

                            }
                        </div>
                    </div>
                </div>
            </div>
            <SubscribeFooterSection/>
        </React.Fragment>
    )
}


const mapStateToProps = createStructuredSelector({
    sendLoading: selectSendMsgLoading,
    sendStatus: selectSendMsgStatus,
    sendErrors: selectSendMsgError,
});


const mapDispatchToProps = dispatch => ({
    setCurrentPage: current_page => dispatch(setCurrentPage(current_page)),
    sendMsgStart: msgData => dispatch(sendMessageStart(msgData)),

});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ContactUsPage));
