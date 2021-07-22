import React from 'react';
import {motion} from "framer-motion";
import {withRouter} from "react-router-dom";

const CategoriesCard = ({ backgroundImage, title, subtitle, backgroundColor, history, categoryRef}) => {
    return (

        <motion.li className="card"
                   whileHover={{scale: 1.03, originX: 0}}
            transition={{type: 'spring', stiffness: 300}}
            whileTap={{scale: 0.9}} onClick={() => history.push(`shop/products/${categoryRef}`)}>
            <div className="card-content-container">
                <div className="card-content">
                    <div
                        className="card-image-container"
                        style={{ backgroundColor:backgroundColor, backgroundImage: 'url(http://comptoir-d-orient.com/'+backgroundImage}}
                    >
                    </div>
                    <div
                        className="title-container"
                    >
                        <span className="category">{title}</span>
                        <h2 className="category-Subtitle">{subtitle}</h2>
                    </div>
                </div>
            </div>
        </motion.li>
    )
}

export default withRouter(CategoriesCard);