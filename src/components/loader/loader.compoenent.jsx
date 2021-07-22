import React from 'react';
import './loader.style.scss'


const Loader = () => {
    return (
        <div className="big-loader-page">
            <div>
                <img src="/images/logo-l.png" alt="Logo"/>
            </div>
            <div className="big-loader">
                <div ></div>
                <div ></div>
                <div ></div>
                <div ></div>

            </div>
        </div>

    )
}

export default Loader;