import React from 'react';
import './loader.style.scss'


const Loader = () => {
    return (
        <div className="loading-page">
            <img src="/images/logo-comptoir.png" alt=""/>
        <div className="container-l">
            <div className="📦"></div>
            <div className="📦"></div>
            <div className="📦"></div>
            <div className="📦"></div>
            <div className="📦"></div>
        </div>
        </div>

    )
}

export default Loader;