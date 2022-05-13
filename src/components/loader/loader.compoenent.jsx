import React from 'react';
import './loader.style.scss'


const Loader = () => {
    return (
        <div className="loading-page">
            <img src="/images/agro-dz.png" alt="Logo"/>
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