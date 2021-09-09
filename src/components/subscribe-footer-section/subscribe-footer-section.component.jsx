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
                <div><i className="fas fa-exclamation-circle"/> Vous êtes déjà abonné !!</div>,
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
                <div><i className="fas fa-exclamation-circle"/>Veuillez entrer une adresse email valide</div>,
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
            <div><i className="fas fa-check-circle"/> Merci de vous être abonné</div>,
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
                <Fade left>
                    <h1>

                        Abonnez-vous !

                    </h1>
                    <p>Ne manquez aucune de nos actualité.</p>
                </Fade>

            </div>
            <div className="formSub">
                <input
                    type="email"
                    className="formSub__input"
                    placeholder="exemple@gmail.com"
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

            </div>
            <img src="/images/h3.jpg" alt="image" className="image"/>
            <div className="footer-section" id={"footer"}></div>
            <div className="footer-links">
                <div className="links-left">
                    <div className="link">
                        <Link to=''>
                            <span><i className="fab fa-whatsapp"/>+33 7-82-39-29-34</span>
                        </Link>
                    </div>

                    <div className="link">
                        <Link to=''>
                            <span><i className="fab fa-whatsapp"/>+33 7-66-88-82-38  </span>
                        </Link>
                    </div>
                    <div className="link link-email">
                        <Link to=''>
                            <span><i className="far fa-envelope-open"/> commercial@comptoir-d-orient.fr</span>
                        </Link>
                    </div>
                </div>
                <div className="links-center">
                    <div className="link">
                        <Link to=''>
                            <span>Livraison a partir de 200 euros</span>
                        </Link>
                    </div>
                    <div className="link">
                        <Link to='/'>
                            <span>Acceuil</span>
                        </Link>
                    </div>
                    <div className="link">
                        <Link to='/shop'>
                            <span>Nos Produits</span>
                        </Link>
                    </div>
                </div>
                <div className="links-Right">
                    <div className="link">
                        <Link to=''>
                            <span>Shop now</span>
                        </Link>
                    </div>
                    <div className="link">
                        <Link to='/contact_us'>
                            <span>Contact</span>
                        </Link>
                    </div>
                    {/*<div className="link">*/}
                    {/*    <Link to=''>*/}
                    {/*        <span>Gift Card</span>*/}
                    {/*    </Link>*/}
                    {/*</div>*/}
                </div>
            </div>
            <div className="footer-bottom">

                <div className="left">
                    &copy; Copyright 2021 by <span className="dev-name"><RubberBand>Khirat Oussama.</RubberBand></span>
                </div>
                <div className="right">
                    <div className="link">
                        <Link to=''>
                            <span> Adresse:21 Avenue Lefèvre, 69120 Vaulx-en-Velin - France</span>
                        </Link>
                    </div>
                    {/*<div className="link">*/}
                    {/*    <Link to=''>*/}
                    {/*        <span>Terms & Condition</span>*/}
                    {/*    </Link>*/}
                    {/*</div>*/}

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


