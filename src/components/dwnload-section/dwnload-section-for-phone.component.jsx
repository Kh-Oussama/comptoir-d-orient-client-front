import React, {useEffect, useState} from 'react';

import {Link} from "react-router-dom";


const Download = () => {
    return (
        <section className="partners-section download-section">
            <div className="partners-section-header">
                <h1 className="title_2 title_2_download">offre de service</h1>
                <h1 className="title_1 title_1_download">
                    WE DESIGN DIGITAL PRODUCTS THAT HELP GROW BUSINESSES
                </h1>
                <p className="paragraph paragraph_download">
                    we are committed to providing our customers with exceptional
                    service <br/> while offering out employees the best training
                    </p>
            </div>
            <div className="content__text--btn content__text--btn-download">
                <Link  target="_blank"
                       to={{ pathname: `http://aqua-vim.com/pdf` }}
                >
                    <i className="fas fa-download"/> Download
                </Link>
            </div>
        </section>
    );
}

export default Download;