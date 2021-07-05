import React from 'react';
import {Link} from "react-router-dom";
import IcomoonReact, {iconList} from "icomoon-react";
import iconSet from "../../selection.json";

const Header = () => {
    return (
        <header className="header-container">
                <div className="content">
                    <div className="content__social-media">
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
                    <div className="content__text">
                        <p className="paragraph">welcome to smart web agency</p>
                        <h1 className="title_1">

                            We Are the best <br/>
                            website agency in <br/>
                            the world

                        </h1>

                        <div className="text-div"/>

                        <p className="paragraph paragraph-2 ">

                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Alias atque eius magnam non quidem quod rem sapiente soluta suscipit ullam! Animi consectetur ea
                            illo laboriosam pariatur quae repudiandae sint veritatis!

                        </p>
                            <div className="content__text--btn">
                            <Link to=''>
                                <i className="fas fa-file-alt"></i> Explore Now
                            </Link>
                                <Link to=''>
                                    <i className="fas fa-layer-group"/> More Service
                                </Link>
                            </div>

                    </div>
                    <div className="content__imgBlock">
                        <figure className="img img--1">
                            <img src={"/images/f1.jpg"} alt="f1" className="img"/>
                        </figure>
                        <figure className="img img--2">
                            <img src={"/images/f2.jpg"} alt="f2" className="img"/>
                        </figure>
                    </div>
                    <div className="content__scrolling-indicators">
                        <div className="indic indic-active"/>
                        <div className="indic"/>
                        <div className="indic"/>
                        <div className="indic"/>

                    </div>
                </div>
        </header>
    )
}

export default Header;