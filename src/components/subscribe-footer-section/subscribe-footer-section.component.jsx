import React, {useState} from 'react';
import {Link} from "react-router-dom";

const SubscribeFooterSection = () => {
    const [email, setEmail] = useState('');
    return (
        <div className="Sub-footer-container">
                <div className="subscribe-section">
                  <h1>Stay in touch</h1>
                  <p>Be the first to find out new products. <br/> upcoming stories, and our community</p>

            </div>
                <div className="formSub">
                    <input
                        type="email"
                        className="formSub__input"
                        placeholder="ENTER YOUR EMAIL"
                        required
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                    <button className="formSub__button">
                        Send
                    </button>
                    {/*{*/}
                    {/*    addLoading*/}
                    {/*        ? <div className='btn-loading'><Loader/></div>*/}
                    {/*        : <button className="formSub__button" onClick={addClientHandler}>*/}
                    {/*            Subscribe Now*/}
                    {/*        </button>*/}
                    {/*}*/}

                </div>
                <img src="/images/h3.jpg" alt="image" className="image"/>
                <div className="footer-section"></div>
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
                    &copy; Copyright 2021 by <span className="dev-name">Khirat Oussama.</span>
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

export default SubscribeFooterSection;

