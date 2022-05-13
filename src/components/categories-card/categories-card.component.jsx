import React from 'react';
import {motion} from "framer-motion";
import {withRouter} from "react-router-dom";
import LazyLoad from "react-lazyload";

const CategoriesCard = ({backgroundImage, title, subtitle, backgroundColor, history, categoryRef}) => {
    return (

        <motion.li className="card"
                   whileHover={{scale: 1.03, originX: 0}}
                   transition={{type: 'spring', stiffness: 300}}
                   whileTap={{scale: 0.9}} onClick={() => history.push(`shop/products/${categoryRef}`)}>

            <LazyLoad className="card-content-container" once offset={100}>
                <div className="card-content">
                    <div
                        className="card-image-container"
                        style={{
                            backgroundColor: backgroundColor,
                            backgroundImage: 'url(https://backend.agro-dz.com/' + backgroundImage
                        }}
                    >
                    </div>
                    <div
                        className="title-container"
                    >
                        <span className="category">{title}</span>
                        <h2 className="category-Subtitle">{subtitle}</h2>
                    </div>
                </div>
            </LazyLoad>
        </motion.li>
    )
}

export default withRouter(CategoriesCard);